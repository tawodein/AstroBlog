import { e as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderHead, i as renderComponent } from '../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CME8jnqa.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_CRSAPNhW.mjs';
export { renderers } from '../renderers.mjs';

const $$PostExcerpt = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("guestbook_duplicate").select("blogpost").order("created_at", { ascending: false }).limit(5);
  if (error) {
    console.error("Error fetching data:", error);
    return;
  }
  return renderTemplate`${maybeRenderHead()}<div class="post-list"> <img style="width:300px; height:fit-content" src="about-3.jpg" alt=""> <div class="post-excerpt"> <h1>This is the title of a sample post</h1> <p>${JSON.stringify(data)}</p> <p>(\`$${data}\`)</p> </div> </div>`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/components/Post_Excerpt.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html class="content"> <head><title>
            Awodein Jesutofunmi - 3137211
        </title><link rel="stylesheet" href="src/pages/style.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <div class="personal-profile"> <div class="profile-text"> <h1>Welcome to <br>the Pastel Times.</h1> </div> </div> ${renderComponent($$result, "Post_Excerpt", $$PostExcerpt, {})} ${renderComponent($$result, "Post_Excerpt", $$PostExcerpt, {})} ${renderComponent($$result, "Post_Excerpt", $$PostExcerpt, {})} ${renderComponent($$result, "Post_Excerpt", $$PostExcerpt, {})} ${renderComponent($$result, "Post_Excerpt", $$PostExcerpt, {})} ${renderComponent($$result, "Post_Excerpt", $$PostExcerpt, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/index.astro", undefined);

const $$file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
