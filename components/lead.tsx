import { Fragment } from 'react';
import Meta from 'components/meta';
import ArIconConditional from 'components/lead-arIcon';
import LeadSpan from 'components/lead-span';
// USE
// https://fossheim.io/writing/posts/react-text-splitting-animations/

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

const Lead = () => {
	const socialMap = socialSnippets.map(constituent => {
		return (
			<div className='mt-socialMargin block' key={constituent.id}>
				<a
					className='block z-50 text-black dark:text-white hover:text-fiveOBlack dark:hover:text-afWhite py-portfolioDivider md:py-0 transition-all translate-y-mdmxSocial tracking-wide transform ease-in-out animate-hero'
					target={constituent.target}
					aria-label={constituent.label}
					href={constituent.href}
				>
					{constituent.label}
				</a>
			</div>
		);
	});

	const andrewTitle = (
		<div>
			<h1
				className='font-head text-custom relative flex-grow text-center justify-center tracking-tight leading-headerP font-light cursor-default w-full min-w-full transform -translate-y-paddingPostTitleTop transition-all ease-in-out'
				style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
			>
				<a className='text-custom block'>Andrew</a>
			</h1>
		</div>
	);
	// transition-all duration-2000 delay-300 translate-y-portfolioDivider transform animate-hero
	const socialMapConditional = (
		<Fragment>
			<div
				className='md:text-customExcerptMobile md:leading-portfolio md:visible invisible md:transition-all md:-translate-y-portfolioDivider md:transform md:animate-hero md:ease-in-out'
				style={{
					position: 'absolute',
					top: '90.78333vw',
					left: '3.33333vw'
				}}
			>
				{socialMap}
			</div>
			<div
				className='text-customTitle font-somaRoman leading-customSLM tracking-wide block uppercase md:hidden transition-all translate-y-portfolioLS transform animate-hero ease-in-out'
				style={{ position: 'absolute', top: '94.78333vw', left: '3.33333vw' }}
			>
				{socialMap}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<Meta />
			<header
				className='select-none relative z-1 justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform pb-introToPortfolioMobile md:pb-portfolioS'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<ArIconConditional />
				{andrewTitle}
				<LeadSpan />
				{socialMapConditional}
			</header>
		</Fragment>
	);
};

export default Lead;
