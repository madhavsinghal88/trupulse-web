import "../styles/home.css";
import Link from "next/link";
import { getListedArticles } from "@/lib/articles";
import { SITE, SITE_DESCRIPTION, orgNode, pageMetadata, pageNode, siteNode } from "@/lib/site";
import HomeHeader from "./_components/HomeHeader";
import SiteFooter from "./_components/SiteFooter";
import JsonLd from "./_components/JsonLd";
import { ChatButton, DemoButton } from "./_components/actions";
import BlogTile from "./_components/blog/BlogTile";
import Hero from "./_components/home/Hero";
import TrustMetrics from "./_components/home/TrustMetrics";
import ProductTabs from "./_components/home/ProductTabs";
import HowItWorks from "./_components/home/HowItWorks";
import UseCases from "./_components/home/UseCases";
import BrandRotator from "./_components/home/BrandRotator";
import ReportViews from "./_components/home/ReportViews";
import SampleReports from "./_components/home/SampleReports";
import { FAQ } from "./_components/faq";
import VideoPlayer from "./_components/home/VideoPlayer";

export const revalidate = 300;

export const metadata = {
  ...pageMetadata({ title: "AI-Led Surveys, 1:1 Discussions & Focus Groups | TruPulse", description: SITE_DESCRIPTION, path: "/" }),
  title: { absolute: "TruPulse | AI-Led Surveys, 1:1 Discussions & Focus Groups" },
};

function SectionHead({ label, title, children }) {
  return (
    <header className="section-head reveal">
      <div><p className="section-label">{label}</p><h2>{title}</h2></div>
      <p>{children}</p>
    </header>
  );
}

export default async function HomePage() {
  const latest = (await getListedArticles()).slice(0, 3);

  return (
    <div className="tp-home">
      <JsonLd graph={[orgNode(), siteNode(), { ...pageNode("WebPage", "/", "AI-Led Surveys, 1:1 Discussions & Focus Groups | TruPulse", SITE_DESCRIPTION), about: { "@id": SITE + "/#organization" } }]} />
      <a className="skip-link" href="#top">Skip to main content</a>
      <HomeHeader />

      <main id="top">
        <Hero />

        <section className="trust-strip" aria-label="Customer case study">
          <div className="shell trust-strip-head">
            <p className="trust-strip-label">Customer case study</p>
            <h2>50 top performers. Answers in two weeks. A clear path to action.</h2>
          </div>
          <TrustMetrics />
          <div className="shell trust-strip-note">
            <span>The CEO needed answers quickly. TruPulse researched 50 top sales performers and delivered findings in two weeks. Those findings informed targeted training, updated job descriptions, and plans to expand the research.</span>
            <Link className="case-study-link" href="/case-study">Read the case study <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="section" id="product">
          <div className="shell">
            <SectionHead label="Product" title="Choose the research experience that fits your question.">
              One platform. Three session types: 1:1 Discussions, Surveys, and Focus Groups. Select a tab to explore when to use each, its benefits, and a walkthrough.
            </SectionHead>
            <ProductTabs />
          </div>
        </section>

        <section className="section alt workspace-section" id="how-it-works">
          <div className="shell">
            <SectionHead label="How TruPulse Works" title="You set the direction. TruPulse does the research.">
              From your first question to findings you can use, in four steps.
            </SectionHead>
            <HowItWorks />
            <div className="human-note reveal"><strong>Connect your sessions. See the bigger picture.</strong><p>Group related sessions into a Campaign. Review each session’s report, then explore a Campaign report that brings together insights from all its sessions.</p></div>
          </div>
        </section>

        <section className="section reports-section" id="reports">
          <div className="shell">
            <SectionHead label="Reports built around your question" title="From every response to one clear view.">
              TruPulse turns participant feedback into structured reports that connect findings to your research objectives&mdash;with supporting evidence and suggested next steps for your team to review.
            </SectionHead>
            <ReportViews />
            <div className="report-formats reveal">
              <strong>Your findings, your format.</strong>
              <p>Get reports for an entire session or one participant, and customize them by adding or removing sections and making editorial comments. Access discussion transcripts and complete survey responses. Download reports in Word, PDF, or PowerPoint where available, and export survey response data to Excel or CSV.</p>
              <SampleReports />
            </div>
          </div>
        </section>

        <section className="section alt" id="use-cases">
          <div className="shell">
            <SectionHead label="Use Cases" title="Start with the question you need answered.">
              Understand the people your decisions affect&mdash;employees, customers, students, members, and communities. Explore these examples, or bring your own question.
            </SectionHead>
            <UseCases />
            <div className="uc-outro reveal">
              <div><strong>Have a different question?</strong><p>Create research around your own topic, audience, and objectives.</p></div>
              <DemoButton>Book a Demo <span>&rarr;</span></DemoButton>
            </div>
          </div>
        </section>

        <section className="section trust-section" id="trust">
          <div className="shell">
            <SectionHead label="Your brand. Your rules. Your review." title="AI-led research. Guided by you.">
              Set the standards for your research, manage access to information, and give participants an experience that reflects your organization.
            </SectionHead>
            <BrandRotator />
          </div>
        </section>

        <section className="section alt" id="resources">
          <div className="shell">
            <SectionHead label="Resources" title="Better research, in practice.">
              Practical guidance on AI-led surveys, discussions, focus groups, and turning participant feedback into informed decisions.
            </SectionHead>
            <div className="blog-grid">{latest.map((a) => <BlogTile key={a.id} article={a} />)}</div>
            <div className="section-cta reveal"><Link className="btn outline" href="/blogs">View All Articles <span>→</span></Link></div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="shell faq-layout">
            <div className="reveal faq-intro">
              <p className="eyebrow">Questions about TruPulse?</p>
              <h2>Start here. Ask us more.</h2>
              <p>Explore the FAQs, or ask our AI assistant how TruPulse works and how it could help your organization.</p>
              <ChatButton className="btn primary" data-chat-ask="">Ask the TruPulse AI Assistant <span>&rarr;</span></ChatButton>
              <p className="faq-alt tp-faq-alt">Prefer a conversation?</p>
              <DemoButton className="btn outline tp-faq-demo">Book a Demo <span>&rarr;</span></DemoButton>
            </div>
            <div className="faq-list reveal delay-1">
              {FAQ.map(([q, answers]) => (
                <details key={q}><summary>{q}</summary>{answers.map((a) => <p key={a}>{a}</p>)}</details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <span className="cta-aurora" aria-hidden="true"><i className="cta-ring"></i><i className="cta-orbit"><b></b></i></span>
          <div className="shell cta-layout">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "#fff" }}>Book a Demo</p>
              <h2>What do you need to understand?</h2>
              <p>Bring a question about the people who matter to your organization. See how TruPulse helps you create the session, gather meaningful feedback, and turn responses into findings you can use&mdash;with your team guiding the process.</p>
              <DemoButton className="btn light">Book a Demo <span>→</span></DemoButton>
              <p className="cta-alt">Have a question first? <ChatButton className="linkish">Ask our AI assistant</ChatButton>.</p>
            </div>
            <div className="cta-signal reveal delay-1">
              <small>Your research journey</small>
              <div className="cta-steps"><span>Your question</span><span>AI-led research</span><span>Findings you can use</span></div>
              <strong>Clear research your team can review.</strong>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter home />
      <VideoPlayer />
    </div>
  );
}
