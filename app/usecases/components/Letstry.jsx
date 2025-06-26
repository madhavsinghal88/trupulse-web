import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/app/components/common/Button";

export default function Letstry() {
  return (
    <section className="relative  bg-purple-50  text-center px-4 py-16  md:py-24">
        <div className="max-w-7xl m-auto">
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Let's try this solution crafted<br className="hidden md:block " />
          specifically for your challanges
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-xl  mb-6">
          It's time to harness AI-powered one-on-one chats, group discussions,
          and surveys—all in one seamless solution.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <Button text="Lets Start Journey" icon={ArrowRight} />

          <Image
            width={200}
            height={100}
            className="mt-5"
            src="/images/7.png"
            alt="7 days trail"
          />
          <Image width={250} height={50} src="/images/line.png" alt="line" />
        </div>
      </div>
      </div>
    </section>
  );
}
