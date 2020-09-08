import cn from 'classnames';
import Link from 'next/link';

interface BlogPostCoverImageProps {
	title: string;
	src: string;
	slug?: string;
}

const BlogPostCoverImage = ({ title, src, slug }: BlogPostCoverImageProps) => {
	const image = (
		<img
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn(
				'md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile h-auto',
				{
					'hover:shadow-medium transition-shadow duration-200': slug
				}
			)}
		/>
	);
	return (
		<div className=''>
			{slug ? (
				<Link as={`/blog/${slug}`} href='/blog/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default BlogPostCoverImage;
