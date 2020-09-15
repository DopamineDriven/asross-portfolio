import { Fragment } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PostType from 'types/post';
import { getPostBySlug, getAllPosts } from 'lib/api';
import { CLIENT_NAME } from 'lib/constants';
import PostBody from 'components/post-body';
import PostTitle from 'components/post-title';
import PostHeader from 'components/post-header';
import LeadPost from 'components/lead-sub';
import Cards from 'components/cards';
import Footer from 'components/post-sub-page-footer';
import PortfolioDivider from 'components/portfolio-divider';

interface PostSlugProps {
	post: PostType;
	allPosts: PostType[];
}

const Post = ({ post, allPosts }: PostSlugProps) => {
	const router = useRouter();
	const morePosts = allPosts?.slice(0);
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<LeadPost title={post.title} />
			{router.isFallback ? (
				<PostTitle>Loading…</PostTitle>
			) : (
				<>
					<article className='mb-portfolioPadding'>
						<Head>
							<title>
								{post.title} | Next.js Portfolio, {CLIENT_NAME}
							</title>
							<meta property='og:image' content={post.ogImage.url} />
						</Head>
						<PostHeader
							title={post.postTitle}
							articleExcerpt={post.articleExcerpt}
							src={post.articleImage}
							date={post.date}
							github={post.github}
							heroku={post.heroku}
							vercel={post.vercel}
							author={post.author}
						/>
						<PostBody content={post.content} />
						{/* <PortfolioDivider /> */}
						<div className=' max-w-cardGrid grid mx-auto content-center justify-center items-center text-center'>
							{morePosts?.length > 0 && <Cards posts={morePosts} />}
						</div>
					</article>
				</>
			)}
			<Footer title={post.title} />
		</Fragment>
	);
};

export default Post;

interface Params {
	params: {
		slug: string;
	};
}

export const getStaticProps = async ({ params }: Params & GetStaticProps) => {
	const post = getPostBySlug(params.slug, [
		'title',
		'postTitle',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
		'articleImage',
		'articleExcerpt',
		'github',
		'heroku',
		'vercel'
	]);
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'coverImage',
		'excerpt',
		'postTitle'
	]);

	return {
		props: {
			// allPosts,
			// make a grid with 3 cols/row showcasing other posts to navigate to in each post subdir
			post: {
				...post
			},
			revalidate: 1
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map(posts => {
			return {
				params: {
					slug: posts.slug
				}
			};
		}),
		fallback: true
	};
};
