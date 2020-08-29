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
		span: 'Andrew Ross is a '
	},
	{
		id: 1,
		span: 'Chicago Based Full-Stack '
	},
	{
		id: 2,
		span: 'Engineer specializing in '
	},
	{
		id: 3,
		span: 'JAMstack, React, TypeScript, '
	},
	{
		id: 4,
		span: 'Next.js, Node, GraphQL, '
	},
	{
		id: 5,
		span: 'Apollo, Tailwind CSS, MongoDB, '
	},
	{
		id: 6,
		span: 'PostgreSQL, UX, SEO, Google Analytics, '
	},
	{
		id: 7,
		span: 'Static Site Generation, Database Migrations, '
	},
	{
		id: 8,
		span: 'Headless WordPress, JWTs, '
	},
	{
		id: 9,
		span: 'Vercel, and more. '
	},
	{
		id: 10,
		span: 'Cofounder of Windy City Devs LLC and '
	},
	{
		id: 11,
		span: 'Vanderbilt Full-Stack TA, '
	},
	{
		id: 12,
		span: 'he collaborates with companies '
	},
	{
		id: 13,
		span: 'and freelance developers '
	},
	{
		id: 14,
		span: 'from around the world. '
	},
	{
		id: 15,
		span: 'Available for freelance, contract, and full-time work.'
	}
];

const Lead = () => {
	const spanMap = spanSnippets.map(constituent => {
		return (
			<span className='font-light font-somaRoman' key={constituent.id}>
				{constituent.span}
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
				<p
					className={'lead-p text-customP leading-headerP block font-somaRoman' + styles.p}
					style={{ padding: '4.1844vw 0 0 3.19149vw' }}
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
