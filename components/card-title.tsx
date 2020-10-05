import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface CardTitleProps {
	title: string;
	slug?: string;
	postTitle: string;
}

const CardTitle = ({ title, slug, postTitle }: CardTitleProps): JSX.Element => {
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
						source={postTitle}
						className='text-center hover:text-tertiary uppercase text-customTitleMobile md:text-customTitle'
					/>
				</a>
			</Link>
		</div>
	);
};

export default CardTitle;
