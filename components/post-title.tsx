import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className='text-customSM font-bold tracking-tighter font-head md:leading-none mb-2 text-center justify-center'>
			{children}
		</h1>
	);
};

export default PostTitle;
