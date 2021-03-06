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
import BlogFooter from 'components/footer-sub';
import BlogType from 'types/blog';
import { MediaContextProvider } from 'lib/window-width';

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
			<MediaContextProvider>
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
								excerpt={blog.excerpt}
								slug={blog.slug}
								src={blog.articleImage}
								date={blog.date}
								dev={blog.dev}
								medium={blog.medium}
								youtube={blog.youtube}
							/>
							<BlogPostBody content={blog.content} />
						</article>
					</>
				)}
				<BlogFooter title={blog.title} />
			</MediaContextProvider>
		</Fragment>
	);
};

export default Blog;

interface BlogParams extends GetStaticProps {
	params: {
		slug: string;
	};
}

export const getStaticProps = async ({ params }: BlogParams) => {
	const blog = getBlogBySlug(params.slug, [
		'title',
		'postTitle',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage',
		'articleImage',
		'excerpt',
		'dev',
		'medium',
		'youtube'
	]);

	return {
		props: {
			blog: {
				...blog
			}
		},
		revalidate: 1
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
