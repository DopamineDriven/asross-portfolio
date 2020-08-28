import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from 'lib/constants';
import { Fragment } from 'react';

const MetaData = () => {
	return (
		<Fragment>
			<Head>
				<link
					rel='apple-touch-icon'
					type='img/png'
					sizes='180x180'
					href='/fav/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/fav/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/fav/favicon-16x16.png'
				/>
				<link rel='manifest' href='/fav/manifest.json' />
				<link rel='mask-icon' href='/fav/safari-pinned-tab.svg' color='#000000' />
				<link rel='shortcut icon' href='/fav/favicon.ico' />
				<link rel='canonical' href='https://asross-portfolio.vercel.app/' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-config' content='/fav/browserconfig.xml' />
				<meta name='theme-color' content='#b8242c' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
				<meta
					name='description'
					content={`${CMS_NAME} via Nextjs; the React framework for production.`}
				/>
				<meta property='og:image' content={HOME_OG_IMAGE_URL} />
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='vieweport'
					content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<meta
					name='keywords'
					content='nextjs, typescript, react, react-markdown, static site generation, tailwindcss, vercel, figma'
				/>
			</Head>
		</Fragment>
	);
};

export default MetaData;
