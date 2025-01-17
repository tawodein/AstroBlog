import { s as supabase } from '../../chunks/supabase_CRSAPNhW.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const { data, error } = await supabase.from("guestbook").select("name").order("created_at", { ascending: true });
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify(data));
};
const POST = async ({ request }) => {
  const { data, error } = await supabase.from("guestbook").insert({
    name: "TestName",
    message: "TestMessage"
  }).select();
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify(data));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
