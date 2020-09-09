import { ReactNode } from 'react';

interface PostTitleProps {
	children?: ReactNode;
};

const PostTitle = ({ children }: PostTitleProps) => {
	return (
		<div className=' md:my-paddingPostTitleTop md:mb-paddingPostTitleBottom'>
			{' '}
			<h1 className='mt-portfolioDivider font-bold tracking-wide font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default PostTitle;
