import { ReactNode } from 'react';

interface BlogPostTitleProps {
	children?: ReactNode;
}

const BlogPostTitle = ({ children }: BlogPostTitleProps) => {
	return (
		<div className=' md:my-portfolioPadding'>

			<h1 className='pt-portfolioDivider font-bold tracking-wide font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default BlogPostTitle;
