import Link from "next/link";
import Button from "../components/common/Button";

const impactStats = [
  { value: "50", label: "Top performers interviewed" },
  { value: "25 hrs", label: "Of qualitative discussion captured" },
  { value: "2 wks", label: "From kickoff to final report" },
];

const heroHighlights = [
  "AI-moderated 1:1 interviews",
  "Survey + qualitative analysis",
  "Gartner skill mapping",
];

const objectives = [
  {
    title: "Business Objective",
    description:
      "Invest in top sales talent and drive revenue growth by developing a harmonized competency and skill profile for attracting and developing sales associates.",
  },
  {
    title: "Project Objective",
    description:
      "Collect feedback from top-performing sales associates, defined as two-time or more President's Club winners, to identify the skills, habits, and internal and external resources that support their success.",
  },
];

const analysisApproach = [
  {
    title: "Qualitative",
    description:
      "AI-led discussions explored customer research and engagement, the sales process, internal practices and tools, and external practices and tools.",
    accent: "from-[#FFF4EC] to-white",
  },
  {
    title: "Quantitative",
    description:
      "Closed-ended survey questions measured the effectiveness and ROI of tools and practices, revealing which factors most influenced performance.",
    accent: "from-[#FCFCFF] to-white",
  },
  {
    title: "Comparative",
    description:
      "TruPulse mapped each participant's responses to Gartner's 21 ideal sales skills, identifying strengths, gaps, and opportunities for growth across the sales organization.",
    accent: "from-[#FFF8F4] to-white",
  },
];

const reasons = [
  "Significant time and cost savings with the full project completed in 2 weeks instead of months.",
  "Accurate and unbiased results with no human notetaking mistakes or interpretation errors.",
  "Human-in-the-loop reviews for full control over AI-generated content, reports, and outputs.",
  "Comprehensive delivery with individual and group-level summaries available immediately after sessions.",
];

const successDrivers = [
  "Advanced customer empathy",
  "Strategic problem solving",
  "Digital adaptability",
  "Consistent use of high-impact internal and external resources",
];

const quotes = [
  {
    text: "TruPulse gave us the ability to understand our top salespeople in a way that wasn’t possible before. The AI interviewer’s ability to ask dynamic follow-up questions and the accuracy of the resulting summaries was exceptional.",
    author: "VP of People Operations",
  },
  {
    text: "The quality of insights was extraordinary. TruPulse turned 50 interviews and surveys with over 25 hours of discussions into structured, unbiased, and instantly actionable data. It helped us make data-driven talent decisions with clarity and confidence.",
    author: "Director, People Analytics and Insights",
  },
];

export const metadata = {
  title: "Case Study | TruPulse",
  description:
    "See how a Fortune 500 medical technology leader used TruPulse to decode the habits, skills, and behaviors of its top 10% sales performers.",
};

export default function CaseStudyPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF4EC_0%,#FFF8F4_48%,#FFFFFF_100%)] px-4 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,89,0,0.14),transparent_30%),radial-gradient(circle_at_left_center,rgba(37,34,87,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(180,241,0,0.14),transparent_25%)]" />
        <div className="absolute right-[-8rem] top-12 h-72 w-72 rounded-full bg-[#FF5900]/10 blur-3xl" />
        <div className="absolute left-[-6rem] bottom-0 h-64 w-64 rounded-full bg-[#252257]/8 blur-3xl" />
        <div className="relative max-w-7xl w-[90vw] mx-auto">
          <div className="inline-flex items-center rounded-full border border-[#FF5900]/15 bg-white/85 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-theme uppercase shadow-sm backdrop-blur">
            Case Study
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-theme md:text-base">
              Fortune 500 medical technology sales excellence
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              How a Fortune 500 Medical Technology Leader Decoded Its Top 10%
              Sales Performers
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-secondary-text md:text-xl">
              50 elite performers. 25 hours of insight. 2 weeks. Zero added
              headcount.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#252257]/10 bg-white px-4 py-2 text-sm font-medium text-primary-text shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button triggerCalendly text="Book a 20-minute walkthrough" />
              <Link
                href="#overview"
                className="inline-flex items-center rounded-full border border-[#252257]/10 bg-white px-6 py-3 font-semibold text-primary-text shadow-sm transition hover:border-theme hover:text-theme"
              >
                Explore the case study
              </Link>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                  Shareable Summary
                </p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-primary-text md:text-2xl">
                  Leadership insight, delivered fast
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-secondary-text">
                  TruPulse helped the client uncover the behaviors, skills, and
                  tools that defined top sales performance by combining AI-led
                  interviews, surveys, and Gartner-based competency analysis.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="border-l-4 border-theme pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-theme">
                    Delivery
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary-text">
                    2 Weeks
                  </p>
                  <p className="mt-1 text-sm text-secondary-text">
                    From kickoff to final report
                  </p>
                </div>
                <div className="border-l-4 border-[#252257]/15 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-theme">
                    Participants
                  </p>
                  <p className="mt-1 text-sm text-secondary-text">
                    50 top sales performers
                  </p>
                </div>
                <div className="border-l-4 border-[#252257]/15 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-theme">
                    Outcome
                  </p>
                  <p className="mt-1 text-sm text-secondary-text">
                    Skill and behavior mapping
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/80 pt-8 md:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="border-l-4 border-theme pl-5">
                  <div className="text-3xl font-bold text-theme md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 max-w-[16rem] text-sm text-secondary-text">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="px-4 py-20 md:py-24">
        <div className="max-w-7xl w-[90vw] mx-auto grid gap-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                Overview
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                A faster way to understand the DNA of top sales performers
              </h2>
              <div className="mt-6 space-y-5 text-secondary-text text-base md:text-lg leading-8">
                <p>
                  The client is one of the largest global medical technology
                  companies in the world, advancing the future of health
                  through medical discovery, diagnostics, and care delivery.
                  With more than 70,000 employees worldwide, the organization
                  supports healthcare professionals through innovative
                  technology, services, and solutions that improve clinical
                  therapy, process efficiency, and access to care.
                </p>
                <p>
                  When the company&apos;s People Operations and Analytics teams
                  set out to understand what made their top sales performers so
                  effective, they turned to TruPulse, an AI-powered platform
                  built to automate qualitative research, surveys, and analysis
                  at scale.
                </p>
                <p>
                  The goal was twofold: identify the key traits and practices
                  that make the company&apos;s top salespeople successful through
                  AI-moderated 1:1 interviews, then compare each participant&apos;s
                  demonstrated capabilities against Gartner&apos;s sales skill
                  framework.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-[#252257]/8 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFCFF_100%)] p-8 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                  Outcomes
                </p>
                <ul className="mt-6 space-y-4 list-none p-0">
                  <li className="rounded-2xl border border-[#252257]/6 bg-[#FFF4EC] p-4 text-secondary-text">
                    Identified 16 drivers of sales success unique to the
                    organization&apos;s culture and operating model.
                  </li>
                  <li className="rounded-2xl border border-[#252257]/6 bg-[#FCFCFF] p-4 text-secondary-text">
                    Mapped top performers against Gartner&apos;s 21 ideal sales
                    skills to surface strengths, gaps, and growth opportunities.
                  </li>
                  <li className="rounded-2xl border border-[#252257]/6 bg-[#FFF4EC] p-4 text-secondary-text">
                    Delivered leadership-ready insights in two weeks using only
                    two internal leaders and no added headcount.
                  </li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#252257]/8 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFCFF_100%)] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                  What Leadership Needed
                </p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl bg-[#FFF4EC] p-4">
                    <p className="font-semibold text-primary-text">
                      1. Decode top-performer behavior
                    </p>
                    <p className="mt-2 text-secondary-text">
                      Identify what their best salespeople consistently do
                      differently.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#FCFCFF] p-4">
                    <p className="font-semibold text-primary-text">
                      2. Benchmark against a recognized framework
                    </p>
                    <p className="mt-2 text-secondary-text">
                      Compare real behaviors to Gartner&apos;s sales skill model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
              Project Objectives
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {objectives.map((objective, index) => (
                <div
                  key={objective.title}
                  className="rounded-3xl border border-orange-100 bg-[#fff8f4] p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-theme shadow-sm">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold">{objective.title}</h3>
                  </div>
                  <p className="mt-4 text-secondary-text">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFCFF] px-4 py-20 md:py-24">
        <div className="max-w-7xl w-[90vw] mx-auto grid gap-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
              Solution
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              AI-driven discussions and surveys with TruPulse
            </h2>
            <p className="mt-6 text-base md:text-lg text-secondary-text">
              Only two internal leaders, the VP of People Operations and the
              Director of People Analytics, were needed to run the entire
              program. They created a customized project prompt inside
              TruPulse, reviewed AI-generated recommendations using
              human-in-the-loop best practices, approved the final materials,
              and provided the participant list.
            </p>
            <p className="mt-4 text-base md:text-lg text-secondary-text">
              TruPulse handled the rest, from inviting participants and running
              AI-led 1:1 interviews to launching surveys and producing both
              individual summaries and company-wide executive reports.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold">AI-Powered Discussion Process</h3>
              <p className="mt-4 text-secondary-text">
                TruPulse&apos;s AI Agent facilitated 30-minute 1:1 chat
                discussions with 50 top sales performers. The AI moderator
                engaged in natural back-and-forth dialogue, asked follow-up
                questions dynamically, and tailored each discussion to the
                individual&apos;s methods and mindset.
              </p>
              <p className="mt-4 text-secondary-text">
                After every discussion, TruPulse delivered a short survey with
                five targeted questions to quantify behaviors, confidence
                levels, and tool usage.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-orange-100 bg-[linear-gradient(180deg,#FFF8F4_0%,#FFFFFF_100%)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-theme">Step 1</p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary-text shadow-sm">
                      Discover
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-primary-text">
                    AI-led 1:1 discussions
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary-text">
                    Natural conversations with top performers to uncover
                    patterns, mindset, and approach.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#252257]/8 bg-[linear-gradient(180deg,#FCFCFF_0%,#FFFFFF_100%)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-theme">Step 2</p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary-text shadow-sm">
                      Measure
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-primary-text">
                    Follow-up survey
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary-text">
                    Quantify confidence, behaviors, and tool usage with focused
                    questions after every discussion.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-orange-100 bg-[linear-gradient(180deg,#FFF8F4_0%,#FFFFFF_100%)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-theme">Step 3</p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary-text shadow-sm">
                      Deliver
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-primary-text">
                    Executive-ready reporting
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary-text">
                    Merge qualitative and quantitative insights into immediate,
                    leadership-ready outputs.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold">Data Analysis Approach</h3>
              <div className="mt-5 grid gap-4">
                {analysisApproach.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.5rem] border border-gray-100 bg-gradient-to-br ${item.accent} p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#FF5900]/20 hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-theme">{item.title}</p>
                      <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary-text shadow-sm">
                        Analysis
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-secondary-text">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="max-w-7xl w-[90vw] mx-auto grid gap-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-[#252257]/8 bg-[linear-gradient(180deg,#FFF9F5_0%,#FCFCFF_100%)] p-8 md:p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                Key Findings
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Clear patterns emerged across the highest performers
              </h2>
              <p className="mt-6 text-secondary-text">
                The company identified 16 specific drivers of sales success
                unique to its culture and operations. The analysis showed that
                top performers consistently demonstrated advanced customer
                empathy, strategic problem solving, and digital adaptability.
              </p>
              <p className="mt-4 text-secondary-text">
                These findings closely aligned with several of Gartner&apos;s top
                competencies and gave leadership a roadmap for targeted
                upskilling and development.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {successDrivers.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#252257]/6 bg-white px-4 py-3 text-sm text-secondary-text shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {quotes.map((quote) => (
                <blockquote
                  key={quote.author}
                  className="rounded-3xl border border-orange-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF8F4_100%)] p-8 shadow-sm"
                >
                  <p className="text-lg md:text-xl leading-relaxed">
                    “{quote.text}”
                  </p>
                  <footer className="mt-5 font-semibold text-theme">
                    {quote.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 border border-gray-100 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                Business Benefits
              </p>
              <p className="mt-4 text-secondary-text">
                By leveraging TruPulse, the company gained deep insight into
                the DNA of its top-performing sales force while saving
                significant time and resources. A traditional human-led process
                would have taken several months and hundreds of staff hours.
              </p>
              <p className="mt-4 text-secondary-text">
                TruPulse&apos;s AI ensured 100% data coverage, eliminating the risk
                of human omission or interpretation bias. Every minute of the
                25 hours of discussion was captured, analyzed, and summarized
                within minutes of the final session.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#FFEFE6] p-8 border border-orange-100 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
                Why TruPulse
              </p>
              <h3 className="text-2xl font-bold mt-4">
                The value of AI-driven workforce insights
              </h3>
              <ul className="mt-5 space-y-3 text-secondary-text">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm"
                  >
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-6xl w-[90vw] mx-auto overflow-hidden rounded-[2rem] border border-orange-100 bg-[linear-gradient(135deg,#FFF7F1_0%,#FFFFFF_55%,#FFF1E7_100%)] p-8 md:p-12 shadow-2xl">
          <div className="pointer-events-none absolute" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme">
            Conclusion
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            A scalable model for future AI-driven talent analytics
          </h2>
          <p className="mt-6 max-w-4xl text-secondary-text text-base md:text-lg">
            Through its collaboration with TruPulse, the organization showed
            how AI can transform traditional workforce research into an agile,
            data-driven process. By combining automation with expert human
            oversight, the team achieved faster results, richer insights, and
            greater accuracy while empowering leadership to make smarter,
            evidence-based talent decisions.
          </p>
          <p className="mt-4 max-w-4xl text-secondary-text text-base md:text-lg">
            The project not only defined the success DNA of the company&apos;s top
            sales performers, but also established a repeatable blueprint for
            future initiatives across the organization.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                Ready to decode your own top performers?
              </p>
              <p className="mt-2 text-secondary-text">
                Book a 20-minute walkthrough at{" "}
                <Link href="/" className="underline underline-offset-4">
                  TruPulse.ai
                </Link>
              </p>
            </div>
            <div className="shrink-0">
              <Button triggerCalendly text="Book a 20-minute walkthrough" />
            </div>
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.16em] text-secondary-text">
            TruPulse.ai • Advanced Research. Real Team Insights.
          </p>
        </div>
      </section>
    </main>
  );
}
