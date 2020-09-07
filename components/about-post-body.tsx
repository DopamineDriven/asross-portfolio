import markdownStyles from 'components/markdown-content.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';
// import dark from 'react-syntax-highlighter/dist/esm/styles/prism/dark';


interface BlogPostBodyProps {
	content: string;
}
// customStyle={{ 'backgroundColor': 'black', 'textShadow': 'black', 'textDecoration': 'none' }}
const CodeBlock = ({ language, value }: SyntaxHighlighterProps) => {
  return (
    <SyntaxHighlighter language={language} useInlineStyles={true} className=' text-shadow-none bg-tinyHouseWhite'>
			{value}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

const AboutPostBody = ({ content }: BlogPostBodyProps) => {
	return (
		<div className='max-w-4xl text-shadow-none shadow-none prose prose-lg mx-auto content-center text-left md:text-justify items-center justify-center align-middle sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
			<ReactMarkdown
				className={markdownStyles['markdown'] + ' text-shadow-none'}
				escapeHtml={false}
				source={content}
				renderers={{ code: CodeBlock }}
			/>
		</div>
	);
};

export default AboutPostBody;
