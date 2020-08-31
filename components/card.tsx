import CoverImageCard from 'components/cover-image-card';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface CardProps {
	date: string;
	excerpt: string;
	slug: string;
	src: string;
	title: string;
}

const Card = ({ date, excerpt, slug, src, title }: CardProps) => {
	return (
		<div className='font-somaRoman block md:odd:pt-offsetY'>
			<div className='max-w-imagePortfolioMobile md:max-w-imagePortfolio rounded-lg overflow-y-hidden bg-portfolio block'>
				<CoverImageCard slug={slug} src={src} title={title} />
				<div className='flex flex-col text-center justify-center bg-portfolio'>
					<div className='font-bold font-somaRoman leading-tight pt-portfolio'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref>
							<a
								className='font-somaRoman'
								aria-label={`date-published ${date}`}
							>
								<ReactMarkdown
									escapeHtml={false}
									source={title}
									className='text-center hover:text-fiveOBlack uppercase text-customTitle'
								/>
							</a>
						</Link>
					</div>
					<div className='font-somaRoman text-fiveOBlack uppercase'>
						<ReactMarkdown
							escapeHtml={false}
							source={excerpt}
							className='text-center text-customExcerpt'
						/>
					</div>
					<div className='hidden'>{date}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;