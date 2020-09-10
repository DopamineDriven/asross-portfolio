import BlogLanding from 'components/blog-landing';
import Blog from 'types/blog';
import BlogSupraTitle from 'components/blog-supra-title';

interface BlogCoalescedProps {
	blogs: Blog[];
}

const BlogCoalesced = ({ blogs }: BlogCoalescedProps) => {
	return (
		<section>
			<BlogSupraTitle />
			<div className='select-none grid grid-cols-1 gap-y-portfolio float-right pr-portfolioS pb-portfolioPadding pt-paddingPostTitleTop'>
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
