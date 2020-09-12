import { ArIcon } from 'components/svg-icons';
import Link from 'next/link';
import { Fragment } from 'react';
import Meta from 'components/meta';
// USE
// https://fossheim.io/writing/posts/react-text-splitting-animations/
interface LeadInterface {
	id: number;
	span: string;
}

interface SocialContact {
	id: number;
	label: string;
	target: string;
	href: string;
}

const socialSnippets: SocialContact[] = [
	{
		id: 0,
		label: 'Email',
		target: '__blank',
		href: 'mailto:andrew.simpson.ross@gmail.com'
	},
	{
		id: 1,
		label: 'LinkedIn',
		target: '__blank',
		href: 'https://www.linkedin.com/in/asross/'
	},
	{
		id: 2,
		label: 'Twitter',
		target: '__blank',
		href: 'https://twitter.com/Dopamine_Driven'
	},
	{
		id: 3,
		label: 'GitHub',
		target: '__blank',
		href: 'https://github.com/DopamineDriven'
	}
];

const spanSnippets: LeadInterface[] = [
	{
		id: 0,
		span: 'Andrew Ross is a Chicago Based Full-Stack Engineer proficient '
	},
	{
		id: 1,
		span: 'in JAMstack, React, TypeScript, Next.js, Headless WordPress, '
	},
	{
		id: 2,
		span: 'Node, GraphQL, Apollo, Tailwind CSS, MongoDB, PostgreSQL, '
	},
	{
		id: 3,
		span: 'MySQL, Authentication/Authorization, JWTs, Google Analytics, '
	},
	{
		id: 4,
		span: 'Static Site Generation, Server Side Rendering, Incremental Static '
	},
	{
		id: 5,
		span: 'Regeneration, DB Migration, UX, and Vercel. Cofounder of Windy '
	},
	{
		id: 6,
		span: 'City Devs LLC. Full-Stack development TA at Vanderbilt University. '
	},
	{
		id: 7,
		span: 'Project lead uniting local Chicago Media companies. Collaborates '
	},
	{
		id: 8,
		span: 'with techies from around the globe. What drives this? A desire to '
	},
	{
		id: 9,
		span: 'build. Available for freelance, contract, and full-time roles. '
	}
];

const Lead = () => {
	const spanMap = spanSnippets.map(constituent => {
		return (
			<span
				className='font-thin font-somaRoman tracking-tighter cursor-default '
				key={constituent.id}
			>
				{constituent.span}
				<br />
			</span>
		);
	});

	const socialMap = socialSnippets.map(constituent => {
		return (
			<div className='mt-socialMargin block' key={constituent.id}>
				<a
					className='block transform z-50 animate-hero hover:text-fiveOBlack py-portfolioDivider md:py-0'
					target={constituent.target}
					aria-label={constituent.label}
					href={constituent.href}
				>
					{constituent.label}
				</a>
			</div>
		);
	});
	return (
		<Fragment>
			<Meta />
			<header
				className='select-none relative z-1 justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300 pb-introToPortfolioMobile md:pb-portfolioS'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<div className='relative block justify-between lg:w-auto lg:static lg:block lg:justify-start w-full min-w-full'>
					<Link href='/'>
						<a
							className='container block pl-portfolio justify-between mx-auto w-full min-w-full'
							id='top'
							aria-label='top'
						>
							<ArIcon />
						</a>
					</Link>
				</div>
				<div>
					<h1
						className='font-head text-custom relative flex-grow text-center justify-center tracking-tight leading-headerP font-light cursor-default w-full min-w-full'
						style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
					>
						<a className='text-custom block'>Andrew</a>
					</h1>
				</div>
				<p
					className={
						'text-customExcerptMobile md:text-customP pr-portfolioRS pl-portfolioLS leading-headerP block font-somaRoman tracking-tighter font-thin'
					}
				>
					{spanMap}
				</p>
				<div
					className='md:text-customExcerpt md:leading-headerAbout md:visible invisible'
					style={{ position: 'absolute', top: '92.78333vw', left: '3.33333vw' }}
				>
					{socialMap}
				</div>
				<div
					className='text-customTitle font-somaRoman leading-customSLM tracking-wide block uppercase md:hidden'
					style={{ position: 'absolute', top: '92.78333vw', left: '3.33333vw' }}
				>
					{socialMap}
				</div>
			</header>
		</Fragment>
	);
};

export default Lead;

/*
const spanSnippets: LeadInterface[] = [
	{
		id: 0,
		span: 'Andrew Ross is a Chicago Based Full-Stack '
	},
	{
		id: 1,
		span: 'Engineer specializing in JAMstack, React, '
	},
	{
		id: 2,
		span: 'TypeScript, Next.js, Node, GraphQL, Apollo, '
	},
	{
		id: 3,
		span: 'Tailwind CSS, MongoDB, PostgreSQL, JWTs, '
	},
	{
		id: 4,
		span: 'Google Analytics, Static Site Generation, UX, '
	},
	{
		id: 5,
		span: 'Headless WordPress, DB Migration, and Vercel. '
	},
	{
		id: 6,
		span: 'Cofounder of Windy City Devs LLC. '
	},
	{
		id: 7,
		span: 'Full-Stack TA at Vanderbilt University. '
	},
	{
		id: 8,
		span: 'Project lead uniting Chicago Media. '
	},
	{
		id: 9,
		span: 'Works with techies around the globe. '
	},
	{
		id: 10,
		span: `What drives this? A desire to build.`
	},
	{
		id: 11,
		span: 'Available for freelance, contract, and '
	},
	{
		id: 12,
		span: 'full-time work.'
	}
];

*/
