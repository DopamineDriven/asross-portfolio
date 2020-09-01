import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { Fragment } from 'react';
import { getBlogBySlug, getAllBlogs } from 'lib/blog-api';
import { CMS_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import BlogPostBody from 'components/blog-post-body';
import LeadBlog from 'components/lead-post';
import Footer from 'components/footer';
import BlogType from 'types/blog';

interface BlogProps {
	blog: BlogType;
	blogs: BlogType[];
}

const Blog = ({ blog, blogs }: BlogProps) => {
	const router = useRouter();
	if (!router.isFallback && !blog?.slug) {
		return <ErrorPage statusCode={404} />;
	}
};

export default Blog;
