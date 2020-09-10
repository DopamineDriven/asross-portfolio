import BlogDate from 'components/blog-date';
import BlogTitle from 'components/blog-title';
import { Fragment } from 'react';

interface BlogLandingProps {
  title: string;
  postTitle: string;
	slug: string;
	date: string;
}

const BlogLanding = ({ postTitle, title, slug, date }: BlogLandingProps) => {
	return (
		<Fragment>
			<BlogTitle title={title} slug={slug} postTitle={postTitle} />
			<BlogDate date={date} />
		</Fragment>
	);
};

export default BlogLanding;