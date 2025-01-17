import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/Page_Layout_BVVMpg9p.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Page_Layout", $$PageLayout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sign in</h1> <p>New here? <a href="/register">Create an account</a></p> <form class="register-buttons" action="/api/auth/signin" method="post"> <label for="email"><h2>Email</h2></label> <input type="email" name="email" id="email"> <label for="password"><h2>Password</h2></label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/signin.astro", undefined);

const $$file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
