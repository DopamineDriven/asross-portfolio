const isDev =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3004'
		: 'https://andrewross.dev';
module.exports = {
	siteUrl: isDev,
	generateRobotsTxt: true,
	// optional
	robotsTxtOptions: {
		additionalSitemaps: [
			'https://andrewross.dev/my-custom-sitemap-1.xml',
			'https://andrewross.dev/my-custom-sitemap-2.xml',
			'https://andrewross.dev/my-custom-sitemap-3.xml'
		]
	}
};
