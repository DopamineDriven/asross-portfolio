import { Fragment } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PostType from 'types/post';
import { getPostBySlug, getAllPosts } from 'lib/api';
import { CLIENT_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import Container from 'components/container';
import PostBody from 'components/post-body';
import PostTitle from 'components/post-title';
import PostHeader from 'components/post-header';
import LeadPost from 'components/lead';

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
			<Head>
				<title>{`${CLIENT_NAME} sub-page`}</title>
			</Head>
		</Fragment>
	);
};

export default Post;
