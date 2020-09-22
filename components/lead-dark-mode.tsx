import useDarkMode, { DarkMode } from 'use-dark-mode';
import Toggle from 'components/lead-toggle';
import useClient from 'lib/isClient';
import DarkModeSwitch from 'components/lead-dark-icons';
import { useState, Fragment } from 'react';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();
	const [isDarkMode, setDarkMode] = useState(false);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
	};

	const Dark = () => {
		return darkMode.value === true ? (
			<DarkModeSwitch
				onChange={toggleDarkMode}
				checked={true}
				className='fill-primary text-primary stroke-current outline-none duration-1000 transition-all transform rotate-290'
			/>
		) : (
			<DarkModeSwitch
				onChange={toggleDarkMode}
				checked={false}
				className='fill-current text-primary duration-1000 text-customTitle stroke-current -translate-y-portfolioDivider pt-mdmxSocial transition-all transform outline-none rotate-855'
				sunColor=''
			/>
		);
	};

	const Conditional = (): JSX.Element => {
		return isClient ? (
			<div className='block outline-none transition-all transform container pr-portfolio justify-between mx-auto w-full min-w-full duration-1000 translate-y-portfolioLS'>
				<button
					type='button'
					onClick={darkMode.value === true ? darkMode.disable : darkMode.enable}
					className=' fill-primary text-primary stroke-current outline-none'
				>
					<Fragment>
						<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
						<div className='transition-all transform -translate-y-portfolio'>
							
							<Dark />
						</div>
					</Fragment>
					<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
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
