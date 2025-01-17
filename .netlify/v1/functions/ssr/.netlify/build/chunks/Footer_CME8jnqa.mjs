import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <header> <div> <img class="header-logo" src="header-logo.png" alt="a logo of the cavemen"> </div> <ul class="navlinks"> <li><a href="/Index">Home</a></li> <li><a href="/Blog">Blog</a></li> <li><a href="/dashboard">Dashboard</a></li> <li><a href="/tour">Tour</a></li> <li><a href="/signin">Sign In</a></li> <li><a href="/register">Register</a></li> </ul> </header> </div>`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/components/Header.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-text"> <p>Jesutofunmi</p> <p>3137211</p> </div> <img class="footer-logo" src="footer-logo.png" alt="a logo of the cavemen"> </footer>`;
}, "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/components/Footer.astro", undefined);

export { $$Header as $, $$Footer as a };
