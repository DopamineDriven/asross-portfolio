import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// --- Blog ---

const blogsDirectory = join(process.cwd(), '_blogs');

export function getBlogSlugs() {
	return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(blogsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	type Items = {
		[key: string]: string;
	};

	const items: Items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach(field => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllBlogs(fields: string[] = []) {
	const slugs = getBlogSlugs();
	const blogs = slugs
		.map(slug => getBlogBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));
	return blogs;
}
