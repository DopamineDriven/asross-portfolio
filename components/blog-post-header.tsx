import BlogPostCoverImage from 'components/blog-post-cover-image';
import BlogPostTitle from 'components/blog-post-title';
import BlogPostSourceIcons from 'components/blog-post-source-icons';
import BlogPostExcerpt from 'components/blog-excerpt';
import Date from 'components/date-formatter';
import { Fragment } from 'react';
import PortfolioDivider from 'components/portfolio-divider';

interface BlogPostHeaderProps {
	title: string;
	src: string;
	slug: string;
	date: string;
	dev: string;
	medium: string;
	youtube: string;
	excerpt: string;
}

const BlogPostHeader = ({
	title,
	src,
	date,
	dev,
	slug,
	medium,
	youtube,
	excerpt
}: BlogPostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head text-customPostBlog select-none'>
				<div className='block mx-auto md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile pt-portfolio'>
					<BlogPostCoverImage title={title} src={src} slug={slug} />
				</div>
				<BlogPostTitle>{title}</BlogPostTitle>
			</div>
			<div className='pt-portfolioDivider max-w-cardGridMobile block mx-auto align-middle justify-center select-none'>
				<div className='text-customTitle text-oneFiveBlack dark:text-white font-somaRoman flex mx-auto align-middle justify-center'>
					<BlogPostExcerpt excerpt={excerpt} />
			</div>
				<div className='text-customExcerpt text-oneFiveBlack dark:text-white font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
				<div className=' text-black font-somaRoman flex mx-auto align-middle justify-center pb-mdmxSocial'>
					<BlogPostSourceIcons dev={dev} medium={medium} youtube={youtube} />
				</div>
			</div>
			<PortfolioDivider />
		</Fragment>
	);
};

export default BlogPostHeader;
