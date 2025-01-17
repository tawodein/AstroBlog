import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"the-cavemen-ignite-the-fillmore-silver-spring\">The Cavemen. Ignite the Fillmore Silver Spring</h1>\n<p><em>A Highlife Extravaganza</em></p>\n<p><img src=\"/public/tour-images-02.png\" alt=\"cavemen silver spring tour image\"></p>\n<p>Last night, The Cavemen. brought their electrifying highlife sound to the historic Fillmore Silver Spring. The legendary venue, known for its stunning acoustics and rich musical history, was the perfect setting for a night of pure musical bliss.</p>\n<p>As the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room reached a fever pitch. Their infectious rhythms, soulful vocals, and masterful musicianship captivated the audience from start to finish.</p>\n<p>The Fillmore Silver Spring, with its intimate atmosphere and state-of-the-art sound system, provided the ideal environment for The Cavemen.’s authentic sound to shine. The venue’s unique character, combined with the duo’s energetic performance, created a truly unforgettable experience.</p>\n<p>The night was filled with classic highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo’s powerful performance took them on a musical journey through time.</p>\n<p>As the concert drew to a close, the audience was left wanting more. The Cavemen.’s performance at the Fillmore Silver Spring will undoubtedly be remembered as a landmark moment in the history of highlife music in the United States.</p>";

				const frontmatter = {};
				const file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/Posts/post2.md";
				const url = "/Posts/post2";
				function rawContent() {
					return "# The Cavemen. Ignite the Fillmore Silver Spring\n\n*A Highlife Extravaganza*\n\n![cavemen silver spring tour image](/public/tour-images-02.png)\n\nLast night, The Cavemen. brought their electrifying highlife sound to the historic Fillmore Silver Spring. The legendary venue, known for its stunning acoustics and rich musical history, was the perfect setting for a night of pure musical bliss.\n\nAs the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room reached a fever pitch. Their infectious rhythms, soulful vocals, and masterful musicianship captivated the audience from start to finish. \n\nThe Fillmore Silver Spring, with its intimate atmosphere and state-of-the-art sound system, provided the ideal environment for The Cavemen.'s authentic sound to shine. The venue's unique character, combined with the duo's energetic performance, created a truly unforgettable experience.\n\nThe night was filled with classic highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo's powerful performance took them on a musical journey through time. \n\nAs the concert drew to a close, the audience was left wanting more. The Cavemen.'s performance at the Fillmore Silver Spring will undoubtedly be remembered as a landmark moment in the history of highlife music in the United States.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-cavemen-ignite-the-fillmore-silver-spring","text":"The Cavemen. Ignite the Fillmore Silver Spring"}];
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
