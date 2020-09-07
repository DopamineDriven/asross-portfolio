import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface BlogTitleProps {
	title: string;
	slug?: string;
}

const BlogTitle = ({ title, slug }: BlogTitleProps) => {
	return (
		<div className='font-somaRoman uppercase black hover:text-fiveOBlack md:text-customTitle customTitleMobile'>
			<Link as={`/blogs/${slug}`} href='/blogs/[slug]' passHref scroll={true}>
				<a
					className='font-head hover:text-fiveOBlack'
					aria-label={`${title}`}
					id={`#about-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-customAbout text-center block'
					/>
				</a>
			</Link>
		</div>
	);
};

export default BlogTitle;
