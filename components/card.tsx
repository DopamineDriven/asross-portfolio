import CoverImageCard from 'components/cover-image-card';
import Link from 'next/link';
import Author from 'types/author';

interface CardProps {
	author: Author;
	date: string;
	excerpt: string;
	slug: string;
	src: string;
	title: string;
}

const Card = ({ author, date, excerpt, slug, src, title }: CardProps) => {
  return (
    <div className="font-somaRoman">
      <div className="max-w-82 ">

      </div>
    </div>
  )
};

export default Card;
