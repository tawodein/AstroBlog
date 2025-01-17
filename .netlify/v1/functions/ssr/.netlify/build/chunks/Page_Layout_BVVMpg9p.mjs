import { e as createComponent, r as renderTemplate, j as renderHead, i as renderComponent, k as renderSlot } from './astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from './Footer_CME8jnqa.mjs';

const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html class="content"> <head><title>
            Awodein Jesutofunmi - 3137211
        </title><link rel="stylesheet" href="src/pages/style.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/layouts/Page_Layout.astro", undefined);

export { $$PageLayout as $ };
