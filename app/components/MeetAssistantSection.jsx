"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./common/Button";
import { ArrowRight } from "lucide-react";

const tabContent = {
  creating: {
    title: "TruPulse Creates It",
    description:
      "AI generates discussion topics and survey questions based on the use case you choose.",
    image: "/images/assist.png",
  },
  exicuter: {
    title: "TruPulse Runs It",
    description:
      "AI conducts sessions, dynamically probing discussion topics and participant replies.",
    image: "/images/dashboard.png",
  },
  analysing: {
    title: "TruPulse Analyzes It",
    description:
      "AI distills feedback into themes, metrics, and polished executive summaries automatically.",
    image: "/images/video.png",
  },
};

export default function MeetAssistantSection() {
  const [activeTab, setActiveTab] = useState("creating");
  const current = tabContent[activeTab];

  return (
    <section className="bg-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 m-auto">
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet TruPulse, Your AI Agent!
          </h2>
          <p className="text-lg sm:text-2xl mb-8  max-w-md">
            You set the strategy, TruPulse creates, runs, and analyzes your
            feedback sessions.
          </p>

          <div className="space-y-6 text-sm">
            {Object.entries(tabContent).map(([key, item]) => (
              <div
                key={key}
                onClick={() => setActiveTab(key)}
                className={`cursor-pointer hover:scale-105 duration-300 rounded-xl${
                  activeTab === key
                    ? "font-semibold px-2 rounded-lg bg-purple-100"
                    : ""
                }`}
              >
                <p className="font-bold text-base">{item.title}</p>
                <p className="max-w-md">{item.description}</p>
                <hr className="my-2" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button text="Lets Start Journey" icon={ArrowRight} />
          </div>
        </div>

        {/* Right Side Card */}
        <div className="w-full lg:w-1/2 text-secondary-text">
          <Image
            width={1000}
            height={1000}
            src={current.image}
            alt={current.title}
            className="rounded-xl object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
}
