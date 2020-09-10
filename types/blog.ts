import BlogSocial from 'types/social/blog-social';

export default interface Blog {
	slug: string;
	title: string;
	postTitle: string;
	date: string;
	coverImage: string;
	articleImage: string;
	excerpt: string;
	social: BlogSocial;
	ogImage: {
		url: string;
	};
	content: string;
}
