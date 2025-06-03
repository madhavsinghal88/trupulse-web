"use client";

import BlogCard from "@/app/blogs/components/BlogCard";
import Image from "next/image";
import blogs from "@/app/blogs/components/DummyBlogs";

export default function BlogContent() {
  const blog = blogs[0];

  return (
    <div className="bg-white text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-10">
        {/* Left Navigation */}
        <aside className="space-y-6 text-xs font-medium">
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">Introduction</div>
            <div className="pl-3 font-normal">
              The Importance of Staying Informed in a Fast-Paced Digital World
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">Emerging Business Trends</div>
            <div className="pl-3 font-normal">
              • Key Shifts in Consumer Behavior
            </div>
            <div className="pl-3 font-normal">
              • The Rise of AI and Automation
            </div>
            <div className="pl-3 font-normal">
              • Remote Work and Digital Collaboration
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">
              Growth Strategies That Work
            </div>
            <div className="pl-3 font-normal">
              • Data-Driven Decision Making
            </div>
            <div className="pl-3 font-normal">
              • Building a Scalable Marketing Engine
            </div>
            <div className="pl-3 font-normal">
              • Customer-Centric Product Development
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">Technology as a Catalyst</div>
            <div className="pl-3 font-normal">
              • Leveraging Cloud and SaaS Solutions
            </div>
            <div className="pl-3 font-normal">
              • The Integration of AI for Competitive Advantage
            </div>
            <div className="pl-3 font-normal">
              • Cybersecurity and Data Privacy Essentials
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">
              Case Studies & Success Stories
            </div>
            <div className="pl-3 font-normal">
              • How Businesses Thrived with Innovation
            </div>
            <div className="pl-3 font-normal">
              • Lessons from Real-World Digital Transformation
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">
              Expert Insights & Thought Leadership
            </div>
            <div className="pl-3 font-normal">
              • Interviews with Industry Leaders
            </div>
            <div className="pl-3 font-normal">
              • Predictions for the Next 5 Years
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">Conclusion</div>
            <div className="pl-3 font-normal">
              • Turning Insight into Action for Sustainable Growth
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-bold sm:text-lg">
              Further Reading & Resources
            </div>
            <div className="pl-3 font-normal">
              • Recommended Tools, Books, and Podcasts
            </div>
            <div className="pl-3 font-normal">
              • How to Stay Updated with Our Blog
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-10">
          <div className="space-y-4">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/images/dashboard.png"
              alt="browser screenshot"
              width={1280}
              height={720}
              className="rounded-md w-full"
            />
          </div>

          <div className="space-y-4">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
        </main>

        {/* Right Highlight Section */}
        <aside className="hidden lg:block">
          <BlogCard blog={blog} />
        </aside>
      </div>
    </div>
  );
}
