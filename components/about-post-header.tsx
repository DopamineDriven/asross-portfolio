import AboutPostCoverImage from 'components/about-post-cover-image';
import AboutPostTitle from 'components/about-post-title';
import Date from 'components/date-formatter';
import { Fragment } from 'react';
interface AboutPostHeaderProps {
	title: string;
	src: string;
	date: string;
}

const AboutPostHeader = ({ title, src, date }: AboutPostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head text-customAboutTitle bg-portfolio'>
				<div className='block mx-auto max-w-aboutImage600 w-aboutImage600'>
					<AboutPostCoverImage title={title} src={src} />
				</div>
				<AboutPostTitle>{title}</AboutPostTitle>
			</div>
			<div className=' max-w-cardGridMobile block mx-auto align-middle justify-center'>
				<div className='text-customExcerpt text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
			</div>
			<hr className='border-fiveOBlack w-portfolioDividerWidth my-portfolioDivider pb-portfolioDivider mx-auto' />
		</Fragment>
	);
};

export default AboutPostHeader;
