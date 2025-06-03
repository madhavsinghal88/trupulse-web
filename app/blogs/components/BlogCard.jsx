"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/blog/${blog.id || 1}`}>
      <div className="space-y-2 hover:scale-105 duration-300 cursor-pointer border p-2 rounded-lg">
        <div className="w-full h-40 rounded-md overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="font-bold text-sm sm:text-xl leading-snug">
          {blog.title}
        </h3>
        <p className="font-light text-xs sm:text-base py-3 leading-snug">
          {blog.description}
        </p>
        <div className="flex items-center gap-3 py-2">
          <Image
            src="/images/1.png"
            alt="Philip Darville"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold text-sm">Philip Darville</div> is the
            founder of Digital Bite Media,
            <p className="text-xs text-gray-600">3 Days ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
