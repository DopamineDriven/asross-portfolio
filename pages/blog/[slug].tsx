import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Fragment } from 'react';
import { getBlogBySlug, getAllBlogs } from 'lib/blog-api';
import { CLIENT_NAME } from 'lib/constants';
import BlogPostBody from 'components/blog-post-body';
import BlogHeader from 'components/lead-sub';
import BlogPostHeader from 'components/blog-post-header';
import BlogPostTitle from 'components/blog-post-title';
import BlogFooter from 'components/blog-post-footer';
import BlogType from 'types/blog';

interface BlogProps {
	blog: BlogType;
	blogs: BlogType[];
}

const Blog = ({ blog, blogs }: BlogProps) => {
	const router = useRouter();
	const moreBlogs = blogs?.slice(1);
	if (!router.isFallback && !blog?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<BlogHeader title={blog.title} />
			{router.isFallback ? (
				<BlogPostTitle>Loading...</BlogPostTitle>
			) : (
				<>
					<article>
						<Head>
							<title>
								{blog.title} | Next.js Blog, {CLIENT_NAME}
							</title>
							<meta property='og:image' content={blog.ogImage.url} />
						</Head>
						<BlogPostHeader
							title={blog.postTitle}
							src={blog.articleImage}
							date={blog.date}
						/>
						<BlogPostBody content={blog.content} />
					</article>
				</>
			)}
			<BlogFooter title={blog.title} />
		</Fragment>
	);
};

export default Blog;

type BlogParams = {
	params: {
		slug: string;
	};
};

export const getStaticProps = async ({
	params
}: BlogParams & GetStaticProps) => {
	const blog = getBlogBySlug(params.slug, [
		'title',
		'postTitle',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage',
		'articleImage',
		'excerpt'
	]);

	return {
		props: {
			blog: {
				...blog
			}
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const blogs = getAllBlogs(['slug']);

	return {
		paths: blogs.map(blogs => {
			return {
				params: {
					slug: blogs.slug
				}
			};
		}),
		fallback: false
	};
};
