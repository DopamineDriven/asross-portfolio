import useDarkMode, { DarkMode } from 'use-dark-mode';

const LeadDarkModeToggle = () => {
	const darkMode: DarkMode = useDarkMode(false);

	return (
		<div className=''>
			<button
				type='button'
				onClick={darkMode.disable}
				className='text-black dark:text-white'
			>
				☀
			</button>
		</div>
	);
};

export default LeadDarkModeToggle;

// https://github.com/donavon/use-dark-mode/blob/develop/types/index.d.ts
