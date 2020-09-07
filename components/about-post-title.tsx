import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const AboutPostTitle = ({ children }: Props) => {
	return (
		<h1 className='pt-portfolioDivider text-customSM font-bold tracking-tighter font-head md:leading-none mb-2 text-center justify-center'>
			{children}
		</h1>
	);
};

export default AboutPostTitle;
