import cn from 'classnames';
import Link from 'next/link';

interface CoverImageSubPageProps {
	title: string;
	src: string;
	slug?: string;
}

const AboutSubCoverImage = ({ title, src, slug }: CoverImageSubPageProps) => {
	const image = (
		<img
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('max-w-aboutImage600 w-aboutImage600 h-auto', {
				'hover:shadow-medium transition-shadow duration-200': slug
			})}
		/>
	);
	return (
		<div className='-mx-5 sm:mx-0'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default AboutSubCoverImage;
