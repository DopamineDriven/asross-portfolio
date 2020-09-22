import useDarkMode, { DarkMode } from 'use-dark-mode';
import Toggle from 'components/lead-toggle';
import useClient from 'lib/isClient';
import DarkModeSwitch from 'components/lead-dark-icons';
import { useState, Fragment } from 'react';
import { Media } from 'components/window-width';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();
	const [isDarkMode, setDarkMode] = useState(false);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
	};

	const DarkMobile = () => {
		return darkMode.value === true ? (
			<Media lessThan='md'>
				<DarkModeSwitch
					onChange={toggleDarkMode}
					checked={true}
					className='fill-primary text-primary stroke-current outline-none transform transition-colors rotate-290'
					width='9vw'
					height='9vw'
				/>
			</Media>
		) : (
			<Media lessThan='md'>
				<DarkModeSwitch
					onChange={toggleDarkMode}
					checked={false}
					className='fill-current text-primary text-customTitle stroke-current transition-colors transform outline-none rotate-855'
					width='9vw'
					height='9vw'
				/>
			</Media>
		);
	};

	const DarkDesktop = () => {
		return darkMode.value === true ? (
			<Media greaterThanOrEqual='md'>
				<DarkModeSwitch
					onChange={toggleDarkMode}
					checked={true}
					className='fill-primary text-primary stroke-current outline-none transform transition-colors rotate-290'
					width='6.5vw'
					height='6.5vw'
				/>
			</Media>
		) : (
			<Media greaterThanOrEqual='md'>
				<DarkModeSwitch
					onChange={toggleDarkMode}
					checked={false}
					className='fill-current text-primary text-customTitle stroke-current transition-colors transform outline-none rotate-855'
					width='6.5vw'
					height='6.5vw'
				/>
			</Media>
		);
	};

	const Conditional = (): JSX.Element => {
		return isClient ? (
			<div className='block outline-none transition-all transform container pr-portfolio justify-between mx-auto w-full min-w-full translate-y-portfolioLS'>
				<button
					type='button'
					onClick={darkMode.value === true ? darkMode.disable : darkMode.enable}
					className=' fill-primary text-primary stroke-current outline-none'
				>
					<Fragment>
						<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
						<div className='align-top inline-block'>
							<DarkMobile />
							<DarkDesktop />
						</div>
					</Fragment>
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
