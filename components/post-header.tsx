import PostIcons from 'components/post-icons';
import Date from 'components/date-formatter';
import CoverImage from 'components/cover-image-sub-page';
import PostTitle from 'components/post-title';
import PostArticleExcerpt from 'components/post-article-excerpt';
import { Fragment } from 'react';
import Author from 'types/author';

interface PostHeaderProps {
	title: string;
	articleExcerpt: string;
	src: string;
	author: Author;
	date: string;
}

const PostHeader = ({ author, date, src, title, articleExcerpt }: PostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head text-customAboutTitle bg-portfolio select-none'>
				<div className='block mx-auto md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile pt-mobileGapY'>
					<CoverImage title={title} src={src} />
				</div>
				<PostTitle>{title}</PostTitle>
			</div>
			<div className=' max-w-cardGridMobile block mx-auto align-middle justify-center select-none'>
			<div className='text-customExcerpt text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
					<PostArticleExcerpt articleExcerpt={articleExcerpt} />
				</div>
				<div className='text-customExcerptMobile text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
				<div className='text-customExcerptMobile text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
					<PostIcons
						antdesign={author.antdesign}
						apollo={author.apollo}
						auth0={author.auth0}
						graphql={author.graphql}
						next={author.next}
						react={author.react}
						tailwindcss={author.tailwindcss}
						typescript={author.typescript}
						wordpress={author.wordpress}
					/>
				</div>
			</div>
			<hr className='border-fiveOBlack w-portfolioDividerWidth max-w-portfolioDividerWidth my-portfolioDivider pb-portfolioDivider mx-auto' />
		</Fragment>
	);
};

export default PostHeader;
