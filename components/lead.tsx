import { ArIcon } from 'components/svg-icons';
import Link from 'next/link';
import styles from 'components/lead-styles.module.css';

interface LeadInterface {
	id: number;
	span: string;
}

/*
						Andrew ross is a Chicago based full-stack engineer who specializes in the
						JAMstack, MERN, TypeScript, React, Next.js, Tailwind CSS, Static Site
						Generation, DB Migration, Headless WordPress, and more.
*/

const spanSnippets: LeadInterface[] = [
	{
		id: 0,
		span: 'Andrew Ross is a Chicago Based Full-Stack '
	},
	{
		id: 1,
		span: 'Engineer specializing in JAMstack, React, '
	},
	{
		id: 2,
		span: 'TypeScript, Next.js, Node, GraphQL, Apollo, '
	},
	{
		id: 3,
		span: 'Tailwind CSS, MongoDB, PostgreSQL, UX, SEO, '
	},
	{
		id: 4,
		span: 'Google Analytics, Static Site Generation, JWTs, '
	},
	{
		id: 5,
		span: 'Headless WordPress, DB Migration, and Vercel. '
	},
	{
		id: 6,
		span: 'Cofounder of Windy City Devs LLC, '
	},
	{
		id: 7,
		span: 'a full-stack TA at Vanderbilt University, '
	},
	{
		id: 8,
		span: 'tech lead on a project uniting Chicago Media. '
	},
	{
		id: 9,
		span: 'He collaborates with techies around the globe. '
	},
	{
		id: 10,
		span: `What drives this? A desire to build.`
	},
	{
		id: 11,
		span: 'Available for freelance, contract, and FT work.'
	}
];

const Lead = () => {
	const spanMap = spanSnippets.map(constituent => {
		return (
			<span
				className='font-light font-somaRoman tracking-tighter last:pl-portfolioS p-lead'
				key={constituent.id}
			>
				{constituent.span}
				<br />
			</span>
		);
	});
	return (
		<>
			<header
				className='relative z-1 justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<div className='relative block justify-between lg:w-auto lg:static lg:block lg:justify-start w-full min-w-full'>
					<Link href='/'>
						<a className='container block pl-portfolio justify-between mx-auto w-full min-w-full'>
							<ArIcon />
						</a>
					</Link>
				</div>
				<div>
					<h1
						className='font-head text-custom relative flex-grow text-center justify-center tracking-tight leading-portfolio font-light cursor-default w-full min-w-full'
						style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
					>
						<a className='text-custom block'>Andrew</a>
					</h1>
				</div>
				<p
					className={
						'text-customP pr-portfolioRS pl-portfolioLS leading-headerP block font-somaRoman tracking-tighter' +
						styles.p
					}
					// style={{ padding: '4.1844vw 0 0 2.19149vw' }}
				>
					{spanMap}
				</p>
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
