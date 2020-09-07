import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Fragment } from 'react';
import { CLIENT_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
