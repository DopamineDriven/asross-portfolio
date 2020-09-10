import cn from 'classnames';
import Link from 'next/link';

interface CoverImageSubPageProps {
	title: string;
	src: string;
	slug?: string;
}

const CoverImageSubPage = ({ title, src, slug }: CoverImageSubPageProps) => {
	const image = (
		<img
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile h-auto', {
				'hover:shadow-medium transition-shadow duration-200': slug
			})}
		/>
	);
	return (
		<div className=''>
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

export default CoverImageSubPage;
