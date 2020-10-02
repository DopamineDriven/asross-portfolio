import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface AboutExcerptProps {
	excerpt: string;
	slug: string;
}

const AboutExcerpt = ({ excerpt, slug }: AboutExcerptProps) => {
	return (
		<div className='transition-all transform cursor-default hover:text-tertiary duration-10000 translate-y-portfolioDivider animate-pulse'>
			<Link as={`/about/${slug}`} href='/about/[slug]' passHref scroll={true}>
				<a
					className='tracking-tight font-somaRoman md:text-customTitle text-customSM'
					aria-label={`read more about andrew ross`}
					id={`home-${excerpt}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={excerpt}
						className='block text-left'
					/>
				</a>
			</Link>
		</div>
	);
};

export default AboutExcerpt;
