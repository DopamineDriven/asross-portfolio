interface BlogDateProps {
	date: string;
}

const BlogDate = ({ date }: BlogDateProps) => {
	return <div className='hidden'>{date}</div>;
};

export default BlogDate;
