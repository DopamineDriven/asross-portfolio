module.exports = {
	future: {
		removeDeprecatedGapUtilities: true
	},
	purge: ['./components/**/*.tsx', './pages/**/*.tsx', './utils/**/*.tsx'],
	theme: {
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.024em',
			tight: '-0.01em',
			wide: '.025em',
			wider: '.05em',
			widest: '.15em'
		},
		rotate: {
			0: '0deg',
			45: '45deg',
			180: '180deg',
			855: '855deg'
		},
		opacity: {
			10: '10',
			25: '25',
			50: '50',
			75: '75',
			90: '90',
			100: '100'
		},
		zIndex: {
			0: 0,
			1: 1,
			25: 25,
			50: 50,
			75: 75,
			100: 100
		},
		extend: {
			transitionDuration: {
				0: '0ms',
				200: '200ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
				2000: '2000ms',
				3000: '3000ms'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				hero: {
					transform: 'translate3d(0px, 0px, 0px)'
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				hero: 'hero 1s ease-in-out infinite'
			},
			fontFamily: {
				head: ['goudy-bookletter-1911', 'serif'],
				header: ['Playfair Display', 'serif'],
				body: ['Barlow Condensed', 'sans-serif'],
				display: ['Barlow Condensed', 'sans-serif'],
				polished: ['brandon-grotesque', 'sans-serif'],
				somaRoman: ['neue-haas-grotesk-text', 'sans-serif'],
				somaDisplay: ['neue-haas-grotesk-display', 'sans-serif'],
				somaDisplayLight: ['neue-haas-grotesk-display', 'sans-serif'],
				subpolished: ['Montserrat', 'sans-serif']
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				black: '#000000',
				white: '#ffffff',
				success: '#0070f3',
				cyan: '#79FFE1',
				blizzardBlue: '#b3ddf2',
				chicagoRed: '#ff0000',
				cimaRed: '#B8242C',
				wcdPink: '#eb57a3',
				tinyHouseWhite: '#f0f1f2',
				customGray: '#D0D0D0',
				iconHover: '#9D9D9D',
				iconHoverTwo: '#AEAEAE',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5',
				bloodMoon: '#cc6633',
				herokuStroke: '#6762A6',
				gqlPink: '#E535AB',
				devPurple: '#3333CC',
				lighterBlack: '#323232',
				gatsbyPurple: '#663399',
				oneFiveBlack: '#151515',
				fiveOBlack: '#505050',
				portfolio: '#EBE8E0'
			},
			height: {
				whole: '100vh',
				nineTenths: '90vh',
				sevenEighths: '87.5vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				sevenTenths: '70vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				sevenTwentieths: '35vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh',
				oneTenth: '10vh',
				oneTwentieth: '5vh'
			},
			width: {
				whole: '100vw',
				nineTenths: '90vw',
				sevenEighths: '87.5vw',
				fourFifths: '80vw',
				threeFourths: '75vw',
				sevenTenths: '70vw',
				twoThirds: '66.67vw',
				threeFifths: '60vw',
				half: '50vw',
				nineTwentieths: '45vw',
				twoFifths: '40vw',
				sevenTwentieths: '35vw',
				oneThird: '33.33vw',
				threeTenths: '30vw',
				oneFourth: '25vw',
				oneFifth: '20vw',
				oneSixth: '16.67vw',
				oneTenth: '10vw',
				oneTwentieth: '5vw'
			},
			spacing: {
				negative: '-0.1em',
				half: '0.125rem',
				threeQuarters: '0.175rem',
				threeHalves: '0.325rem',
				portfolio: '2.25vw',
				portfolioLS: '3.33vw',
				portfolioRS: '1.33vw',
				portfolioMTP: '-0.83333vw',
				socialMargin: '-0.5vw',
				portfolioS: '18.60284vw',
				socialT: '74.58333vw',
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				28: '7rem',
				44: '11rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				275: '69.25rem',
				300: '75rem',
				308: '77rem'
			},
			lineHeight: {
				tight: 1.2,
				portfolio: '11vw',
				headerP: '4.38298vw',
				customSLH: '2.33333vw'
			},
			fontSize: {
				smxmd: '0.9375rem',
				'1xl': '1.0rem',
				'3xl': '2.0rem',
				'5xl': '2.5rem',
				'6xl': '3rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
				'10xl': '10rem',
				custom: '20.41667vw',
				customP: '4.44681vw',
				customS: '1.66667vw'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			}
		}
	},
	variants: {
		padding: ['responsive', 'last', 'hover', 'focus']
	},
	plugins: [require('@tailwindcss/typography')]
};
