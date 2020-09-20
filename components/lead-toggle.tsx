import { ChangeEvent, useContext } from 'react';
import ThemeProvider, { ThemeContext, ThemeInitProps } from './theme';

export interface ToggleProps {
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LeadToggle = ({ checked, onChange }: ToggleProps): JSX.Element => {
	return (
		<span>
			<input
				type='button'
				checked={checked}
				onChange={onChange}
				className='dark:focus:text-primary'
			/>
			<label htmlFor='dark-mode-check' />
		</span>
	);
};

export default LeadToggle;

// export const Toggle = () => {
// 	const { dark, light } = ThemeInitProps;
// 	const { theme, setTheme } = useContext(ThemeContext);

// 	const isDark = () => {
// 		return theme === dark;
// 	};

// 	return (
// 		<label>
// 			<input
// 				type='checkbox'
// 				checked={isDark()}
// 				onChange={e => setTheme(e.target.checked ? dark : light)}
// 			/>
// 			Dark Mode
// 		</label>
// 	);
// };

// https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c

/*
export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isDark() {
    return theme === "dark"
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      Dark Mode
    </label>
  )
}
*/
