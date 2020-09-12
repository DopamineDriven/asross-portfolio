import Link from 'next/link';

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

interface SubFooterProps {
	title: string;
}

const AboutSubFooter = ({ title }: SubFooterProps) => {
	const socialMap = socialSnippets.map(constituent => {
		return (
			<div
				className='list-none w-auto min-w-full md:w-full text-center md:text-right float-right'
				key={constituent.id}
			>
				<a
					className='block transition-all duration-3000 delay-300 translate-y-portfolioDivider transform animate-hero w-auto hover:text-fiveOBlack md:text-right pr-portfolioDivider'
					target={constituent.target}
					aria-label={constituent.label}
					href={constituent.href}
				>
					<p className='w-auto'>{constituent.label}</p>
				</a>
			</div>
		);
	});
	const backToTop = (
		<div className='block w-auto align-top font-somaRoman text-black text-center'>
			<Link href={`/#home-${title}`} passHref scroll={true}>
				<a
					className='block pl-portfolioDivider whitespace-no-wrap duration-1000 transition-all ease-in-out hover:text-fiveOBlack items-left justify-start'
					aria-label='back to top'
				>
					Return Home
				</a>
			</Link>
		</div>
	);
	const copyRight = (
		<div className='flex flex-row mx-auto w-full tracking-wide text-center'>
			<div className='block align-top mx-auto font-somaRoman text-black text-center w-auto'>
				<a
					className='block transition-all duration-3000 delay-300 -translate-y-portfolioDivider transform animate-hero justify-center hover:text-fiveOBlack'
					href='http://duncanross.design/'
					target='__blank'
					aria-label='design by duncan ross'
				>
					©2020 All Rights Reserved
				</a>
			</div>
		</div>
	);
	return (
		<footer className='select-none bg-portfolio font-somaRoman w-full max-w-full px-portfolioFooter text-customFooterMobile md:text-customTitle pt-portfolioH2F pb-mobileGapY'>
			<div className='w-full min-w-full'>
				<div className='block min-w-full w-full overflow-hidden'>
					<div className='grid grid-cols-8 w-full content-end justify-end align-bottom first:col-span-3'>
						<div className='col-span-4 text-left float-left block'>
							<a className='float-left block transition-all duration-3000 delay-300 translate-y-portfolioDivider transform animate-hero'>
								{backToTop}
							</a>
						</div>
						{socialMap}
					</div>
					<hr className='border-fiveOBlack w-portfolioDividerWidth max-w-portfolioDividerWidth mx-auto mt-portfolioDivider pb-portfolioDivider' />
					{copyRight}
				</div>
			</div>
		</footer>
	);
};

export default AboutSubFooter;
