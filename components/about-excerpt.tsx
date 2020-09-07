import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface AboutExcerptProps {
	excerpt: string;
	slug: string;
}

const AboutExcerpt = ({ excerpt, slug }: AboutExcerptProps) => {
	return (
		<div className='text-oneFiveBlack cursor-default hover:text-fiveOBlack'>
			<Link as={`/about/${slug}`} href='/about/[slug]' passHref scroll={true}>
				<a
					className='font-somaRoman'
					aria-label={`${excerpt}`}
					id={`home-${excerpt}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={excerpt}
						className='text-center block'
					/>
				</a>
			</Link>
		</div>
	);
};

export default AboutExcerpt;
