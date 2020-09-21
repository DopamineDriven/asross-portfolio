import SvgDarkModeShape from 'types/dark-toggle';
import { MouseEvent, FC } from 'react';
// import { strokeLinecapEnum } from '../types/dark-toggle';

interface SvgDarkModeDefined extends SvgDarkModeShape {
	onClick?:
		| ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| undefined;
}

export const SunIcon: FC<SvgDarkModeDefined> = (props): JSX.Element => {
	const {
		height = '24',
		width = '24',
		rotateCenter = 0,
		fillColor = [],
		strokeColor = [],
		classNames = [],
		strokeWidths = [],
		styles = [],
		strokeLinecaps = [],
		strokeLinejoins = []
	} = props;
	const [fillColor1 = 'none', fillColor2 = ' white'] = fillColor;
	const [strokeColor1 = 'currentColor'] = strokeColor;
	const [
		className1 = ` stroke-current ${strokeColor} antialiased fill-current`,
		className2 = ` stroke-current fill-current text-primary`,
		className3 = ` fill-current text-quaternary stroke-current`
	] = classNames;
	const [] = styles;
	const [strokeWidth1 = '2.0'] = strokeWidths;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill={fillColor1}
			stroke={strokeColor1}
			strokeWidth={strokeWidth1}
			strokeLinecap='round'
      strokeLinejoin='round'
      style={{ transform: "rotate(40deg)" }}
			// className={className1}
		>
			<mask id='mask'>
				<rect
					x='0'
					y='0'
					width='100%'
					height='100%'
					fill='white'
				/>
				<circle fill='black' cx='12' cy='4' r='9' />
			</mask>
			<circle
				fill='black'
				cx='12'
				cy='12'
				r='9'
				// className={className3}
				mask='url(#mask)'
			/>
			{/* <g stroke={strokeColor1} className={className2}>
				<line x1='12' y1='1' x2='12' y2='3' />
				<line x1='12' y1='21' x2='12' y2='23' />
				<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
				<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
				<line x1='1' y1='12' x2='3' y2='12' />
				<line x1='21' y1='12' x2='23' y2='12' />
				<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
				<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
			</g> */}
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
