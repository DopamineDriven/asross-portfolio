import Card from 'components/card';
import Post from 'types/post';

interface CardsProps {
	posts: Post[];
}

const Cards = ({ posts }: CardsProps) => {
	return (
		<section>
			<div className='select-none grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-gapX gap-y-mobileGapY md:gap-y-mobileGapY md:gap-x-gapX align-middle text-center'>
				{posts.map(post => (
					<Card
						key={post.slug}
						title={post.title}
						src={post.coverImage}
						date={post.date}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
};

export default Cards;
