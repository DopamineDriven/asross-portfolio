import useDarkMode, { DarkMode } from 'use-dark-mode';
import Toggle from 'components/lead-toggle';
import useClient from 'lib/isClient';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();

	const Conditional = () => {
		return isClient ? (
			<div className=''>
				<button
					type='button'
					onClick={darkMode.disable}
					className='text-black dark:text-white bg-portfolio dark:bg-black'
				>
					☀
				</button>
				<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
				<button
					type='button'
					onClick={darkMode.enable}
					className='text-black dark:text-white bg-portfolio dark:bg-black'
				>
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
