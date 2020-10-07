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
