// import React from 'react'
// import BlogHero from './components/BlogHero'
// import BlogContent from './components/BlogContent'
// import RelatedBlogs from './components/RelatedBlogs'
// import CtaSection from '@/app/components/common/CtaSection'

// const page = () => {
//   return (
//     <div>
//         <BlogHero/>
//         <BlogContent/>
//         <RelatedBlogs/>
//         <CtaSection/>
//     </div>
//   )
// }

// export default page

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogHero from "./components/BlogHero";
import BlogContent from "./components/BlogContent";
import RelatedBlogs from "./components/RelatedBlogs";
import CtaSection from "@/app/components/common/CtaSection";
import { getAllBlogs } from "@/lib/getBlogs";
import Loader from "@/app/components/common/Loader";

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const blogs = await getAllBlogs();

      // Match blog by customURL or slugified title
      const selected = blogs.find(
        (b) =>
          b.customURL === id ||
          b.title
            ?.toLowerCase()
            .replace(/[^a-zA-Z ]/g, "")
            .split(" ")
            .join("-") === id
      );

      setBlog(selected);
      setRelated(blogs.filter((b) => b.id !== selected?.id));
      setLoading(false);
    }
    if (id) load();
  }, [id]);

  if (loading) return <Loader full text="Loading blog details..." />;
  if (!blog) return <div className="text-center p-10">Blog not found.</div>;

  return (
    <div>
      <BlogHero post={{ data: blog }} />
      <BlogContent post={{ data: blog }} /> 
      <RelatedBlogs posts={related} />
      <CtaSection />
    </div>
  );
}
