"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Button from "./common/Button";

const surveyItems = [
  {
    name: "Jane",
    progress: 80,
    avatar: "/images/5.png",
    completed: false,
  },
  {
    name: "John",
    progress: 25,
    avatar: "/images/4.png",
    completed: false,
  },
  {
    name: "Emily",
    progress: 100,
    avatar: "/images/1.png",
    completed: true,
  },
  {
    name: "Jane",
    progress: 85,
    avatar: "/images/2.png",
    completed: false,
  },
  {
    name: "Emily",
    progress: 100,
    avatar: "/images/3.png",
    completed: true,
  },
];

export default function SurveySection() {
  return (
    <section className="py-20 px-4  overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Text */}
        <div className="flex flex-col gap-4 items-start justify-center">
          <h3 className="text-xl sm:text-2xl font-semibold border-b-2 border-black mb-2 ">
            Surveys
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold leading-10 md:leading-18 max-w-lg mb-2">
            Intelligent Surveys for Deeper, Faster Insights
          </h2>

          <div className="space-y-6 max-w-md text-base mb-5 ">
            {[
              "AI-Designed Questions: Deploy smart, adaptive surveys that ask the right questions every time.",
              "Targeted Distribution: Customize delivery to reach precise segments of your audience.",
              "Live Dashboards: Monitor trends and analyze responses in real-time with visual, actionable reports.",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className=" mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <Button text="Book a demo" />
        </div>

        {/* Right Survey Cards */}
        <div className="space-y-4 relative m-auto">
          {/* Right background image */}
          <div className="absolute -right-0 -top-20 w-[600px] h-full">
            <Image
              src="/images/purple.png"
              alt="Survey background"
              fill
              className="object-cover -z-1"
            />
          </div>
          {/* Top card */}
          <div className="bg-white rounded-xl p-4 max-w-md shadow-sm border border-gray-200 flex justify-between items-center">
            <div>
              <h4 className="font-semibold ">Anniversary Trip Ideas 2025</h4>
              <p className="text-sm text-secondary-text max-w-sm">
                Plan a memorable company trip to celebrate our [Xth] Anniversary
              </p>
            </div>
            <Image
              src="/images/cap.png"
              alt="Celebration"
              width={120}
              height={120}
            />
          </div>

          {surveyItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl flex items-center justify-between px-4 py-3 ${
                item.completed
                  ? "bg-green-50 text-green-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 w-full">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                {!item.completed ? (
                  <div className="flex-1">
                    <div className="h-3 bg-gray-100 rounded-full w-full">
                      <div
                        className="h-3 bg-green-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 font-medium text-right pr-4">
                    Completed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
