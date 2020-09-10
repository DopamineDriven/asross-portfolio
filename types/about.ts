import AboutSocial from 'types/social/about-social';

export default interface About extends AboutSocial {
	slug: string;
	title: string;
  coverImage: string;
  articleImage: string;
	excerpt: string;
	date: string;
	ogImage: {
		url: string;
	};
	content: string;
}
