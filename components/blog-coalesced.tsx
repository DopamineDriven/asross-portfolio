import BlogTitle from 'components/blog-title';
import Blog from 'types/blog';

interface BlogCoalescedProps {
	blogs: Blog[];
}

const BlogCoalesced = ({ blogs }: BlogCoalescedProps) => {
	return (
		<section>
			<div
				className='select-none grid grid-cols-1'
			>
				{blogs.map(blog => (
					<BlogTitle key={blog.slug} title={blog.title} date={blog.date} />
				))}
			</div>
		</section>
	);
};

export default BlogCoalesced;
