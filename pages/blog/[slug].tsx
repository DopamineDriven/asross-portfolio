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
	const moreBlogs = blogs?.slice(1);
	const router = useRouter();
	if (!router.isFallback && !blog?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<BlogHeader />
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
							title={blog.title}
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