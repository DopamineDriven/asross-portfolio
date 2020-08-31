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

const Post = () => {
	return (
		<Fragment>
			<Head>
				<title>{`${CLIENT_NAME} sub-page`}</title>
			</Head>
		</Fragment>
	);
};


export default Post;