export type strokeLinecapTypes= 'round' | 'inhert' | 'butt' | 'square';

export enum strokeLinecapEnum {
  round = 'round',
  butt = 'butt',
  square = 'square',
  inherit = 'inherit'
}
export default interface SvgDarkModeShape {
	strokeColor?: string[];
	strokeWidths?: string[];
	strokeFill?: string[];
	fillColor?: string[];
	imageWidth?: string;
	imageHeight?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
	classNames?: string[];
  styles?: string[];
  strokeLinecaps?: strokeLinecapTypes[];
  strokeLinejoins?: string[];
  cx?: string;
  cy?: string;
  r?: string;
}
