import { getAllBlogs } from '@/lib/getBlogs';

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
    
    // Generate XML for filtered blog posts
    const blogSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${filteredBlogs.map(blog => {
      // Format date properly
      const lastmod = blog.updated_at 
        ? new Date(blog.updated_at.seconds * 1000).toISOString().split('T')[0]
        : blog.created_at 
          ? new Date(blog.created_at.seconds * 1000).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0];
      
      return `  <url>
    <loc>https://www.trupulse.ai/blogs/blog/${blog.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }).join('\n')}
</urlset>`;

    return new Response(blogSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400'
      }
    });
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    
    // Return empty sitemap on error
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.trupulse.ai/blogs</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

    return new Response(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300'
      }
    });
  }
}
