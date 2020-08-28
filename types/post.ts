import Author from 'types/author';
import TechIcons from 'types/tech-icons';
interface PostType {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	author: Author;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export default PostType;
