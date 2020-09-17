import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadSubIcon from 'components/lead-sub-arIcon';
import LeadSubReturnHome from 'components/lead-sub-return-home';

interface LeadSubProps {
	title: string;
}

const LeadSub = ({ title }: LeadSubProps) => {
	return (
		<Fragment>
			<Meta />
			<header
				className='select-none relative z-1 justify-between pt-portfolioDivider navbar-expand-lg grid grid-cols-2 min-w-full w-full container overflow-y-hidden overflow-x-hidden transform'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<LeadSubIcon />
				<LeadSubReturnHome title={title} />
			</header>
		</Fragment>
	);
};

export default LeadSub;
