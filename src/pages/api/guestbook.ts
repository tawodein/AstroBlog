import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const GET: APIRoute = async () => {
  const { data, error } = await supabase
    .from("guestbook_duplicate")
    .select("name")
    .order("created_at", { ascending: true });


  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 },
    );
  }
  
  return new Response(JSON.stringify(data));
};

export const POST: APIRoute = async ({ request }) => {


  //const { name, message } = await request.json();
  const { data, error } = await supabase
    .from("guestbook_duplicate")
    .insert({ 
      name: "TestName", 
      message: "TestMessage" })
    .select();

  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify(data));
};