import { getAllBlogs } from '@/lib/getBlogs';

export default async function sitemap() {
  try {
    // Get all blogs
    const allBlogs = await getAllBlogs();
    
    // Filter blogs to only include those from 2025 and later
    const blogs = allBlogs.filter(blog => {
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

    // Blog posts
    const blogPages = blogs.map((blog) => ({
      url: `https://www.trupulse.ai/blogs/blog/${blog.id}`,
      lastModified: blog.updated_at 
        ? new Date(blog.updated_at.seconds * 1000)
        : blog.created_at 
          ? new Date(blog.created_at.seconds * 1000)
          : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return basic pages on error
    return [
      {
        url: 'https://www.trupulse.ai',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: 'https://www.trupulse.ai/blogs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      },
    ];
  }
}
