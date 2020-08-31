# asross-portfolio
nextjs portfolio

## odd/even offset columns
- 100px in height
- 32px gap-x
- 1232px frame
- 328px mobile frame
- one card per row (mobile)
- 40px gap-y

## Tailwind Templates
- https://www.codeinwp.com/blog/tailwind-css-templates/

## Notes
- Drop me a line
	- a tag -- href="mailto:andrew@windycitydevs.io" style="transform: translate3d(0px, 0%, 0px)"
-	Opens email so they can email right away
-	Call out what specialize in
-	Helvetica New
-	Goudy Bookletter 1911
-	1232 grid on a 1440
- 77em (1232px &rarr; grid width, xl viewport)
-	600x600 squares
- will be a 6.5 em offset between col 1 and col 2 for projects

```xml
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="31.5" stroke="#151515" stroke-width="2"/>
<path d="M30.116 39H32.816L27.956 26.238H25.076L20.18 39H22.808L23.87 36.084H29.054L30.116 39ZM26.462 28.992L28.226 33.816H24.698L26.462 28.992ZM40.7482 39H43.5202L40.7842 33.78C42.4582 33.294 43.5022 31.944 43.5022 30.162C43.5022 27.948 41.9182 26.238 39.4342 26.238H34.4482V39H36.9502V34.086H38.2462L40.7482 39ZM36.9502 31.944V28.398H38.9662C40.2262 28.398 40.9642 29.1 40.9642 30.18C40.9642 31.224 40.2262 31.944 38.9662 31.944H36.9502Z" fill="#151515"/>
</svg>
```


## Typography themes for utils

- https://kyleamathews.github.io/typography.js/
- - https://tailwindcss.com/docs/typography-plugin
- Jose Felix 
	- https://dev.to/joserfelix/using-react-spring-to-animate-svg-icons-dark-mode-toggle-2c86
	- https://dev.to/joserfelix/kick-start-your-newsletter-mailchimp-custom-form-with-react-og5
	- https://dev.to/joserfelix/dynamic-theme-switching-in-ant-design-how-to-change-between-light-and-dark-themes-5b8p
	- https://dev.to/joserfelix/how-to-make-text-match-any-background-color-1n0f

```git
yarn add typography-theme-sutro typeface-merriweather typeface-open-sans
```

## Mailchimp for contact page

- https://dev.to/joserfelix/kick-start-your-newsletter-mailchimp-custom-form-with-react-og5

## lquip 86'd over security vulnerability

- removed lquip-loader package as it flagged a high security vulnerability alert (regex)
- https://github.com/cyrilwanner/next-optimized-images#optimization-packages

## Markdown

- https://dev.to/joserfelix/how-to-make-a-static-blog-with-next-js-2bd6**
- https://dev.to/jfelx/how-to-make-a-static-blog-with-next-js-2bd6
- https://github.com/vriad/devii
- https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/

## SCSS + Tailwind

- https://nextjs.org/blog/next-9-3#built-in-sass-css-module-support-for-component-level-styles
- https://codeburst.io/next-js-boilerplate-with-tailwindcss-and-sass-ecc1df90f501

## Add several components to bitsrc.io

- https://blog.bitsrc.io/react-typescript-cheetsheet-2b6fa2cecfe2

## Patching Node_Modules

- https://stackoverflow.com/questions/13300137/how-to-edit-a-node-module-installed-via-npm

```git
npx patch-package @fortawesome/fontawesome-common-types
```

- then, add the following to scripts in package.json

```
"postinstall": "npx patch-package"
```
- https://www.aristidebenoist.com/