import { ArIcon } from 'components/svg-icons';
import Link from 'next/link';
import { Fragment } from 'react';
import Meta from 'components/meta';

const LeadPost = () => {
	return (
    <Fragment>
      <Meta />
			<header
				className='relative z-1 justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300'
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
			</header>
		</Fragment>
	);
};

export default LeadPost;

/*
				{/* <div>
					<h1
						className='font-head text-custom relative flex-grow text-center justify-center tracking-tight leading-portfolio font-light cursor-default w-full min-w-full'
						style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
					>
						<a className='text-custom block'>Andrew</a>
					</h1>
				</div>
				<p
					className={
						'text-customP pr-portfolioRS pl-portfolioLS leading-headerP block font-somaRoman tracking-tighter font-thin' +
						styles.p
					}
				>
					{spanMap}
					{/* <span className='font-thin font-somaRoman tracking-tighter last:pl-portfolioS p-lead cursor-default'>
						<span>
							<a
								className='hover:text-fiveOBlack'
								href='mailto:andrew@windycitydevs.io'
								aria-label='contact'
								target='__blank'
							>
								Contact
							</a>
						</span>
					</span> */
/* </p>
				<div
					className='md:text-customSM text-customSM font-somaRoman md:leading-customSLH leading-customSLM tracking-wide block'
					style={{ position: 'absolute', top: '80.78333vw', left: '3.33333vw' }}
				>
					{socialMap}
				</div> 
*/