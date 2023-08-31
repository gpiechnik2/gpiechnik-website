import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts")
  return rss({
    title: 'Grzegorz Piechnik - Performance testing and cybersecurity | Blog',
    description: 'My journey learning Performance testing and cybersecurity',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('./src/content/posts/*.md')),
    items: posts.map((post) => ({
        link: `/posts/${post.slug}/`,
        // Note: this will not process components or JSX expressions in MDX files.
        content: sanitizeHtml(parser.render(post.body)),
        ...post.data,
      })),
    customData: `<language>en-us</language>`,
  });
}
