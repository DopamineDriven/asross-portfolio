const getWindowDimensions = () => {
	const width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	const height =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;

	return { width, height };
};

export default getWindowDimensions;

// https://github.com/applike/responsive-react
// https://www.npmjs.com/package/typed-responsive-react
// INTERESTING
// https://github.com/applike/typed-responsive-react#readme