---
title: 'taming-svgs'
postTitle: 'Taming Custom SVGs'
excerpt: 'Taming SVGs with React and TypeScript for enhanced granular control'
coverImage: 'https://dev-to-uploads.s3.amazonaws.com/i/nygowammvhd2877ru9hw.jpg'
articleImage: 'https://dev-to-uploads.s3.amazonaws.com/i/a7ucumqfkxa1sqm2u67d.jpg'
date: '2020-09-21T08:35:07.322Z'
dev: 'https://dev.to/asross311/taming-svgs-with-react-and-typescript-to-produce-remarkable-granular-control-3eh8'
medium: 'empty'
youtube: 'empty'
ogImage:
 url: 'https://dev-to-uploads.s3.amazonaws.com/i/awgaj4v5l7zfdgfzth7a.jpg'
---

Wish you had more control over SVG component customizations? Want to differentially style an SVG with minimal effort on a case-by-case basis? Then this article is for you. You can parameterize svgs for easy JSX.Element level customization via global abstraction. How? By utilizing React's `FC`. Try implementing the following:

```ts
interface SvgIconConstituentValues {
	strokeColor?: string;
	strokeWidth?: string;
	strokeWidth2?: string;
	strokeWidth3?: string;
	strokeFill?: string;
	fillColor?: string;
	fillColor2?: string;
	fillColor3?: string;
	fillColor4?: string;
	fillColor5?: string;
	fillColor6?: string;
	fillColor7?: string;
	imageWidth?: string;
	imageHeight?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
	className?: string;
	className2?: string;
	className3?: string;
	className4?: string;
	className5?: string;
}

export default SvgIconConstituentValues;
```

- import `SvgIconConstituentValues` into a tsx file
- import `{ FC }` from React into the same tsx file

```tsx
import { FC } from 'react';
import SvgIconConstituentValues from 'types/svg-icons';

// FC can be parameterized via Abstraction
```

- create an `SvgIcon` interface that extends `FC` and `SvgIconConstituentValues`

```tsx
export interface SvgIcon extends FC<SvgIconConstituentValues> {}
```

- abstract the properties of an svg via parametrization with `SvgIcon` as follows

```tsx
export const ArIcon: SvgIcon = ({
	width = '8.0556vw',
	height = '8.0556vw',
	strokeColor = `stroke-current`,
	strokeWidth = '2',
	fillColor = 'none',
	fillColor2 = `fill-primary`,
	rotateCenter = 0,
	className = ` antialiased w-svgIcon max-w-svgIcon`,
	className2 = ` stroke-current`,
	className3 = ` fill-primary`
}): JSX.Element => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 65 65'
			fill={fillColor}
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			transform={`rotate(${rotateCenter}, 65, 65)`}
		>
			<circle
				cx='32.5'
				cy='32.5'
				r='31.5'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				className={className2}
			/>
			<path
				d='M30.116 39H32.816L27.956 26.238H25.076L20.18 39H22.808L23.87 36.084H29.054L30.116 39ZM26.462 28.992L28.226 33.816H24.698L26.462 28.992ZM40.7482 39H43.5202L40.7842 33.78C42.4582 33.294 43.5022 31.944 43.5022 30.162C43.5022 27.948 41.9182 26.238 39.4342 26.238H34.4482V39H36.9502V34.086H38.2462L40.7482 39ZM36.9502 31.944V28.398H38.9662C40.2262 28.398 40.9642 29.1 40.9642 30.18C40.9642 31.224 40.2262 31.944 38.9662 31.944H36.9502Z'
				fill={fillColor2}
				className={className3}
			/>
		</svg>
	);
};
```

- As you can see, there are three separate className parameters (1, 2, 3) abstracted: (1) className for `<svg>...</svg>`, property `JSX.IntrinsicElements.svg: SVGProps<SVGSVGElement>`; (2) className2 for `<circle />`, property `JSX.IntrinsicElements.circle: SVGProps<SVGCircleElement>`; (3) className3 for `<path />`, `property JSX.IntrinsicElements.path: SVGProps<SVGPathElement>`.

- Notice that `const ArIcon: SvgIcon = ({ ... }): JSX.Element => {...}` is indeed a JSX.Element. Therefore, the `<svg></svg>` itself and any children (circles, paths, etc) are all `JSX.IntrinsicElements`, each allowed to have its own unique `className`. These `className` calls were added manually to the svg, as was the transform call (to rotate the icon inline elsewhere). 

- the `JSX Attribute` className of `JSX.IntrinsicElements` is defined as follows

```tsx
SVGAttributes<T>.className?: string | undefined
```

- Each JSX.IntrinsicElement is entitled to a className property. Have 100 paths and a circle within an svg? you can have 102 classNames that can be parameterized via abstraction.

- Now for the best part. The following is from a file in my portfolio, I tinkered with abstracting svg parameters to make it play nicely with Dark mode toggling (`use-dark-mode`) and screen-width dependent icon rendering (`@artsy/fresnel`). You can import this Icon globally and call parameters inline within each JSX.Element without any props passing

```tsx
import { ArIcon } from 'components/svg-icons';
import Link from 'next/link';
import { Media } from 'components/window-width';
import { Fragment } from 'react';
import DarkMode from 'components/lead-dark-mode';

const ArIconConditional = (): JSX.Element => {
	const arIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='18vw' height='18vw' className='transition-all transform translate-y-90' 
 className2='transition-all duration-1000 delay-200 transform' className3='text-secondary fill-secondary' />
				</a>
			</Link>
		</Media>
	);

	const arIconSm: JSX.Element = (
		<Media at='sm'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='15vw' height='15vw' className='' className2='' className3='' />
				</a>
			</Link>
		</Media>
	);

	const arIconMd: JSX.Element = (
		<Media at='md'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='12.5vw' height='12.5vw' className='' className2='' className3='' />
				</a>
			</Link>
		</Media>
	);

	const arIconDesktop: JSX.Element = (
		<Media greaterThan='md'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='10vw' height='10vw' className='' className2='' className3='' />
				</a>
			</Link>
		</Media>
	);

	const ArIconsCoalesced = (): JSX.Element => (
		<Fragment>
			<div className='relative block justify-between lg:w-auto lg:static lg:block lg:justify-start transition-all w-full min-w-full col-span-5'>
				{arIconXs}
				{arIconSm}
				{arIconMd}
				{arIconDesktop}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<div className='select-none relative z-1 justify-between pt-portfolioDivider navbar-expand-lg grid grid-cols-6 min-w-full w-full container overflow-y-hidden overflow-x-hidden transform'>
				<ArIconsCoalesced />
				<div className='pt-portfolio'>
					<DarkMode />
				</div>
			</div>
		</Fragment>
	);
};

export default ArIconConditional;

``` 
- This [project][1] uses tailwindcss and React's Next.js framework. That said, what if I wanted the `JSX.IntrinsicElement` circle encompassing the Icon to pulse on mobile only? add tailwind's `animate-pulse` to `className2` as follows  

```tsx
// ...
	const arIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<ArIcon width='18vw' height='18vw' className='transition-all transform translate-y-90' 
 className2='transition-all duration-1000 delay-200 transform animate-pulse' className3='text-secondary fill-secondary' />
				</a>
			</Link>
		</Media>
	);
// ...
```

 - `fill-primary`, `fill-secondary`, etc are constituent css variables having unique hex values for both `.dark-mode` and `.light-mode` classes which are then passed to the `:root` class which is conditionally activated via the toggling of darkMode by the client (`onChange={darkMode.toggle}`). 

 - So, `onClick={darkMode.enable}` triggers the icon to change its fillColor and strokeColor values as a function of css variables. Utilizing React's `FC` to parameterize props via abstraction produces a truly remarkable degree of granular control. Customizing SVGs using inline calls at the JSX.Element level globally has never been so seamless. 

- darkMode.disable

![darkMode.disable](https://dev-to-uploads.s3.amazonaws.com/i/s0j8gfns07gihsmrwr4c.jpg)

- darkMode.enable

![darkMode.enable](https://dev-to-uploads.s3.amazonaws.com/i/awgaj4v5l7zfdgfzth7a.jpg)

- Check out my [recent DEV post][2] if hacking the react-fontawesome library using typescript and next to create custom fontawesome SVG Icons that persist to production and are unchanged by library version updates piques your interest.

In summary
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/29ozw3qz3341unu6a6ka.gif)



  [1]: https://asross-portfolio.vercel.app/
  [2]: https://dev.to/asross311/hacking-the-fontawesome-library-for-custom-icon-integration-with-nextjs-and-typescript-1em8