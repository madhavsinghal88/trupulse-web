import "../../styles/case-study.css";
import { SITE, crumbNode, orgNode, pageMetadata, pageNode, siteNode } from "@/lib/site";
import { LegalHeader } from "../_components/InnerHeader";
import SiteFooter from "../_components/SiteFooter";
import JsonLd from "../_components/JsonLd";
import { DemoButton } from "../_components/actions";

const TITLE = "Case Study: 50 Top Sales Performers in Two Weeks | TruPulse";
const DESCRIPTION = "How a global medical technology company used TruPulse to research 50 of its top sales performers in two weeks, with two leaders guiding the work.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/case-study" });

const article = {
  "@type": "Article", "@id": SITE + "/case-study#article",
  headline: "50 top performers. Answers in two weeks. A clear path to action.",
  description: DESCRIPTION, url: SITE + "/case-study",
  mainEntityOfPage: { "@id": SITE + "/case-study#webpage" }, inLanguage: "en",
  author: { "@id": SITE + "/#organization" }, publisher: { "@id": SITE + "/#organization" },
};

export default function CaseStudyPage() {
  return (
    <div className="tp-case-study legal-page case-study-page">
      <JsonLd graph={[orgNode(), siteNode(), pageNode("WebPage", "/case-study", TITLE, DESCRIPTION, true), article, crumbNode("/case-study", [["Home", "/"], ["Case study", "/case-study"]])]} />
      <a className="tp-skip" href="#main-content">Skip to main content</a>
      <LegalHeader />
      <main id="main-content" tabIndex={-1} className="cs-main">
        <header className="cs-hero">
          <div className="shell">
            <p className="eyebrow">Customer case study</p>
            <h1>50 top performers. Answers in two weeks. A clear path to action.</h1>
            <p className="cs-deck">A global medical technology company used TruPulse to understand the practices of its top sales performers. Two leaders guided the research, while AI conducted 1:1 discussions, gathered survey responses, and prepared reports. The findings informed targeted training, updated job descriptions, and plans for further research.</p>
          </div>
        </header>

        <div className="shell cs-figures" aria-label="Programme at a glance">
          <div className="cs-figure"><strong>50</strong><span>Top performers participated</span></div>
          <div className="cs-figure"><strong>25+ hours</strong><span>Discussions analyzed</span></div>
          <div className="cs-figure"><strong>2 weeks</strong><span>From setup to executive report</span></div>
          <div className="cs-figure"><strong>2 leaders</strong><span>Oversaw the research</span></div>
        </div>

        <div className="shell cs-layout">
          <nav className="cs-aside" aria-label="On this page">
            <strong>In this case study</strong>
            <a href="#question">The question</a>
            <a href="#approach">The approach</a>
            <a href="#findings">The findings</a>
            <a href="#action">From findings to action</a>
            <a href="#demonstrates">What this project demonstrates</a>
          </nav>

          <article className="cs-body">
            <h2 id="question">The question: What can we learn from our top performers?</h2>
            <p>The CEO needed answers quickly. The company wanted to understand how its top sales performers approached their work&mdash;and use those insights to strengthen sales development and hiring.</p>
            <p>Its People Operations and People Analytics teams set out to explore:</p>
            <ul className="cs-list">
              <li>The skills, habits, and internal and external resources participants associated with their success.</li>
              <li>How participants&rsquo; reported practices aligned with Gartner&rsquo;s framework of 21 sales skills.</li>
              <li>What the findings could suggest for training, job descriptions, and further research.</li>
            </ul>
            <p>The team selected 50 top-performing sales associates who had earned President&rsquo;s Club recognition at least twice.</p>

            <h2 id="approach">The approach: Your team sets the direction. AI does the research.</h2>
            <p>Two leaders&mdash;the VP of People Operations and the Director of People Analytics&mdash;defined the research objectives in TruPulse.</p>
            <p>AI generated a discussion guide and survey questions from that brief. The leaders reviewed, edited, and approved the questions before launch, finalized the report templates, and supplied the participant list.</p>
            <p>TruPulse then managed invitations, conducted the AI-led 1:1 discussions and follow-up surveys, and prepared individual reports and an executive report.</p>

            <h3>AI-led 1:1 discussions</h3>
            <p>Each participant took part in a chat discussion designed to last approximately 30 minutes. The AI asked follow-up questions based on participants&rsquo; answers, inviting them to explain their practices and provide examples.</p>
            <p>The discussions explored four areas:</p>
            <ul className="cs-list">
              <li>Customer research and engagement.</li>
              <li>The sales process.</li>
              <li>Internal practices and tools.</li>
              <li>External practices and tools.</li>
            </ul>

            <h3>Follow-up surveys</h3>
            <p>After each discussion, participants completed a five-question survey about their behaviors, confidence levels, and tool usage.</p>
            <p>The survey added structured responses alongside the discussion material, helping the team examine participants&rsquo; experiences from both qualitative and quantitative perspectives.</p>

            <h3>Consolidated analysis</h3>
            <p>TruPulse analyzed more than 25 hours of discussion material alongside the survey responses. It organized the findings into individual reports and an executive report, and mapped participants&rsquo; reported practices to the sales skills framework.</p>
            <p>The analysis gave the team a consolidated view of the responses to review against its research objectives.</p>

            <h2 id="findings">The findings: Practices to explore and develop</h2>
            <p>The research identified 16 practices and factors that participants associated with their sales success.</p>
            <p>Themes included customer empathy, strategic problem solving, and digital adaptability. Mapping the responses to the sales skills framework also highlighted competencies reflected in participants&rsquo; accounts and areas receiving less attention.</p>
            <p>These findings gave leadership a basis for discussing what to develop, what to investigate further, and how to translate the research into practical next steps.</p>

            <h2 id="action">From findings to action</h2>
            <p>The company completed the program&mdash;from setup through discussions, surveys, and the executive report&mdash;in two weeks, with two leaders overseeing the work.</p>
            <p>The findings informed:</p>
            <ul className="cs-list">
              <li><strong>Targeted training:</strong> Programs led by top performers to share relevant practices with the wider sales team.</li>
              <li><strong>Updated job descriptions:</strong> Revisions reflecting skills identified through the research.</li>
              <li><strong>Plans for further research:</strong> Exploration of how to extend the approach across the global sales organization.</li>
            </ul>
            <p>TruPulse handled the research and analysis. The company&rsquo;s leaders determined how the findings would inform their decisions.</p>

            <h2 id="demonstrates">What this project demonstrates</h2>
            <p>The project shows how AI-led research can help a team move from an urgent question to structured findings and a clear path to action.</p>
            <p>Two leaders set the direction and approved the research. TruPulse conducted the sessions and prepared the reports. The resulting findings helped the company identify specific next steps for sales development and hiring.</p>


          </article>
        </div>
        <div className="shell cs-cta-wrap">
            <aside className="cs-cta">
              <div className="cs-cta-copy">
                <p className="cs-cta-eyebrow">Your question next</p>
                <h3>Bring one question about your organization.</h3>
                <p>See how TruPulse helps you create the session, gather meaningful feedback, and turn responses into findings you can use&mdash;with your team guiding the process.</p>
              </div>
              <div className="cs-cta-row">
                <DemoButton className="btn light">Book a Demo <span>&rarr;</span></DemoButton>
                <a className="cs-cta-link" href="mailto:sales@trupulse.ai">Or email sales@trupulse.ai</a>
              </div>
            </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
