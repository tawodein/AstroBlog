import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C_DNqDrL.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/register.astro.mjs');
const _page2 = () => import('./pages/api/auth/signin.astro.mjs');
const _page3 = () => import('./pages/api/auth/signout.astro.mjs');
const _page4 = () => import('./pages/api/auth/write.astro.mjs');
const _page5 = () => import('./pages/api/guestbook.astro.mjs');
const _page6 = () => import('./pages/api/profile.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/posts/cheat-sheet.astro.mjs');
const _page9 = () => import('./pages/posts/cheat-sheet copy.astro.mjs');
const _page10 = () => import('./pages/posts/post1.astro.mjs');
const _page11 = () => import('./pages/posts/post2.astro.mjs');
const _page12 = () => import('./pages/posts/post3.astro.mjs');
const _page13 = () => import('./pages/posts/post4.astro.mjs');
const _page14 = () => import('./pages/posts/post5.astro.mjs');
const _page15 = () => import('./pages/posts/post6.astro.mjs');
const _page16 = () => import('./pages/register.astro.mjs');
const _page17 = () => import('./pages/signin.astro.mjs');
const _page18 = () => import('./pages/signout.astro.mjs');
const _page19 = () => import('./pages/test.astro.mjs');
const _page20 = () => import('./pages/tour.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/register.ts", _page1],
    ["src/pages/api/auth/signin.ts", _page2],
    ["src/pages/api/auth/signout.ts", _page3],
    ["src/pages/api/auth/write.ts", _page4],
    ["src/pages/api/guestbook.ts", _page5],
    ["src/pages/api/profile.ts", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/Posts/cheat-sheet.md", _page8],
    ["src/pages/Posts/cheat-sheet copy.md", _page9],
    ["src/pages/Posts/post1.md", _page10],
    ["src/pages/Posts/post2.md", _page11],
    ["src/pages/Posts/post3.md", _page12],
    ["src/pages/Posts/post4.md", _page13],
    ["src/pages/Posts/post5.md", _page14],
    ["src/pages/Posts/post6.md", _page15],
    ["src/pages/register.astro", _page16],
    ["src/pages/signin.astro", _page17],
    ["src/pages/signout.astro", _page18],
    ["src/pages/test.astro", _page19],
    ["src/pages/tour.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "fdfed036-b33a-4510-8a8e-919039256e53"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
