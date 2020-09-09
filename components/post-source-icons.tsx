import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faGithub,
	faReact,
	faWordpress
} from '@fortawesome/free-brands-svg-icons';
import {
	faAntDesignIcon,
	faApolloIcon,
	faAuth0Icon,
	faGraphQLIcon,
	faHerokuIcon,
	faNextIcon,
	faTailwindIcon,
	faTypeScriptIcon,
	faVercelIcon
} from 'lib/fas-custom-integration';
interface MappingProps {
	href: string;
	name: string;
	icon: IconProp;
}

const iconLinks: MappingProps[] = [
	{
		href: '',
		name: 'vercel',
		icon: faAntDesignIcon
	},
	{
		href: 'https://www.apollographql.com/docs/',
		name: 'apollo',
		icon: faApolloIcon
	},
	{
		href: 'https://auth0.com/',
		name: 'auth0',
		icon: faAuth0Icon
	},
	{
		href: 'https://www.graphql.com/',
		name: 'graphql',
		icon: faGraphQLIcon
	},
	{
		href: 'https://nextjs.org/',
		name: 'next',
		icon: faNextIcon
	},
	{
		href: 'https://tailwindcss.com/',
		name: 'tailwind',
		icon: faTailwindIcon
	},
	{
		href: 'https://www.typescriptlang.org/',
		name: 'typescript',
		icon: faTypeScriptIcon
	},
	{
		href: 'https://wpengine.com/resources/headless-cms-and-wordpress/',
		name: 'wordpress',
		icon: faWordpress
	}
];

interface PostSourceIconFAProps {
	icon: IconProp;
}

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
							className='bg-portfolio text-black leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mr-portfolio my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							{github === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faGithub}
									className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
									size='2x'
								/>
							)}
						</a>
					)}{' '}
					{heroku === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`deployed site - ${heroku}`}
							target='__blank'
							href={heroku}
							className='bg-portfolio text-black leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							{heroku === 'empty' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faHerokuIcon}
									className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
									size='2x'
								/>
							)}
						</a>
					)}{' '}
					{vercel === '' ? (
						<></>
					) : (
						<a
							aria-label={`deployed site - ${vercel}`}
							target='__blank'
							href={vercel}
							className='bg-portfolio text-black leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							{vercel === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faVercelIcon}
									className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
									size='2x'
								/>
							)}
						</a>
					)}{' '}
				</li>
			</ul>
		</div>
	);
};

export default PostSourceIcons;
