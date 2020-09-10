import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface CardTitleProps {
	title: string;
	slug?: string;
}

const CardTitle = ({ title, slug }: CardTitleProps) => {
	return (
		<div className='font-bold font-somaRoman leading-tight pt-portfolio'>
			<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref scroll={true}>
				<a
					className='font-somaRoman'
					aria-label={`portfolio item title - ${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-center hover:text-fiveOBlack uppercase md:text-customTitle'
					/>
				</a>
			</Link>
		</div>
	);
};

export default CardTitle;
