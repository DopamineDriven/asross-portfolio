import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const AboutPostTitle = ({ children }: Props) => {
	return (
		<h1 className='pt-portfolioDivider font-bold tracking-wide font-head md:leading-headerAbout text-center justify-center'>
			{children}
		</h1>
	);
};

export default AboutPostTitle;
