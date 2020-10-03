import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function textFetcher(path: any) {
	const res = await fetch(path);
	return res.text();
}

export default function useLiveReload() {
	const [needToReload, setNeedToReload] = useState(false);
	const router = useRouter();
	const [prevData, setPrevData] = useState(null || String);
	const { data } = useSWR(router.asPath, textFetcher, {
		refreshInterval: 1000
	});

	useEffect(() => {
		if (needToReload || !data || location.hostname === 'localhost') {
			return;
		}

		if (prevData && prevData !== data) {
			setNeedToReload(true);
			return;
		}

		setPrevData(data);
	});

	return {
		needToReload
	};
}

/*
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState, SetStateAction, Dispatch } from 'react';

async function textFetcher(path: any) {
	const res = await fetch(path);
	return res.text();
}

export default function useLiveReload() {
	const [needToReload, setNeedToReload]: Array<
		boolean | Dispatch<SetStateAction<boolean>>
	> = useState(Boolean ? false : true);
	const router = useRouter();
	const [prevData, setPrevData] = useState(null || String);
	const { data } = useSWR(router.asPath, textFetcher, {
		refreshInterval: 1000
	});

	useEffect(() => {
		if (needToReload || !data || location.hostname === 'localhost') {
			return;
		}

		if (prevData && prevData !== data) {
			setNeedToReload(true);
			return;
		}

		setPrevData(data);
	});

	return {
		needToReload
	};
}

*/
