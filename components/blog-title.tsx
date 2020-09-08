import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { Fragment } from 'react';

interface BlogTitleProps {
	title: string;
	slug?: string;
	date: string;
}

const BlogTitle = ({ title, slug, date }: BlogTitleProps) => {
	return (
		<Fragment>
			<div className='font-somaRoman uppercase black hover:text-fiveOBlack md:text-customTitle text-customTitleMobile'>
				<Link as={`/blog/${slug}`} href='/blog/[slug]' passHref scroll={true}>
					<a
						className='font-head hover:text-fiveOBlack'
						aria-label={`${title}`}
						id={`home-${title}`}
					>
						<ReactMarkdown
							escapeHtml={false}
							source={title}
							className='text-customTitleMobile text-center block'
						/>
					</a>
				</Link>
				<div className='hidden'>{date}</div>
			</div>
		</Fragment>
	);
};

export default BlogTitle;
