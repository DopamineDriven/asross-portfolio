import ReactGA, { EventArgs } from 'react-ga';

export const gaInit = () => {
	ReactGA.initialize(`${process.env.GA_TRACKING_ID}`);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages#top_of_page
export const pageview = (url: string) => {
	ReactGA.ga('config', process.env.GA_TRACKING_ID, {
		page_path: url
	});
};

export const event = ({ action, category, label, value }: EventArgs) => {
	ReactGA.ga('event', action, {
		event_category: category,
		event_label: label,
		value
	});
};
