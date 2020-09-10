import BlogLanding from 'components/blog-landing';
import Blog from 'types/blog';

interface BlogCoalescedProps {
	blogs: Blog[];
}

const BlogCoalesced = ({ blogs }: BlogCoalescedProps) => {
	return (
		<section>
			<div className='select-none grid grid-cols-1 float-right pr-portfolioS pb-portfolioLS pl-paddingBlog'>
				{blogs.map(blog => (
					<BlogLanding
						key={blog.slug}
						title={blog.title}
						postTitle={blog.postTitle}
						date={blog.date}
						slug={blog.slug}
					/>
				))}
			</div>
		</section>
	);
};

export default BlogCoalesced;
