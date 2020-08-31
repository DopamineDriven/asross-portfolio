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
			<div className='max-w-screen font-head text-customTitleMobile'>
				<div className='block mx-auto'>
					<CoverImage title={title} src={src} />
				</div>
				<PostTitle>{title}</PostTitle>
      </div>
      <div className=" max-w-cardGridMobile block mx-auto align-middle justify-center "></div>
		</>
	);
};

export default PostHeader;
