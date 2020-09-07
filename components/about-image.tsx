import cn from 'classnames';
import Link from 'next/link';

interface AboutImageProps {
	title: string;
	src: string;
	slug?: string;
}

const AboutImage = ({ src, title, slug }: AboutImageProps) => {
	const image = (
		<img
			src={src}
			alt={title}
			className={cn(
				'w-aboutImage500 hover:shadow-large hover:overflow-y-visible hover:overflow-x-visible bg-portfolio block transition-all delay-500 duration-3000 ease-in-out transform hover:-translate-y-1 hover:scale-110 max-w-aboutImage500 h-full max-h-full z-2',
				{
					'hover:shadow-large transition-shadow duration-300': slug
				}
			)}
		/>
	);
	return (
		<div className='mx-auto max-w-aboutImage500 overflow-y-hidden overflow-x-hidden hover:overflow-y-visible hover:overflow-x-visible bg-portfolio block transition-all delay-500 duration-3000 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
			{slug ? (
				<Link as={`/about/${slug}`} href='/about/[slug]' passHref>
					<a aria-label={title}
						className='hover:overflow-y-visible hover:overflow-x-visible bg-portfolio block transition-all delay-500 duration-3000 ease-in-out transform hover:-translate-y-1 hover:scale-110'
					>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default AboutImage;
