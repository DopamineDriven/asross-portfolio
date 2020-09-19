import { useContext, createContext, ReactNode, useState } from 'react';

export enum ThemeInitProps {
	dark = 'dark',
	light = 'light'
}

export interface ColorTheme {
	colorTheme: string;
}

const getThemeInit = ({ colorTheme = 'color-theme' }: ColorTheme) => {
	const { dark, light } = ThemeInitProps;
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPreferences = window.localStorage.getItem(colorTheme);
		if (typeof storedPreferences === 'string') return storedPreferences;

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
		const hasMediaQueryPreference = typeof userMedia.matches === 'boolean';
		if (hasMediaQueryPreference) {
			return userMedia.matches ? dark : light;
		}
	}
	// light === default
	return dark;
};

export default getThemeInit;

// export interface ThemeProviderProps {
// 	children?: ReactNode;
// 	getThemeInit: ColorTheme;
// }

// export const ThemeContext = createContext(getThemeInit);
// export const ThemeProvider = ({
// 	getThemeInit,
// 	children
// }: ThemeProviderProps) => {
// 	const { dark, light } = ThemeInitProps;
// 	const [theme, setTheme] = useState(getThemeInit);
// 	const rawSetTheme = () => {
// 		const root = window.document.documentElement;
		
// 	}
// };

// https://jeffjadulco.com/blog/dark-mode-react-tailwind/
// https://github.com/jeffjadulco/dark-mode-react-tailwind/blob/master/src/css/index.css
// https://joshwcomeau.com/gatsby/dark-mode/
// https://github.com/donavon/use-dark-mode
