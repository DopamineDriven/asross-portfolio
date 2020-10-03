import Head from 'next/head';
import Lead from 'components/lead';
import Cards from 'components/cards-coalesced';
import Footer from 'components/footer';
import Post from 'types/post';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPosts } from 'lib/api';
import { getAllAbouts } from 'lib/about-api';
import { getAllBlogs } from 'lib/blog-api';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import AboutCoalesced from 'components/about-coalesced';
import BlogCoalesced from 'components/blog-coalesced';
import AboutType from 'types/about';
import BlogType from 'types/blog';
import { MediaContextProvider } from 'lib/window-width';
// import ThemeProvider from 'components/theme';

interface IndexProps {
	allPosts: Post[];
	allAbout: AboutType[];
	allBlog: BlogType[];
}

const Index = ({ allPosts, allAbout, allBlog }: IndexProps) => {
	const morePosts = allPosts.slice(0);
	const moreAbout = allAbout.slice(0);
	const moreBlog = allBlog.slice(0);
	// if (typeof window.document.documentElement === 'undefined') {
	// 	return window.document.documentElement as any;
	// }
	// let { document } = window;
	// if (typeof document === 'undefined') {
	// 	document = {} as any;
	// }
	// let { documentElement } = document;
	// if (typeof documentElement === 'undefined') {
	// 	return documentElement as any;
	// }
	return (
		<Fragment>
			<MediaContextProvider>
				<Lead />
				<Head>
					<title>{`${CLIENT_NAME} landing page`}</title>
				</Head>
				<div className='grid items-center content-center justify-center mx-auto text-center max-w-cardGridMobile md:max-w-cardGrid my-portfolioH2F'>
					{morePosts.length > 0 && <Cards posts={morePosts} />}
					{/* {<BlogTitle title={faBlog.title} slug={faBlog.slug} />} */}
				</div>
				<div className='items-center content-center justify-center block max-w-full mx-auto text-left my-portfolioH2F'>
					{moreAbout.length > 0 && <AboutCoalesced abouts={allAbout} />}
				</div>
				<div className='items-center content-center justify-center block max-w-full mx-auto text-left my-portfolioH2F'>
					{moreBlog.length > 0 && <BlogCoalesced blogs={allBlog} />}
				</div>
				<Footer />
			</MediaContextProvider>
		</Fragment>
	);
};

export default Index;

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
		'excerpt',
		'urlTitle'
	]);

	const allBlog = getAllBlogs(['title', 'slug', 'date', 'postTitle']);

	return {
		props: { allPosts, allAbout, allBlog },
		revalidate: 1
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

// https://github.com/artsy/fresnel/blob/master/examples/nextjs/src/pages/index.tsx

// import { Media, MediaContextProvider } from "../media"

// export default function HomePage() {
//   return (
//     <MediaContextProvider>
//       <Media at="xs">Hello mobile!</Media>
//       <Media greaterThan="xs">Hello desktop!</Media>
//     </MediaContextProvider>
//   )
// }

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
