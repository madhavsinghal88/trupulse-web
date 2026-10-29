import { getListedArticles } from '@/lib/articles';

const SITE = 'https://www.trupulse.ai';

// Rebuilt hourly so new posts appear without a deploy.
export const revalidate = 3600;

// Escape ampersands for XML
const sanitizeUrl = (url) => url.replace(/&/g, '&amp;');

const day = (date) => new Date(date).toISOString().split('T')[0];

function urlset(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${sanitizeUrl(page.url)}</loc>
    <lastmod>${day(page.lastModified)}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

// /videos and /login are noindex, so they are left out.
const staticPages = () => [
  { url: SITE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${SITE}/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  { url: `${SITE}/case-study`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${SITE}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  { url: `${SITE}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
];

export async function GET() {
  try {
    // The same list the articles page shows.
    const articles = await getListedArticles();
    const blogPages = articles.map((a) => ({
      url: `${SITE}/blogs/blog/${a.slug}`,
      lastModified: a.updated || a.created || Date.now(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    return new Response(urlset([...staticPages(), ...blogPages]), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Static pages only if the articles cannot be loaded
    return new Response(urlset(staticPages()), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300'
      }
    });
  }
}
