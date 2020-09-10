import CoverImageCard from 'components/card-cover-image';
import CardTitle from 'components/card-title';
import CardExcerpt from 'components/card-excerpt';

interface CardProps {
	date: string;
	excerpt: string;
	slug: string;
	src: string;
	title: string;
}

const Card = ({ date, excerpt, slug, src, title }: CardProps) => {
	return (
		<div className='block md:odd:pt-offsetY'>
			<div className='max-w-imagePortfolioMobile md:max-w-imagePortfolio overflow-y-hidden overflow-x-hidden bg-portfolio block'>
				<CoverImageCard slug={slug} src={src} title={title} />
				<div className='flex flex-col text-center justify-center bg-portfolio'>
					<CardTitle slug={slug} title={title} />
					<CardExcerpt excerpt={excerpt} />
					<div className='hidden'>{date}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
