import AboutImage from 'components/about-image';

interface AboutProps {
	title: string;
	src: string;
}

interface AboutInterface {
	id: number;
	span: string;
}

const aboutSnippets: AboutInterface[] = [
	{
		id: 0,
		span: 'Experience in coding '
	},
	{
		id: 1,
		span: 'Backend Frameworks '
	},
	{
		id: 2,
		span: 'and Frontend Technologies '
	},
	{
		id: 3,
		span: 'for Start-ups and small '
	},
	{
		id: 4,
		span: 'businesses... '
	},
	{
		id: 5,
		span: 'Headless WordPress, DB Migration, and Vercel. '
	},
	{
		id: 6,
		span: 'Cofounder of Windy City Devs LLC. '
	},
	{
		id: 7,
		span: 'Full-Stack TA at Vanderbilt University. '
	},
	{
		id: 8,
		span: 'Project lead uniting Chicago Media. '
	},
	{
		id: 9,
		span: 'Works with techies around the globe. '
	},
	{
		id: 10,
		span: `What drives this? A desire to build.`
	},
	{
		id: 11,
		span: 'Available for freelance, contract, and '
	},
	{
		id: 12,
		span: 'full-time work.'
	}
];

const AboutContent = ({ src, title }: AboutProps) => {
	const aboutMap = aboutSnippets.map(constituent => {
		return (
			<span
				className='font-thin font-somaRoman tracking-tighter'
				key={constituent.id}
			>
				{constituent.span}
				<br />
			</span>
		);
	});
	return (
		<div
			className='relative justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform duration-300'
			style={{ transform: 'translate3d(0px, 0px, 0px)' }}
		>
			<h1
				className='font-head z-1 text-customAbout relative flex-grow text-center justify-center tracking-tight leading-headerP font-light cursor-default w-full min-w-full'
				style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
			>
				<a className='text-customAbout text-center block'>ABOUT</a>
			</h1>
			<div
					className='md:text-customSM text-customSM font-somaRoman md:leading-customSLH leading-customSLM tracking-wide block z-0 rounded-full'
					style={{ position: 'absolute', top: '37.48333vw', right: '5.33333vw' }}
				>
					<AboutImage src={src} title={title} />
				</div>
			<p className='text-customP leading-headerP block font-somaRoman tracking-tighter font-thin pr-aboutOffsetY z-0'>
				{aboutMap}
			</p>
		</div>
	);
};

export default AboutContent;
