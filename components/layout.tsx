import Alert from 'components/alert';
import Footer from 'components/footer';
import Meta from 'components/meta';
import { Fragment, ReactNode } from 'react';

interface LayoutProps {
	preview?: boolean;
	children: ReactNode;
}

const Layout = ({ children, preview }: LayoutProps) => {
	return (
		<Fragment>
			<Meta />
			<div className='min-h-screen bg-portfolio max-w-xs md:max-w-screen-xl mt-5 mb-5 grid mx-auto content-center justify-center items-center'>
				<main>{children}</main>
			</div>

			<Footer />
		</Fragment>
	);
};

export default Layout;
