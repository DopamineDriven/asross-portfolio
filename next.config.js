const withSiteMap = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap.js');
		}

		return config;
	}
};

const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
module.exports = withPlugins([[withBundleAnalyzer({})], withSiteMap]);
