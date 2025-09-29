export async function GET() {
  const currentDate = new Date().toISOString();
  
  // Generate sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.trupulse.ai/sitemap</loc>
    <lastmod>${currentDate.split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.trupulse.ai/blog-sitemap.xml</loc>
    <lastmod>${currentDate.split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
