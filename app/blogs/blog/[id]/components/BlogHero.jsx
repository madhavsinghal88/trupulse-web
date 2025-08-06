"use client";
import moment from "moment";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function BlogHero({ post }) {
  const formatDate = (value) => {
    if (!value) return "";
    // Handle both Firebase Timestamp objects and converted milliseconds
    if (typeof value === 'object' && value.seconds) {
      return moment(new Date(value.seconds * 1000)).format("dddd, MMMM Do YYYY");
    }
    // Handle converted milliseconds
    return moment(value).format("dddd, MMMM Do YYYY");
  };

  const description =
    post?.data?.description ||
    post?.data?.excerpt ||
    (post?.data?.content
      ? post.data.content.replace(/<[^>]+>/g, "").slice(0, 200) + "..."
      : "");

  const link =
    post?.data?.customURL?.length > 3
      ? `https://www.trupulse.ai/blogs/blog/${post.data.customURL}`
      : `https://www.trupulse.ai/blogs/blog/${post.data.title
          ?.toLowerCase()
          .replace(/[^a-zA-Z ]/g, "")
          .split(" ")
          .join("-")}`;

  const mailtoHref = `mailto:?subject=${encodeURIComponent(
    post?.data?.title || ""
  )}&body=${encodeURIComponent(link)}`;

  const shareOptions = [
    {
      icon: <FaFacebookF size={20} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
      label: "Share on Facebook",
      color: "text-blue-600",
    },
    {
      icon: <FaTwitter size={20} />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(post?.data?.title || "")}`,
      label: "Share on Twitter",
      color: "text-blue-400",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(link)}&title=${encodeURIComponent(post?.data?.title || "")}`,
      label: "Share on LinkedIn",
      color: "text-blue-700",
    },
    {
      icon: <FaWhatsapp size={20} />,
      href: `https://wa.me/?text=${encodeURIComponent(link)}`,
      label: "Share on WhatsApp",
      color: "text-green-600",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: mailtoHref,
      label: "Share by Email",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="bg-pink-100 py-32 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 sm:px-14 md:px-20 max-w-4xl text-start flex flex-col">
          {/* Date */}
          <p className="text-base font-medium text-pink-600 mb-1 tracking-wide">
            {formatDate(post?.data?.created_at)}
          </p>
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-Poppins mt-2 mb-4 leading-tight">
            {post?.data?.title}
          </h1>
          {/* Description/Subtitle */}
          {description && (
            <p className="mb-6 text-lg text-secondary-text">{description}</p>
          )}
          {/* Share buttons */}
          <div className="flex gap-3 mt-2 mb-2">
            {shareOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={option.label}
                className={`hover:scale-125 duration-300 rounded-full p-2 transition-all ${option.color}`}
              >
                {option.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
