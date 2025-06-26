// "use client";

// import { useState } from "react";
// import {
//   FileText,
//   Users,
//   Star,
//   Smile,
//   ClipboardList,
//   LogOut,
// } from "lucide-react";

// const tabs = [
//   {
//     title: "Talent Lifecycle",
//     desc: "Seamless lifecycle feedback ensures smooth transitions at every stage.",
//     content: [
//       {
//         icon: FileText,
//         title: "Onboarding Feedback",
//         desc: "Unlock potential with continuous AI-led performance insights.",
//       },
//       {
//         icon: Star,
//         title: "New Hire Experience",
//         desc: "Unlock potential with continuous AI-led performance insights.",
//       },
//       {
//         icon: Users,
//         title: "Stay Interviews",
//         desc: "Unlock potential with continuous AI-led performance insights.",
//       },
//       {
//         icon: ClipboardList,
//         title: "Retention Risk Feedback",
//         desc: "Unlock potential with continuous AI-led performance insights.",
//       },
//       {
//         icon: LogOut,
//         title: "Exit Interviews",
//         desc: "Unlock potential with continuous AI-led performance insights.",
//       },
//     ],
//   },
//   {
//     title: "Performance & Development",
//     desc: "Unlock potential with continuous AI-led performance insights.",
//     content: [
//       {
//         icon: FileText,
//         title: "Quarterly Reviews",
//         desc: "Automated insights on performance trends and gaps.",
//       },
//       {
//         icon: Users,
//         title: "Mentorship Feedback",
//         desc: "Capture growth feedback from mentors.",
//       },
//     ],
//   },
//   {
//     title: "Engagement & Culture",
//     desc: "Foster engagement and culture with AI-driven feedback insights.",
//     content: [
//       {
//         icon: Smile,
//         title: "Culture Health",
//         desc: "Assess culture strength and gaps over time.",
//       },
//       {
//         icon: Users,
//         title: "Team Sentiment",
//         desc: "AI-powered emotional tone analysis from feedback.",
//       },
//     ],
//   },
//   {
//     title: "Compensation, Benefits & Wellbeing",
//     desc: "Optimize compensation, benefits, and wellbeing through AI feedback.",
//     content: [
//       {
//         icon: ClipboardList,
//         title: "Benefit Feedback",
//         desc: "Understand how teams value benefits packages.",
//       },
//       {
//         icon: Smile,
//         title: "Wellbeing Monitor",
//         desc: "Track stress and burnout trends across the org.",
//       },
//     ],
//   },
//   {
//     title: "Workplace Environment",
//     desc: "Enhance the workplace environment through continuous AI feedback loops.",
//     content: [
//       {
//         icon: FileText,
//         title: "Change Impact Analysis",
//         desc: "Gauge employee response to major org changes.",
//       },
//       {
//         icon: ClipboardList,
//         title: "Policy Sentiment",
//         desc: "Understand employee acceptance of new rules.",
//       },
//     ],
//   },
//   {
//     title: "Change & Policy",
//     desc: "Navigate change initiatives with AI-facilitated employee feedback loops.",
//     content: [
//       {
//         icon: FileText,
//         title: "Change Impact Analysis",
//         desc: "Gauge employee response to major org changes.",
//       },
//       {
//         icon: ClipboardList,
//         title: "Policy Sentiment",
//         desc: "Understand employee acceptance of new rules.",
//       },
//     ],
//   },
// ];

// export default function ManagementReadyReports() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="bg-[#eff0ff] py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl w-full font-bold mb-3">
// Use Cases        </h2>
//         <p className=" max-w-3xl mx-auto">
// Access AI-powered feedback use cases instantly—from onboarding and performance to weekly check-ins and exit interviews—tailored for HR and managers.        </p>
//       </div>

//       <div className="flex justify-center items-start gap-10 max-w-7xl mx-auto">
//         {/* Left Tabs */}
//         <div className="flex flex-col gap-3">
//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`text-left px-5 cursor-pointer hover:bg-white py-4 max-w-sm rounded-xl border transition font-medium text-sm ${
//                 index === activeTab
//                   ? "bg-white border-orange-500 shadow"
//                   : "bg-white/60 border border-gray-200 text-gray-700"
//               }`}
//             >
//               <h4 className="font-semibold mb-1">{tab.title}</h4>
//               <p className="text-xs text-secondary-text">{tab.desc}</p>
//             </button>
//           ))}
//         </div>

//         {/* Right Content */}
//         <div className="">
//           <p className="text-left font-semibold sm:text-xl max-w-2xl mb-6">
//             Leverage continuous, automated feedback on onboarding, performance cycles, and exits to improve retention and employee satisfaction.
//           </p>

//           <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
//             {tabs[activeTab].content.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div key={i} className="flex items-start flex-col  gap-4">
//                   <div className="min-w-[48px] min-h-[48px] bg-green-200 rounded-xl flex items-center justify-center p-4">
//                     <Icon className="w-10 h-10" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">
//                       {item.title}
//                     </h4>
//                     <p className="text-sm text-secondary-text">{item.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import {
  FileText,
  Users,
  Star,
  Smile,
  ClipboardList,
  LogOut,
  Plus,
  Minus,
} from "lucide-react";
import { Fade } from "react-awesome-reveal";

const tabs = [
  {
    title: "Talent Lifecycle",
    desc: "Seamless lifecycle feedback ensures smooth transitions at every stage.",
    content: [
      {
        icon: FileText,
        title: "Onboarding Feedback",
        desc: "Collects feedback from new hires on their initial experience.",
      },
      {
        icon: Star,
        title: "New Hire Experience",
        desc: "Survey with hiring manager on new hire performance. Feedback into success/failure of the hiring process and interview process.",
      },
      {
        icon: Users,
        title: "Stay Interviews",
        desc: "Why do you stay, what would make you leave.",
      },
      {
        icon: ClipboardList,
        title: "Retention Risk Feedback",
        desc: "Gather insights from employees to identify turnover drivers and take proactive action to improve retention.",
      },
      {
        icon: LogOut,
        title: "Exit Interviews",
        desc: "Understands why employees leave and how to reduce turnover.",
      },
    ],
  },
  {
    title: "Performance & Development",
    desc: "Unlock potential with continuous AI-led performance insights.",
    content: [
      {
        icon: FileText,
        title: "Performance Reviews",
        desc: "Gathers continuous feedback to supplement formal performance evaluations.",
      },
      {
        icon: Users,
        title: "Manager‑Employee 1:1 Check‑Ins",
        desc: "Monitors ongoing relationships, identifies support needs.",
      },
      {
        icon: ClipboardList,
        title: "Learning & Development Feedback",
        desc: "Identifies training needs, evaluates program effectiveness.",
      },
      {
        icon: Star,
        title: "Leadership Assessment",
        desc: "Evaluates leaders' impact on motivation, communication, and team culture.",
      },
      {
        icon: Smile,
        title: "Top Performers Best Practices Analysis",
        desc: "Gather insights from top performers on their most important success themes.",
      },
    ],
  },
  {
    title: "Engagement & Culture",
    desc: "Foster engagement and culture with AI-driven feedback insights.",
    content: [
      {
        icon: Smile,
        title: "Employee Engagement",
        desc: "Gauges overall employee satisfaction and commitment.",
      },
      {
        icon: Users,
        title: "eNPS",
        desc: "Measures how likely employees are to recommend the company.",
      },
      {
        icon: FileText,
        title: "Company Culture Check",
        desc: "Monitors if company values resonate with employees and guide behaviors.",
      },
      {
        icon: ClipboardList,
        title: "Trending Workplace Topics",
        desc: "Identify and collect employee sentiment on emerging workplace issues to understand their impact on the workplace experience.",
      },
    ],
  },
  {
    title: "Compensation, Benefits & Wellbeing",
    desc: "Optimize compensation, benefits, and wellbeing through AI feedback.",
    content: [
      {
        icon: ClipboardList,
        title: "Benefits Satisfaction Feedback",
        desc: "Checks employee sentiment on health coverage, perks, and other offerings.",
      },
      {
        icon: FileText,
        title: "Compensation Feedback",
        desc: "Reviews fairness and transparency around salary structures.",
      },
      {
        icon: Star,
        title: "Holiday/Schedule Preferences",
        desc: "Incorporates employee desires around time off and flexible scheduling.",
      },
      {
        icon: Smile,
        title: "Wellness/Mental Health Feedback",
        desc: "Checks for burnout risk, stress levels, and overall emotional well-being.",
      },
      {
        icon: Users,
        title: "Recognition & Reward Feedback",
        desc: "Evaluates whether employees feel valued and appreciated for their work.",
      },
    ],
  },
  {
    title: "Workplace Environment",
    desc: "Enhance the workplace environment through continuous AI feedback loops.",
    content: [
      {
        icon: Users,
        title: "Remote/Hybrid Work Satisfaction",
        desc: "Evaluates experiences and challenges with flexible work arrangements.",
      },
      {
        icon: FileText,
        title: "Workplace Environment Assessment",
        desc: "Gathers opinions on office layout, resources, and comfort.",
      },
      {
        icon: ClipboardList,
        title: "Commute/Transportation Feedback",
        desc: "Determines how travel impacts employee satisfaction and punctuality.",
      },
      {
        icon: Star,
        title: "Technology/Tools Feedback",
        desc: "Examines whether software and hardware meet employee needs.",
      },
    ],
  },
  {
    title: "Change & Policy",
    desc: "Navigate change initiatives with AI-facilitated employee feedback loops.",
    content: [
      {
        icon: FileText,
        title: "Policy Change Feedback",
        desc: "Collects opinions when introducing or modifying HR or company policies.",
      },
      {
        icon: ClipboardList,
        title: "New Policy Rollout Check",
        desc: "Solicits employee input on recently implemented guidelines or procedures.",
      },
      {
        icon: Users,
        title: "Reorganization/Merger Feedback",
        desc: "Assesses employees' perspectives during significant structural changes.",
      },
      {
        icon: Star,
        title: "Discussions on New Initiatives",
        desc: "Dives deeper into employee views on upcoming projects or strategies.",
      },
      {
        icon: Smile,
        title: "Conflict Resolution Feedback",
        desc: "Gathers insights to mediate issues and improve team cohesion.",
      },
      {
        icon: LogOut,
        title: "Safety & Compliance Feedback",
        desc: "Ensures employees feel safe and that procedures meet their needs.",
      },
    ],
  },
];

export default function ManagementReadyReports() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <section className="bg-[#eff0ff] py-20 px-4">
      <div className="max-w-7xl w-[90vw] mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl w-full font-bold mb-3 text-gray-800">
          Use Cases
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Access AI-powered feedback use cases instantly—from onboarding and
          performance to weekly check-ins and exit interviews—tailored for HR
          and managers.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-start gap-10 max-w-7xl mx-auto">
        {/* Left Tabs */}
        <Fade direction="up" triggerOnce delay={100}>
          <div className="flex flex-col gap-3">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-5 cursor-pointer hover:bg-white hover:scale-105 duration-300 py-4 max-w-sm rounded-xl border transition font-medium text-sm ${
                  index === activeTab
                    ? "bg-white border-orange-500 shadow"
                    : "bg-white/60 border border-gray-200 text-gray-700"
                }`}
              >
                <h4 className="font-semibold mb-1">{tab.title}</h4>
                <p className="text-xs text-gray-600">{tab.desc}</p>
              </button>
            ))}
          </div>
        </Fade>

        {/* Right Content */}
        <Fade direction="up" triggerOnce delay={100}>
          <div className="">
            <p className="text-left font-semibold sm:text-xl max-w-2xl mb-6">
              Leverage continuous, automated feedback on onboarding, performance
              cycles, and exits to improve retention and employee satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {tabs[activeTab].content.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start flex-col gap-4">
                    <div className="min-w-[48px] min-h-[48px] bg-[#BEC1FF] rounded-xl flex items-center justify-center p-4">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>

      {/* Mobile Accordion Layout */}
      <div className="sm:hidden max-w-md mx-auto">
        <div className="space-y-1">
          {tabs.map((tab, index) => (
            <Fade
              key={index}
              className="bg-white rounded-2xl my-4 overflow-hidden"
              direction="up"
              triggerOnce
              delay={100}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">
                    {tab.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tab.desc}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {expandedAccordion === index ? (
                    <Minus className="w-6 h-6 text-gray-800" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-800" />
                  )}
                </div>
              </button>

              {expandedAccordion === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 space-y-4">
                    {tab.content.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-4">
                          <div className="min-w-[40px] min-h-[40px] bg-[#BEC1FF] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
