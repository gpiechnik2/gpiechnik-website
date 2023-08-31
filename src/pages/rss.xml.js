import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Grzegorz Piechnik - Performance testing and cybersecurity | Blog',
    description: 'My journey learning Performance testing and cybersecurity',
    site: 'https://gpiechnik.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
