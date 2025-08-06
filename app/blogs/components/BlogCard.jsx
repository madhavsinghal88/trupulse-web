"use client";

import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function BlogCard({ blog }) {
  const data = blog?.data || blog;
  const content = data?.content || "";
  const title = data?.title || "Untitled";
  const cover = data?.cover_image || "/fallback-image.jpg";
  const createdAt = data?.created_at;
  const alt = data?.altTag || data?.title || "blog image";

  const getSlug = () => {
    const title = blog?.title || blog?.data?.title;
    const customURL = blog?.customURL || blog?.data?.customURL;

    if (customURL?.length > 3) return customURL;

    return title
      ?.toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .join("-");
  };

  // Extract preview from HTML
  let preview = "";
  if (typeof window !== "undefined" && content) {
    try {
      const doc = new DOMParser().parseFromString(content, "text/html");
      preview = doc?.body?.textContent?.slice(0, 120) + "...";
    } catch (e) {
      preview = "";
    }
  }

  return (
    <Link href={`/blogs/blog/${getSlug()}`}>
      <div className="space-y-2 hover:scale-105 duration-300 cursor-pointer border p-2 rounded-lg">
        <Image
          src={cover}
          alt={alt}
          width={400}
          height={160}
          className="object-cover w-full h-60 rounded-md"
        />
        <h3 className="font-bold text-sm sm:text-xl line-clamp-2 leading-snug">
          {title}
        </h3>
        {preview && (
          <p className="font-light text-xs sm:text-base text-gray-700 leading-snug">
            {preview}
          </p>
        )}
        <p className="text-xs text-gray-600">
          {createdAt?.seconds
            ? moment(createdAt.seconds * 1000).format("dddd, MMMM Do YYYY")
            : "Unknown date"}
        </p>
      </div>
    </Link>
  );
}
