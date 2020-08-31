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
		<div className='font-somaRoman block'>
			<div className='max-w-82 md:max-w-150 rounded-lg overflow-x-hidden overflow-y-hidden bg-portfolio shadow-lg block'>
				<CoverImageCard slug={slug} src={src} title={title} />
				<div className='flex flex-col text-center justify-center bg-portfolio'>
					<div className='font-bold font-somaRoman leading-tight'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref>
							<a
								className='hover:underline font-somaRoman'
								aria-label={`date-published ${date}`}
							>
								<ReactMarkdown
									escapeHtml={false}
									source={title}
									className='text-center hover:underline uppercase'
								/>
							</a>
						</Link>
					</div>
					<div className='font-somaRoman'>
						<ReactMarkdown
							escapeHtml={false}
							source={excerpt}
							className='text-center'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
