import BlogPostCoverImage from 'components/blog-post-cover-image';
import BlogPostTitle from 'components/blog-post-title';
import BlogPostSourceIcons from 'components/blog-post-source-icons';
import Date from 'components/date-formatter';
import { Fragment } from 'react';

interface BlogPostHeaderProps {
	title: string;
	postTitle: string;
	src: string;
	date: string;
	dev: string;
	medium: string;
	youtube: string;
}

const BlogPostHeader = ({
	title,
	postTitle,
	src,
	date,
	dev,
	medium,
	youtube
}: BlogPostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head text-customPostBlog bg-portfolio select-none'>
				<div className='block mx-auto md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile pt-mobileGapY'>
					<BlogPostCoverImage title={title} src={src} />
				</div>
				<BlogPostTitle>{postTitle}</BlogPostTitle>
			</div>
			<div className='pt-portfolioDivider max-w-cardGridMobile block mx-auto align-middle justify-center select-none'>
				<div className='text-customExcerptMobile text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
				<div className=' text-black font-somaRoman flex mx-auto align-middle justify-center'>
					<BlogPostSourceIcons dev={dev} medium={medium} youtube={youtube} />
				</div>
			</div>
			<hr className='border-fiveOBlack w-portfolioDividerWidth my-portfolioDivider pb-portfolioDivider mx-auto' />
		</Fragment>
	);
};

export default BlogPostHeader;
