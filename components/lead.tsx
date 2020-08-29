import { AndrewIcon, ArIcon } from 'components/svg-icons';
import Link from 'next/link';

interface LeadInterface {
	id: number;
	span: string;
}



const Lead = () => {
	return (
		<>
			<header
				className='relative z-1 justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<div className='relative block justify-between lg:w-auto lg:static lg:block lg:justify-start w-full min-w-full'>
					<Link href='/'>
						<a className='leading-relaxed container flex flex-wrap px-5 justify-between mx-auto w-full min-w-full'>
							<ArIcon />
						</a>
					</Link>
				</div>
				<h1
					className='uppercase font-head text-custom relative flex-grow text-center justify-center tracking-tight leading-portfolio font-light cursor-default'
					style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
				>
					<a className='text-custom block'>Andrew</a>
				</h1>
				{/* <div
					className='container px-4 mx-auto flex flex-wrap items-center justify-between h-half w-full min-w-full'
					style={{
						backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1598726915/portfolio/Andrew_1_iudxbk.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '90% 100%',
						backgroundColor: '#EBE8E0',
						backgroundPositionX: 'center'
					}}
				></div> */}
			</header>
		</>
	);
};

export default Lead;
