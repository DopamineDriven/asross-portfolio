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

const CodeBlock = ({
	language = 'tsx, typescript, svg, html, xml, git',
	value
}: SyntaxHighlighterProps) => {
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
// https://www.npmjs.com/package/react-syntax-highlighter
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-syntax-highlighter/index.d.ts
