import 'styles/index.css';
import '@tailwindcss/typography';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gaInit, logPageView } from 'lib/google-analytics';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import getConfig from 'next/config';

config.autoAddCss = false;

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
	const config = getConfig();
	const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
	Sentry.init({
		enabled: process.env.NODE_ENV === 'production',
		integrations: [
			new RewriteFrames({
				iteratee: frame => {
					frame.filename
						? (frame.filename = frame.filename.replace(distDir, 'app:///_next'))
						: undefined;
					return frame;
				}
			})
		],
		dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
	});
}

function App({ Component, pageProps }: AppProps): ReactElement {
	const router = useRouter();
	useEffect(() => {
		gaInit();
		const handleRouteChange = () => {
			logPageView();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

export default App;

// Configuring Fortawesome with nextjs v9+
// https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project

/*
	const router = useRouter();
	const { pageview } = gtag;
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);
	return <Component {...pageProps} />;
}
*/
