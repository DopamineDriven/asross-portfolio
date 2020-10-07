import { ParsedUrlQuery } from 'querystring';
import { NextApiRequest, NextApiResponse } from 'next';
import { NowRequest, NowResponse } from '@vercel/node';
import { getAllPosts, Items } from 'lib/api';

interface SiteMapProps {
	pathname: ParsedUrlQuery | string;
	priority?: number;
}

const hostname = 'https://andrewross.dev';

function getSitemapEntry({ pathname, priority = 0.5 }: SiteMapProps) {
	return `
        <url>
            <loc>${hostname}${pathname}</loc>
            <priority>${priority}</priority>
        </url>
    `;
}

interface ItemArray extends Array<Items> {}

export default async function sitemap(
	_req: NowRequest & NextApiRequest,
	res: NowResponse & NextApiResponse
) {
	const posts: ItemArray = await getAllPosts([
		'title',
		'date',
		'slug',
		'postTitle',
		'articleImage',
		'excerpt',
		'coverImage'
	]);

	const entries = posts.map(post =>
		getSitemapEntry({
			pathname: `/post/${post.slug}`
		})
	);
	entries.push(
		getSitemapEntry({
			pathname: '/',
			priority: 1
		})
	);

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${entries.join('\n')}
        </urlset>      
    `.trim();

	res.writeHead(200, {
		'Content-Type': 'application/xml'
	});
	return res.end(sitemap);
}
