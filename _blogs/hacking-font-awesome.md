---
title: 'Hacking Font Awesome'
excerpt: 'Hacking the Font Awesome Library with React, Nextjs, and TypeScript to support custom SVG incorporation locally and in production.'
coverImage: 'https://dev-to-uploads.s3.amazonaws.com/i/9c7qdhn25b07am8dl66n.png'
articleImage: 'https://dev-to-uploads.s3.amazonaws.com/i/51fagc1ri8auwsxfpkzj.png'
date: '2020-08-19T08:35:07.322Z'
author:
 name: Andrew Ross
 role: 'CTO'
 avatar: 'https://res.cloudinary.com/asross311/image/upload/v1597678722/portfolio/doge_ropqvx.jpg'
 github: 'https://github.com/DopamineDriven'
 twitter: 'https://twitter.com/Dopamine_Driven'
 linkedin: 'https://www.linkedin.com/in/asross/'
 vercel: 'https://next-jamstack-portfolio.vercel.app/'
 heroku: 'https://heroku.com'
ogImage:
 url: '/assets/next-jamstack.jpg'
---

# Overview

The aim of this article is to outline how to directly incorporate custom Fontawesome icons into your Next.js TypeScript project. For a solid introduction on setting up Fontawesome 5 with Next.js and TypeScript please see [Vuong Dang's recent post](https://dev.to/vuongddang/how-to-use-fontawesome-in-next-js-5bl5).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/51fagc1ri8auwsxfpkzj.png)

## 1. Setting up for success

Create a lib directory in the root of your Next.js project. Then, create a fas-custom-integration.ts file where the magic will unfold. There is no tsx returned in the actual customization file itself which is why the library folder serves as its perfect home.

```git
mkdir lib && cd lib && touch fas-custom-integration.ts && cd ..
```

## 2. A quick look under the hood

Head to the @fortawesome package in node_modules. Then, open `fontawesome-svg-core/index.d.ts` to inspect the contents of the declaration file:

```typescript
import {
	IconDefinition,
	IconLookup,
	IconName,
	IconPrefix,
	IconPathData,
	IconPack
} from '@fortawesome/fontawesome-common-types';
export {
	IconDefinition,
	IconLookup,
	IconName,
	IconPrefix,
	IconPathData,
	IconPack
} from '@fortawesome/fontawesome-common-types';
export const dom: DOM;
export const library: Library;
export const parse: { transform(transformString: string): Transform };
export const config: Config;
export function noAuto(): void;
export function findIconDefinition(iconLookup: IconLookup): IconDefinition;
export function text(content: string, params?: TextParams): Text;
export function counter(
	content: string | number,
	params?: CounterParams
): Counter;
export function toHtml(content: any): string;
export function toHtml(abstractNodes: AbstractElement): string;
export function layer(
	assembler: (
		addLayerCallback: (layerToAdd: IconOrText | IconOrText[]) => void
	) => void,
	params?: LayerParams
): Layer;
```

This is it, the librarians lair 📚. Examine the first two lines of this file. The very same Interfaces imported are exported immediately thereafter. What's important to note when viewing declaration files like this is where Interfaces of potential utility such as IconDefinition and IconLookup reside. So let's head on over to `fontawesome-common-types/index.d.ts` and view the contents of its declaration file.

## 3. Structure dictates function

Interfaces serve to describe the "shape" that values have in TypeScript. Personally, I prefer to think of this shape as its structure. If you're familiar with biology you may recall that "structure dictates function" is known as the Central Dogma of Life. This thinking can be carried over to Interface usage in TypeScript; interface structure introduces strict type requirements which breathes life into the code we write. It's do or die. Right, back to the hacking. With the contents of `fontawesome-common-types/index.d.ts` before us, the key to executing custom icon integration becomes increasingly clear.

```typescript
export type IconPrefix = 'fas' | 'fab' | 'far' | 'fal' | 'fad';
export type IconPathData = string | string[];

export interface IconLookup {
	prefix: IconPrefix;
	// IconName is defined in the code that will be generated at build time and bundled with this file.
	iconName: IconName;
}

export interface IconDefinition extends IconLookup {
	icon: [
		number, // width
		number, // height
		string[], // ligatures
		string, // unicode
		IconPathData // svgPathData
	];
}

export interface IconPack {
	[key: string]: IconDefinition;
}

export type IconName =
	| '500px'
	| 'accessible-icon'
	| 'accusoft'
	| 'acquisitions-incorporated'
	// ...7,846 lines later...
	| 'wrench'
	| 'x-ray'
	| 'yen-sign'
	| 'yin-yang';
```

## 4. Interfaces of utility

Since IconDefinition and IconLookup are of immediate utility for custom icon incorporation let's break each down each individually.

### 4(a). IconLookup

This Interface describes two values, `prefix` and `iconName`. The prefix value is a string corresponding to "faX" as defined by the IconPrefix type above (where X=b, d, l, r, or s). The free version of Fontawesome supports "fab" and "fas" prefixes which denote brand and solid icon styles, respectively. Then there's `iconName` which is defined by the IconName type. This type describes an array of strings totaling out to 7,854 icon names in length.

```typescript
export type IconPrefix = 'fas' | 'fab' | 'far' | 'fal' | 'fad';
export type IconPathData = string | string[];

export interface IconLookup {
	prefix: IconPrefix;
	// IconName is defined in the code that will be generated at build time and bundled with this file.
	iconName: IconName;
}

export type IconName =
	| '500px'
	| 'accessible-icon'
	| 'accusoft'
	| 'acquisitions-incorporated'
	// ...7,846 lines later...
	| 'wrench'
	| 'x-ray'
	| 'yen-sign'
	| 'yin-yang';
```

### 4(b). IconDefinition

```typescript
export interface IconDefinition extends IconLookup {
	icon: [
		number, // width
		number, // height
		string[], // ligatures
		string, // unicode
		IconPathData // svgPathData -> string | string[]
	];
}
```

Note that the IconDefinition Interface [extends](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces) the IconLookup interface. This implies that the shape described by the IconLookup interface is extended, or copied, to the IconDefinition Interface. So, while it is evident that the shape of an icon is described by an array of five scalar values, it may not be as straightforward that the prefix and iconName values described by the IconLookup Interface will be prepended to the structure of our derived icon definition. IconDefinition extending IconLookup implies that our custom definition should look as follows:

```typescript
const CustomIconExample: IconDefinition & IconLookup = {
	prefix: 'fab',
	iconName: 'example-icon',
	icon: [
		64, // (1)viewBox width
		64, // (2)viewBox height
		[], // (3)ligatures
		'#000000', // (4)fill/fillColor
		`M24 22.525H0` // (5)iconPath(s)
	]
};
```

With that out of the way, let's break down the five scalar values involved in defining the shape of an icon. The width<sub>1</sub> and height<sub>2</sub> values derived from an SVG's viewBox correspond the first two scalars required when defining an icon. The viewBox of an SVG defines the position and dimension of a user viewport. There are always four numerical values in a viewBox which are invariably ordered as follows:

```typescript
[min-x min-y width height]
```

The third value involved in defining an icon corresponds to ligatures<sub>3</sub> which are not important for our purposes. Read more about ligatures [here](https://fontawesome.com/how-to-use/on-the-desktop/referencing-icons/using-ligatures). The fourth value of an icon denotes the "fill" of the SVG, or fillColor<sub>4</sub>, as indicated by the presence of a hex-value. Lastly, the iconPath<sub>5</sub> data is ordered sequentially on a single line; there is a single space denoting row breaks within a path. If an SVG contains more than one path (d-value) a single space is used to denote the end of one path and the beginning of the next. Therefore both intra- and interpath breaks are denoted by a single space. It is important for paths to always be confined to a single line (horizontal scrolling needs love too).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/bsn68polig9f0c7w4tov.gif)

## 5. Translating theory to practice

With a plan of attack in mind, let's get to it! Out of the node_modules and back to the `fas-custom-integration.ts` file in the lib directory we go. To prime the file for custom icon integration, import the library and the previously dissected Interfaces of utility:

```typescript
import {
	library,
	IconDefinition,
	IconLookup
} from '@fortawesome/fontawesome-svg-core';
```

Since a real example requires a real SVG to derive values for our icon definition from, an SVG for the Vercel logo ▲ is provided below (formerly ZEIT).

```tsx
<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	aria-hidden="true"
	focusable="false"
	width="1em"
	height="1em"
	style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
	preserveAspectRatio="xMidYMid meet"
	viewBox="0 0 24 24"
>
	<path d="M24 22.525H0l12-21.05l12 21.05z" fill="#626262" />
</svg>
```

You might be asking yourself "Is this a thinly veiled attempt at shamelessly promoting your favorite deployment platform?"

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/r6kfccuk5t138b4r9im4.gif)

For those interested in utilizing a method that produces consistently formatted SVGs, save the SVG snippet above in a .svg file. Then, navigate to [Figma](https://www.figma.com/), enter a workspace, and press Ctrl+Shift+k (or Cmnd+Shift+k for MacOS users out there). This opens your local filesystem allowing you to import the SVG as an image into the workspace. Then, right-click the newly added SVG image, hover over "copy", and select "copy as SVG". Paste the copied contents into your text editor and voila! The SVG from above is refactored as follows:

```tsx
<svg
	width='1'
	height='1'
	viewBox='0 0 24 24'
	fill='none'
	xmlns='http://www.w3.org/2000/svg'
>
	<g clipPath='url(#clip0)'>
		<path d='M1 0.938607H0L0.5 0.0615234L1 0.938607Z' fill='#626262' />
	</g>
	<defs>
		<clipPath id='clip0'>
			<rect width='1' height='1' fill='white' />
		</clipPath>
	</defs>
</svg>
```

With a standardized SVG obtained via Figma, let the excising begin. Your custom icon `const` should resemble the following:

```typescript
export const faCustomVercelIcon: IconDefinition & IconLookup = {
	prefix: 'fab',
	iconName: 'vercel-icon',
	icon: [
		24, 
		24, 
		[], 
		'none', 
		'M24 22.525H0l12-21.05l12 21.05z'
	]
};
```

Now, pass the `faCustomVercelIcon` into the library

```typescript
library.add(faCustomVercelIcon);
```

But wait, a TSLint error?! Not to worry, this is easily rectified. Navigate back to the @fortawesome package in node_modules and open `fontawesome-common-types/index.d.ts` once more. Simply add "vercel-icon" to the beginning of the IconName type.

```typescript
export type IconName = 'vercel-icon' | '500px' |
  'accessible-icon' |
  'accusoft' |
  'acquisitions-incorporated' | // ...
```

Looking good, IconName is now 7,855 icons strong. While we're here, let's tweak one additional type for clarity's sake. At the very top of the index.d.ts file, add "fac" to the IconPrefix type:

```typescript
export type IconPrefix = 'fas' | 'fab' | 'fac' | 'far' | 'fal' | 'fad';
```

This prefix type denotes custom styled icons, or conquered, or whatever your heart desires. As long as you adhere to the faX notation for IconPrefix, Fontawesome is happy. With the TSLint error resolved, back to the `fas-custom-integration.ts` file in the lib directory we go. First, update the prefix to "fac". See? The library is more malleable than one might anticipate after all. There is one last modification to make but thankfully it does not involve returning to node_modules for a third time. Utilizing the `extends` property of TypeScript interfaces, the file should resemble the following:

```typescript
import {
	library,
	IconDefinition,
	IconLookup
} from '@fortawesome/fontawesome-svg-core';

export interface CustomIconConstruct extends IconDefinition, IconLookup {}

export const faCustomVercelIcon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'vercel-icon',
	icon: [
		24, 
		24, 
		[], 
		'none', 
		'M24 22.525H0l12-21.05l12 21.05z'
	]
};

library.add(faCustomVercelIcon);
```

While it is best practice to define all custom icons in one file, the `CustomIconConstruct` interface that extends IconDefinition & IconLookup can now be imported throughout your project without having to go through the hastle of importing the two Interfaces of utility once more. So, how does this look in practice?

## 6. Importing to a tsx file to run locally

To test your custom icon out, open a file that ultimately renders to a pages directory file and import the following:

```typescript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCustomVercelIcon } from 'lib/fas-custom-integration';
```

The following snippet is from a project that's currently under construction using Next, TypeScript, and Tailwindcss as frameworks.

```typescript
<a
	aria-label='react'
	target='__blank'
	href={vercel}
	className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
>
	<FontAwesomeIcon
		icon={faCustomVercelIcon}
		className='flex align-middle text-center font-extrabold text-1xl pb-1'
		size='lg'
	/>
</a>
```

If you aren't familiar with tailwindcss don't worry about the `className` inline-styling above. That said, do note how the `faCustomVercelIcon` was received as props by the `<FontAwesomeIcon />` JSX.Element.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/a0emifr1hjzkslxxwavc.png)

## 7. Priming for production

In order for custom icons to successfully deploy to a production environment, the following package(s) must be installed:

- yarn

```git
yarn add patch-package postinstall-postinstall
```

- npm

```git
npm i patch-package
```

Then, execute the following command:

```git
npx patch-package @fortawesome/fontawesome-common-types
```

This generates a `patches` folder in your directory that contains a file outlining local updates made to the targeted package. In our case, it's the library in which we added "vercel-icon" to type `IconName` and "fac" to type `IconPrefix`. Then, add the following postinstall script in package.json:

```json
{
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
		"postinstall": "npx patch-package"
	}
}
```

The postinstall script persists local changes made to node_modules even when package version updates are made.
**Update**: postinstall-postinstall is only necessary to install for yarn. But why? While the postinstall script does run after `yarn` and `yarn add <package>`, it does not run after `yarn remove <package>`. Therefore, running `yarn remove <package>` in the absence of postinstall-postinstall renders the .patch file containing module modifications ineffective since the postinstall script isn't executed (which I just learned firsthand). Fortunately, with postinstall-postinstall installed, the "postinstall" script is executed after running `yarn remove <package>`. However, the "postinstall" script will now be executed twice for `yarn` and `yarn add <package>` which implies that the "postinstall" script itself must be idempotent in nature (its value remaining unchanged when multiplied or otherwise operated on). **End Update**. The patch file generated after executing the aforementioned npx command should resemble the following:

```patch
diff --git a/node_modules/@fortawesome/fontawesome-common-types/index.d.ts b/node_modules/@fortawesome/fontawesome-common-types/index.d.ts
index b70b000..b6b2429 100644
--- a/node_modules/@fortawesome/fontawesome-common-types/index.d.ts
+++ b/node_modules/@fortawesome/fontawesome-common-types/index.d.ts
@@ -1,4 +1,4 @@
-export type IconPrefix = "fas" | "fab" | "far" | "fal" | "fad";
+export type IconPrefix = "fas" | "fab" | "fac" | "far" | "fal" | "fad";
 export type IconPathData = string | string[]

 export interface IconLookup {
@@ -21,7 +21,9 @@ export interface IconPack {
[key: string]: IconDefinition;
 }

-export type IconName = '500px' |
+export type IconName = 'vercel-icon' |
+'heroku-icon' |
+'500px' |
   'accessible-icon' |
   'accusoft' |
   'acquisitions-incorporated' |

```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/29ozw3qz3341unu6a6ka.gif)

In summary, this process can be performed with any SVG file. That said, I do recommend utilizing Figma (or a similar tool) to standardize SVGs before excising the essential bits required to define custom icons. This concludes my first ever tech post. Thanks for following along and feel free to drop any questions/comments/concerns in the comments below. Happy coding!
