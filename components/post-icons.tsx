import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import {
	faAntDesignIcon,
	faApolloIcon,
	faAuth0Icon,
	faGraphQLIcon,
	faNextIcon,
	faTailwindIcon,
	faTypeScriptIcon
} from 'lib/fas-custom-integration';
interface MappingProps {
	href: string;
	name: string;
	icon: IconProp;
}

const iconLinks: MappingProps[] = [
	{
		href: 'https://ant.design/',
		name: 'antdesign',
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

type CardIconProps = {
	antdesign: string;
	apollo: string;
	auth0: string;
	graphql: string;
	next: string;
	react: string;
	tailwindcss: string;
	typescript: string;
	wordpress: string;
};

// const CardIconsMapped = () => {
// 	const cardIconsMapped = iconLinks.map(link =>
// 		{link.name === '' ? (
// 			<></>
// 		) : (
// 			<a
// 				aria-label='apollo'
// 				target='__blank'
// 				href={link.href}
// 				className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
// 			>
// 				{link.name === '' ? (
// 					<></>
// 				) : (
// 					<FontAwesomeIcon
// 						icon={link.icon}
// 						className='flex align-middle text-center font-extrabold text-1xl pr-half'
// 						size='2x'
// 					/>
// 				)}
// 			</a>
// 		)}
// 	)
// 	}

const PostIcons = ({
	antdesign,
	apollo,
	auth0,
	graphql,
	next,
	react,
	tailwindcss,
	typescript,
	wordpress
}: CardIconProps) => {
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{' '}
					{antdesign === '' ? (
						<></>
					) : (
						<a
							aria-label={antdesign}
							target='__blank'
							href='https://ant.design/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							{antdesign === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faAntDesignIcon}
									className='flex align-middle text-center font-extrabold text-1xl pr-half'
									size='1x'
								/>
							)}
						</a>
					)}{' '}
					{apollo === '' ? (
						<></>
					) : (
						<a
							aria-label='apollo'
							target='__blank'
							href='https://www.apollographql.com/docs/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							{apollo === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faApolloIcon}
									className='flex align-middle text-center font-extrabold text-1xl pr-half'
									size='2x'
								/>
							)}
						</a>
					)}{' '}
					{auth0 === '' ? (
						<></>
					) : (
						<a
							aria-label='auth0'
							target='__blank'
							href='https://auth0.com/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{auth0 === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faAuth0Icon}
									className='flex align-middle text-center font-extrabold text-1xl pb-1'
									size='lg'
								/>
							)}
						</a>
					)}{' '}
					{graphql === '' ? (
						<></>
					) : (
						<a
							aria-label='graphql'
							target='__blank'
							href='https://www.graphql.com/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-threeHalves rounded-full focus:outline-none'
						>
							{graphql === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faGraphQLIcon}
									className='flex align-middle text-center font-extrabold text-1xl'
									size='2x'
								/>
							)}
						</a>
					)}{' '}
					{next === '' ? (
						<></>
					) : (
						<a
							aria-label='next'
							target='__blank'
							href='https://nextjs.org/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{next === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faNextIcon}
									className='flex align-middle text-center font-extrabold text-1xl'
								/>
							)}
						</a>
					)}{' '}
					{react === '' ? (
						<></>
					) : (
						<a
							aria-label='react'
							target='__blank'
							href='https://reactjs.org/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{react === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faReact}
									className='flex align-middle text-center font-extrabold text-1xl'
									size='lg'
								/>
							)}
						</a>
					)}{' '}
					{tailwindcss === '' ? (
						<></>
					) : (
						<a
							aria-label='tailwindcss'
							target='__blank'
							href='https://tailwindcss.com/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{tailwindcss === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTailwindIcon}
									className='flex align-middle text-center font-extrabold py-1'
								/>
							)}
						</a>
					)}{' '}
					{typescript === '' ? (
						<></>
					) : (
						<a
							aria-label='typescript'
							target='__blank'
							href='https://www.typescriptlang.org/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{typescript === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTypeScriptIcon}
									className='flex align-middle text-center font-extrabold text-1xl pb-half'
									size='sm'
								/>
							)}
						</a>
					)}{' '}
					{wordpress === '' ? (
						<></>
					) : (
						<a
							aria-label='wordpress'
							target='__blank'
							href='https://wpengine.com/resources/headless-cms-and-wordpress/'
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{wordpress === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faWordpress}
									className='flex align-middle text-center font-extrabold text-1xl pb-half'
								/>
							)}
						</a>
					)}{' '}
				</li>
			</ul>
		</div>
	);
};

export default PostIcons;

// CUSTOM ICONS https://medium.com/@nsisodiya/hacking-font-awesome-for-custom-svg-icons-ea762118fa7b

/*
// import {
// 	faGithub,
// 	faLinkedin,
// 	faDev,
// 	faMedium,
// 	faTwitter,
// 	faReact,
// 	faJava,
// 	faPython,
// 	faAngular,
// 	faGit,
// 	faNode,
// 	faWordpress,
// 	faStripe,
// 	faGoogle,
// 	faAdobe,
// 	faFigma,
// 	faYarn,
// 	faNpm,
// 	faUnsplash
// } from '@fortawesome/free-brands-svg-icons';

// import { HerokuIcon } from './svg-icons';


{' '}
					{apollo === '' ? (
						<></>
					) : (
						<a
							aria-label='react'
							target='__blank'
							href=''
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{apollo === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faApolloIcon}
									className='flex align-middle text-center font-extrabold text-1xl pb-1'
									size='lg'
								/>
							)}
						</a>
					)}{' '}
*/
