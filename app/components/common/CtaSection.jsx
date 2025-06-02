import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <>
      <div className="relative max-w-7xl m-auto my-16 z-10">
        {/* Layered Backgrounds */}
        <div className="absolute -top-3 inset-x-3 rounded-2xl h-full bg-indigo-300 z-[-2]"></div>
        <div className="absolute -top-6 inset-x-6 rounded-2xl h-full bg-indigo-200 z-[-3]"></div>

        <div className="bg-primary-text text-white rounded-2xl px-6 md:px-12 py-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-start max-w-3xl ">
            It&apos;s time to harness AI-powered one-on-one chats, group
            discussions, and surveys—all in one seamless solution.
          </h2>
          <Button text="Lets Start Journey" icon={ArrowRight} />
        </div>
      </div>
    </>
  );
};

export default CtaSection;
