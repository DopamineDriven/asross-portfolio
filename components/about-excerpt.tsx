import ReactMarkdown from 'react-markdown/with-html';

interface AboutExcerptProps {
	excerpt: string;
}

const AboutExcerpt = ({ excerpt }: AboutExcerptProps) => {
	return (
		<div className='font-somaRoman text-fiveOBlack uppercase cursor-default'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className='text-center md:text-customExcerpt'
			/>
		</div>
	);
};

export default AboutExcerpt;
