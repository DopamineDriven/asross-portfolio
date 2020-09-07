import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface AboutTitleProps {
	title: string;
	slug?: string;
}

const AboutTitle = ({ title, slug }: AboutTitleProps) => {
	return (
		<h1
			className='z-1 text-customAbout relative flex-grow text-center justify-center tracking-tight leading-portfolio font-light cursor-default w-full min-w-full'
			style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
		>
			<Link as={`/about/${slug}`} href='/about/[slug]' passHref>
				<a className='font-head hover:text-fiveOBlack' aria-label={`${title}`} id={`home-${title}`}>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-customAbout text-center block'
					/>
				</a>
			</Link>
		</h1>
	);
};

export default AboutTitle;
