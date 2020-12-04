import PostIcons from 'components/post-icons';
import PostSourceIcons from 'components/post-source-icons';
import Date from 'components/date-formatter';
import CoverImage from 'components/post-cover-image';
import PostTitle from 'components/post-title';
import PostArticleExcerpt from 'components/post-article-excerpt';
import PortfolioDivider from 'components/portfolio-divider';
import { Fragment } from 'react';
import Author from 'types/author';

interface PostHeaderProps {
	title: string;
	articleExcerpt: string;
	src: string;
	author: Author;
	date: string;
	github: string;
	heroku: string;
	vercel: string;
	gitlab: string;
}

const PostHeader = ({
	author,
	date,
	src,
	title,
	articleExcerpt,
	github,
	gitlab,
	heroku,
	vercel
}: PostHeaderProps) => {
	return (
		<Fragment>
			<div className='font-head  text-customSubPostTitleModified select-none'>
				<div className='block mx-auto overflow-hidden md:max-w-aboutImage600 md:w-aboutImage600 max-w-imagePortfolioMobile w-imagePortfolioMobile pt-portfolio'>
					<CoverImage title={title} src={src} />
				</div>
				<PostTitle>{title}</PostTitle>
			</div>
			<div className='pt-portfolioDivider max-w-cardGridMobile block mx-auto align-middle justify-center select-none'>
				<div className='text-customTitle text-primary font-somaRoman flex mx-auto align-middle justify-center'>
					<PostArticleExcerpt articleExcerpt={articleExcerpt} />
				</div>
				<div className='text-customTitle text-auxiliary font-somaRoman flex mx-auto align-middle justify-center'>
					<Date dateString={date} />
				</div>
				<div className=' text-primary font-somaRoman flex mx-auto align-middle justify-center pb-mdmxSocial'>
					<PostSourceIcons
						github={github}
						heroku={heroku}
						vercel={vercel}
						gitlab={gitlab}
					/>
				</div>
				{/* <div className='text-customExcerptMobile text-oneFiveBlack font-somaRoman flex mx-auto align-middle justify-center'>
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
				</div> */}
			</div>
			<PortfolioDivider />
		</Fragment>
	);
};

export default PostHeader;
