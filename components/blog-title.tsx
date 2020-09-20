import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface BlogTitleProps {
	title: string;
	postTitle: string;
	slug?: string;
}

const BlogTitle = ({ title, slug, postTitle }: BlogTitleProps) => {
	// const titleSansHyphens = title.replace('-', ' ').replace('-', ' ');
	return (
		<div className='font-somaRoman hover:text-tertiary text-primary  md:text-customExcerptMobile text-customTitleMobile even:pl-paddingBlog transition-all duration-1000 translate-y-portfolioDivider transform animate-hero'>
			<Link as={`/blog/${slug}`} href='/blog/[slug]' passHref scroll={true}>
				<a
					className='font-somaRoman'
					aria-label={`blog item title - ${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={postTitle}
						className='text-customTitleMobile md:text-customExcerptMobile text-left block even:pl-paddingBlog'
					/>
				</a>
			</Link>
		</div>
	);
};

export default BlogTitle;
