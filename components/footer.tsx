import Link from 'next/link';

interface FooterProps {
	id: number;
	href: string;
	title: string;
	target: string;
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

const Footer = () => {
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
		<footer className='select-none bg-portfolio font-somaRoman w-full max-w-full px-portfolioFooter text-customFooterMobile md:text-customFooter pt-portfolioH2F pb-mobileGapY'>
			<div className='w-full min-w-full'>
				<div className='block min-w-full w-full items-left overflow-hidden'>
					{/* <div className='block'>
						<Link href='/'>
							<a className='block leading-relaxed whitespace-no-wrap uppercase text-oneFiveBlack'>
								Back to top
							</a>
						</Link>
					</div>{' '} */}
					<div className='grid grid-cols-3 w-full tracking-wide'>
						<div className='block align-top font-somaRoman text-black text-center'>
							<Link href='/#top' passHref>
								<a
									className='block whitespace-no-wrap uppercase duration-1000 transition-all ease-in-out hover:text-fiveOBlack items-left justify-start float-left'
									aria-label='back to top'
								>
									Back to top
								</a>
							</Link>
						</div>
						<div className='block align-top font-somaRoman text-black text-center hover:text-fiveOBlack'>
							{/* <a
								className='flex flex-row-reverse w-full uppercase justify-center hover:text-fiveOBlack'
								href='http://duncanross.design/'
								target='__blank'
							>
								Design, Duncan Ross
							</a> */}
							<a
								className='flex flex-row-reverse w-full uppercase text-center justify-center'
								target='__blank'
								href='https://github.com/DopamineDriven/asross-portfolio'
								aria-label='all rights reserved, 2020'
							>
								UI, Duncan Ross
							</a>
						</div>
						<div className='block align-top font-somaRoman text-black text-right hover:text-everythingIsBlue transition-colors duration-300 cursor-pointer'>
							<a
								className='block w-full uppercase text-right justify-end items-end float-right'
								aria-label='everything is blue'
							>
								Everything is blue
							</a>
						</div>
					</div>
					<hr className='border-fiveOBlack w-full' />
					<div className='grid grid-cols-1 w-full tracking-wide'>
						{/* <div className='block align-top font-somaRoman text-black text-center'>
							<Link href='/'>
								<a className='block whitespace-no-wrap uppercase text-oneFiveBlack items-left align-top justify-start float-left'>
									Andrew Ross
								</a>
							</Link>
						</div> */}
						<div className='block align-top font-somaRoman text-black text-center'>
							<a
								className='flex flex-row-reverse w-auto uppercase justify-center hover:text-fiveOBlack'
								href='http://duncanross.design/'
								target='__blank'
								aria-label='design by duncan ross'
							>
								©2020 ALL RIGHTS RESERVED
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
