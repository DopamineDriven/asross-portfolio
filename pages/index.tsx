import Head from 'next/head';
import Layout from 'components/layout';
import Lead from 'components/lead';
import Cards from 'components/cards';
import Footer from 'components/footer';
import Meta from 'components/meta';
import Post from 'types/post';
// import getWindowDimensions from 'lib/window-dimension';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPosts } from 'lib/api';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';

interface IndexProps {
	allPosts: Post[];
	preview?: boolean;
	width: number;
	height: number;
}

const Index = ({ allPosts }: IndexProps) => {
	// console.log(getWindowDimensions);
	const morePosts = allPosts.slice(0);
	return (
		<Fragment>
			<Head>
				<title>{`${CLIENT_NAME} index page`}</title>
			</Head>
			{/* <Header props={props} /> */}
			<Lead />
			<div className='max-w-cardGridMobile md:max-w-cardGrid my-portfolioH2F grid mx-auto content-center justify-center items-center text-center'>
				{morePosts.length > 0 && <Cards posts={morePosts} />}
			</div>
			<Footer />
		</Fragment>
	);
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'coverImage',
		'excerpt'
	]);

	return {
		props: { allPosts }
	};
};
