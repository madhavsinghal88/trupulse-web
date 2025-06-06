"use client";

import Image from "next/image";
import { useState } from "react";

const useCaseCategories = {
  "Talent Lifecycle": [
    {
      title: "Onboarding Feedback",
      image: "/images/feedback.png",
      purpose: "Gauge early impressions and onboarding success.",
      impact: "Identify gaps and improve first-day experiences."
    },
    {
      title: "New Hire Experience",
      image: "/images/new.png",
      purpose: "Capture insights from new employees.",
      impact: "Ensure smoother integration and reduce early attrition."
    },
    {
      title: "Stay Interviews",
      image: "/images/stay.png",
      purpose: "Understand why employees stay.",
      impact: "Boost retention by acting on motivators."
    },
    {
      title: "Retention Risk Feedback",
      image: "/images/real.png",
      purpose: "Identify at-risk talent before they leave.",
      impact: "Prevent attrition with proactive action."
    },
    {
      title: "Exit Interviews",
      image: "/images/exit.png",
      purpose: "Capture honest feedback on departure.",
      impact: "Improve culture and reduce future exits."
    }
  ],
  "Performance & Development": [
    {
      title: "Performance Reviews",
      image: "/images/feedback.png",
      purpose: "Gather structured performance feedback.",
      impact: "Streamline review cycles and goals alignment."
    },
    {
      title: "Manager‑Employee 1:1 Check‑Ins",
      image: "/images/new.png",
      purpose: "Enable meaningful conversations regularly.",
      impact: "Improve communication and trust."
    },
    {
      title: "Learning & Development Feedback",
      image: "/images/stay.png",
      purpose: "Track training effectiveness.",
      impact: "Enhance upskilling efforts."
    },
    {
      title: "Leadership Assessment",
      image: "/images/real.png",
      purpose: "Evaluate leadership impact and style.",
      impact: "Develop strong future-ready leaders."
    },
    {
      title: "Top Performers Best Practices Analysis",
      image: "/images/exit.png",
      purpose: "Learn from top employee strategies.",
      impact: "Replicate success across teams."
    }
  ],
  "Engagement & Culture": [
    {
      title: "Employee Engagement",
      image: "/images/feedback.png",
      purpose: "Gauge employee connection to work.",
      impact: "Drive productivity and reduce burnout."
    },
    {
      title: "eNPS",
      image: "/images/new.png",
      purpose: "Measure employee loyalty.",
      impact: "Improve retention through insight-driven changes."
    },
    {
      title: "Company Culture Check",
      image: "/images/stay.png",
      purpose: "Understand organizational culture perception.",
      impact: "Identify areas to enhance employee experience."
    },
    {
      title: "Trending Workplace Topics",
      image: "/images/real.png",
      purpose: "Gauge opinions on current workplace issues.",
      impact: "Respond proactively to emerging concerns."
    }
  ],
  "Compensation, Benefits & Wellbeing": [
    {
      title: "Benefits Satisfaction Feedback",
      image: "/images/feedback.png",
      purpose: "Evaluate benefit plan satisfaction.",
      impact: "Optimize offerings to meet employee needs."
    },
    {
      title: "Compensation Feedback",
      image: "/images/new.png",
      purpose: "Understand perceptions of fairness.",
      impact: "Support equitable compensation practices."
    },
    {
      title: "Holiday/Schedule Preferences",
      image: "/images/stay.png",
      purpose: "Collect preferred leave and shift patterns.",
      impact: "Increase satisfaction through flexibility."
    },
    {
      title: "Wellness/Mental Health Feedback",
      image: "/images/real.png",
      purpose: "Understand mental health and well-being.",
      impact: "Provide better support resources."
    },
    {
      title: "Recognition & Reward Feedback",
      image: "/images/exit.png",
      purpose: "Gauge effectiveness of recognition efforts.",
      impact: "Boost morale and motivation."
    }
  ],
  "Workplace Environment": [
    {
      title: "Remote/Hybrid Work Satisfaction",
      image: "/images/feedback.png",
      purpose: "Evaluate hybrid/remote work models.",
      impact: "Improve flexibility and productivity."
    },
    {
      title: "Workplace Environment Assessment",
      image: "/images/new.png",
      purpose: "Review physical and cultural environment.",
      impact: "Enhance comfort and inclusiveness."
    },
    {
      title: "Commute/Transportation Feedback",
      image: "/images/stay.png",
      purpose: "Understand employee commute issues.",
      impact: "Reduce travel stress with smart policies."
    },
    {
      title: "Technology/Tools Feedback",
      image: "/images/real.png",
      purpose: "Review satisfaction with workplace tools.",
      impact: "Ensure smooth operations and efficiency."
    }
  ],
  "Change & Policy": [
    {
      title: "Policy Change Feedback",
      image: "/images/feedback.png",
      purpose: "Collect employee input on new policies.",
      impact: "Ensure successful rollouts."
    },
    {
      title: "New Policy Rollout Check",
      image: "/images/new.png",
      purpose: "Assess communication and understanding.",
      impact: "Enhance transparency and clarity."
    },
    {
      title: "Reorganization/Merger Feedback",
      image: "/images/stay.png",
      purpose: "Understand change impact on morale.",
      impact: "Smooth transitions during large shifts."
    },
    {
      title: "Discussions on New Initiatives",
      image: "/images/real.png",
      purpose: "Gauge employee interest and ideas.",
      impact: "Build better plans through collaboration."
    },
    {
      title: "Conflict Resolution Feedback",
      image: "/images/exit.png",
      purpose: "Evaluate conflict management effectiveness.",
      impact: "Foster a healthy work environment."
    },
    {
      title: "Safety & Compliance Feedback",
      image: "/images/feedback.png",
      purpose: "Check understanding of safety protocols.",
      impact: "Improve training and adherence."
    }
  ]
};


export default function UseCaseHeroSection() {
  const categories = Object.keys(useCaseCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="">
      {/* Hero Section */}
      <div className=" bg-[#E9FCF9] px-6 md:px-20 pt-10 pb-28">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 mt-14">
          <h2 className="text-4xl md:text-6xl max-w-3xl font-bold leading-tight mb-6">
            See All the Ways TruPulse Automates Your Employee Feedback Needs
          </h2>
          <p className="text-lg sm:text-2xl max-w-xl">
            Access 30+ AI-powered feedback use cases instantly—from onboarding and performance to weekly check-ins and exit interviews—tailored for HR and managers.
          </p>
        </div>

        <div className="relative flex-1 max-w-[500px]">
          <Image
            src="/images/video.png"
            alt="Use Case Demo"
            width={500}
            height={300}
            className="rounded-md border p-4 bg-blue-100 rotate-2"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#3F2AEF] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              ▶
            </button>
          </div>

          <div className="absolute -bottom-16 left-10 text-center text-black">
            <Image width={100} height={200} src="/images/use.png" alt="how to use" />
          </div>
          <Image
            className="absolute left-40 -bottom-20 rotate-145"
            width={100}
            height={200}
            src="/images/curve.png"
            alt="how to use"
          />
        </div>
      </section></div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-16 overflow-x-auto px-10 relative scrollbar-hide">
        <div className="flex gap-10 font-semibold text-sm sm:text-lg whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pb-3 transition cursor-pointer scrollbar-hide ${activeCategory === cat ? "border-b-2 border-primary-text" : "hover:text-primary"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Use Case Cards */}
      <section className="py-16 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCaseCategories[activeCategory].map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 border shadow-sm">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className="rounded-xl m-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm mb-1"><strong>Purpose:</strong> {item.purpose}</p>
            <p className="text-sm "><strong>Impact:</strong> {item.impact}</p>
          </div>
        ))}
      </section>
    </div>
  );
}