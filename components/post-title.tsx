import { ReactNode } from 'react';

interface PostTitleProps {
	children?: ReactNode;
};

const PostTitle = ({ children }: PostTitleProps) => {
	return (
		<div className=' md:mt-paddingPostTitleTop md:mb-paddingPostTitleBottom'>
			{' '}
			<h1 className='mt-portfolioDivider font-bold font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default PostTitle;
