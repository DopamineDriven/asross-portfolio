import Head from 'next/head';
import Lead from 'components/lead';
import Cards from 'components/cards';
import Footer from 'components/footer';
import Post from 'types/post';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPosts, Items } from 'lib/api';
import { getAllAbouts } from 'lib/about-api';
import { getAllBlogs } from 'lib/blog-api';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import AboutCoalesced from 'components/about-coalesced';
import BlogCoalesced from 'components/blog-coalesced';
import AboutType from 'types/about';
import BlogType from 'types/blog';

interface IndexProps {
	allPosts: Post[];
	allAbout: AboutType[];
	allBlog: BlogType[];
}

const Index = ({ allPosts, allAbout, allBlog }: IndexProps) => {
	const morePosts = allPosts.slice(0);
	const moreAbout = allAbout.slice(0);
	const moreBlog = allBlog.slice(0);
	return (
		<Fragment>
			<Lead />
			<Head>
				<title>{`${CLIENT_NAME} landing page`}</title>
			</Head>
			<div className='max-w-cardGridMobile md:max-w-cardGrid my-portfolioH2F grid mx-auto content-center justify-center items-center text-center'>
				{morePosts.length > 0 && <Cards posts={morePosts} />}
				{/* {<BlogTitle title={faBlog.title} slug={faBlog.slug} />} */}
			</div>
			<div className='max-w-full my-portfolioH2F block mx-auto content-center justify-center items-center text-left'>
				{moreAbout.length > 0 && <AboutCoalesced abouts={allAbout} />}
			</div>
			<div className='max-w-full my-portfolioH2F block mx-auto content-center justify-center items-center text-left'>
				{moreBlog.length > 0 && <BlogCoalesced blogs={allBlog} />}
			</div>
			<Footer />
		</Fragment>
	);
};

export default Index;

// enum StaticPropsPosts {
// 	title = 'title',
// 	date = 'date',
// 	slug = 'slug',
// 	coverImage = 'coverImage',
// 	excerpt = 'excerpt',
// 	postTitle = 'postTitle',
// 	articleImage = 'articleImage'
// }

// interface GetStaticPropsInterface extends GetStaticProps {
// 	Post: StaticPropsPosts;
// 	About: AboutType;
// 	Blog: BlogType;
// }

export const getStaticProps: GetStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'postTitle',
		'articleImage',
		'excerpt',
		'coverImage'
	]);
	const allAbout = getAllAbouts([
		'title',
		'date',
		'slug',
		'coverImage',
		'excerpt'
	]);

	const allBlog = getAllBlogs(['title', 'slug', 'date', 'postTitle']);

	return {
		props: { allPosts, allAbout, allBlog, revalidate: 1 }
	};
};

/*
// type PostTypesListed =
// 	| 'title'
// 	| 'date'
// 	| 'slug'
// 	| 'coverImage'
// 	| 'excerpt'
// 	| 'articleImage'
// 	| 'postTitle';
*/
