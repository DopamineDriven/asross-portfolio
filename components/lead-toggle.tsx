import { ChangeEvent, useContext } from 'react';
import ThemeProvider, { ThemeContext } from './theme';

export interface ToggleProps {
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LeadToggle = ({ checked, onChange }: ToggleProps): JSX.Element => {
	return (
		<span>
			<input type='checkbox' checked={checked} onChange={onChange} className='' />
			<label htmlFor='dark-mode-check' />
		</span>
	);
};

export default LeadToggle;

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
}

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