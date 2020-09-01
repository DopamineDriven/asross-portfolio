import AboutImage from 'components/about-image';
import AboutContent from 'components/about-content';

interface AboutProps {
	src: string;
	title: string;
}

const About = ({ src, title }: AboutProps) => {
	return (
		<section>
			<div className='grid grid-cols-1 gap-x-8 gap-y-mobileGapY md:gap-y-26 md:gap-x-gapX align-middle text-left'>
				<AboutImage src={src} title={title} />
				<AboutContent src={src} title={title} />
			</div>
		</section>
	);
};

export default About;