import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface AboutPostSourceIconProps {
	email: string;
	github: string;
	linkedin: string;
	twitter: string;
}

const AboutPostSourceIcons = ({
	email,
	github,
	linkedin,
	twitter
}: AboutPostSourceIconProps) => {
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{github === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`github landing page - ${github}`}
							target='__blank'
							href={github}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faGithub}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}
					{twitter === 'empty' ? (
						<></>
					) : (
						<a
							aria-label={`twitter @Dopamine_Driven - ${twitter}`}
							target='__blank'
							href={twitter}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial md:mr-mxSocial md:ml-0 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faTwitter}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}
					{linkedin === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`linkedin - ${linkedin}`}
							target='__blank'
							href={linkedin}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 pt-threeHalves mx-mxSocial md:mr-mxSocial md:ml-0 rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}
					{email === 'empty' ? (
						<></>
					) : (
						<a
							aria-label={`twitter @Dopamine_Driven - ${email}`}
							target='__blank'
							href={email}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial md:mx-0 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default AboutPostSourceIcons;
