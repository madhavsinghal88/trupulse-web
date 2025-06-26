"use client";

import { useState } from "react";
import Image from "next/image";

const tabOptions = [
  {
    label: "One on one Chat",
    value: "chat",
    image: "/images/video.png",
        title: "1:1 Discussions	",
    description:"Conduct AI-run 1:1 chats, ask deep follow-ups, and deliver individual and group summaries seamlessly."  },
  {
    label: "Group discussion",
    value: "group",
    image: "/images/dashboard.png",
        title: "Focus Groups",
    description:"Host AI-moderated group discussions, gather diverse input, and view consolidated themes and sentiment in one report."  },
  {
    label: "Digital Survey",
    value: "survey",
    image: "/images/b1.png",
    title: "Surveys",
    description:"Launch AI-crafted surveys, customize outreach to specific sub-groups, and analyze aggregated responses with rich, real-time dashboards."  },
];

export default function Goals() {
  const [activeTab, setActiveTab] = useState("chat");

  const currentTab = tabOptions.find((tab) => tab.value === activeTab);

  return (
    <section className="py-16 px-6 max-w-7xl m-auto">
      <div className="flex flex-col xl:flex-row justify-between">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
          Goals You Can Achieve <br />
          with Generative AI
        </h2>

        {/* Dynamic Paragraph */}
        <div className="mt-6 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{currentTab.title}</h2>
          <p className="text-base leading-relaxed">{currentTab.description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-col sm:flex-row max-w-lg rounded-2xl w-fit sm:rounded-full border overflow-hidden text-sm font-medium">
        {tabOptions.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-6 py-3 transition cursor-pointer ${
              activeTab === tab.value ? "bg-purple-100" : "hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Image Display */}
      <div className="my-12 relative w-fit m-auto">
        <div className="p-4 border max-w-7xl bg-white rounded-2xl relative">
          <Image
            width={2000}
            height={2000}
            className="md:p-4"
            src={currentTab.image}
            alt={currentTab.label}
          />
        </div>

        {/* Background decorative elements */}
        <Image
          width={750}
          height={700}
          className="absolute right-0 top-0 size-72 sm:size-[600px] lg:size-[700px] z-0"
          src="/images/white.png"
          alt="white deco"
        />
        <Image
          width={500}
          height={500}
          className="absolute right-0 -top-5 size-52 sm:size-[400px] lg:size-[500px] z-0"
          src="/images/msg.png"
          alt="msg deco"
        />
      </div>
    </section>
  );
}
