---
title: 'the-fade-room'
postTitle: 'The Fade Room'
excerpt: 'Sole Developer, UI/UX'
coverImage: 'https://res.cloudinary.com/asross311/image/upload/v1598839550/portfolio/Rectangle_6037_2_y9xmog.jpg'
articleImage: 'https://og-image.now.sh/**The%20%20Fade%20%20Room**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F95crgaor710ea5kzlppi.png&widths=auto&widths=auto&heights=350&heights=auto'
date: "2021-04-01T09:35:07.322Z"
articleExcerpt: ''
github: ''
gitlab: 'https://gitlab.com/DopamineDriven'
heroku: ''
vercel: 'https://faderoom-inc.vercel.app/'
author:
  name: Andrew Ross
  avatar: 'https://res.cloudinary.com/asross311/image/upload/v1597678722/portfolio/doge_ropqvx.jpg'
  github: ''
  gitlab: 'https://gitlab.com/DopamineDriven'
  vercel: 'https://faderoom-inc.vercel.app/'
  heroku: ''
  antdesign: ''
  apollo: 'apollo'
  auth0: ''
  graphql: 'graphql'
  next: 'next'
  react: 'react'
  tailwindcss: 'tailwindcss'
  typescript: 'typescript'
  wordpress: 'wordpress'
ogImage:
  url: 'https://og-image.now.sh/**The%20%20Fade%20%20Room**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F95crgaor710ea5kzlppi.png&widths=auto&widths=auto&heights=350&heights=auto'
---

## Project Under Active Construction, check back for Updates

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/k9lv12xtp4lkavj6ip0c.png)
 
 Custom Headless WordPress build for a business located in Highland Park, IL.
### Technical Details
**Private Repository, Contact me for Details**

`@graphql-codegen/*` was utilized in this project to generate types from `.graphql` files by configuring a `.codegen.yml` file. Initializing apollo and wrapping getStaticProps with an addApolloState provider implicitly passes `GetStaticPropsResult` props into its global state/cache. This allows for types to be 100% inferred on the client function using `InferGetStaticPropsType` via this server-to-client shuttle. 

```yml
# .codegen.yml
overwrite: true
schema:
  ${WORDPRESS_API_URL_YML}:
    headers:
      Authorization: Bearer ${WORDPRESS_AUTH_REFRESH_TOKEN_YML}
documents: 'graphql/**/*.graphql'
generates:
  graphql/generated/graphql.tsx:
    plugins:
      - typescript:
          constEnums: false
          enumsAsTypes: false          
          numericEnums: false
          futureProofEnums: false
          enumsAsConst: false
          onlyOperationTypes: false
          maybeValue: T | null | undefined
          noExport: false
          enumPrefix: true
          fieldWrapperValue: T
          wrapFieldDefinitions: true
          skipTypename: false
          nonOptionalTypename: false
          useTypeImports: false
          avoidOptionals: true
          declarationKind: 
            input: interface
            type: interface    
      - typescript-operations:
          declarationKind:
            input: interface
            type: interface
          avoidOptionals: true
          exportFragmentSpreadSubTypes: true
      - typescript-react-apollo:
          addDocBlocks: true
          reactApolloVersion: 3
          documentMode: documentNodeImportFragments
    config:
      maybeValue: T | null | undefined
      declarationKind:
        input: interface
        type: interface
      documentNodeImportFragments: true
      reactApolloVersion: 3
      withHooks: true
      withHOC: false
      avoidOptionals: true
      withComponent: false
      exportFragmentSpreadSubTypes: true
      addDocBlocks: true
  graphql/graphql.schema.graphql:
    plugins:
      - schema-ast
    config:
      commentDescriptions: true
  graphql/graphql.schema.json:
    plugins:
      - introspection
    config:
      commentDescriptions: true
hooks:
  afterAllFileWrite: 
    - prettier --write
```

```tsx
// pages/index.tsx
import { Container } from '@/components/UI';
import { initializeApollo, addApolloState } from '@/lib/apollo';
import {
	LandingPage,
	LandingPageWrapper
} from '@/components/Landing';
import ServiceTopCoalesced from '@/components/ServicesTop/services-top-coalesced';
import AppLayout from '@/components/Layout/layout';
import {
	GetStaticPropsContext,
	GetStaticPropsResult,
	InferGetStaticPropsType
} from 'next';
import {
	ServicesTopQuery,
	ServicesTopQueryVariables,
	ServicesTopDocument,
	DynamicNavDocument,
	DynamicNavQueryVariables,
	DynamicNavQuery,
	MenuNodeIdTypeEnum
} from '@/graphql/generated/graphql';

export function Index({
	other,
	popular,
	Header,
	Footer
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<AppLayout Header={Header} Footer={Footer}>
				<Container className='fit'>
					<LandingPageWrapper>
						<LandingPage services={<></>}></LandingPage>
						<ServiceTopCoalesced other={other} popular={popular} />
					</LandingPageWrapper>
				</Container>
			</AppLayout>
		</>
	);
}

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<
	GetStaticPropsResult<{
		other: ServicesTopQuery['other'];
		popular: ServicesTopQuery['popular'];
		Header: DynamicNavQuery['Header'];
		Footer: DynamicNavQuery['Footer'];
	}>
> {
	const apolloClient = initializeApollo();

	await apolloClient.query<
		DynamicNavQuery,
		DynamicNavQueryVariables
	>({
		query: DynamicNavDocument,
		variables: {
			idHead: 'Header',
			idTypeHead: MenuNodeIdTypeEnum.Name,
			idFoot: 'Footer',
			idTypeFoot: MenuNodeIdTypeEnum.Name
		}
	});

	await apolloClient.query<
		ServicesTopQuery,
		ServicesTopQueryVariables
	>({
		query: ServicesTopDocument,
		variables: {
			other: 'all',
			popular: 'popular-service'
		}
	});
	return addApolloState(apolloClient, {
		props: {},
		revalidate: 10
	});
}
export default Index;

```

This logic is extended to `_app.tsx` for `NextApp.getInitialProps` and is subject to updates as fine details are pinned down. Why feed _app DynamicNav props? To feed the global ApolloProvider globally utilized props for consumption on the very first render before the DOM is loaded to bolster performance and enhance UX.
```tsx
// _app.tsx
import '@/styles/index.css';
import '@/styles/chrome-bug.css';
import 'keen-slider/keen-slider.min.css';

import App, {
	AppContext,
	AppInitialProps,
	AppProps,
	NextWebVitalsMetric
} from 'next/app';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { useEffect, FC } from 'react';
import {
	useApollo,
	initializeApollo,
	addApolloState
} from '@/lib/apollo';
import * as gtag from '@/lib/analytics';
import { MediaContextProvider } from '@/lib/artsy-fresnel';
import { Head } from '@/components/Head';
import { GTagPageview } from '@/types/analytics';
import {
	DynamicNavQuery,
	DynamicNavQueryVariables,
	DynamicNavDocument,
	MenuNodeIdTypeEnum
} from '@/graphql/generated/graphql';

const Noop: FC = ({ children }) => <>{children}</>;

function NextApp({
	Component,
	pageProps
}: AppProps<typeof NextApp.getInitialProps>) {
	const apolloClient = useApollo(pageProps);
	const LayoutNoop = (Component as any).LayoutNoop || Noop;
	const router = useRouter();
	useEffect(() => {
		document.body.classList?.remove('loading');
	}, []);

	useEffect(() => {
		const handleRouteChange = (url: GTagPageview) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	console.log(useApollo(pageProps));
	return (
		<>
			<Head />
			<ApolloProvider client={apolloClient}>
				<MediaContextProvider>
					<LayoutNoop pageProps={pageProps}>
						<Component {...pageProps} />
					</LayoutNoop>
				</MediaContextProvider>
			</ApolloProvider>
		</>
	);
}

NextApp.getInitialProps = async (
	appContext: AppContext
): Promise<AppInitialProps> => {
	const pageProps = await App.getInitialProps(appContext);
	const graphqlClient = initializeApollo();
	const dynamicNav = await graphqlClient.query<
		DynamicNavQuery,
		DynamicNavQueryVariables
	>({
		query: DynamicNavDocument,
		variables: {
			idHead: 'Header',
			idTypeHead: MenuNodeIdTypeEnum.Name,
			idFoot: 'Footer',
			idTypeFoot: MenuNodeIdTypeEnum.Name
		}
	});
	return addApolloState(graphqlClient, {
		pageProps: {
			...pageProps.pageProps,
			Header: dynamicNav.data.Header,
			Footer: dynamicNav.data.Footer
		}
	});
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default NextApp;

```