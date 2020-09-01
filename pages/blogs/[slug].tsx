import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { Fragment } from 'react';
import { getBlogBySlug, getAllBlogs } from 'lib/blog-api';
import { CMS_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';