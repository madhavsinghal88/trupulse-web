"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db , logout} from "@/firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Loader from "@/app/components/common/Loader";
import { Pencil, Eye, Trash2 } from "lucide-react";

const POSTS_PER_PAGE =10;

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showOldBlogs, setShowOldBlogs] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/blogs/login");
    }
  }, [user, loading]);

  console.log("posts",posts)

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      const sorted = docs.sort(
        (a, b) => b.data.created_at?.seconds - a.data.created_at?.seconds
      );
      setPosts(sorted);
      setLoadingPosts(false);
    });
    return () => unsubscribe();
  }, []);

  // Filter and sort posts
  const filteredAndSortedPosts = posts
    .filter((post) => {
      // Search filter
      const matchesSearch = post.data.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      // Status filter
      const matchesStatus = 
        statusFilter === "all" || 
        (statusFilter === "published" && post.data?.isPublished) ||
        (statusFilter === "unpublished" && !post.data?.isPublished);
      
      // Date filter - show only blogs from 2025 onwards by default
      const postDate = post.data.created_at?.seconds ? new Date(post.data.created_at.seconds * 1000) : null;
      const isFrom2025OrLater = postDate && postDate.getFullYear() >= 2025;
      const matchesDateFilter = showOldBlogs || isFrom2025OrLater;
      
      return matchesSearch && matchesStatus && matchesDateFilter;
    })
    .sort((a, b) => {
      const dateA = a.data.created_at?.seconds || 0;
      const dateB = b.data.created_at?.seconds || 0;
      
      switch (sortBy) {
        case "oldest":
          return dateA - dateB;
        case "newest":
          return dateB - dateA;
        default:
          return dateB - dateA;
      }
    });

  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "posts", id));
    }
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, statusFilter, showOldBlogs]);

  if (loading || loadingPosts) {
    return <Loader text="Loading admin dashboard..." full />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-32">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-theme">
          Admin Dashboard
        </h1>
        <div className="flex items-center gap-4">
        <Link
          href="/blogs/create"
          className="bg-theme text-white text-sm px-4 py-2 rounded-md hover:opacity-90"
        >
          + Add New Blog
        </Link>
        <button onClick={logout} className="bg-red-500 cursor-pointer text-white text-sm px-4 py-2 rounded-md hover:opacity-90">Logout</button>
      </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search blogs by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent"
            />
          </div>
          
          {/* Sort Dropdown */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 cursor-pointer border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 cursor-pointer py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent"
            >
              <option value="all">All Blogs</option>
              <option value="published">Published Only</option>
              <option value="unpublished">Unpublished Only</option>
            </select>
          </div>
        </div>
        
        {/* Toggle Switch for Old Blogs */}
        <div className="flex items-center gap-3">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={showOldBlogs}
                onChange={(e) => setShowOldBlogs(e.target.checked)}
              />
              <div className={`block w-14 h-7 rounded-full transition-colors duration-200 ease-in-out ${
                showOldBlogs ? 'bg-theme' : 'bg-gray-300'
              }`}>
                <div className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out ${
                  showOldBlogs ? 'transform translate-x-7' : 'transform translate-x-0'
                }`}></div>
              </div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700">
              Show blogs before 2025
            </span>
          </label>
        </div>
        
        {/* Results Count */}
        <div className="text-sm text-gray-600">
          Showing {filteredAndSortedPosts.length} of {posts.length} blogs
        </div>
      </div>

      {/* Desktop Table */}
      {paginatedPosts.length > 0 ? (
        <div className="hidden md:block overflow-x-auto rounded-md shadow border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="">
              <th className="px-6 py-3 font-medium">Title</th>
              <th className="px-6 py-3 font-medium">Date Posted</th>
              <th className="px-6 py-3 font-medium">Published</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.map((post) => {
              const isPublished = post.data?.isPublished ?? false;

              return (
                <tr
                  key={post.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">{post.data.title}</td>
                  <td className="px-6 py-4">
                    {post.data.created_at?.seconds 
                      ? new Date(post.data.created_at.seconds * 1000).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })
                      : 'N/A'
                    }
                  </td>
                  <td className="px-6 py-4">{isPublished ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3 items-center">
                      <Link href={`/blogs/edit/${post.id}`}>
                        <button
                          title="Edit"
                          className="p-2 bg-blue-100 cursor-pointer text-blue-600 rounded-full hover:bg-blue-200"
                        >
                          <Pencil size={16} />
                        </button>
                      </Link>
                      <Link
                        href={
                          post.data.customURL?.length > 3
                            ? `/blogs/preview/${post.data.customURL}`
                            : `/blogs/preview/${post.data.title
                                .toLowerCase()
                                .replace(/[^a-zA-Z ]/g, "")
                                .split(" ")
                                .join("-")}`
                        }
                      >
                        <button
                          title="Preview"
                          className="p-2 bg-gray-100 cursor-pointer text-gray-700 rounded-full hover:bg-gray-200"
                        >
                          <Eye size={16} />
                        </button>
                      </Link>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(post.id)}
                        className="p-2 bg-red-100 cursor-pointer text-red-600 rounded-full hover:bg-red-200"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      ) : (
        <div className="hidden md:flex items-center justify-center py-12 text-gray-500">
          <div className="text-center">
            <p className="text-lg font-medium">No blogs found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        </div>
      )}

      {/* Mobile Cards */}
      {paginatedPosts.length > 0 ? (
        <div className="md:hidden space-y-4">
        {paginatedPosts.map((post) => {
              const isPublished = post.data?.isPublished ?? false;

          return (
            <div
              key={post.id}
              className="border rounded-md shadow p-4 space-y-2"
            >
              <div className="font-semibold text-base">{post.data.title}</div>
              <div className="text-sm text-gray-600">
                Date Posted: {post.data.created_at?.seconds 
                  ? new Date(post.data.created_at.seconds * 1000).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })
                  : 'N/A'
                }
              </div>
              <div className="text-sm text-gray-600">
                Published: {isPublished ? "Yes" : "No"}
              </div>
              <div className="flex justify-start gap-4 pt-2">
                <Link href={`/blogs/edit/${post.data.id}`}>
                  <button
                    title="Edit"
                    className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                  >
                    <Pencil size={16} />
                  </button>
                </Link>
                <Link
                  href={
                    post.data.customURL?.length > 3
                      ? `/blogs/preview/${post.data.customURL}`
                      : `/blogs/preview/${post.data.title
                          .toLowerCase()
                          .replace(/[^a-zA-Z ]/g, "")
                          .split(" ")
                          .join("-")}`
                  }
                >
                  <button
                    title="Preview"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                  >
                    <Eye size={16} />
                  </button>
                </Link>
                <button
                  title="Delete"
                  onClick={() => handleDelete(post.id)}
                  className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
        </div>
      ) : (
        <div className="md:hidden flex items-center justify-center py-12 text-gray-500">
          <div className="text-center">
            <p className="text-lg font-medium">No blogs found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md border text-sm ${
                currentPage === i + 1
                  ? "bg-theme text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {i + 1}
          </button>
          ))}
        </div>
      )}
    </section>
  );
}
