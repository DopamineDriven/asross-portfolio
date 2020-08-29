import Container from 'components/container';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArIcon } from 'lib/fas-custom-integration';

type Props = {
	preview?: boolean;
};

const Alert = ({ preview }: Props) => {
	return (
		<div
			className={cn('bg-portfolio', {
				'bg-accent-7 border-accent-7 text-white': preview,
				'bg-portfolio align-left justify-start min-w-nineTenths w-nineTenths': !preview
			})}
		>
			<Container>
				<div className='pb-1  min-w-nineTenths w-nineTenths'>
					{preview ? (
						<>
							This is page is a preview.{' '}
							<a
								href='/api/exit-preview'
								className='underline hover:text-cyan duration-200 transition-colors'
							>
								Click here
							</a>{' '}
							to exit preview mode.
						</>
					) : (
						<>
							<div className='block min-w-nineTenths w-nineTenths prose mx-auto justify-start text-left flex-grow text-black font-somaRoman uppercase font-bold pt-1 text-6xl'>
								<p className='float-left'>Andrew ross is a chicago based full-stack engineer who specializes in the JAMstack, MERN, TypeScript, React, Next.js, Tailwind CSS, Static Site Generation, DB Migration, Headless WordPress, and more.</p>
							</div>
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;
