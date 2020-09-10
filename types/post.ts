import Author from 'types/author';

interface PostType {
	slug: string;
	title: string;
	postTitle: string;
	date: string;
	coverImage: string;
	articleImage: string;
	author: Author;
	excerpt: string;
	articleExcerpt: string;
	github: string;
	heroku: string;
	vercel: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export default PostType;
