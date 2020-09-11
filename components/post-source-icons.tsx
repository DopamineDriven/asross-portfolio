import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHerokuIcon, faVercelIcon } from 'lib/fas-custom-integration';

interface PostSourceIconProps {
	github: string;
	heroku: string;
	vercel: string;
}

const PostSourceIcons = ({ github, heroku, vercel }: PostSourceIconProps) => {
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{' '}
					{github === '' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`source code - ${github}`}
							target='__blank'
							href={github}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mr-portfolio my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faGithub}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}{' '}
					{heroku === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`deployed site - ${heroku}`}
							target='__blank'
							href={heroku}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faHerokuIcon}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}{' '}
					{vercel === 'empty' ? (
						<></>
					) : (
						<a
							aria-label={`deployed site - ${vercel}`}
							target='__blank'
							href={vercel}
							className='bg-portfolio text-oneFiveBlack leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							<FontAwesomeIcon
								icon={faVercelIcon}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						</a>
					)}{' '}
				</li>
			</ul>
		</div>
	);
};

export default PostSourceIcons;
