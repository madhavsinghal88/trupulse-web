export async function GET() {
  const robotsTxt = `User-agent: *

# Allow all main pages
Allow: /

# Disallow admin and sensitive areas
Disallow: /admin/
Disallow: /dashboard/
Disallow: /blogs/login/
Disallow: /blogs/signup/
Disallow: /blogs/forgot-password/
Disallow: /blogs/create/
Disallow: /blogs/edit/
Disallow: /blogs/preview/
Disallow: /api/
Disallow: /_next/static/
Disallow: /favicon.ico

# Block common admin paths
Disallow: /*?edit=*
Disallow: /*?preview=*
Disallow: /*?admin=*

# Allow important files
Allow: /blogs/blog/
Allow: /static/
Allow: /images/

# Sitemap location
Sitemap: https://www.trupulse.ai/sitemap.xml

# Crawl delay (be nice to servers)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
