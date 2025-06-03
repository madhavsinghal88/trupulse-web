import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./common/Button";

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl m-auto text-center px-4 py-16  md:py-24">
      {/* Decorative floating avatars */}
      <Image
        src="/images/1.png"
        alt="user"
        width={50}
        height={50}
        className="absolute top-16 left-6 rounded-full shadow-md"
      />
      <Image
        src="/images/2.png"
        alt="user"
        width={50}
        height={50}
        className="absolute top-5 right-20 rounded-full shadow-md"
      />
      <Image
        src="/images/3.png"
        alt="user"
        width={50}
        height={50}
        className="absolute bottom-10 left-4 md:left-[15%] rounded-full shadow-md"
      />
      <Image
        src="/images/4.png"
        alt="user"
        width={50}
        height={50}
        className="absolute top-[45%] hidden lg:block right-[15%] rounded-full shadow-md"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-medium mb-3">
          AI Powered Employee Engagement Sessions
        </p>

        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Revolutionize Employee Feedback
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-xl  mb-6">
          Our AI agent creates, conducts, & analyzes 1:1 discussions, focus
          groups and surveys on any topic. TruPulse eliminates the work of
          understanding employees.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <Button text="Lets Start" icon={ArrowRight} />

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

      {/* Bottom right bubble (like "Hiring survey results") */}
      <div className="absolute -bottom-10 sm:-bottom-5 lg:bottom-20 max-w-[200px] text-start right-[15%] bg-green-100 text-sm text-black px-4 py-2 rounded-md shadow-md flex items-center gap-2">
        <span>
          Hiring survey results are in—view them now.
          <Image
            src="/images/pacman.png"
            alt="user"
            width={20}
            height={20}
            className="absolute bottom-2 right-2 rounded-full shadow-md"
          />
        </span>
        <Image
          src="/images/5.png"
          alt="user"
          width={50}
          height={50}
          className="absolute -bottom-8 -left-12 rounded-full shadow-md"
        />
        <Image
          src="/images/arrow.png"
          alt="user"
          width={50}
          height={50}
          className="absolute -bottom-12 -left-5 rounded-full"
        />
      </div>
    </section>
  );
}
