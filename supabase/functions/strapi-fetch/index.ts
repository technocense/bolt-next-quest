import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { endpoint, params } = await req.json();
    const STRAPI_API_TOKEN = Deno.env.get("STRAPI_API_TOKEN");
    
    if (!STRAPI_API_TOKEN) {
      throw new Error("STRAPI_API_TOKEN is not configured");
    }

    // Build query string from params
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    // Using HTTP instead of HTTPS to bypass SSL certificate issues
    // NOTE: For production, you should fix the SSL certificate on your Strapi server
    const strapiUrl = `http://technocense.com/api${endpoint}${queryString}`;

    console.log('Fetching from Strapi:', strapiUrl);

    const response = await fetch(strapiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Strapi API error:', response.status, errorText);
      throw new Error(`Strapi API error: ${response.status}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Error in strapi-fetch:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
