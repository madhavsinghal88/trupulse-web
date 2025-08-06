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

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "posts", id));
    }
  };

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

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-md shadow border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 font-medium">Title</th>
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

      {/* Mobile Cards */}
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

      {/* Pagination */}
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
    </section>
  );
}
