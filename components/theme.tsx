import {
	createContext,
	ReactNode,
	useState,
	useEffect,
	Dispatch,
	SetStateAction
} from 'react';

export enum ThemeInitProps {
	dark = 'dark',
	light = 'light'
}

const getThemeInit = (): string => {
	const { dark, light } = ThemeInitProps;
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPreferences = window.localStorage.getItem('color-theme');
		if (typeof storedPreferences === 'string') return storedPreferences;

		const userMedia = window.matchMedia(`(prefers-color-scheme: ${dark})`);
		const hasMediaQueryPreference = typeof userMedia.matches === 'boolean';
		if (hasMediaQueryPreference) {
			return userMedia.matches ? dark : light;
		}
	}
	// light === default
	return dark;
};

export interface ThemeProviderProps {
	children?: ReactNode;
	initialTheme: string;
}

interface ContextProps {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext({} as ContextProps);

const ThemeProvider = (initialTheme: string, children: ReactNode) => {
	const { dark, light } = ThemeInitProps;
	const [theme, setTheme] = useState(getThemeInit);
	const rawSetTheme = (theme: string) => {
		const root = window.document.documentElement;
		const isDark = theme === dark;

		root.classList.remove(isDark ? light : dark);
		root.classList.add(theme);

		localStorage.setItem('color-theme', theme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);

	const value = { theme, setTheme };
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};
export default ThemeProvider;

// https://stackoverflow.com/questions/54577865/react-createcontext-issue-in-typescript
// https://jeffjadulco.com/blog/dark-mode-react-tailwind/
// https://github.com/jeffjadulco/dark-mode-react-tailwind/blob/master/src/css/index.css
// https://joshwcomeau.com/gatsby/dark-mode/
// https://github.com/donavon/use-dark-mode
