// const fs = require('fs');
// const globby = require('globby');

// async function generateSiteMap() {
// 	const pages = await globby([
// 		'pages/**/*.tsx',
// 		'!pages/_*.tsx',
// 		'!pages/**/[slug].tsx',
// 		'!pages/api',
// 		'_posts/*.md',
// 		'_about/*.md',
// 		'_blog/*.md'
// 	]);

// 	const sitemap = `
// 		<?xml version="1.0" encoding="UTF-8"?>
// 		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//           	${pages
// 												.map(page => {
// 													const path = page
// 														.replace('pages', '')
// 														.replace('.tsx', '')
// 														.replace('.md', '');
// 													const route = path === '/index' ? '' : path;
// 													return `
//                       <url>
//                           <loc>${`https://andrewross.dev/${route}`}</loc>
//                       </url>
//                   `;
// 												})
// 												.join('')}
//       	</urlset>
//   	`;

// 	fs.writeFileSync('public/sitemap.xml', sitemap);
// }

// generateSiteMap();

// function addPage(page) {
// 	const robotsTxt = `User-agent: *
// 	Sitemap: https://andrewross.dev/sitemap.xml
// 	Disallow:`;

// 	fs.writeFileSync('public/robots.txt', robotsTxt, () => {
// 		console.log('robots.txt saved!');
// 	});
// 	const path = page
// 		.replace('pages', '')
// 		.replace('.tsx', '')
// 		.replace('.md', '')
// 		.replace('.ts', '')
// 		.replace('.js', '');
// 	const route = path === '/index' ? '' : path;
// 	// const subroute = subpath === '/index/'
// 	const priority = 0.5;
// 	const isDevOrProd =
// 		process.env.NODE_ENV === 'development'
// 			? process.env.DEV_WEBSITE_URL
// 			: process.env.PROD_WEBSITE_URL;

// 	return `  <url>
// 	<loc>${`${isDevOrProd}${route}`}</loc>
// 	<priority>${priority}</priority>
//     <changefreq>hourly</changefreq>
//   </url>`;
// }

// async function generateSitemap() {
// 	// Ignore Next.js specific files (e.g., _app.js) and API routes.
// 	const pages = await globby([
// 		'pages/**/*.tsx',
// 		'!pages/_*.tsx',
// 		'!pages/**/.tsx',
// 		'!pages/api'
// 		// '_posts/*.md',
// 		// '_about/*.md',
// 		// '_blog/*.md'
// 	]);
// 	const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${pages.map(addPage).join('\n')}
// </urlset>`;

// 	fs.writeFileSync('public/sitemap.xml', sitemap);
// }

// generateSitemap();

const fs = require('fs');

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://andrewross.dev/sitemap.xml
Disallow:`;

fs.writeFile('public/robots.txt', robotsTxt, () => {
	console.log('robots.txt saved!');
});

// SITEMAP.XML
const paths = ['', '/posts', '/blog', '/about'];

paths.push(
	...fs.readdirSync('pages/blog/').map(file => {
		const rawfile = fs.readFileSync(`pages/blog/${file}`);
		const post = JSON.parse(rawfile);
		return `/blog/${post.slug}`;
	}),
	...fs.readdirSync('pages/about/').map(file => {
		const rawfile = fs.readFileSync(`pages/blog/${file}`);
		const post = JSON.parse(rawfile);
		return `/blog/${post.slug}`;
	}),
	...fs.readdirSync('pages/posts/').map(file => {
		const rawfile = fs.readFileSync(`pages/blog/${file}`);
		const post = JSON.parse(rawfile);
		return `/blog/${post.slug}`;
	})
);

let xmlPaths = '';

paths
	.map(
		path => `
  <url>
    <loc>https://andrewross.dev${path}</loc>
  </url>`
	)
	.forEach(xmlPath => {
		xmlPaths += xmlPath;
	});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlPaths}
</urlset>`;

fs.writeFile('public/sitemap.xml', sitemapXml, () => {
	console.log('sitemap.xml saved!');
});
