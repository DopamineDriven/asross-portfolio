import ReactMarkdown from 'react-markdown/with-html';

interface CardExcerptProps {
	excerpt: string;
}

const CardExcerpt = ({ excerpt }: CardExcerptProps): JSX.Element => {
	return (
		<div className='font-somaRoman text-tertiary uppercase cursor-default'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className='text-center md:text-customExcerpt'
			/>
		</div>
	);
};

export default CardExcerpt;
