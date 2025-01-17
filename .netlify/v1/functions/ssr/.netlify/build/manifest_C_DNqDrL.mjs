import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { l as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_CTtU0SeH.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/user/Documents/School/Second%20Semester/Frameworks%20Blog/blog/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/write","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/write\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"write","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/write.ts","pathname":"/api/auth/write","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/guestbook","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/guestbook\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"guestbook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/guestbook.ts","pathname":"/api/guestbook","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/profile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/profile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/profile.ts","pathname":"/api/profile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/cheat-sheet","isIndex":false,"type":"page","pattern":"^\\/Posts\\/cheat-sheet\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"cheat-sheet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/cheat-sheet.md","pathname":"/Posts/cheat-sheet","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/cheat-sheet copy","isIndex":false,"type":"page","pattern":"^\\/Posts\\/cheat-sheet copy\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"cheat-sheet copy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/cheat-sheet copy.md","pathname":"/Posts/cheat-sheet copy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post1","isIndex":false,"type":"page","pattern":"^\\/Posts\\/post1\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"post1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/post1.md","pathname":"/Posts/post1","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post2","isIndex":false,"type":"page","pattern":"^\\/Posts\\/post2\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"post2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/post2.md","pathname":"/Posts/post2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post3","isIndex":false,"type":"page","pattern":"^\\/Posts\\/post3\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"post3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/post3.md","pathname":"/Posts/post3","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post4","isIndex":false,"type":"page","pattern":"^\\/Posts\\/post4\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"post4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/post4.md","pathname":"/Posts/post4","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post5","isIndex":false,"type":"page","pattern":"^\\/Posts\\/post5\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"post5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/post5.md","pathname":"/Posts/post5","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post6","isIndex":false,"type":"page","pattern":"^\\/Posts\\/post6\\/?$","segments":[[{"content":"Posts","dynamic":false,"spread":false}],[{"content":"post6","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Posts/post6.md","pathname":"/Posts/post6","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signout","isIndex":false,"type":"page","pattern":"^\\/signout\\/?$","segments":[[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signout.astro","pathname":"/signout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tour","isIndex":false,"type":"page","pattern":"^\\/tour\\/?$","segments":[[{"content":"tour","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour.astro","pathname":"/tour","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/register.astro",{"propagation":"none","containsHead":true}],["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/signout.astro",{"propagation":"none","containsHead":true}],["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/test.astro",{"propagation":"none","containsHead":true}],["/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/tour.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/auth/write@_@ts":"pages/api/auth/write.astro.mjs","\u0000@astro-page:src/pages/api/guestbook@_@ts":"pages/api/guestbook.astro.mjs","\u0000@astro-page:src/pages/api/profile@_@ts":"pages/api/profile.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/Posts/cheat-sheet@_@md":"pages/posts/cheat-sheet.astro.mjs","\u0000@astro-page:src/pages/Posts/cheat-sheet copy@_@md":"pages/posts/cheat-sheet copy.astro.mjs","\u0000@astro-page:src/pages/Posts/post1@_@md":"pages/posts/post1.astro.mjs","\u0000@astro-page:src/pages/Posts/post2@_@md":"pages/posts/post2.astro.mjs","\u0000@astro-page:src/pages/Posts/post3@_@md":"pages/posts/post3.astro.mjs","\u0000@astro-page:src/pages/Posts/post4@_@md":"pages/posts/post4.astro.mjs","\u0000@astro-page:src/pages/Posts/post5@_@md":"pages/posts/post5.astro.mjs","\u0000@astro-page:src/pages/Posts/post6@_@md":"pages/posts/post6.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/signout@_@astro":"pages/signout.astro.mjs","\u0000@astro-page:src/pages/test@_@astro":"pages/test.astro.mjs","\u0000@astro-page:src/pages/tour@_@astro":"pages/tour.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C_DNqDrL.mjs","/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Crlss0W_.mjs","/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/components/Profileform":"_astro/Profileform.DH5XJPAY.js","@astrojs/solid-js/client.js":"_astro/client.Ci31pNui.js","@astrojs/react/client.js":"_astro/client.BNC2RHkt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/BlogBg.png","/CavemenBg.png","/about-2.jpg","/about-3.jpg","/about-image.jpg","/favicon.svg","/footer-logo.png","/header-logo.png","/heading.astro","/potrait.jpg","/script.js","/tour-images-04.png","/_astro/Profileform.DH5XJPAY.js","/_astro/client.BNC2RHkt.js","/_astro/client.Ci31pNui.js","/_astro/web.DChsj_Tg.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"K+mdKSy2JDeTI+L31z003NAuspZtSxr8AtBjaGAPSQU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
