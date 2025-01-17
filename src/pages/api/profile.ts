export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const blogpost = data.get("blogpost");
  const blogtitle = data.get("blogtitle");
  //const bio = data.get("bio");
  await supabase
    .from("guestbook_duplicate")
    .insert({ blogpost, blogtitle })
    .select();
  
  // Validate the data - you'll probably want to do more than this
  if (!blogpost || !blogtitle) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};