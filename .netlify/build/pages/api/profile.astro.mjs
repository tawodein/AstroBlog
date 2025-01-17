import { s as supabase } from '../../chunks/supabase_CRSAPNhW.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const blogpost = data.get("blogpost");
  const blogtitle = data.get("blogtitle");
  await supabase.from("guestbook_duplicate").insert({ blogpost, blogtitle }).select();
  if (!blogpost || !blogtitle) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
