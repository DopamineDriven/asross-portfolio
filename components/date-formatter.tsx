import { parseISO, format } from 'date-fns';

interface DateProps {
	dateString: string;
}

const DateFormater = ({ dateString }: DateProps): JSX.Element => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormater;
