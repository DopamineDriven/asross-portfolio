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
			<Layout preview={preview}>
				<div className='block min-w-nineTenths w-nineTenths prose mx-auto justify-start text-left flex-grow text-black font-somaRoman uppercase font-bold pt-1 text-6xl'>
					<p className='float-left md:text-left '>
						Andrew ross is a chicago based full-stack engineer who specializes in the
						JAMstack, MERN, TypeScript, React, Next.js, Tailwind CSS, Static Site
						Generation, DB Migration, Headless WordPress, and more.
					</p>
				</div>
				<Head>
					<title>{`${CLIENT_NAME} index page`}</title>
				</Head>
				<Container>
					<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						<Link href='/'>
							<a className='hover:underline text-black px-8 font-somaRoman'>
								Andrew Ross
							</a>
						</Link>
					</h2>
				</Container>
			</Layout>
		</>
	);
};

export default Index;
