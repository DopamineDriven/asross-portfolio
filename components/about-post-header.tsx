import AboutPostCoverImage from 'components/about-post-cover-image';
import AboutPostTitle from 'components/about-post-title';
import Date from 'components/date-formatter';
import PortfolioDivider from 'components/portfolio-divider';
import AboutPostSourceIcons from 'components/about-post-source-icons';
import { Fragment } from 'react';
interface AboutPostHeaderProps {
	title: string;
	src: string;
	date: string;
	email: string;
	github: string;
	linkedin: string;
	twitter: string;
}

const AboutPostHeader = ({
	title,
	src,
	date,
	email,
	github,
	linkedin,
	twitter
}: AboutPostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head text-customAboutTitle select-none'>
				<div className='block mx-auto md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile pt-mobileGapY'>
					<AboutPostCoverImage title={title} src={src} />
				</div>
				<AboutPostTitle>{title}</AboutPostTitle>
			</div>
			<div className=' max-w-cardGridMobile block mx-auto align-middle justify-center select-none'>
				<div className=' text-customExcerptMobile text-auxiliary font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
				<div className='text-primary font-somaRoman flex mx-auto align-middle justify-center pb-mdmxSocial'>
					<AboutPostSourceIcons
						github={github}
						email={email}
						linkedin={linkedin}
						twitter={twitter}
					/>
				</div>
			</div>
			<PortfolioDivider />
		</Fragment>
	);
};

export default AboutPostHeader;
