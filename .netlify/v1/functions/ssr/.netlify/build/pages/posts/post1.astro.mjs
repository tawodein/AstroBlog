import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CTtU0SeH.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"the-cavemen-take-over-atlantas-masquerade\">The Cavemen. Take Over Atlanta’s Masquerade</h1>\n<p><em>A Night of Highlife Magic</em></p>\n<p><img src=\"/public/tour-images-01.png\" alt=\"cavemen atlanta tour image\"></p>\n<p>Last night, The Cavemen. transported Atlanta to the golden age of Highlife music. The iconic Masquerade, a legendary venue known for its rock and roll history, provided the perfect backdrop for the Nigerian duo’s electrifying performance.</p>\n<p>As the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room shifted. Their infectious rhythms, soulful vocals, and masterful musicianship captivated the audience from start to finish.</p>\n<p>The Masquerade, with its intimate setting and rich musical heritage, was the ideal venue for such a nostalgic and soulful performance. The venue’s unique character, combined with The Cavemen.’s authentic sound, created a truly unforgettable experience.</p>\n<p>The night was filled with classic Highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo’s powerful performance took them on a musical journey.</p>\n<p>As the concert drew to a close, the audience was left wanting more. The Cavemen.’s performance at The Masquerade will undoubtedly be remembered as a landmark moment in the history of Highlife music in the United States.</p>";

				const frontmatter = {};
				const file = "/Users/user/Documents/School/Second Semester/Frameworks Blog/blog/src/pages/Posts/post1.md";
				const url = "/Posts/post1";
				function rawContent() {
					return "# The Cavemen. Take Over Atlanta's Masquerade\n\n*A Night of Highlife Magic*\n\n![cavemen atlanta tour image](/public/tour-images-01.png)\n\nLast night, The Cavemen. transported Atlanta to the golden age of Highlife music. The iconic Masquerade, a legendary venue known for its rock and roll history, provided the perfect backdrop for the Nigerian duo's electrifying performance.\n\nAs the crowd eagerly awaited their arrival, the stage was set with vintage instruments and a mesmerizing stage setup. The moment The Cavemen. stepped onto the stage, the energy in the room shifted. Their infectious rhythms, soulful vocals, and masterful musicianship captivated the audience from start to finish. \n\nThe Masquerade, with its intimate setting and rich musical heritage, was the ideal venue for such a nostalgic and soulful performance. The venue's unique character, combined with The Cavemen.'s authentic sound, created a truly unforgettable experience.\n\nThe night was filled with classic Highlife hits and new tracks from their latest album. The crowd swayed to the music, lost in the moment, as the duo's powerful performance took them on a musical journey. \n\nAs the concert drew to a close, the audience was left wanting more. The Cavemen.'s performance at The Masquerade will undoubtedly be remembered as a landmark moment in the history of Highlife music in the United States.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-cavemen-take-over-atlantas-masquerade","text":"The Cavemen. Take Over Atlanta’s Masquerade"}];
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
