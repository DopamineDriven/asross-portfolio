import { ReactNode } from 'react';

interface BlogPostTitleProps {
	children?: ReactNode;
}

const BlogPostTitle = ({ children }: BlogPostTitleProps) => {
	return (
		<div className='md:mt-paddingPostTitleTop md:mb-gapX'>
			<h1 className='mt-portfolioDivider tracking-wide font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default BlogPostTitle;
