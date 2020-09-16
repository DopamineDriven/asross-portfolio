import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Fragment } from 'react';
import { getAboutBySlug, getAllAbouts } from 'lib/about-api';
import { CLIENT_NAME } from 'lib/constants';
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
	// console.log(moreAbouts.toLocaleString);
	const router = useRouter();
	if (!router.isFallback && !about?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<AboutHeader title={about.title} />
			{router.isFallback ? (
				<AboutPostTitle>Loading...</AboutPostTitle>
			) : (
				<>
					<article>
						<Head>
							<title>
								{about.title} | Next.js About, {CLIENT_NAME}
							</title>
							<meta property='og:image' content={about.ogImage.url} />
						</Head>
						<AboutPostHeader
							title={about.title}
							src={about.articleImage}
							date={about.date}
							email={about.email}
							github={about.github}
							linkedin={about.linkedin}
							twitter={about.twitter}
						/>
						<AboutPostBody content={about.content} />
					</article>
				</>
			)}
			<AboutFooter title={about.title} />
		</Fragment>
	);
};

export default About;

type AboutParams = {
	params: {
		slug: string;
	};
};

export const getStaticProps = async ({
	params
}: AboutParams & GetStaticProps) => {
	const about = getAboutBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage',
		'articleImage',
		'email',
		'github',
		'linkedin',
		'twitter'
	]);

	return {
		props: {
			about: {
				...about
			}
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const abouts = getAllAbouts(['slug']);

	return {
		paths: abouts.map(abouts => {
			return {
				params: {
					slug: abouts.slug,
					key: abouts.slug
				}
			};
		}),
		fallback: false
	};
};
