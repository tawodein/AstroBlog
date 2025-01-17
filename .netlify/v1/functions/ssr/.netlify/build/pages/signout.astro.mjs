import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/Page_Layout_BVVMpg9p.mjs';
import { s as supabase } from '../chunks/supabase_CRSAPNhW.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signout;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/signin");
  }
  const email = session.data.user?.email;
  return renderTemplate`${renderComponent($$result, "Page_Layout", $$PageLayout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome ${email}</h1> <p>We are happy to see you here</p> <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form> ` })}`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/signout.astro", undefined);

const $$file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/signout.astro";
const $$url = "/signout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
