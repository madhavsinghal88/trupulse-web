// "use client";

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     q: "What is TruPulse Feedback?",
//     a: "An AI-powered platform that automates pulse surveys, 1:1 discussions, and focus groups, delivering instant insights and reports.",
//   },
//   {
//     q: "How do I get started with TruPulse Feedback?",
//     a: "Sign up for a trial, connect your HRIS and chat tools, select a use case, and launch your first feedback loop in minutes.",
//   },
//   {
//     q: "What types of feedback sessions can I run?",
//     a: "You can run AI-generated pulse surveys, AI-led 1:1 chats, and AI-moderated focus groups for virtually any HR use case.",
//   },
//   {
//     q: "How does TruPulse recommend questions or topics?",
//     a: "Our AI Prompt Engine suggests tailored topics and questions based on your selected use case and organizational context.",
//   },
//   {
//     q: "Can I customize the AI-generated questions?",
//     a: "Yes. You can edit, remove, or add questions and topics in the “Create” step before launching any session.",
//   },
//   {
//     q: "How long does it take to set up a feedback loop?",
//     a: "Typically under 60 seconds: pick a use case, review AI prompts, and hit “Create.”",
//   },
//   {
//     q: "How are participants invited?",
//     a: "Via integrated chat platforms (Slack, Teams) or email, depending on your configuration.",
//   },
//   {
//     q: "How does the AI moderate 1:1 discussions and focus groups?",
//     a: "It poses questions based on the topic agenda and follows up on responses until all topics are covered in detail to create a report.",
//   },
//   {
//     q: "Which additional employee metrics does TruPulse calculate?",
//     a: "Metrics include Morale, eNPS, Retention Risk, Engagement, Burnout Risk, Inclusion, and 10+ others automatically.",
//   },
//   {
//     q: "How is employee data protected, and can employees opt out?",
//     a: "All PII is stripped and responses are aggregated (no groups under 10). Data is encrypted at rest and in transit.",
//   },
//   {
//     q: "What encryption and access controls protect our data?",
//     a: "We use AES-256 for data at rest, TLS 1.2+ in transit, role-based permissions, SSO/MFA, and regular audits.",
//   },
//   {
//     q: "How does TruPulse comply with regulations like GDPR and CCPA?",
//     a: "We support data-subject requests, DPA templates, data residency, retention policies, and 'Do Not Sell' controls.",
//   },
//   {
//     q: "Which accessibility standards are supported?",
//     a: "TruPulse supports WCAG 2.1 AA, Section 508, EN 301 549, with features like keyboard nav, ARIA roles, and high-contrast mode.",
//   },
//   {
//     q: "Can I manage data retention or export/delete data?",
//     a: "Yes. Admins can export via API, configure retention policies, or request purges from the admin console.",
//   },
//   {
//     q: "Is TruPulse data used to train AI models?",
//     a: "No. We use APIs from AI partners. No customer data is used to train external models.",
//   },
// ];

// export default function FaqAccordion() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="py-12">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
//         <div>
//           <h2 className="text-2xl sm:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
//           <p>Got questions? We’ve got answers to the most common ones right here.</p>
//         </div>
//         <div className="md:col-span-2 space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b">
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="w-full py-3 flex justify-between items-center cursor-pointer text-left"
//               >
//                 <span className="text-sm sm:text-base font-bold">{faq.q}</span>
//                 {openIndex === index ? (
//                   <Minus className="w-4 h-4" />
//                 ) : (
//                   <Plus className="w-4 h-4" />
//                 )}
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   openIndex === index ? "max-h-96 opacity-100 pt-2 pb-4" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="text-sm text-gray-700">{faq.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const faqs = [
  {
    q: "What is TruPulse?",
    a: "An AI-powered platform that automates pulse surveys, 1:1 discussions, and focus groups, delivering instant insights and reports.",
  },
  {
    q: "How do I get started with TruPulse Feedback?",
    a: "Sign up for a trial, connect your HRIS and chat tools, select a use case, and launch your first feedback loop in minutes.",
  },
  {
    q: "What types of feedback sessions can I run?",
    a: "You can run AI-generated pulse surveys, AI-led 1:1 chats, and AI-moderated focus groups for virtually any HR or management use case.",
  },
  {
    q: "How does TruPulse recommend questions or topics?",
    a: "You can run AI-generated pulse surveys, AI-led 1:1 chats, and AI-moderated focus groups for virtually any HR or management use case.",
  },
  {
    q: "Can I customize the AI-generated questions?",
    a: "Yes. You can edit, remove, or add questions and topics in the “Create” step before launching any session.",
  },
  {
    q: "How long does it take to set up a feedback loop?",
    a: "Typically under 60 seconds: pick a use case, review AI prompts, and hit “Create.”",
  },
  {
    q: "How are participants invited to a session?",
    a: "Via chat platforms or email, depending on your configuration.",
  },
  {
    q: "How does the AI moderate 1:1 discussions and focus groups?",
    a: "It poses questions based on the agenda topics and then dynamically follows up on responses until all the topics are covered in enough detail to create a report.",
  },
  {
    q: "Which additional employee metrics does TruPulse calculate?",
    a: "Metrics include Morale, eNPS, Retention Risk, Engagement, Burnout Risk, Inclusion, and many more.",
  },
  {
    q: "How is employee data protected, de-identified, and can employees opt out of feedback?",
    a: "All sessions can be anonymized and aggregated statistics protect individuals. Data is encrypted at rest and in transit.",
  },
  {
    q: "What encryption and access controls protect our data?",
    a: "We use AES-256 for data at rest, TLS 1.2+ in transit, role-based permissions, SSO/MFA support, and regular security audits and penetration tests.",
  },
  {
    q: "How does TruPulse comply with GDPR, CCPA/CPRA, and other regulations?",
    a: "We have implemented anonymization, opt out options, support data-subject requests, configurable retention schedules, regional data residency options, and “Do Not Sell” controls.",
  },
  {
    q: "Which accessibility standards and features are supported?",
    a: "TruPulse Feedback conforms to WCAG 2.1 AA, Section 508, and EN 301 549. Features include keyboard navigation, ARIA roles, high-contrast mode, text resizing, and reduced-motion support.",
  },
  {
    q: "How can customers manage data retention, exports, or deletion?",
    a: "Admins set custom retention policies (down to daily deletion), export full datasets via API, or request permanent data purges directly from the admin console.",
  },
  {
    q: "Is TruPulse data used to train AI models?",
    a: "No. We leverage APIs from our AI partners so no customer data is ever exposed to train outside models.",
  },
];


// Helper function to highlight matched text
function highlightText(text, highlight) {
  if (!highlight) return text;

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 rounded px-0.5">{part}</mark>
    ) : (
      part
    )
  );
}

export default function FaqAccordion() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [search, setSearch] = useState("");

  const filteredFaqs = search
    ? faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(search.toLowerCase()) ||
          faq.a.toLowerCase().includes(search.toLowerCase())
      )
    : faqs;

  const showViewMore = !search && filteredFaqs.length > 3;

  const faqsToShow = search
    ? filteredFaqs
    : filteredFaqs.slice(0, visibleCount);

  const handleToggle = () => {
    if (visibleCount >= filteredFaqs.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, filteredFaqs.length));
    }
  };

  const isAllVisible = visibleCount >= filteredFaqs.length;

  return (
    <section className="bg-[#f4f4f9] py-16 px-4">
      <div className="max-w-4xl w-[90vw] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-2">
          Frequently Asked Questions
        </h2>
        <p className="mb-8">
          Got questions? We have answers to the most common ones right here!
        </p>

        {/* SEARCH BAR */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(3);
            }}
            placeholder="Search FAQs..."
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-blue-200 outline-none text-base"
          />
        </div>

        <Fade direction="up" triggerOnce delay={100}>
          <div className="space-y-4 text-left">
            {faqsToShow.length > 0 ? (
              faqsToShow.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-[16px] text-primary-text mb-1">
                    {highlightText(faq.q, search)}
                  </h3>
                  <p className="text-secondary-text text-sm">
                    {highlightText(faq.a, search)}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-gray-500 p-5 text-center">
                No results found for "{search}"
              </div>
            )}
          </div>
        </Fade>

        {showViewMore && (
          <div className="mt-6">
            <button
              onClick={handleToggle}
              className="cursor-pointer underline text-sm hover:opacity-80 transition"
            >
              {isAllVisible ? "View less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}