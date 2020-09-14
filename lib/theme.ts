export enum ThemeInitProps {
	dark = 'dark',
	light = 'light'
}

export interface ColorTheme {
	colorTheme: string;
}

const getThemeInit = ({ colorTheme= 'color-theme' }: ColorTheme) => {
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
	return light;
};

export default getThemeInit;

// https://jeffjadulco.com/blog/dark-mode-react-tailwind/
// https://github.com/jeffjadulco/dark-mode-react-tailwind/blob/master/src/css/index.css
// https://joshwcomeau.com/gatsby/dark-mode/
// https://github.com/donavon/use-dark-mode
