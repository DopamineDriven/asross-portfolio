import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faDev,
	faMedium,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faHerokuIcon, faVercelIcon } from 'lib/fas-custom-integration';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface BlogPostSourceIconMeta {
	icon: IconProp;
	social?: string;
}

interface BlogSocials {
	github: string;
}

const IconMapping: BlogPostSourceIconMeta[] = [
	{
		icon: faDev,
		social: 'dev'
	},
	{
		icon: faMedium,
		social: 'medium'
	},
	{
		icon: faYoutube,
		social: 'youtube'
	}
];

interface PostSourceIconProps {
	github: string;
	heroku: string;
	vercel: string;
}

const BlogPostSourceIcons = ({
	github,
	heroku,
	vercel
}: PostSourceIconProps) => {
	const iconsMapped = IconMapping.map(constituent => {
		return (
			<li className='align-middle' key={constituent.social}>
				{' '}
				{constituent.social === 'empty' ? (
					<div className='hidden'></div>
				) : (
					<a
						aria-label={`${constituent.social}`}
						target='__blank'
						href={constituent.social}
						className='bg-portfolio text-black leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mr-portfolio my-2 pt-threeHalves rounded-full focus:outline-none'
					>
						{constituent.social === 'empty' ? (
							<></>
						) : (
							<FontAwesomeIcon
								icon={constituent.icon}
								className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
								size='2x'
							/>
						)}
					</a>
				)}{' '}
			</li>
		);
	});
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>{iconsMapped}</ul>
		</div>
	);
};

export default BlogPostSourceIcons;
