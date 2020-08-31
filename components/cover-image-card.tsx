import cn from 'classnames';
import Link from 'next/link';

export interface CoverImageProps {
	title: string;
	src: string;
	slug?: string;
}

const CoverImageCard = ({ title, src, slug }: CoverImageProps) => {
	const image = (
		<img
			src={src}
			alt={title}
			className={cn(
				'shadow-sm w-full h-82 max-h-full md:h-150 overflow-x-auto rounded-t rounded-b-sm',
				{
					'hover:shadow-lg transition-shadow duration-400': slug
				}
			)}
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

export default CoverImageCard;
