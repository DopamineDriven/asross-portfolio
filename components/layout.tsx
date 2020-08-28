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
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Alert preview={preview} />
			<Footer />
		</Fragment>
	);
};

export default Layout;
