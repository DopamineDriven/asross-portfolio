import useDarkMode, { DarkMode } from 'use-dark-mode';
import Toggle from 'components/lead-toggle';
import useClient from 'lib/isClient';
import { SunIcon } from 'components/lead-dark-icons';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();

	const Conditional = (): JSX.Element => {
		return isClient ? (
			<div className='block transition-all transform container pr-portfolio justify-between mx-auto w-full min-w-full translate-y-portfolioLS'>
				<button
					type='button'
					onClick={darkMode.disable}
					className=' fill-primary text-primary stroke-current'
				>
					<SunIcon />
				</button>
				<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
				&nbsp;
				<button type='button' onClick={darkMode.enable} className=''>
					☾
				</button>
			</div>
		) : (
			<span>...</span>
		);
	};

	return <Conditional />;
};

export default LeadDarkModeToggle;

// https://github.com/donavon/use-dark-mode/blob/develop/types/index.d.ts
