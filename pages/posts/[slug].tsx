import { Fragment } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PostType from 'types/post';
import { getPostBySlug, getAllPosts } from 'lib/api';
import { CLIENT_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import PostBody from 'components/post-body';
import PostTitle from 'components/post-title';
import PostHeader from 'components/post-header';
import LeadPost from 'components/lead-sub';
import Cards from 'components/cards';
import Footer from 'components/post-sub-page-footer';

interface PostSlugProps {
	post: PostType;
	posts: PostType[];
}

const Post = ({ post, posts }: PostSlugProps) => {
	const morePosts = posts?.slice(1);
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<LeadPost />
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
							title={post.title}
							src={post.coverImage}
							date={post.date}
							author={post.author}
						/>
						<PostBody content={post.content} />
					</article>
					<hr className='border-fiveOBlack w-full pb-portfolioDivider' />
					<div className=' max-w-cardGrid grid mx-auto content-center justify-center items-center text-center'>
						{morePosts?.length > 0 && <Cards posts={morePosts} />}
					</div>
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
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content
			}
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
		fallback: false
	};
};
