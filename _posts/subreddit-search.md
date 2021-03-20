---
title: 'subreddit-search'
postTitle: 'Subreddit Search, UI/UX'
excerpt: 'Sole Developer'
coverImage: 'https://res.cloudinary.com/asross311/image/upload/v1598839549/portfolio/Rectangle_6040_i6zz7q.jpg'
articleImage: 'https://res.cloudinary.com/asross311/image/upload/v1598374421/portfolio/headless-wp-directory_ydouen.jpg'
date: "2020-08-19T08:35:07.322Z"
articleExcerpt: 'A future-proof directory uniting independent media companies in the Chicago area'
github: 'https://github.com/DopamineDriven/r'
gitlab: ''
heroku: 'empty'
vercel: 'https://r-weld.vercel.app/'
author:
  name: Andrew Ross
  avatar: 'https://res.cloudinary.com/asross311/image/upload/v1598377026/portfolio/dogeout_fftsx9.png'
  github: 'https://github.com/DopamineDriven/r'
  vercel: 'https://r-weld.vercel.app/'
  heroku: ''
  antdesign: ''
  apollo: ''
  auth0: ''
  graphql: ''
  next: 'next'
  react: 'react'
  tailwindcss: 'tailwindcss'
  typescript: 'typescript'
  wordpress: ''
ogImage:
  url: 'https://og-image.now.sh/%2Fr%2F%3Fq%3Dreq.query.q.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&images=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9rqndpi9iisgalx7bp0z.png'
---

## Overview

Powered by Nextjs, TypeScript, Tailwindcss, Reddit, Vercel, and Snoowrap via Not an Aardvark. /r/q?=req.query.q. Search Reddit in real-time with rapid data-fetching.

### Technical

Wrote custom type defs to transform data fetched on the server side (`getStaticProps/getServerSideProps`) to a serialized JSON format for client side inference and consumption. 

Custom types
```ts
export class Serializer<T> {
	serialize(inp: T): string {
		return JSON.stringify(inp);
	}
	deserialize(inp: string): JSONified<T> {
		return JSON.parse(inp);
	}
}

/**
 * @toJSON (): Obj ? JSON.stringify uses Obj returned from toJSON for serialization :
 * JSON.stringify uses the actual properties
 */

export type Widget = {
	toJSON(): {
		kind: 'Widget';
		date: Date;
	};
};

export type Item = {
	text: string;
	count: number;
	// preserve options
	choice: 'yes' | 'no' | null;
	// drop functions
	func: () => void;
	nested: {
		isSaved: boolean;
		data: [1, undefined, 2];
	};
	// pointer to another type
	widget: Widget;
	// Same obj referenced again
	children?: Item[];
};

export type JSONified<T> = JSONifiedValue<
	T extends { toJSON(): infer U } ? U : T
>;

export type JSONifiedValue<T> = T extends
	| string
	| number
	| boolean
	| null
	? T
	: T extends Function
	? never
	: T extends object
	? JSONifiedObject<T>
	: T extends Array<infer U>
	? JSONifiedArray<U>
	: never;

export type JSONifiedObject<T> = {
	[P in keyof T]: JSONifiedObject<T[P]>;
};

export type UndefinedAsNull<T> = T extends undefined ? null : T;

export type JSONifiedArray<T> = Array<
	UndefinedAsNull<JSONified<T>>
>;

// general helpers

export type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>;
};

export type RecursiveRequired<T> = {
	[P in keyof T]-?: RecursiveRequired<T[P]>;
};

```

These types were used as follows
```tsx
// pages/index.tsx
import { Container } from '../components/UI';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import {
	InferGetStaticPropsType,
	GetStaticPropsContext,
	GetStaticPropsResult
} from 'next';
import { r } from '../lib/snoo-config';
import {
	LandingPage,
	LandingPageWrapper
} from '../components/Landing';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Serializer } from '../types/json';
import { Meta } from '../components/Meta';
import {
	ChildButtonProps,
	ChildButtonPropsNoUndefinedJSONified
} from '../types/landing';

export function Index({
	childButtonPropsSerialized
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [search, setSearch] = useState('');
	const { asPath } = useRouter();

	useEffect(() => {
		const pathSubString = asPath.split('/');
		if (!asPath.includes('/r/[display_name]/')) {
			setSearch('');
			return;
		}
		if (
			asPath.includes('/r/[display_name]/') &&
			asPath.length === 3
		) {
			setSearch(pathSubString[3]);
			return;
		}
		// eslint-disable-next-line no-console
		console.log(search);
	}, [asPath]);

	const childButtonPropsDeserialized: ChildButtonProps[] = new Serializer().deserialize(
		childButtonPropsSerialized
	);
	const childButtons = (
		<>
			{childButtonPropsDeserialized
				? childButtonPropsDeserialized.map(prop => {
						return (
							<>
								<Link
									href={'/r/[display_name]'} // = /r/subreddit/query
									as={`/r/${prop.display_name}`}
									key={prop.title}
									passHref={true}
								>
									<a
										type='button'
										key={prop.id}
										className={cn(
											'flex normal-case w-full min-w-full mx-auto sm:w-auto items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-full shadow-sm text-gray-100 bg-opacity-25 bg-redditSearch ring-2 ring-rojo-100 ring-inset hover:bg-black hover:text-gray-50  sm:px-8 z-50 transition-colors duration-150'
										)}
									>
										/{`${prop.display_name_prefixed}`}
									</a>
								</Link>
							</>
						);
				  })
				: ''}
		</>
	);
	return (
		<>
			<Meta />
			<Navbar />
			<Head>
				<title>{'Subreddit Search Home'}</title>
			</Head>
			<Container clean className='fit'>
				<LandingPageWrapper>
					<LandingPage>{childButtons}</LandingPage>
				</LandingPageWrapper>
			</Container>
		</>
	);
}

export async function getStaticProps(
	ctx: GetStaticPropsContext
): Promise<
	GetStaticPropsResult<{
		childButtonPropsSerialized: string;
	}>
> {
	const snooSubreddit = await r.searchSubreddits({
		query: ctx.params ? (ctx.params.q as string) : 'snowboarding',
		limit: 10,
		count: 10,
		show: '10'
	});

	const snooSubreddtoJSON = snooSubreddit.toJSON();

	const snooSubredd: ChildButtonPropsNoUndefinedJSONified = snooSubreddtoJSON.map(
		snooSub => {
			const {
				display_name_prefixed,
				url,
				id,
				title,
				display_name
			} = snooSub;
			return {
				display_name_prefixed,
				url,
				id,
				title,
				display_name
			};
		}
	);
	const childButtonPropsSerialized = new Serializer().serialize(
		JSON.parse(JSON.stringify(snooSubredd))
	);

	return {
		props: {
			childButtonPropsSerialized
		},
		revalidate: 10
	};
}
export default Index;
```

Where `ChildButtonPropsNoUndefinedJSONified` is defined in `@/types/landing.ts` as follows
```ts
export interface ChildButtonPropsNoUndefinedJSONified
	extends Array<UndefinedAsNull<JSONified<ChildButtonProps>>> {}
```

#### Serialization/Deserialization to achieve server-to-client prop shuttling visualized

![Server-To-Client-Serialization-Deserialization](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dtejafpfag5236t48pwh.jpg)