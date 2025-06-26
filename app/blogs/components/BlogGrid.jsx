"use client";

import BlogCard from "./BlogCard";
import DummyBlogs from "./DummyBlogs";

export default function BlogGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">
          {DummyBlogs.length} Blogs founded
        </h2>
        <button className="flex items-center gap-1 text-sm sm:text-xl font-medium">
          All Category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {DummyBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
}
