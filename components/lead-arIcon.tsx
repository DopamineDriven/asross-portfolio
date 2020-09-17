import { ArIcon } from 'components/svg-icons';
import Link from 'next/link';
import { Media } from 'components/window-width';
import { Fragment } from 'react';

const ArIconConditional = () => {
	const arIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='18vw' height='18vw' />
				</a>
			</Link>
		</Media>
	);

	const arIconSm: JSX.Element = (
		<Media at='sm'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='15vw' height='15vw' />
				</a>
			</Link>
		</Media>
	);

	const arIconMd: JSX.Element = (
		<Media at='md'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='12.5vw' height='12.5vw' />
				</a>
			</Link>
		</Media>
	);

	const arIconDesktop: JSX.Element = (
		<Media greaterThan='md'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='10vw' height='10vw' />
				</a>
			</Link>
		</Media>
	);
	return (
		<Fragment>
			<div className='relative block justify-between lg:w-auto lg:static lg:block lg:justify-start w-full min-w-full transition-all duration-2000 delay-300'>
				{arIconXs}
				{arIconSm}
				{arIconMd}
				{arIconDesktop}
			</div>
		</Fragment>
	);
};

export default ArIconConditional;
