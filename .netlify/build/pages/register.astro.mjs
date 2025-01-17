import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/Page_Layout_BVVMpg9p.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page_Layout", $$PageLayout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form class="register-buttons" action="/api/auth/register" method="post"> <label for="email"><h2>Email</h2></label> <input type="email" name="email" id="email"> <label for="password"><h2>Password</h2></label> <input type="password" name="password" id="password"> <label> <h2>First Name</h2> <input type="text" id="first_name" name="first_name" required> </label> <label> <h2>Last Name</h2> <input type="text" id="last_name" name="last_name" required> </label> <button type="submit">Register</button> </form> ` })}`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/register.astro", undefined);

const $$file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
