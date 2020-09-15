import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import AboutSocial from 'types/social/about-social';

// type AboutPostSourceIcons = 'email' | 'github' | 'linkedin' | 'twitter';
export enum AboutPostSourceIcon {
	email = 'email',
	github = 'github',
	linkedin = 'linkedin',
	twitter = 'twitter'
}

interface AboutIconMapping {
	social: AboutPostSourceIcon;
	icon: IconProp;
	href: string;
	target: string;
	id: number;
}

const { email, github, linkedin, twitter } = AboutPostSourceIcon;
const socialMapped: AboutIconMapping[] = [
	{
		social: email,
		icon: faEnvelope,
		href: email,
		target: '__blank',
		id: 0
	},
	{
		social: github,
		icon: faGithub,
		href: github,
		target: '__blank',
		id: 1
	},
	{
		social: linkedin,
		icon: faLinkedin,
		href: linkedin,
		target: '__blank',
		id: 2
	},
	{
		social: twitter,
		icon: faTwitter,
		href: twitter,
		target: '__blank',
		id: 3
	}
];

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
	const socialIs = socialMapped.map(constituent => {
		const ref = constituent.href;
		return (
			<>
				{ref === 'empty' ? (
					<div className='hidden' key={constituent.id}></div>
				) : (
					<a
						key={constituent.id}
						aria-label={`${constituent.social} - ${constituent.href}`}
						target={constituent.target}
						href={constituent.href}
						className='text-oneFiveBlack dark:text-white leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial pt-threeHalves rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={constituent.icon}
							className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half dark:hover:text-afWhite transition-all transform delay-300 duration-1000 ease-in-out '
							size='2x'
						/>
					</a>
				)}
			</>
		);
	});
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
							className='leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faGithub}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half dark:hover:text-afWhite transition-all transform delay-300 duration-1000 ease-in-out '
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
							className='leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial md:mr-mxSocial md:ml-0 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faTwitter}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half dark:hover:text-afWhite transition-all transform delay-300 duration-1000 ease-in-out '
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
							className='leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 pt-threeHalves mx-mxSocial md:mr-mxSocial md:ml-0 rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half dark:hover:text-afWhite transition-all transform delay-300 duration-1000 ease-in-out '
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
							className='leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-mxSocial md:mx-0 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half dark:hover:text-afWhite transition-all transform delay-300 duration-1000 ease-in-out '
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
