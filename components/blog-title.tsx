import Link from 'next/link';

interface BlogTitleProps {
	title: string;
	slug?: string;
}

const BlogTitle = ({ title, slug }: BlogTitleProps) => {
	return (
		<div className='font-somaRoman uppercase black hover:text-fiveOBlack md:text-customTitle customTitleMobile'>
			{slug ? (
				<Link as={`/blogs/${slug}`} href='/blogs/[slug]' passHref>
					<a aria-label={title} id={`home-${title}`}>
						{title}&nbsp;&raar;
					</a>
				</Link>
			) : (
				title
			)}
		</div>
	);
};

export default BlogTitle;
