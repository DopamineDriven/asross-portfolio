import { AndrewIcon, ArIcon } from 'components/svg-icons';
import Link from 'next/link';

const Lead = () => {
	return (
		<>
			<header className='relative flex z-1 flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3 h-threeFifths w-full min-w-full container overflow-y-hidden overflow-x-hidden  '>
				<div className='relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start w-full min-w-full'>
					<Link href='/'>
						<a className='leading-relaxed container flex flex-wrap px-5 justify-between mx-auto py-5 w-full min-w-full'>
							<ArIcon />
						</a>
					</Link>
				</div>
				<h1 className='uppercase font-head text-custom'>
					Andrew
				</h1>
				<div
					className='container px-4 mx-auto flex flex-wrap items-center justify-between h-half w-full min-w-full'
					style={{
						backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1598726915/portfolio/Andrew_1_iudxbk.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '90% 100%',
            backgroundColor: '#EBE8E0',
            backgroundPositionX: 'center'
					}}
				></div>
			</header>
		</>
	);
};

export default Lead;
