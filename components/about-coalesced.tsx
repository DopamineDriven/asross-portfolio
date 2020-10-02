import About from 'types/about';
import AboutContent from 'components/about-landing';

interface AboutCoalescedProps {
	abouts: About[];
}

const AboutCoalesced = ({ abouts }: AboutCoalescedProps): JSX.Element => {
	return (
		<section>
			<div className='grid grid-cols-1 select-none'>
				{abouts.map(about => (
					<AboutContent
						key={about.slug}
						title={about.title}
						excerpt={about.excerpt}
						src={about.coverImage}
						date={about.date}
						slug={about.slug}
						urlTitle={about.urlTitle}
					/>
				))}
			</div>
		</section>
	);
};

export default AboutCoalesced;
