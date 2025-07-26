// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function BlogCard({ blog }) {
//   return (
//     <Link href={`/blogs/blog/${blog.id || 1}`}>
//       <div className="space-y-2 hover:scale-105 duration-300 cursor-pointer border p-2 rounded-lg">
//         <div className="w-full h-40 rounded-md overflow-hidden">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             width={400}
//             height={160}
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <h3 className="font-bold text-sm sm:text-xl leading-snug">
//           {blog.title}
//         </h3>
//         <p className="font-light text-xs sm:text-base py-3 leading-snug">
//           {blog.description}
//         </p>
//         <div className="flex items-center gap-3 py-2">
//           <Image
//             src="/images/1.png"
//             alt="Philip Darville"
//             width={48}
//             height={48}
//             className="rounded-full"
//           />
//           <div>
//             <div className="font-semibold text-sm">Philip Darville</div> is the
//             founder of Digital Bite Media,
//             <p className="text-xs text-gray-600">3 Days ago</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function BlogCard({ blog }) {
  const data = blog?.data || blog;
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

  const formattedDate =
    blog?.created_at && blog.created_at.seconds
      ? moment(blog.created_at.seconds * 1000).fromNow()
      : "Unknown date";

  let preview = "";
  if (typeof window !== "undefined") {
    try {
      const doc = new DOMParser().parseFromString(
        blog.content || "",
        "text/html"
      );
      preview = doc?.body?.textContent?.slice(0, 100) || "";
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
          className="object-cover w-full h-60"
        />
        <h3 className="font-bold text-sm sm:text-xl line-clamp-2 leading-snug">{title}</h3>
        <p className="text-xs text-gray-600">
          {createdAt?.seconds
            ? moment(createdAt.seconds * 1000).fromNow()
            : "Unknown date"}
        </p>
      </div>
    </Link>
  );
}
