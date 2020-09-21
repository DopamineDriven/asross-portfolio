import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadSubIcon from 'components/lead-sub-arIcon';
import LeadSubReturnHome from 'components/lead-sub-return-home';
import DarkMode from 'components/lead-dark-mode';

interface LeadSubProps {
	title: string;
}

const LeadSub = ({ title }: LeadSubProps): JSX.Element => {
	const DarkModeToggle = (): JSX.Element => (
		<div className=' pt-portfolioLS text-right text-customFooter block w-full min-w-full transition-all transform translate-x-portfolioPadding'>
			<DarkMode />
		</div>
	)
	return (
		<Fragment>
			<Meta />
			<header
				className='select-none relative z-1 justify-between pt-portfolioDivider navbar-expand-lg grid grid-cols-3 min-w-full w-full container overflow-y-hidden overflow-x-hidden transform'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<LeadSubIcon />
				<LeadSubReturnHome title={title} />
				<DarkModeToggle />
			</header>
		</Fragment>
	);
};

export default LeadSub;
