import { ReactNode } from 'react';

interface PostTitleProps {
	children?: ReactNode;
}

const PostTitle = ({ children }: PostTitleProps) => {
	return (
		<div className='md:mt-paddingPostTitleTop md:mb-gapX'>
			<h1 className='mt-portfolioDivider tracking-wide font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default PostTitle;
