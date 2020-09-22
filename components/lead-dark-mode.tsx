import useDarkMode, { DarkMode } from 'use-dark-mode';
import Toggle from 'components/lead-toggle';
import useClient from 'lib/isClient';
// import DarkModeSwitch from 'components/lead-dark-icons';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();

	const Conditional = (): JSX.Element => {
		return isClient ? (
			<div className='block transition-all transform container pr-portfolio justify-between mx-auto w-full min-w-full duration-1000 translate-y-portfolioLS'>
				<button
					type='button'
					onClick={darkMode.value === true ? darkMode.disable : darkMode.enable}
					className=' fill-primary text-primary stroke-current'
					style={{ transition: '0.2s background' }}
				>
					☾
					{/* <Fragment>
						<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
						<DarkModeSwitch style1={{ marginBottom: '2rem' }} />
						<DarkModeSwitch />
					</Fragment> */}
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
