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
						className='items-center justify-center inline-block leading-normal text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform rounded-full text-primary mx-mxSocial pt-portfolioDivider pr-portfolioDivider focus:outline-none'
					>
						<FontAwesomeIcon
							icon={constituent.icon}
							className='flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform hover:text-tertiary pr-half '
							size='2x'
						/>
					</a>
				)}
			</>
		);
	});
	const anchorClass: string =' leading-normal px-portfolio transition-all duration-2000 delay-300 translate-y-mdmxSocial transform animate-hero duration-1000 ease-in-out md:text-customTitle text-customTitleMobile inline-block text-center items-center align-middle justify-center rounded-full focus:outline-none';
	const iconClass: string =
		' flex align-middle md:text-customTitle text-customTitleMobile text-center font-extrabold hover:text-tertiary transition-all transform delay-300 duration-1000 ease-in-out fa-portfolioDivider';
	return (
		<div className='inline-block text-right align-middle justify-right'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{github === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`github landing page - ${github}`}
							target='__blank'
							href={github}
							className={anchorClass}
						>
							<FontAwesomeIcon
								icon={faGithub}
								className={iconClass}
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
							className={anchorClass}
						>
							<FontAwesomeIcon
								icon={faTwitter}
								className={iconClass}
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
							className={anchorClass}
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className={iconClass}
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
							className={anchorClass}
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className={iconClass}
							/>
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default AboutPostSourceIcons;
