import AboutImage from 'components/about-image';
import AboutExcerpt from 'components/about-excerpt';
import AboutTitle from 'components/about-title';
import AboutSurpriseQuote from 'components/about-stealth-quote';
import { Fragment } from 'react';

interface AboutProps {
	title: string;
	src: string;
	slug: string;
	excerpt: string;
	date: string;
	urlTitle: string;
}

interface AboutInterface {
	id: number;
	span: string;
}
// fix
const aboutSnippets: AboutInterface[] = [
	{
		id: 0,
		span: 'Experience spearheading projects for small'
	},
	{
		id: 1,
		span: 'to medium sized businesses and start-ups in '
	},
	{
		id: 2,
		span: 'the Chicago area. Currently wrapping up '
	},
	{
		id: 3,
		span: 'a job aiming to unite 60 to 130 independent '
	},
	{
		id: 4,
		span: 'local media companies. Scope includes'
	},
	{
		id: 5,
		span: "building a future-proof directory via React's "
	},
	{
		id: 6,
		span: 'Next.js framework, WordPress Engine as the '
	},
	{
		id: 7,
		span: "headless CMS, and Vercel's edge network to "
	},
	{
		id: 8,
		span: 'host the client. WordPress-GraphQL plugins '
	},
	{
		id: 9,
		span: `couple brilliantly with Headless WordPress. `
	}
];

const AboutContent = ({
	slug,
	src,
	title,
	date,
	excerpt,
	urlTitle
}: AboutProps) => {
	const aboutMap = aboutSnippets.map(constituent => {
		return (
			<span
				className='z-0 font-thin tracking-tighter font-somaRoman p-last p-indent p-indents text-customAboutSubMobile md:text-customTitle'
				key={constituent.id}
				style={{}}
			>
				{constituent.span}
				<br />
			</span>
		);
	});

	const imageExcerptConditional = (
		<Fragment>
			<div
				className='invisible ease-in-out delay-300 transform  md:leading-customSLH md:block md:z-1 md:visible md:transition-all duration-3000 hover:-translate-y-1 hover:scale-90'
				style={{ position: 'absolute', top: '12.48333vw', left: '3.33333vw' }}
			>
				<AboutImage src={src} title={title} slug={slug} />
				<AboutExcerpt excerpt={excerpt} slug={slug} />
			</div>
			<div
				className='transition-all ease-in-out delay-300 transform  leading-customSLH md:hidden z-1 duration-3000 hover:-translate-y-1 hover:scale-90'
				style={{ position: 'absolute', top: '16.48333vw', left: '3.33333vw' }}
			>
				<AboutImage src={src} title={title} slug={slug} />
				<AboutExcerpt excerpt={excerpt} slug={slug} />
			</div>
		</Fragment>
	);

	const aboutMapMapped = (
		<p className='z-0 block font-thin tracking-tighter md:text-customTitle text-customP pr-portfolioDivider pl-portfolioLS font-somaRoman'>
			<div className='block mx-auto'>
				{aboutMap}
				<div className='hidden'>{date}</div>
			</div>
		</p>
	);

	return (
		<Fragment>
			<AboutSurpriseQuote />
			<div
				className='container relative flex flex-col justify-between w-full min-w-full overflow-x-hidden overflow-y-hidden duration-300 transform cursor-default select-none leading-leadingAboutMobile pt-portfolio'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<AboutTitle title={title} slug={slug} urlTitle={urlTitle} />
				{imageExcerptConditional}
				{aboutMapMapped}
			</div>
		</Fragment>
	);
};

export default AboutContent;

// "The mechanic that would perfect his work must first sharpen his tools." - Confucius
/*
JAMstack, MERN, & TypeScript.

Co-founder and CTO of Windy City Devs LLC.

Full-Stack Developer with project management experience leveraging a science background to bring an interdisciplinary twist to tech. 
Earned bachelor's degrees in Biochemistry and Anthropology from the University of Iowa and obtained a certificate in Full-Stack Development from Northwestern University.

Currently tech lead on a project for a Chicago-based media company. 
Project scope includes building a future-proof directory using the React Next.js framework, 
WP Engine as the headless CMS, and Vercel edge network to host the client. 
The objective of the project being to unite independent Chicago-based media companies and increase their digital presence.

Looking forward to beginning a new role as a full-stack development TA with Vanderbilt University this Autumn.

600x600 cloudinary https://res.cloudinary.com/asross311/image/upload/v1598947180/portfolio/IMG_3824_1_8_egnkfs.jpg
*/
