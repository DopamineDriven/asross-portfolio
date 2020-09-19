import { ChangeEvent } from 'react';

export interface ToggleProps {
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LeadToggle = ({ checked, onChange }: ToggleProps) => {
	return (
		<span>
			<input type='checkbox' checked={checked} onChange={onChange} className='' />
			<label htmlFor='dark-mode-check' />
		</span>
	);
};

export default LeadToggle;

// https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c
