import Image from "next/image";
import Button from "./common/Button";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Dccusantium doloremque laudantium, totam rem aperiam, eaque.",
    desc: "Security isn’t just about compliance—it directly impacts customer trust and conversions.",
    img: "/images/b1.png",
  },
  {
    id: 2,
    title: "Dccusantium doloremque laudantium, totam rem aperiam, eaque.",
    desc: "Choosing the right payment gateway can make or break your checkout experience. Discover the must-have features,",
    img: "/images/b2.png",
  },
  {
    id: 3,
    title: "Dccusantium doloremque laudantium, totam rem aperiam, eaque.",
    desc: "A slow payment process can lead to cart abandonment and lost sales. Find out how a high-speed payment gateway .",
    img: "/images/b3.png",
  },
];

export default function BlogShowcaseSection() {
  return (
    <section className="px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Link */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Insights & Innovations <br /> Explore Our Latest Blogs!
            </h2>
          </div>
          <a href="#" className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline">
            View All Blogs →
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <Image
                src={blog.img}
                alt="Blog thumbnail"
                width={400}
                height={240}
                className="w-full rounded-md mb-4"
              />
              <h3 className="font-bold text-base leading-snug mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-secondary-text">{blog.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative z-10">
          {/* Layered Backgrounds */}
          <div className="absolute -top-3 inset-x-3 rounded-2xl h-full bg-indigo-300 z-[-2]"></div>
          <div className="absolute -top-6 inset-x-6 rounded-2xl h-full bg-indigo-200 z-[-3]"></div>

          <div className="bg-primary-text text-white rounded-2xl px-6 md:px-12 py-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-start max-w-3xl ">
              It&apos;s time to harness AI-powered one-on-one chats,
              group discussions, and surveys—all in one seamless solution.
            </h2>
                      <Button text="Jets Start Journey" icon={ArrowRight} />

          </div>
        </div>
      </div>
    </section>
  );
}
