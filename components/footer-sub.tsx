import Link from 'next/link';

interface FooterProps {
	id: number;
	href: string;
	title: string;
	target: string;
}

const footerConstitutents: FooterProps[] = [
	{
		id: 0,
		href: 'http://duncanross.design/',
		title: 'Design, Duncan Ross',
		target: '__blank'
	},
	{
		id: 1,
		href: 'https://github.com/DopamineDriven/asross-portfolio',
		title: '©2020 ALL RIGHTS RESERVED',
		target: '__blank'
	}
];

interface SubFooterProps {
	title: string;
}

const FooterSub = ({ title }: SubFooterProps) => {
	return (
		<footer className='bg-portfolio font-somaRoman w-full max-w-full px-portfolioFooter text-customFooterMobile md:text-customFooter pt-portfolioH2F pb-mobileGapY'>
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
							<Link href={`/#home-${title}`} passHref>
								<a
									className='block whitespace-no-wrap uppercase duration-1000 transition-all ease-in-out hover:text-fiveOBlack items-left justify-start float-left'
									aria-label='back to top'
								>
									Return home
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

export default FooterSub;
