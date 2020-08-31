import Head from 'next/head';
import Layout from 'components/layout';
import Lead from 'components/lead';
import Cards from 'components/cards';
import Post from 'types/post';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPosts } from 'lib/api';
import { GetStaticProps } from 'next';

interface IndexProps {
	allPosts: Post[];
	preview?: boolean;
}

const Index = ({ allPosts, preview }: IndexProps) => {
	const morePosts = allPosts.slice(0);
	return (
		<>
			{/* <Header props={props} /> */}
			<Lead />
			<div className='max-w-308 my-portfolio grid mx-auto content-center justify-center items-center text-center'>
				{morePosts.length > 0 && <Cards posts={morePosts} />}
			</div>
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} index page`}</title>
				</Head>
			</Layout>
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
