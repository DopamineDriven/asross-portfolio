import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface AboutExcerptProps {
	excerpt: string;
	slug: string;
}

const AboutExcerpt = ({ excerpt, slug }: AboutExcerptProps) => {
	return (
		<div className=' cursor-default hover:text-fiveOBlack dark:hover:text-eaWhite transition-all transform duration-10000 translate-y-portfolioDivider animate-pulse'>
			<Link as={`/about/${slug}`} href='/about/[slug]' passHref scroll={true}>
				<a
					className='font-somaRoman md:text-customTitle text-customSM tracking-tight'
					aria-label={`${excerpt}`}
					id={`home-${excerpt}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={excerpt}
						className='text-left block'
					/>
				</a>
			</Link>
		</div>
	);
};

export default AboutExcerpt;
