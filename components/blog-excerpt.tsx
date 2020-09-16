import ReactMarkdown from 'react-markdown/with-html';
import Link from 'next/link';

interface BlogExcerptProps {
	excerpt: string;
	slug?: string;
}

const BlogExcerpt = ({ excerpt }: BlogExcerptProps) => {
	return (
		<div className=' cursor-default'>
			<a className='font-somaRoman' aria-label={`${excerpt}`}>
				<ReactMarkdown
					escapeHtml={false}
					source={excerpt}
					className='text-center block'
				/>
			</a>
		</div>
	);
};

export default BlogExcerpt;
