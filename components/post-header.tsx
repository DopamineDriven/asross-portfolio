import PostIcons from 'components/post-icons';
import Date from 'components/date-formatter';
import CoverImage from 'components/cover-image-sub-page';
import PostTitle from 'components/post-title';
import Author from 'types/author';

interface PostHeaderProps {
	title: string;
	src: string;
	author: Author;
	date: string;
}

const PostHeader = ({ author, date, src, title }: PostHeaderProps) => {
	return (
		<>
			<div className='font-head text-customTitleMobile'>
				<div className='block mx-auto max-w-imagePortfolioMobile rounded-lg bg-portfolio'>
					<CoverImage title={title} src={src} />
				</div>
				<PostTitle>{title}</PostTitle>
			</div>
			<div className=' max-w-cardGridMobile block mx-auto align-middle justify-center'>
				<div className='text-customExcerpt text-oneFiveBlack font-somaRoman block'>
					<Date dateString={date} />
				</div>
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
		</>
	);
};

export default PostHeader;
