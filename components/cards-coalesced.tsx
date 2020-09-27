import Card from 'components/card';
import Post from 'types/post';

interface CardsProps {
	posts: Post[];
}

const Cards = ({ posts }: CardsProps): JSX.Element => {
	return (
		<section>
			<div className='grid grid-cols-1 text-center align-middle select-none sm:grid-cols-1 md:grid-cols-2 gap-x-gapX gap-y-mobileGapY md:gap-y-mobileGapY md:gap-x-gapX'>
				{posts.map(post => (
					<Card
						key={post.slug}
						title={post.title}
						src={post.coverImage}
						date={post.date}
						slug={post.slug}
						excerpt={post.excerpt}
						postTitle={post.postTitle}
					/>
				))}
			</div>
		</section>
	);
};

export default Cards;
