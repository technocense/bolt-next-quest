import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Server-side validation schema
const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(50),
  lastName: z.string().trim().min(1).max(50),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/).optional().or(z.literal("")),
  businessType: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(1000).optional(),
  subject: z.string().trim().max(200).optional(),
  honeypot: z.string().max(0).optional(),
});

// Rate limiting map (in-memory, resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries periodically
const cleanupRateLimits = () => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (data.resetTime < now) {
      rateLimitMap.delete(ip);
    }
  }
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Clean up old rate limit entries
    cleanupRateLimits();

    // Rate limiting - 5 submissions per IP per hour
    const clientIP = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    const now = Date.now();
    const rateLimit = rateLimitMap.get(clientIP);

    if (rateLimit && rateLimit.resetTime > now) {
      if (rateLimit.count >= 5) {
        console.warn(`Rate limit exceeded for IP: ${clientIP}`);
        return new Response(
          JSON.stringify({ 
            error: 'Too many requests. Please try again later.',
            retryAfter: Math.ceil((rateLimit.resetTime - now) / 1000 / 60) + ' minutes'
          }),
          {
            status: 429,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          }
        );
      }
      rateLimit.count++;
    } else {
      rateLimitMap.set(clientIP, { 
        count: 1, 
        resetTime: now + 3600000 // 1 hour
      });
    }

    const hubspotApiKey = Deno.env.get('HUBSPOT_API_KEY');
    
    if (!hubspotApiKey) {
      console.error('HubSpot API key not configured');
      return new Response(
        JSON.stringify({ error: 'HubSpot integration not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Parse and validate request body
    const rawData = await req.json();
    
    // Honeypot check - if filled, silently reject (bot detected)
    if (rawData.honeypot && rawData.honeypot.length > 0) {
      console.warn('Honeypot triggered, possible bot submission from IP:', clientIP);
      // Return fake success to not alert the bot
      return new Response(
        JSON.stringify({ success: true, message: 'Contact received' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Validate with Zod schema
    let contactData;
    try {
      contactData = contactSchema.parse(rawData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation failed:', error.errors);
        return new Response(
          JSON.stringify({ 
            error: 'Validation failed', 
            details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          }
        );
      }
      throw error;
    }
    console.log('Received contact submission:', { email: contactData.email });

    // Create or update contact in HubSpot
    const hubspotContact = {
      properties: {
        email: contactData.email,
        firstname: contactData.firstName,
        lastname: contactData.lastName,
        phone: contactData.phone || '',
        company: contactData.businessType || '',
        message: contactData.message || '',
        hs_lead_status: 'NEW'
      }
    };

    // Create contact in HubSpot
    const createContactResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${hubspotApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotContact),
      }
    );

    if (!createContactResponse.ok) {
      const errorText = await createContactResponse.text();
      console.error('HubSpot API error:', errorText);
      
      // If contact already exists, try to update it
      if (createContactResponse.status === 409) {
        console.log('Contact already exists, updating...');
        
        // Search for contact by email
        const searchResponse = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/search`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${hubspotApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              filterGroups: [{
                filters: [{
                  propertyName: 'email',
                  operator: 'EQ',
                  value: contactData.email
                }]
              }]
            }),
          }
        );

        if (searchResponse.ok) {
          const searchResult = await searchResponse.json();
          if (searchResult.results && searchResult.results.length > 0) {
            const contactId = searchResult.results[0].id;
            
            // Update the contact
            const updateResponse = await fetch(
              `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
              {
                method: 'PATCH',
                headers: {
                  'Authorization': `Bearer ${hubspotApiKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(hubspotContact),
              }
            );

            if (updateResponse.ok) {
              console.log('Contact updated successfully');
              return new Response(
                JSON.stringify({ success: true, message: 'Contact updated in HubSpot' }),
                {
                  status: 200,
                  headers: { 'Content-Type': 'application/json', ...corsHeaders },
                }
              );
            }
          }
        }
      }
      
      return new Response(
        JSON.stringify({ error: 'Failed to create contact in HubSpot' }),
        {
          status: createContactResponse.status,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const hubspotResponse = await createContactResponse.json();
    console.log('Contact created in HubSpot:', hubspotResponse.id);

    // Create a note with the message if provided
    if (contactData.message || contactData.subject) {
      const noteContent = `
Subject: ${contactData.subject || 'Contact Form Submission'}

Message:
${contactData.message || 'No message provided'}

Business Type: ${contactData.businessType || 'Not specified'}
      `.trim();

      const noteResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/notes`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${hubspotApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            properties: {
              hs_note_body: noteContent,
              hs_timestamp: new Date().toISOString(),
            },
            associations: [{
              to: { id: hubspotResponse.id },
              types: [{
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 202 // Note to Contact association
              }]
            }]
          }),
        }
      );

      if (noteResponse.ok) {
        console.log('Note added to contact');
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact successfully added to HubSpot',
        contactId: hubspotResponse.id 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error('Error in hubspot-contact function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
