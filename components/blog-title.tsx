import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface BlogTitleProps {
	title: string;
	slug?: string;
}

const BlogTitle = ({ title, slug }: BlogTitleProps) => {
	return (
		<div className='font-somaRoman uppercase black hover:text-fiveOBlack md:text-customTitle text-customTitleMobile'>
			<Link as={`/blog/${slug}`} href='/blog/[slug]' passHref scroll={true}>
				<a
					className='font-somaRoman hover:text-fiveOBlack'
					aria-label={`${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-customTitle md:text-customTitle text-left block'
					/>
				</a>
			</Link>
		</div>
	);
};

export default BlogTitle;
