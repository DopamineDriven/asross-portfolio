import { FC } from 'react';

interface PortfolioDividerProps {
	classNameAdditions?: string;
}

interface PortfolioDividerAbstracted extends FC<PortfolioDividerProps> {}

const PortfolioDivider: PortfolioDividerAbstracted = props => {
	const { classNameAdditions = ' ' } = props;
	return (
		<hr
			className={`mx-auto border-primary w-portfolioDividerWidth max-w-portfolioDividerWidth mt-portfolioDivider pb-portfolioDivider ${classNameAdditions}`}
		/>
	);
};

export default PortfolioDivider;
