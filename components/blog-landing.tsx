import BlogDate from 'components/blog-date';
import BlogTitle from 'components/blog-title';
import { Fragment } from 'react';

interface BlogLandingProps {
	title: string;
	slug: string;
	date: string;
}

const BlogLanding = ({ title, slug, date }: BlogLandingProps) => {
	return (
		<Fragment>
			<BlogTitle title={title} slug={slug} />
			<BlogDate date={date} />
		</Fragment>
	);
};

export default BlogLanding;