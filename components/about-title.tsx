import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface AboutTitleProps {
	title: string;
	slug?: string;
}

const AboutTitle = ({ title, slug }: AboutTitleProps) => {
	return (
		<h1
			className='z-1 text-customAboutTitle relative flex-grow text-center justify-center tracking-tight leading-headerAbout font-light cursor-default w-full min-w-full transition-all duration-2000 delay-300 translate-y-portfolio transform animate-hero'
			style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
		>
			<Link as={`/about/${slug}`} href='/about/[slug]' passHref scroll={true}>
				<a
					className='font-head text-black hover:text-fiveOBlack dark:hover:text-afWhite dark:text-white duration-2000 delay-300 transition-all'
					aria-label={`${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-customAboutTitle text-right block pr-paddingAboutTitleRight'
					/>
				</a>
			</Link>
		</h1>
	);
};

export default AboutTitle;
