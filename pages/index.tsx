import Head from 'next/head';
import Layout from 'components/layout';
import Lead from 'components/lead';
import Cards from 'components/cards';
import Footer from 'components/footer';
import Meta from 'components/meta';
import Post from 'types/post';
import getWindowDimensions from 'lib/window-dimension';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPosts } from 'lib/api';
import { GetStaticProps } from 'next';

interface IndexProps {
	allPosts: Post[];
	preview?: boolean;
}

const Index = ({ allPosts, preview }: IndexProps) => {
	console.log(getWindowDimensions.toString());
	const morePosts = allPosts.slice(0);
	return (
		<>
			<Meta />
			<Head>
				<title>{`${CLIENT_NAME} index page`}</title>
			</Head>
			{/* <Header props={props} /> */}
			<Lead />
			<div className='max-w-cardGridMobile md:max-w-cardGrid my-portfolioH2F grid mx-auto content-center justify-center items-center text-center'>
				{morePosts.length > 0 && <Cards posts={morePosts} />}
			</div>
			<Footer />
		</>
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
