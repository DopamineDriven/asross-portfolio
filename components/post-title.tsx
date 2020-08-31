import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className='text-6xl md:text-6xl lg:text-6xl font-bold tracking-tighter font-header md:leading-none mb-2 text-center justify-center'>
			{children}
		</h1>
	);
};

export default PostTitle;
