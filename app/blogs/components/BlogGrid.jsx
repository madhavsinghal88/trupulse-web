// "use client";

// import BlogCard from "./BlogCard";
// import DummyBlogs from "./DummyBlogs";

// export default function BlogGrid() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl sm:text-2xl font-semibold">
//           {DummyBlogs.length} Blogs founded
//         </h2>
//         <button className="flex items-center gap-1 text-sm sm:text-xl font-medium">
//           All Category
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {DummyBlogs.map((blog, index) => (
//           <BlogCard key={index} blog={blog} />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "@/lib/getBlogs";
import Loader from "@/app/components/common/Loader";

const BLOGS_PER_PAGE = 9;

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getAllBlogs();
      setBlogs(data);
      setLoading(false);
    }
    load();
  }, []);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const getPaginatedBlogs = () => {
    const start = (currentPage - 1) * BLOGS_PER_PAGE;
    return blogs.slice(start, start + BLOGS_PER_PAGE);
  };

  if (loading) {
    return <Loader text="Loading blogs..." full />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-theme sm:text-2xl font-semibold">
          {blogs.length} Blogs found
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {getPaginatedBlogs().map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 text-sm rounded-md border cursor-pointer ${
              currentPage === i + 1
                ? "bg-theme text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
