import BlogLanding from 'components/blog-landing';
import Blog from 'types/blog';

interface BlogCoalescedProps {
	blogs: Blog[];
}

const BlogCoalesced = ({ blogs }: BlogCoalescedProps) => {
	return (
		<section>
			<div className='select-none grid grid-cols-1 float-left pl-paddingAboutTitleRight pb-paddingPostTitleTop pt-gapX'>
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
