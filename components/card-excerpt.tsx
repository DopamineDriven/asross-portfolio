import ReactMarkdown from 'react-markdown/with-html';

interface CardExcerptProps {
	excerpt: string;
}

const CardExcerpt = ({ excerpt }: CardExcerptProps) => {
	return (
		<div className='font-somaRoman text-fiveOBlack dark:text-eaWhite uppercase cursor-default'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className='text-center md:text-customExcerpt'
			/>
		</div>
	);
};

export default CardExcerpt;
