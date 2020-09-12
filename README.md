# asross-portfolio

## Google Analytics Added
- https://github.com/react-ga/react-ga
- https://github.com/react-ga/react-ga/blob/master/demo/app/Events.jsx
- https://coderrocketfuel.com/article/add-google-analytics-to-a-next-js-and-react-website
- https://analytics.google.com/analytics/web/#/a177780141w246030893p228624158/admin/tracking/tracking-code/

## GA Events + TS 
- https://kellenfujimoto.com/posts/strongly-typed-google-analytics-events/

## Social Extended Types Mapping 
- https://stackoverflow.com/questions/60284442/react-ts-how-to-map-through-fontawesome-icons-and-display-them

## React Animations
- https://dev.to/joserfelix/getting-started-with-react-animations-308a

## Dark Mode React App Aug 5, 2020
- https://www.carlrippon.com/implementing-dark-mode-in-a-react-app-with-css-properties/

## Smooth Scrolling React Library (alternative to global html css call scroll-behavior: smooth)
- https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

## Mobile-Detect and React-Sizes
- https://stackoverflow.com/questions/55394365/conditional-rendering-on-server-side
- https://www.npmjs.com/package/mobile-detect
- https://www.npmjs.com/package/react-sizes

## Conditionally render by device type
- https://stackoverflow.com/questions/55394365/conditional-rendering-on-server-side
- https://medium.com/applike/https-medium-com-applike-react-responsive-conditional-rendering-of-component-c97ab247097d
- https://github.com/applike/react-responsive
- https://www.npmjs.com/package/responsive-react
- https://www.npmjs.com/package/typed-responsive-react

### TS interfaces vs Types
- https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types
- 
### TS Classes vs interfaces
- https://passionfordev.com/typescript-classes-vs-interfaces/
- https://stackoverflow.com/questions/40973074/difference-between-interfaces-and-classes-in-typescript
- https://stackoverflow.com/questions/12764247/typescript-interface-vs-class-vs-modules-vs-program-vs-function

nextjs portfolio

## To-do

- About section beneath portfolio items
  - Sub routed About
- Sub-routing for blog
- everything is blue toggle for global theme shift
- style it out
  - screen size dependent refactoring for xs:sm:md:lg:xl/portrait vs landscape etc etc
- ship!

## odd/even offset columns

- 108px in height
- 32px gap-x (2.2284 vw)
- 1232px frame
- 328px mobile frame
- one card per row (mobile)
- 40px gap-y
- coverphoto height 37.5em

### VW conversions for cards (md or larger viewport)

- 2.2284vw gap-x
- 600 px in a 1436px viewport -> 41.7827vw
- px -> 7.1031vw

## About section

- aboutOffsetPR - 7.7994vw
- aboutGapX - 8.9136vw
- HFA column-right pt - 6.6852vw
- description text (48pt) - 3.3426vw
- header text (200pt) - 13.9276vw;
- image
  - 300x300px width - 20.8914vw
  - 400x536px width - 27.8552vw
  - 600x600px width - 41.7827vw

## Z-index tailwind

- https://tailwindcss.com/docs/z-index#negative-values

## Window Size

- https://usehooks.com/useWindowSize/
- https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook

## Sitemaps in nextjs

- https://github.com/axross/kohei.dev/blob/9a396055f59a8ef8428b80b3682a38afb33c351d/pages/sitemap.xml.ts

## Tips of nextjsv9 with typescript

- https://www.kohei.dev/posts/7-tips-of-next-js-9-with-typescript?hl=en-US

## Tailwind Templates

- https://www.codeinwp.com/blog/tailwind-css-templates/

## Notes

- Drop me a line
  - a tag -- href="mailto:andrew@windycitydevs.io" style="transform: translate3d(0px, 0%, 0px)"
- Opens email so they can email right away
- Call out what specialize in
- Helvetica New
- Goudy Bookletter 1911
- 1232 grid on a 1440
- 77em (1232px &rarr; grid width, xl viewport)
- 600x600 squares
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

- 09/05/20
- https://github.com/vercel/next.js/discussions/14810
```tsx
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const Navbar = () => {
   const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <HamburgerMenu />
        </div>
      ) : (
        <div>
           <FullMenu />
        </div>
   )
)}

export default Navbar;
```