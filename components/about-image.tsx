interface AboutImageProps {
	src: string;
	title: string;
}

const AboutImage = ({
	src = 'https://res.cloudinary.com/asross311/image/upload/v1598934085/portfolio/IMG_3824_1_2_dehodw.jpg',
	title = 'Andrew Ross'
}: AboutImageProps) => {
	return (
		<div className=' pt-aboutOffsetY mx-auto max-w-imagePortfolioMobile md:max-w-aboutImage600 rounded-lg overflow-y-hidden bg-portfolio block'>
			<a aria-label={title}>
				<img
					src={src}
					alt={title}
					className='w-imagePortfolioMobile max-w-imagePortfolioMobile md:w-aboutImage600 md:max-w-aboutImage:600 h-auto max-h-full md:h-auto rounded-full'
				/>
			</a>
		</div>
	);
};

export default AboutImage;
