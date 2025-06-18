"use client";

import { useState } from "react";
import {
  FileText,
  Users,
  Star,
  Smile,
  ClipboardList,
  LogOut,
} from "lucide-react";

const tabs = [
  {
    title: "Talent Lifecycle",
    desc: "Seamless lifecycle feedback ensures smooth transitions at every stage.",
    content: [
      {
        icon: FileText,
        title: "Onboarding Feedback",
        desc: "Unlock potential with continuous AI-led performance insights.",
      },
      {
        icon: Star,
        title: "New Hire Experience",
        desc: "Unlock potential with continuous AI-led performance insights.",
      },
      {
        icon: Users,
        title: "Stay Interviews",
        desc: "Unlock potential with continuous AI-led performance insights.",
      },
      {
        icon: ClipboardList,
        title: "Retention Risk Feedback",
        desc: "Unlock potential with continuous AI-led performance insights.",
      },
      {
        icon: LogOut,
        title: "Exit Interviews",
        desc: "Unlock potential with continuous AI-led performance insights.",
      },
    ],
  },
  {
    title: "Performance & Development",
    desc: "Unlock potential with continuous AI-led performance insights.",
    content: [
      {
        icon: FileText,
        title: "Quarterly Reviews",
        desc: "Automated insights on performance trends and gaps.",
      },
      {
        icon: Users,
        title: "Mentorship Feedback",
        desc: "Capture growth feedback from mentors.",
      },
    ],
  },
  {
    title: "Engagement & Culture",
    desc: "Foster engagement and culture with AI-driven feedback insights.",
    content: [
      {
        icon: Smile,
        title: "Culture Health",
        desc: "Assess culture strength and gaps over time.",
      },
      {
        icon: Users,
        title: "Team Sentiment",
        desc: "AI-powered emotional tone analysis from feedback.",
      },
    ],
  },
  {
    title: "Compensation, Benefits & Wellbeing",
    desc: "Optimize compensation, benefits, and wellbeing through AI feedback.",
    content: [
      {
        icon: ClipboardList,
        title: "Benefit Feedback",
        desc: "Understand how teams value benefits packages.",
      },
      {
        icon: Smile,
        title: "Wellbeing Monitor",
        desc: "Track stress and burnout trends across the org.",
      },
    ],
  },
  {
    title: "Change & Policy",
    desc: "Navigate change initiatives with AI-facilitated employee feedback loops.",
    content: [
      {
        icon: FileText,
        title: "Change Impact Analysis",
        desc: "Gauge employee response to major org changes.",
      },
      {
        icon: ClipboardList,
        title: "Policy Sentiment",
        desc: "Understand employee acceptance of new rules.",
      },
    ],
  },
];

export default function ManagementReadyReports() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#eff0ff] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Management Ready Reports
        </h2>
        <p className=" max-w-3xl mx-auto">
          Automatically create polished reports featuring executive summaries, highlighted findings, and more than fifteen AI generated, HR-centric employee metrics for instant insights.
        </p>
      </div>

      <div className="flex justify-center items-start gap-10 max-w-7xl mx-auto">
        {/* Left Tabs */}
        <div className="flex flex-col gap-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left px-5 cursor-pointer hover:bg-white py-4 max-w-sm rounded-xl border transition font-medium text-sm ${
                index === activeTab
                  ? "bg-white border-orange-500 shadow"
                  : "bg-white/60 border border-gray-200 text-gray-700"
              }`}
            >
              <h4 className="font-semibold mb-1">{tab.title}</h4>
              <p className="text-xs text-secondary-text">{tab.desc}</p>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="">
          <p className="text-left font-semibold sm:text-xl max-w-2xl mb-6">
            Leverage continuous, automated feedback on onboarding, performance cycles, and exits to improve retention and employee satisfaction.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {tabs[activeTab].content.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start flex-col  gap-4">
                  <div className="min-w-[48px] min-h-[48px] bg-green-200 rounded-xl flex items-center justify-center p-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-secondary-text">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
