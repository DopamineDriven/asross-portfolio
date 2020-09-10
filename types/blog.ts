import Author from 'types/author';

interface Blog {
	slug: string;
	title: string;
	postTitle: string;
	date: string;
	coverImage: string;
	articleImage: string;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export default Blog;
