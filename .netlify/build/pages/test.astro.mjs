import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/Page_Layout_BVVMpg9p.mjs';
import { s as supabase } from '../chunks/supabase_CRSAPNhW.mjs';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("guestbook").select("name");
  if (error) {
    console.error("Error fetching data:", error);
    return;
  }
  return renderTemplate`${renderComponent($$result, "Page_Layout", $$PageLayout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>We are happy to see you here</p> <form action="/api/guestbook" method="post"> <button type="submit">Write DB</button> </form> ${renderComponent($$result2, "Profileform", null, { "client:only": "solid", "client:component-hydration": "only", "client:component-path": "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/components/Profileform", "client:component-export": "default" })} <p>See all</p> <h1>Welcome ${JSON.stringify(data)}</h1> <form action="/api/guestbook" method="get"> <button type="submit">Read DB</button> </form> ` })}`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/test.astro", undefined);

const $$file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
