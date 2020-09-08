import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface BlogExcerptProps {
	excerpt: string;
	slug?: string;
}

const BlogExcerpt = ({ excerpt, slug }: BlogExcerptProps) => {
	return (
		<div className='text-oneFiveBlack cursor-default hover:text-fiveOBlack'>
			<Link as={`/blog/${slug}`} href='/blog/[slug]' passHref scroll={true}>
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

export default BlogExcerpt;
