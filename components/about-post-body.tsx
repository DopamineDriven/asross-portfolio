import markdownStyles from 'components/markdown-content.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import git from 'react-syntax-highlighter/dist/cjs/languages/prism/git';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPostBodyProps {
	content: string;
}

const CodeBlock = ({
	language = `${tsx}, ${typescript}, ${xml}, ${git}`,
	children
}: SyntaxHighlighterProps) => {
	return (
		<SyntaxHighlighter
			useInlineStyles={true}
			language={language}
			style={dark}
			showLineNumbers={true}
			startingLineNumber={0}
			lineNumberStyle={{ color: '#ddd' }}
		>
			{children}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

const AboutPostBody = ({ content }: BlogPostBodyProps) => {
	return (
		<div className='max-w-2xl prose prose-lg mx-auto content-center text-left md:text-justify items-center justify-center align-middle sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
			<ReactMarkdown
				className={markdownStyles['markdown']}
				escapeHtml={false}
				source={content}
				renderers={{ code: CodeBlock }}
			/>
		</div>
	);
};

export default AboutPostBody;
