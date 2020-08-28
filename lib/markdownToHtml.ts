import remark from 'remark';
import html from 'remark-html';
// import vfile from 'to-vfile';
// import images from 'remark-images';

export default async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}
