import PostIcons from 'components/post-icons';
import Date from 'components/date-formatter';
import CoverImage from 'components/cover-image-sub-page';
import PostTitle from 'components/post-title';
import Author from 'types/author';

interface PostHeaderProps {
  title: string;
	coverImage: string;
	author: Author;
	date: string;
}

const PostHeader = ({ author, coverImage, date, title }: PostHeaderProps) => {

}


export default PostHeader;