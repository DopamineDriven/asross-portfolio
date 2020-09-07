import AboutImage from 'components/about-image';
import AboutExcerpt from 'components/about-excerpt';
import AboutTitle from 'components/about-title';
import { Fragment } from 'react';

interface AboutProps {
	title: string;
	src: string;
	slug: string;
	excerpt: string;
	date: string;
}

interface AboutInterface {
	id: number;
	span: string;
}

const aboutSnippets: AboutInterface[] = [
	{
		id: 0,
		span: 'Experience spearheading projects for '
	},
	{
		id: 1,
		span: 'small/medium sized businesses and '
	},
	{
		id: 2,
		span: 'start-ups in the greater Chicago area. '
	},
	{
		id: 3,
		span: 'Currently wrapping up a project aiming '
	},
	{
		id: 4,
		span: 'to unite 60-130 Independent local'
	},
	{
		id: 5,
		span: 'media companies. Scope includes '
	},
	{
		id: 6,
		span: 'building a future-proof directory via '
	},
	{
		id: 7,
		span: "React's Nextjs framework, WordPress "
	},
	{
		id: 8,
		span: 'Engine as the Headless CMS, and '
	},
	{
		id: 9,
		span: `Vercel\'s edge network to host the `
	},
	{
		id: 10,
		span: `client. WP-GQL plugins couple `
	},
	{
		id: 11,
		span: 'brilliantly with HWP. '
	}
	// {
	// 	id: 13,
	// 	span: ''
	// },
	// {
	// 	id: 14,
	// 	span: 'Prior to entering tech, I earned BA & BS '
	// },
	// {
	// 	id: 15,
	// 	span: 'degrees from the University of Iowa in Biochem '
	// },
	// {
	// 	id: 16,
	// 	span: '& Bio Anthropology, respectively. Go Hawks! 🏴󠁵 '
	// },
	// {
	// 	id: 17,
	// 	span: 'After working as an industrial engineer at UPS, '
	// },
	// {
	// 	id: 18,
	// 	span: "I decided to enroll in Northwestern's full-stack "
	// },
	// {
	// 	id: 19,
	// 	span: 'bootcamp. Shortly after graduation, Windy City '
	// },
	// {
	// 	id: 20,
	// 	span: `Devs LLC was conceived, & I have been acting `
	// },
	// {
	// 	id: 21,
	// 	span: 'CTO since. In addition to freelance, I am also a '
	// },
	// {
	// 	id: 22,
	// 	span: 'remote TA for a full-stack cohort at Vanderbilt.'
	// },
	// {
	// 	id: 23,
	// 	span: ''
	// },
	// {
	// 	id: 24,
	// 	span: 'Outside of tech, I love snowboarding by '
	// },
	// {
	// 	id: 25,
	// 	span: 'Winter & wakeboarding by Summer. Real-time '
	// },
	// {
	// 	id: 26,
	// 	span: 'strategy games have been a favorite since 14  '
	// },
	// {
	// 	id: 27,
	// 	span: 'with my poison of preference being Age of '
	// },
	// {
	// 	id: 28,
	// 	span: 'Empires III. I am eager to explore more of the '
	// },
	// {
	// 	id: 29,
	// 	span: 'world and am open to relocation, be it intra- or'
	// },
	// {
	// 	id: 30,
	// 	span: "internationally. I'm so glad you decided to stop "
	// },
	// {
	// 	id: 31,
	// 	span: 'by & endure the tech-talk to arrive at this point! '
	// },
	// {
	// 	id: 32,
	// 	span: "This journey's just getting started so drop me a "
	// },
	// {
	// 	id: 33,
	// 	span: "line; let's build something remarkable together."
	// }
];

const AboutContent = ({ slug, src, title, date, excerpt }: AboutProps) => {
	const aboutMap = aboutSnippets.map(constituent => {
		return (
			<span
				className='font-thin font-somaRoman tracking-tighter p-last p-indent p-indents z-0 text-customSM md:text-customSM'
				key={constituent.id}
				style={{}}
			>
				{constituent.span}
				<br />
			</span>
		);
	});
	return (
		<Fragment>
			<div
				className='relative justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300 cursor-default select-none'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<AboutTitle title={title} slug={slug} />
				<div
					className='md:text-customSMobile text-customSM font-somaRoman md:leading-customSLH leading-customSLM tracking-wide block z-1 '
					style={{ position: 'absolute', top: '47.98333vw', left: '3.23333vw' }}
				>
					<AboutImage src={src} title={title} slug={slug} />
					<AboutExcerpt excerpt={excerpt} slug={slug} />
				</div>
				<p className='text-customP leading-headerP pr-portfolioDivider pl-portfolioLS block font-somaRoman tracking-tighter font-thin z-0'>
					<div className='mx-auto block'>
						{aboutMap}
						<span className='font-thin font-somaRoman tracking-tighter cursor-default'>
							<span className='text-oneFiveBlack hover:text-fiveOBlack text-customTitle font-thin font-somaRoman tracking-tighter z-0 pt-portfolioLS text-center juftify-center block'>
								"The mechanic that would perfect his work must first sharpen his tools."
								<em>- Confucius</em>
							</span>
						</span>
						<div className='hidden'>{date}</div>
					</div>
				</p>
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
*/
