import Head from 'next/head';
import Lead from 'components/lead';
import Cards from 'components/cards';
import Footer from 'components/footer';
import Post from 'types/post';
// import Blog from 'types/blog';
// import BlogTitle from 'components/blog-title';
// import useWindowSize from 'lib/window-dimension';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPosts } from 'lib/api';
import { getAllAbouts } from 'lib/about-api';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import AboutCoalesced from 'components/about-coalesced';
import AboutType from 'types/about';

interface IndexProps {
	allPosts: Post[];
	preview?: boolean;
	allAbout: AboutType[];
	// blogs: Blog;
}

const Index = ({ allPosts, allAbout }: IndexProps) => {
	const morePosts = allPosts.slice(0);
	const moreAbout = allAbout.slice(0);
	// const faBlog = blogs;
	return (
		<Fragment>
			<Lead />
			<Head>
				<title>{`${CLIENT_NAME} index page`}</title>
			</Head>
			<div className='max-w-cardGridMobile md:max-w-cardGrid my-portfolioH2F grid mx-auto content-center justify-center items-center text-center'>
				{morePosts.length > 0 && <Cards posts={morePosts} />}
				{/* {<BlogTitle title={faBlog.title} slug={faBlog.slug} />} */}
			</div>
			<div className='max-w-full my-portfolioH2F block mx-auto content-center justify-center items-center text-left'>
				{moreAbout.length > 0 && <AboutCoalesced abouts={allAbout} />}
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

	const allAbout = getAllAbouts([
		'title',
		'date',
		'slug',
		'coverImage',
		'excerpt'
	]);
	// const blogTitle = getAllBlogs([
	// 	'title',
	// 	'date',
	// 	'slug',
	// 	'author',
	// 	'coverImage',
	// 	'excerpt'
	// ]);

	return {
		props: { allPosts, allAbout }
	};
};
