import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"the-cavemen-ignite-the-irving-plaza\">The Cavemen. Ignite the Irving Plaza</h1>\n<p><em>A Highlife Night in the Heart of New York City</em></p>\n<p><img src=\"/public/tour-images-04.png\" alt=\"cavemen new york tour image\"></p>\n<p>Last night, The Cavemen. brought their electrifying highlife sound to the iconic Irving Plaza in New York City. Known for its rich history and intimate atmosphere, the venue was the perfect setting for a night of pure musical bliss.</p>\n<p>As the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room reached a fever pitch. Their soulful vocals, intricate guitar work, and powerful drumming captivated the audience from the start.</p>\n<p>Irving Plaza, with its legendary status and state-of-the-art sound system, provided the ideal environment for The Cavemen.’s authentic sound to shine. The venue’s intimate atmosphere allowed for a direct connection between the band and the audience, creating a truly unforgettable experience.</p>\n<p>The night was filled with classic highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo’s powerful performance took them on a musical journey through time.</p>\n<p>As the concert drew to a close, the audience was left wanting more. The Cavemen.’s performance at Irving Plaza will undoubtedly be remembered as a landmark moment in the history of highlife music in the United States.</p>";

				const frontmatter = {};
				const file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/Posts/post4.md";
				const url = "/Posts/post4";
				function rawContent() {
					return "# The Cavemen. Ignite the Irving Plaza\n\n*A Highlife Night in the Heart of New York City*\n\n![cavemen new york tour image](/public/tour-images-04.png)\n\nLast night, The Cavemen. brought their electrifying highlife sound to the iconic Irving Plaza in New York City. Known for its rich history and intimate atmosphere, the venue was the perfect setting for a night of pure musical bliss.\n\nAs the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room reached a fever pitch. Their soulful vocals, intricate guitar work, and powerful drumming captivated the audience from the start.\n\nIrving Plaza, with its legendary status and state-of-the-art sound system, provided the ideal environment for The Cavemen.'s authentic sound to shine. The venue's intimate atmosphere allowed for a direct connection between the band and the audience, creating a truly unforgettable experience.\n\nThe night was filled with classic highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo's powerful performance took them on a musical journey through time.\n\nAs the concert drew to a close, the audience was left wanting more. The Cavemen.'s performance at Irving Plaza will undoubtedly be remembered as a landmark moment in the history of highlife music in the United States.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-cavemen-ignite-the-irving-plaza","text":"The Cavemen. Ignite the Irving Plaza"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
