import useDarkMode, { DarkMode } from 'use-dark-mode';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode(true);

	return (
		<div className=''>
			<button
				type='button'
				onClick={darkMode.disable}
				className='text-black dark:text-white bg-portfolio dark:bg-white'
			>
				☀
			</button>
		</div>
	);
};

export default LeadDarkModeToggle;

// https://github.com/donavon/use-dark-mode/blob/develop/types/index.d.ts
