import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

interface PostArticleExcerptProps {
	articleExcerpt: string;
}

const PostArticleExcerpt = ({ articleExcerpt }: PostArticleExcerptProps) => {
	return (
		<Fragment>
			<div>
				<a className='font-somaRoman' aria-label={`${articleExcerpt}`}>
					<ReactMarkdown
						escapeHtml={false}
						source={articleExcerpt}
						className='text-center block'
					/>
				</a>
			</div>
		</Fragment>
	);
};

export default PostArticleExcerpt;
