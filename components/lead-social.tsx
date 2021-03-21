import { Fragment } from 'react';

interface SocialContact {
	id: number;
	label: string;
	target: string;
	href: string;
}

const socialSnippets: SocialContact[] = [
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
	},
	{
		id: 0,
		label: 'Email',
		target: '__blank',
		href: 'mailto:andrew.simpson.ross@gmail.com'
	}
];

const LeadSocial = (): JSX.Element => {
	const socialMap: JSX.Element[] = socialSnippets.map(constituent => {
		return (
			<div className='block mt-socialMargin' key={constituent.id}>
				<a
					className='z-50 block tracking-wide transition-all ease-in-out transform hover:text-tertiary py-portfolioDivider md:py-0 translate-y-mdmxSocial animate-hero '
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
			<div
				className='invisible w-full md:grid md:grid-cols-4 md:pl-portfolio md:text-customExcerptMobile md:leading-portfolio md:visible md:transition-all md:-translate-y-portfolioDivider md:transform md:animate-hero md:ease-in-out'
				style={{
					position: 'absolute',
					top: '75.78333vw',
					left: '3.33333vw'
				}}
			>
				{socialMap}
			</div>
			<div
				className='grid w-full grid-cols-4 tracking-wide uppercase transition-all ease-in-out transform text-customExcerptMobile font-somaRoman leading-customSLM md:hidden translate-y-portfolioLS animate-hero'
				style={{ position: 'absolute', top: '80.78333vw', left: '4.33333vw' }}
			>
				{socialMap}
			</div>
		</Fragment>
	);
};

export default LeadSocial;
