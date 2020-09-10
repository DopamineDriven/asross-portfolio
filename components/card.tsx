import CoverImageCard from 'components/cover-image-card';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import CardTitle from 'components/card-title';

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
					<div className='font-somaRoman text-fiveOBlack uppercase cursor-default'>
						<ReactMarkdown
							escapeHtml={false}
							source={excerpt}
							className='text-center md:text-customExcerpt'
						/>
					</div>
					<div className='hidden'>{date}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
