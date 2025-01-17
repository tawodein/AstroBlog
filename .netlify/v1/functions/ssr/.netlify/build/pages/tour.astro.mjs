import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/Page_Layout_BVVMpg9p.mjs';
export { renderers } from '../renderers.mjs';

const $$Tour = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Profileform", null, { "client:only": "solid", "client:component-hydration": "only", "client:component-path": "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/components/Profileform", "client:component-export": "default" })} ` })}`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/tour.astro", undefined);

const $$file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/tour.astro";
const $$url = "/tour";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Tour,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
