interface AboutImageProps {
	src: string;
	title: string;
}

const AboutImage = ({
	src = 'https://res.cloudinary.com/asross311/image/upload/v1598947180/portfolio/IMG_3824_1_8_egnkfs.jpg',
	title = 'Andrew Ross'
}: AboutImageProps) => {
	return (
		<div className='mx-auto max-w-aboutImage500 overflow-y-hidden overflow-x-hidden bg-portfolio block'>
			<a aria-label={title}>
				<img
					src={src}
					alt={title}
					className=' w-aboutImage500 max-w-aboutImage500 h-full max-h-full z-2 '
				/>
			</a>
		</div>
	);
};

export default AboutImage;
