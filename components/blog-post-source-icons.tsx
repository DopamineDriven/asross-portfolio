import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDev,
	faMedium,
	faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { FC } from 'react';
// import ReactMarkdown from 'react-markdown/with-html';

interface Social {
	dev: string;
	medium: string;
	youtube: string;
}

// enum SocialEnum {
// 	dev = '',
// 	medium = '',
// 	youtube = ''
// }

// interface SocialExpList {
// 	social: Array<Social>;
// 	id: Array<number>;
// }
// interface BlogPostSourceIconMeta {
// 	icon: IconProp;
// 	social?: string;
// 	name: SocialEnum;
// }

// interface BlogSocials {
// 	github: string;
// }

// const IconMapping: BlogPostSourceIconMeta[] = [
// 	{
// 		icon: faDev,
// 		social: String(),
// 		name: SocialEnum.dev
// 	},
// 	{
// 		icon: faMedium,
// 		social: String(),
// 		name: SocialEnum.medium
// 	},
// 	{
// 		icon: faYoutube,
// 		social: String(),
// 		name: SocialEnum.youtube
// 	}
// ];
const BlogPostSourceIcons = ({ dev, medium, youtube }: Social) => {
	// const BlogPostSourceIcons: FC<SocialExpList> = props => {
	// const { social } = props;
	// const socialExperimentalMapped = social.map(constituent => {
	//   return <ReactMarkdown key={constituent.dev}

	//   />;
	// });
	// const iconsMapped = IconMapping.map(constituent => {
	// 	return (
	// 		<li className='align-middle' key={constituent.social}>
	// 			{' '}
	// 			{constituent.social === 'empty' ? (
	// 				<div className='hidden'></div>
	// 			) : (
	// 				<a
	// 					aria-label={`${constituent.social}`}
	// 					target='__blank'
	// 					href={constituent.social}
	// 					className='bg-portfolio text-primary leading-normal transition-all transform delay-300 duration-1000 ease-in-out text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mr-portfolio my-2 pt-threeHalves rounded-full focus:outline-none'
	// 				>
	// 					<FontAwesomeIcon
	// 						icon={constituent.icon}
	// 						className='flex align-middle text-center font-extrabold hover:text-fiveOBlack pr-half  transition-all transform delay-300 duration-1000 ease-in-out '
	// 						size='2x'
	// 					/>
	// 				</a>
	// 			)}{' '}
	// 		</li>
	// 	);
	// });
	const anchorClass: string =
		' text-primary text-customTitle text-primary leading-normal px-portfolio transition-all duration-2000 delay-300 translate-y-mdmxSocial transform animate-hero duration-1000 ease-in-out md:text-customTitle text-customTitleMobile inline-block text-center items-center align-middle justify-center rounded-full focus:outline-none';
	const iconClass: string =
		' flex align-middle md:text-customTitle text-customTitleMobile text-center font-extrabold hover:text-tertiary transition-all transform delay-300 duration-1000 ease-in-out fa-portfolioDivider';
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{dev === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`${dev}`}
							target='__blank'
							href={dev}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faDev} className={iconClass} size='2x' />
						</a>
					)}
					{medium === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`${medium}`}
							target='__blank'
							href={medium}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faMedium} className={iconClass} />
						</a>
					)}
					{youtube === 'empty' ? (
						<div className='hidden'></div>
					) : (
						<a
							aria-label={`${youtube}`}
							target='__blank'
							href={youtube}
							className={anchorClass}
						>
							<FontAwesomeIcon icon={faYoutubeSquare} className={iconClass} />
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default BlogPostSourceIcons;
