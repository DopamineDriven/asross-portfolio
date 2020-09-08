import BlogPostCoverImage from 'components/blog-post-cover-image';
import BlogPostTitle from 'components/blog-post-title';
import Date from 'components/date-formatter';
import { Fragment } from 'react';

interface BlogPostHeaderProps {
	title: string;
	src: string;
	date: string;
}

const BlogPostHeader = ({ title, src, date }: BlogPostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head text-customPostBlog bg-portfolio'>
				<div className='block mx-auto md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile pt-mobileGapY'>
					<BlogPostCoverImage title={title} src={src} />
				</div>
				<BlogPostTitle>{title}</BlogPostTitle>
			</div>
			<div className=' max-w-cardGridMobile block mx-auto align-middle justify-center'>
				<div className=' text-customExcerptMobile text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
			</div>
			<hr className='border-fiveOBlack w-portfolioDividerWidth my-portfolioDivider pb-portfolioDivider mx-auto' />
		</Fragment>
	);
};

export default BlogPostHeader;
