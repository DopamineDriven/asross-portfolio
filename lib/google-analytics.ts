import ReactGA, { EventArgs } from 'react-ga';

export const gaInit = () => {
	ReactGA.initialize(`${process.env.GA_TRACKING_ID}`);
};

interface PageViewProps {
	url: string;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages#top_of_page
export const pageview = ({ url }: PageViewProps) => {
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
