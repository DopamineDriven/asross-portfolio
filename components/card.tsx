import CoverImageCard from 'components/card-cover-image';
import CardTitle from 'components/card-title';
import CardExcerpt from 'components/card-excerpt';

interface CardProps {
	date: string;
	excerpt: string;
	slug: string;
	src: string;
	title: string;
	postTitle: string;
}

const Card = ({ date, excerpt, slug, src, title, postTitle }: CardProps) => {
	return (
		<div className='block md:odd:pt-offsetY'>
			<div className='max-w-imagePortfolioMobile md:max-w-imagePortfolio overflow-y-hidden overflow-x-hidden block transition-all duration-3000 delay-500 ease-in-out transform'>
				
				<CoverImageCard slug={slug} src={src} title={title} />
				<div className='flex flex-col text-center justify-center'>
					<CardTitle slug={slug} title={title} postTitle={postTitle} />
					<CardExcerpt excerpt={excerpt} />
					<div className='hidden'>{date}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
