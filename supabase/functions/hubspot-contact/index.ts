import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  businessType?: string;
  message?: string;
  subject?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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

    const contactData: ContactRequest = await req.json();
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
