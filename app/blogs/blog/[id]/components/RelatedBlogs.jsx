"use client";
import BlogCard from "@/app/blogs/components/BlogCard";

export default function RelatedBlogs({ posts }) {
  const related = posts?.slice(0, 3) || [];

  if (!related.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Recent blog posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {related.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </section>
  );
}
