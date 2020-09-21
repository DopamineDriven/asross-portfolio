import SvgDarkModeShape from 'types/dark-toggle';
import { MouseEvent, FC } from 'react';

interface SvgDarkModeDefined extends SvgDarkModeShape {
	onClick?:
		| ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| undefined;
}

const sunIcon: FC<SvgDarkModeDefined> = (props): JSX.Element => {
	const {
		height = '24',
		width = '24',
		rotateCenter = 0,
		fillColor = [],
		strokeColor = [],
		classNames = [],
		styles = []
	} = props;
	const [fillColor1 = 'none', fillColor2 = '#000'] = fillColor;
	const [strokeColor1 = ''] = strokeColor;
	const [
		className1 = ` stroke-current ${strokeColor} antialiased fill-current`,
		className2 = ` stroke-current`,
		className3 = ` `
	] = classNames;
	const [] = styles;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-sun'
		>
			<circle cx='12' cy='12' r='5' />
			<line x1='12' y1='1' x2='12' y2='3' />
			<line x1='12' y1='21' x2='12' y2='23' />
			<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
			<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
			<line x1='1' y1='12' x2='3' y2='12' />
			<line x1='21' y1='12' x2='23' y2='12' />
			<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
			<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
		</svg>
	);
};

/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
    <circle cx="12" cy="12" r="5" />circle>
    <line x1="12" y1="1" x2="12" y2="3" />line>
    <line x1="12" y1="21" x2="12" y2="23" />line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />line>
    <line x1="1" y1="12" x2="3" y2="12" />line>
    <line x1="21" y1="12" x2="23" y2="12" />line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />line>
</svg>
*/
