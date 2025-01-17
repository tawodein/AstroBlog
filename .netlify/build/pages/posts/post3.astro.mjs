import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"the-cavemen-electrify-underground-arts\">The Cavemen. Electrify Underground Arts</h1>\n<p><em>A Highlife Night to Remember</em></p>\n<p><img src=\"/public/tour-images-03.png\" alt=\"cavemen philadelphia tour image\"></p>\n<p>Last night, The Cavemen. brought their infectious highlife rhythms to the historic Underground Arts in Philadelphia. Known for its intimate setting and rich musical history, the venue was the perfect backdrop for a night of pure musical bliss.</p>\n<p>As the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room surged. Their soulful vocals, intricate guitar work, and powerful drumming captivated the audience from the start.</p>\n<p>Underground Arts, with its unique blend of old-world charm and modern amenities, provided the ideal environment for The Cavemen.’s authentic sound to resonate. The venue’s intimate atmosphere allowed for a direct connection between the band and the audience, creating a truly unforgettable experience.</p>\n<p>The night was filled with classic highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo’s powerful performance took them on a musical journey through time.</p>\n<p>As the concert drew to a close, the audience was left wanting more. The Cavemen.’s performance at Underground Arts will undoubtedly be remembered as a landmark moment in the history of highlife music in the United States.</p>";

				const frontmatter = {};
				const file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/Posts/post3.md";
				const url = "/Posts/post3";
				function rawContent() {
					return "# The Cavemen. Electrify Underground Arts\n\n*A Highlife Night to Remember*\n\n![cavemen philadelphia tour image](/public/tour-images-03.png)\n\n\nLast night, The Cavemen. brought their infectious highlife rhythms to the historic Underground Arts in Philadelphia. Known for its intimate setting and rich musical history, the venue was the perfect backdrop for a night of pure musical bliss.\n\nAs the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room surged. Their soulful vocals, intricate guitar work, and powerful drumming captivated the audience from the start. \n\nUnderground Arts, with its unique blend of old-world charm and modern amenities, provided the ideal environment for The Cavemen.'s authentic sound to resonate. The venue's intimate atmosphere allowed for a direct connection between the band and the audience, creating a truly unforgettable experience.\n\nThe night was filled with classic highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo's powerful performance took them on a musical journey through time.\n\nAs the concert drew to a close, the audience was left wanting more. The Cavemen.'s performance at Underground Arts will undoubtedly be remembered as a landmark moment in the history of highlife music in the United States.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-cavemen-electrify-underground-arts","text":"The Cavemen. Electrify Underground Arts"}];
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
