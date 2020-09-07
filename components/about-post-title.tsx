import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const AboutPostTitle = ({ children }: Props) => {
	return (
		<div className=' md:my-portfolioPadding'>
			{' '}
			<h1 className='pt-portfolioDivider font-bold tracking-wide font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default AboutPostTitle;
