import Container from 'components/container';
import { EXAMPLE_PATH } from 'lib/constants';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-portfolio font-somaRoman w-full'>
			<div className='w-full min-w-full bg-portfolio'>
				<div className='bg-portfolio ml-1 mt-1 flex flex-row min-w-full w-full items-left text-left float-left overflow-hidden'>
					<div className='inline-flex w-1/2 mr-6'>
						<Link href='/'>
							<a className='inline-block leading-relaxed mr-4 whitespace-no-wrap uppercase text-oneFiveBlack'>
								Back to top
							</a>
						</Link>
					</div>{' '}
					<div className='flex flex-col w-1/2 my-0 text-sm pt-1 pb-2 items-right align-top text-right float-right -mx-5'>
						<div className='flex flex-row w-128 align-top font-somaRoman text-oneFiveBlack'>
							<a className='flex w-full'>©2020 ALL RIGHTS RESERVED</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
