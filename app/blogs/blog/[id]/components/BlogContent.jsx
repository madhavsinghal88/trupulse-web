// "use client";
// import moment from "moment";
// import parse from "html-react-parser";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
//   EmailShareButton,
//   EmailIcon,
//   PinterestShareButton,
//   PinterestIcon,
//   LinkedinShareButton,
//   LinkedinIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   RedditShareButton,
//   RedditIcon,
// } from "next-share";

// export default function BlogContent({ post }) {
//   const link = post?.data?.customURL?.length > 3
//     ? `https://www.trupulse.ai/blog/${post.data.customURL}`
//     : `https://www.trupulse.ai/blog/${post.data.title
//         ?.toLowerCase()
//         .replace(/[^a-zA-Z ]/g, "")
//         .split(" ")
//         .join("-")}`;

//   const parseOption = {
//     replace: (domNode) => {
//       if (domNode.attribs && domNode.attribs.class === "remove") {
//         return <></>;
//       }
//     },
//   };

//   return (
//     <section className="max-w-4xl mx-auto px-4 py-10">
//       {/* Social Share Buttons */}
//       <div className="flex justify-center gap-3 flex-wrap mb-8">
//         <FacebookShareButton url={link} quote={post?.data?.title}>
//           <FacebookIcon size={32} round />
//         </FacebookShareButton>
//         <EmailShareButton url={link} subject={post?.data?.title} body={post.data.content}>
//           <EmailIcon size={32} round />
//         </EmailShareButton>
//         <WhatsappShareButton url={link} title={post?.data?.title}>
//           <WhatsappIcon size={32} round />
//         </WhatsappShareButton>
//         <PinterestShareButton url={link} media={post?.data?.cover_image}>
//           <PinterestIcon size={32} round />
//         </PinterestShareButton>
//         <LinkedinShareButton url={link}>
//           <LinkedinIcon size={32} round />
//         </LinkedinShareButton>
//         <RedditShareButton url={link} title={post?.data?.title}>
//           <RedditIcon size={32} round />
//         </RedditShareButton>
//         <TwitterShareButton url={link} title={post?.data?.title}>
//           <TwitterIcon size={32} round />
//         </TwitterShareButton>
//       </div>

//       {/* Main Blog Content */}
//       <div>
//         {parse(post?.data?.content || "", parseOption)}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import moment from "moment";
// import parse from "html-react-parser";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
//   EmailShareButton,
//   EmailIcon,
//   PinterestShareButton,
//   PinterestIcon,
//   LinkedinShareButton,
//   LinkedinIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   RedditShareButton,
//   RedditIcon,
// } from "next-share";

// export default function BlogContent({ post }) {
//   const [headings, setHeadings] = useState([]);
//   const [parsedHTML, setParsedHTML] = useState(null);

//   const content = post?.data?.content || "";
//   const link =
//     post?.data?.customURL?.length > 3
//       ? `https://www.trupulse.ai/blogs/blog/${post.data.customURL}`
//       : `https://www.trupulse.ai/blogs/blog/${post.data.title
//           ?.toLowerCase()
//           .replace(/[^a-zA-Z ]/g, "")
//           .split(" ")
//           .join("-")}`;

//   useEffect(() => {
//     if (typeof window !== "undefined" && content) {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(content, "text/html");
//       const headingElements = [...doc.querySelectorAll("h2, h3, h4, h5, h6")];

//       const extractedHeadings = headingElements.map((el, i) => {
//         const id = `heading-${i}`;
//         el.setAttribute("id", id);

//         // Get 2–3 line description (up to 200 chars from sibling)
//         let preview = "";
//         let next = el.nextElementSibling;
//         while (next && !preview && next.textContent.trim().length < 40) {
//           next = next.nextElementSibling;
//         }
//         preview = next?.textContent?.slice(0, 100).replace(/\n/g, " ") + "...";

//         return {
//           id,
//           text: el.textContent,
//           preview,
//         };
//       });

//       setHeadings(extractedHeadings);
//       setParsedHTML(doc.body.innerHTML);
//     }
//   }, [content]);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
//       {/* Sidebar Index */}
//       <aside className="md:col-span-1 border-r pr-4 space-y-6 sticky top-10 max-h-screen overflow-auto hidden md:block">
//         <h3 className="text-lg font-semibold">On this page</h3>
//         <ul className="space-y-4">
//           {headings.map((heading) => (
//             <li key={heading.id}>
//               <a
//                 href={`#${heading.id}`}
//                 className="block text-sm font-medium hover:underline"
//               >
//                 {heading.text}
//               </a>
//               <p className="text-xs text-gray-500">{heading.preview}</p>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <div className="md:col-span-3">
//         {/* Social Share Buttons */}
//         <div className="flex justify-start gap-3 flex-wrap mb-8">
//           <FacebookShareButton url={link} quote={post?.data?.title}>
//             <FacebookIcon size={32} round />
//           </FacebookShareButton>
//           <EmailShareButton
//             url={link}
//             subject={post?.data?.title}
//             body={post.data.content}
//           >
//             <EmailIcon size={32} round />
//           </EmailShareButton>
//           <WhatsappShareButton url={link} title={post?.data?.title}>
//             <WhatsappIcon size={32} round />
//           </WhatsappShareButton>
//           <PinterestShareButton
//             url={link}
//             media={post?.data?.cover_image}
//           >
//             <PinterestIcon size={32} round />
//           </PinterestShareButton>
//           <LinkedinShareButton url={link}>
//             <LinkedinIcon size={32} round />
//           </LinkedinShareButton>
//           <RedditShareButton url={link} title={post?.data?.title}>
//             <RedditIcon size={32} round />
//           </RedditShareButton>
//           <TwitterShareButton url={link} title={post?.data?.title}>
//             <TwitterIcon size={32} round />
//           </TwitterShareButton>
//         </div>

//         {/* Blog Title and Date */}
//         <h1 className="text-3xl font-bold mb-2">{post?.data?.title}</h1>
//         <p className="text-sm text-gray-500 mb-6">
//           {post?.data?.created_at?.seconds
//             ? moment(post.data.created_at.seconds * 1000).format("dddd, MMMM Do YYYY")
//             : ""}
//         </p>

//         {/* Main Blog HTML */}
//         <div className="prose prose-lg max-w-none">
//           {parse(parsedHTML || "")}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import moment from "moment";

export default function BlogContent({ post }) {
  const [headings, setHeadings] = useState([]);
  const [parsedHTML, setParsedHTML] = useState(null);

  const content = post?.data?.content || "";

  useEffect(() => {
    if (typeof window !== "undefined" && content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const headingEls = [...doc.querySelectorAll("h1,h2, h3, h4, h5, h6")];

      const norm = (s = "") =>
        s
          .replace(/\u00a0/g, " ")
          .replace(/\s+/g, " ")
          .trim();

      const extracted = [];
      headingEls.forEach((el) => {
        const text = norm(el.textContent);
        if (!text) return; // 🚫 skip <hX><br></hX> etc.

        // stable slug id from text (fallback if empty after slugging)
        const slug =
          text
            .toLowerCase()
            .replace(/[^\w]+/g, "-")
            .replace(/(^-|-$)/g, "") || `heading-${extracted.length}`;
        el.setAttribute("id", slug);

        // pick the first meaningful sibling (not another heading, not empty)
        let sib = el.nextElementSibling;
        while (sib && /^H[2-6]$/.test(sib.tagName))
          sib = sib.nextElementSibling;

        const sibText = sib ? norm(sib.textContent) : "";
        
        // Truncate to ~80 chars, but end at word boundary with ellipsis
        let preview = "";
        if (sibText) {
          if (sibText.length <= 80) {
            preview = sibText;
          } else {
            // Find the last word boundary before 80 chars
            const truncated = sibText.slice(0, 80);
            const lastSpace = truncated.lastIndexOf(" ");
            // Use word boundary if it's reasonable (not too close to start)
            const cutoff = lastSpace > 40 ? lastSpace : 80;
            preview = truncated.slice(0, cutoff) + "...";
          }
        }

        extracted.push({ id: slug, text, preview });
      });

      setHeadings(extracted);
      setParsedHTML(doc.body.innerHTML);
    }
  }, [content]);

  return (
    <section className="max-w-7xl w-[90vw] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-10">
        {/* Sidebar Index */}
        <aside className="md:col-span-2 border-r pr-4 space-y-6 sticky top-24 h-max hidden md:block">
          <h3 className="text-lg font-semibold tracking-wide mb-2">
            On this page
          </h3>
          <ul className="space-y-4 list-none">
            {" "}
            {/* <- remove discs */}
            {headings
              .filter((h) => h.text && h.text.trim())
              .map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="block text-sm font-medium hover:underline"
                  >
                    {h.text}
                  </a>
                  {h.preview ? (
                    <p className="text-xs text-gray-500">{h.preview}</p>
                  ) : null}
                </li>
              ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-6">
          {/* Featured Box Section */}
          {post?.data?.featured && (
            <div className="bg-gradient-to-tr from-orange-100 to-pink-100 p-6 rounded-xl shadow mb-8 flex flex-col md:flex-row items-center gap-6">
              <img
                src={post?.data?.featured_image || "/featured.png"}
                alt="Featured"
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h4 className="text-orange-700 font-bold mb-1">
                  {post.data.featured_title || "Featured"}
                </h4>
                <p className="text-base ">
                  {post.data.featured_description || ""}
                </p>
              </div>
            </div>
          )}
            {/* Featured image/cover inserted at the top of content */}
            {post?.data?.cover_image && (
            <div className="mb-10">
              <img
                src={post.data.cover_image}
                alt={post?.data?.altTag || "Blog cover"}
                className="rounded-lg w-full aspect-video object-cover my-10 mx-auto shadow-lg"
              />
            </div>
          )}
        {/* The Blog Main HTML Content */}
          <div className="prose prose-lg max-w-none">
            {parse(parsedHTML || "")}
          </div>
        </div>
      </div>
    </section>
  );
}
