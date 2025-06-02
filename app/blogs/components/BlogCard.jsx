"use client";

import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="space-y-2 border p-2 rounded-lg">
      <div className="w-full h-40 rounded-md overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold text-sm sm:text-xl leading-snug">{blog.title}</h3>
      <p className="font-light text-xs sm:text-base leading-snug">
        {blog.description}
      </p>
    </div>
  );
}
