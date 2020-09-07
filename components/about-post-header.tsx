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
			<div className='font-head text-customTitleMobile bg-portfolio'>
				<div className='block mx-auto max-w-imagePortfolioMobile'>
					<AboutPostCoverImage title={title} src={src} />
				</div>
				<AboutPostTitle>{title}</AboutPostTitle>
			</div>
			<div className=' max-w-cardGridMobile block mx-auto align-middle justify-center'>
				<div className='text-customExcerpt text-oneFiveBlack font-somaRoman block'>
					<Date dateString={date} />
				</div>
			</div>
			<hr className='border-fiveOBlack w-full pb-portfolioDivider' />
		</Fragment>
	);
};

export default AboutPostHeader;
