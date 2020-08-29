import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/header';
import Layout from 'components/layout';
import Container from 'components/container';
import Alert from 'components/alert';
import { CLIENT_NAME } from 'lib/constants';
import Lead from 'components/lead';

interface Props {
	props: string | number;
  preview?: boolean;
}

const Index = ({ preview, props }: Props) => {
	return (
		<>
			{/* <Header props={props} /> */}
			<Lead />
      <Alert preview={preview} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} index page`}</title>
				</Head>
				<Container>
					<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						<Link href='/'>
							<a className='hover:underline text-black px-8 font-somaRoman'>Andrew Ross</a>
						</Link>
					</h2>
				</Container>
			</Layout>
		</>
	);
};

export default Index;
