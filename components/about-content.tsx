import AboutImage from 'components/about-image';

interface AboutProps {
	title: string;
	src: string;
}

interface AboutInterface {
	id: number;
	span: string;
}

const aboutSnippets: AboutInterface[] = [
	{
		id: 0,
		span: 'Experience spearheading '
	},
	{
		id: 1,
		span: 'projects for small/medium '
	},
	{
		id: 2,
		span: 'sized businesses & start- '
	},
	{
		id: 3,
		span: 'ups in the greater Chicago '
	},
	{
		id: 4,
		span: 'area. Currently wrapping up  '
	},
	{
		id: 5,
		span: 'a project aiming to unite '
	},
	{
		id: 6,
		span: '60-130 independent local '
	},
	{
		id: 7,
		span: 'media companies. Scope  '
	},
	{
		id: 8,
		span: 'includes building a future-'
	},
	{
		id: 9,
		span: `proof directory via React\'s `
	},
	{
		id: 10,
		span: `Nextjs framework, WP Engine as the Headless `
	},
	{
		id: 11,
		span: "CMS, & Vercel's edge network to host the client. "
	},
	{
		id: 12,
		span: 'WP-GQL plugins couple brilliantly with HWP.'
	},
	{
		id: 13,
		span: ''
	},
	{
		id: 14,
		span: 'Prior to entering tech, I earned BA & BS '
	},
	{
		id: 15,
		span: 'degrees from the University of Iowa in Biochem '
	},
	{
		id: 16,
		span: '& Bio Anthropology, respectively. Go Hawks! 🏴󠁵 '
	},
	{
		id: 17,
		span: 'After working as an industrial engineer at UPS, '
	},
	{
		id: 18,
		span: "I decided to enroll in Northwestern's full-stack "
	},
	{
		id: 19,
		span: 'bootcamp. Shortly after graduation, Windy City '
	},
	{
		id: 20,
		span: `Devs LLC was conceived, & I have been acting `
	},
	{
		id: 21,
		span: 'CTO since. In addition to freelance, I am also a '
	},
	{
		id: 22,
		span: 'remote TA for a full-stack cohort at Vanderbilt.'
	},
	{
		id: 23,
		span: ''
	},
	{
		id: 24,
		span: 'Outside of tech, I love snowboarding by '
	},
	{
		id: 25,
		span: 'Winter & wakeboarding by Summer. Real-time '
	},
	{
		id: 26,
		span: 'strategy games have been a favorite since 14  '
	},
	{
		id: 27,
		span: 'with my poison of preference being Age of '
	},
	{
		id: 28,
		span: 'Empires III. I am eager to explore more of the '
	},
	{
		id: 29,
		span: 'world and am open to relocation, be it intra- or'
	},
	{
		id: 30,
		span: "internationally. I'm so glad you decided to stop "
	},
	{
		id: 31,
		span: 'by & endure the tech-talk to arrive at this point! '
	},
	{
		id: 32,
		span: "This journey's just getting started so drop me a "
	},
	{
		id: 33,
		span: "line; let's build something remarkable together."
	}
];

const AboutContent = ({ src, title }: AboutProps) => {
	const aboutMap = aboutSnippets.map(constituent => {
		return (
			<span
				className='font-thin font-somaRoman tracking-tighter p-last p-indent p-indents z-0 text-customSMobile'
				key={constituent.id}
				style={{}}
			>
				{constituent.span}
				<br />
			</span>
		);
	});
	return (
		<div
			className='relative justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300 cursor-default select-none'
			style={{ transform: 'translate3d(0px, 0px, 0px)' }}
		>
			<h1
				className='font-head z-1 text-customAbout relative flex-grow text-center justify-center tracking-tight leading-portfolio font-light cursor-default w-full min-w-full'
				style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
			>
				<a className='text-customAbout text-center block'>About</a>
			</h1>
			<div
				className='md:text-customSM text-customSM font-somaRoman md:leading-customSLH leading-customSLM tracking-wide block z-1 rounded-full'
				style={{ position: 'absolute', top: '42.98333vw', left: '3.23333vw' }}
			>
				<AboutImage src={src} title={title} />
			</div>
			<p className='text-customP leading-headerP pr-portfolioDivider pl-portfolioLS block font-somaRoman tracking-tighter font-thin z-0'>
				<div className='mx-auto block'>
					{aboutMap}
					<span className='font-thin font-somaRoman tracking-tighter cursor-default'>
						<span className='text-portfolio hover:text-fiveOBlack text-customTitle font-thin font-somaRoman tracking-tighter z-0 pl-portfolioDivider text-center juftify-center block'>
							"The mechanic that would perfect his work must first sharpen his tools."
							<em>- Confucius</em>
						</span>
					</span>
				</div>
			</p>
		</div>
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