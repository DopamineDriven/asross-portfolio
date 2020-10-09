const globby = require('globby');
const fs = require('fs');

function addPage(page) {
	const path = page
		.replace('pages', '')
		.replace('.tsx', '')
		.replace('.mdx', '')
		.replace('.ts', '')
		.replace('.js', '');
	const route = path === '/index' ? '' : path;
	const priority = 0.5;
	const isDevOrProd =
		process.env.NODE_ENV === 'development'
			? process.env.DEV_WEBSITE_URL
			: process.env.PROD_WEBSITE_URL;

	return `  <url>
	<loc>${`${isDevOrProd}${route}`}</loc>
	<priority>${priority}</priority>
    <changefreq>hourly</changefreq>
  </url>`;
}

async function generateSitemap() {
	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = await globby([
		'pages/**/*{.tsx,.mdx}',
		'!pages/_*.tsx',
		'!pages/api'
	]);
	const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;

	fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();

// const fs = require('fs');
// const globby = require('globby');

// (async () => {
//     // Ignore Next.js specific files (e.g., _app.js) and API routes.
//     const pages = await globby([
//         'pages/**/*{.tsx,.md}',
//         '!pages/_*.tsx',
//         '!pages/api',
// 		'!/pages/posts/[slug]', // <- Exclude dynamic route
// 		'!/pages/about/[slug]', // <- Exclude dynamic route
// 		'!/pages/blog/[slug]', // <- Exclude dynamic route
//     ]);

//     // I don't know the exact folder structure, but load your raw files
//     const modules = await globby(['pages/**/*{.tsx,.mdx}']);
// 	const posts = await globby(['_posts/**/*{.tsx,.mdx,.md}']);
// 	const about = await globby(['_about/**/*{.tsx,.mdx,.md}']);
// 	const blog = await globby(['_blog/**/*{.tsx,.mdx,.md}']);

//     // Combine them into the pages you care about
//     const allPages = [...pages, ...modules, ...posts, ...about, ...blog];

//     const sitemap = `
//         <?xml version="1.0" encoding="UTF-8"?>
//         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//             ${allPages
//                 .map((page) => {
//                     const path = page
//                         .replace('pages', '')
//                         .replace('.tsx', '')
//                         .replace('.mdx', '');
//                     const route = path === '/index' ? '' : path;

//                     return `
//                         <url>
//                             <loc>${`https://yoursitehere.com${route}`}</loc>
//                         </url>
//                     `;
//                 })
//                 .join('')}
//         </urlset>
//     `;

// 	fs.writeFileSync('public/sitemap.xml');
// })();

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
// 		.replace('.mdx', '')
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
