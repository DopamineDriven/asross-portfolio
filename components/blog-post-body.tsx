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
		<SyntaxHighlighter
			language={language}
			useInlineStyles={true}
			className=' text-shadow-none bg-tinyHouseWhite text-customExcerpt'
		>
			{value}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

const BlogPostBody = ({ content }: BlogPostBodyProps) => {
	return (
		<div className='text-shadow-none shadow-none select-none mx-auto content-center text-left md:text-left md:text-customP items-center justify-center align-middle '>
			<ReactMarkdown
				className={markdownStyles['markdown'] + ' text-shadow-none'}
				escapeHtml={false}
				source={content}
				renderers={{ code: CodeBlock }}
			/>
		</div>
	);
};

export default BlogPostBody;
