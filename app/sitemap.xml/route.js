import { getAllBlogs } from '@/lib/getBlogs';

// Helper function to generate slug (same as BlogCard)
const getSlug = (blog) => {
  const title = blog?.title || blog?.data?.title;
  const customURL = blog?.customURL || blog?.data?.customURL;

  if (customURL?.length > 3) return customURL;

  return title
    ?.toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "") // Allow alphanumeric and spaces only
    .split(" ")
    .filter(word => word.length > 0) // Remove empty strings
    .join("-");
};

// Helper function to sanitize URLs
const sanitizeUrl = (url) => {
  return url.replace(/&/g, '&amp;'); // Escape ampersands for XML
};

export async function GET() {
  try {
    // Get all blogs from Firebase
    const allBlogs = await getAllBlogs();
    
    // Filter blogs to only include those from 2025 and later
    const filteredBlogs = allBlogs.filter(blog => {
      // Get the blog's date (prefer updated_at, fallback to created_at)
      const blogDate = blog.updated_at 
        ? new Date(blog.updated_at.seconds * 1000)
        : blog.created_at 
          ? new Date(blog.created_at.seconds * 1000)
          : null;
      
      // If no date, exclude the blog
      if (!blogDate) return false;
      
      // Only include blogs from 2025 and later
      return blogDate.getFullYear() >= 2025;
    });

    // Static pages
    const staticPages = [
      {
        url: 'https://www.trupulse.ai',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: 'https://www.trupulse.ai/pricing',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.trupulse.ai/company',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.trupulse.ai/usecases',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.trupulse.ai/support',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      {
        url: 'https://www.trupulse.ai/blogs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      {
        url: 'https://www.trupulse.ai/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
      {
        url: 'https://www.trupulse.ai/terms&conditions',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
    ];

    // Blog pages
    const blogPages = filteredBlogs.map(blog => {
      const lastmod = blog.updated_at 
        ? new Date(blog.updated_at.seconds * 1000)
        : blog.created_at 
          ? new Date(blog.created_at.seconds * 1000)
          : new Date();
      
      const slug = getSlug(blog);
      
      return {
        url: `https://www.trupulse.ai/blogs/blog/${slug}`,
        lastModified: lastmod,
        changeFrequency: 'monthly',
        priority: 0.7,
      };
    });

    // Combine all pages
    const allPages = [...staticPages, ...blogPages];

    console.log('Total pages:', allPages.length);
    console.log('Static pages:', staticPages.length);
    console.log('Blog pages:', blogPages.length);

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${allPages.map(page => {
      const lastmod = page.lastModified instanceof Date 
        ? page.lastModified.toISOString().split('T')[0]
        : new Date(page.lastModified).toISOString().split('T')[0];
      
      return `  <url>
    <loc>${sanitizeUrl(page.url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    }).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    
    // Return basic sitemap on error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${sanitizeUrl('https://www.trupulse.ai')}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${sanitizeUrl('https://www.trupulse.ai/blogs')}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300'
      }
    });
  }
}
