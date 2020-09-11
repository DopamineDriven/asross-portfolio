import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactMarkdown from 'react-markdown/with-html';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		const __html: string = `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', '${process.env.GA_TRACKING_ID}', {
				page_path: window.location.pathname,
			});
	`;
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='preconnect' href='https://use.typekit.net/cub6off.css' />
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=UA-177780141-1`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
			
						gtag('config', '${process.env.GA_TRACKING_ID}', {
							page_path: window.location.pathname,
						});
				`
						}}
					/>
					{/* <script>{<ReactMarkdown escapeHtml={false} source={__html} />}</script> */}
				</Head>
				<body className='block'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// https://github.com/vercel/next.js/issues/9160
// https://gitlab.com/kachkaev/website-frontend/blob/ec20c3bfec24cde40d80194bcad5ba69b308a5ef/src/pages/_document.tsx#L31
// <link rel='stylesheet' href='https://use.typekit.net/sbg1kws.css' />
// <link rel='stylesheet' href='https://use.typekit.net/hzg4mdi.css' />
// <link rel='stylesheet' href='https://use.typekit.net/lxd3fak.css' />
// https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools
//preconnect, preload, dns-prefetch --> rel="x"
