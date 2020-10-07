import { GetStaticPaths, GetStaticProps } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

const DynamicPage = () => {
	const { query }: NextRouter = useRouter();

	return (
		<div>
			<h1>Dynamic Page</h1>
			<h2>Query: {query.dynamic}</h2>
		</div>
	);
};

export const getStaticProps: GetStaticProps<
	{
		[key: string]: any;
	},
	ParsedUrlQuery
> = async () => {
	return {
		props: {
			dynamic: 'hello'
		}
	};
};

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
	return {
		paths: [...Array(10000)].map((_, index) => ({
			params: {
				dynamic: `page-${index}`
			}
		})),
		fallback: false
	};
};

export default DynamicPage;
