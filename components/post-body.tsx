import markdownStyles from 'components/markdown-content.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';

const CodeBlock = ({ language, value }: SyntaxHighlighterProps) => {
	return (
		<SyntaxHighlighter useInlineStyles={true} language={language}>
			{value}
		</SyntaxHighlighter>
	);
};

type Props = {
	content: string;
};

const PostBodyBlog = ({ content }: Props) => {
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

export default PostBodyBlog;

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-syntax-highlighter/index.d.ts
