import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faHerokuIcon, faVercelIcon } from 'lib/fas-custom-integration';

interface PostSourceIconProps {
	gitlab: string;
	github: string;
	heroku: string;
	vercel: string;
}

const PostSourceIcons = ({
	github,
	gitlab,
	heroku,
	vercel
}: PostSourceIconProps) => {
	const anchorClass: string =
		' text-primary text-customTitle leading-normal px-portfolio transition-all duration-2000 delay-300 translate-y-mdmxSocial transform animate-hero duration-1000 ease-in-out md:text-customTitle inline-block text-center items-center align-middle justify-center mx-auto rounded-full focus:outline-none';
	const iconClass: string =
		' flex align-middle md:text-customTitle text-customTitleMobile text-center font-extrabold hover:text-tertiary transition-all transform delay-300 duration-1000 ease-in-out fa-portfolioDivider';
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{github === '' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`source code - ${github}`}
							target='__blank'
							href={github}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faGithub} className={iconClass} size='3x' />
						</a>
					)}
					{gitlab === '' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`source code - ${gitlab}`}
							target='__blank'
							href={gitlab}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faGitlab} className={iconClass} size='3x' />
						</a>
					)}
					{heroku === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`deployed site - ${heroku}`}
							target='__blank'
							href={heroku}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faHerokuIcon} className={iconClass} size='1x' />
						</a>
					)}
					{vercel === 'empty' ? (
						<></>
					) : (
						<a
							aria-label={`deployed site - ${vercel}`}
							target='__blank'
							href={vercel}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faVercelIcon} className={iconClass} />
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default PostSourceIcons;
