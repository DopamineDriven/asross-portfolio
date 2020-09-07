import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Fragment } from 'react';
import { getAboutBySlug, getAllAbouts } from 'lib/about-api';
import { CLIENT_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import AboutType from 'types/about';
import AboutHeader from 'components/lead-sub';
import AboutPostHeader from 'components/about-post-header';
import AboutPostBody from 'components/about-post-body';
import AboutPostTitle from 'components/about-post-title';
import AboutFooter from 'components/about-post-footer';

interface AboutSlugProps {
	about: AboutType;
	abouts: AboutType[];
}

const About = ({ about, abouts }: AboutSlugProps) => {
	const moreAbouts = abouts?.slice(1);
	const router = useRouter();
};

export default About;
