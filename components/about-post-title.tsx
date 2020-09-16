import { ReactNode } from 'react';

interface AboutPostTitleProps {
	children?: ReactNode;
}

const AboutPostTitle = ({ children }: AboutPostTitleProps) => {
	return (
		<div className='md:mt-paddingPostTitleTop md:mb-paddingPostTitleBottom'>
			<h1 className='mt-portfolioDivider  tracking-wide font-head md:leading-headerAbout text-center justify-center'>
				{children}
			</h1>
		</div>
	);
};

export default AboutPostTitle;
