import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Fragment } from 'react';
import { getAboutBySlug, getAllAbouts } from 'lib/about-api';
import { CLIENT_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import About from 'types/about';
import LeadSub from 'components/lead-sub';
import AboutPostHeader from 'components/about-post-header';
import AboutPostBody from 'components/about-post-body';
import AboutPostTitle from 'components/about-post-title';

