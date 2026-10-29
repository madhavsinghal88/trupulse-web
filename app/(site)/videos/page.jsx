import "../../styles/videos.css";
import { crumbNode, orgNode, pageMetadata, pageNode, siteNode } from "@/lib/site";
import { LegalHeader } from "../_components/InnerHeader";
import SiteFooter from "../_components/SiteFooter";
import JsonLd from "../_components/JsonLd";
import { DemoButton } from "../_components/actions";
import VideoCard from "./VideoCard";

const TITLE = "Product Demo Videos | TruPulse";
const DESCRIPTION = "Watch the TruPulse product demo library: the full walkthrough, each session type, setup, and reporting.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/videos", robots: { index: false, follow: true } });

// Add a `src` to a video to replace its placeholder.
const GROUPS = [
  { title: "TruPulse Overview", note: "Start here to understand the TruPulse platform.", videos: [
    { title: "Dashboard Overview", note: "Understand the dashboard layout and features." },
  ] },
  { title: "Create a Session", note: "Set up surveys, focus groups, and 1:1 discussion sessions.", videos: [
    { title: "Survey Wizard", note: "Use AI to auto-generate questions." },
    { title: "Quick Start Survey", note: "Begin in under 2 minutes." },
    { title: "Create 1:1 Sessions", note: "Set up a one-on-one feedback session." },
    { title: "Create a Focus Group", note: "Set up a focus group feedback session." },
  ] },
  { title: "Conduct a Session", note: "Join and participate in TruPulse feedback sessions.", videos: [
    { title: "Join a Session", note: "Participate in a live feedback session." },
    { title: "How to Conduct 1:1 Sessions", note: "Run an effective one-on-one feedback session." },
  ] },
  { title: "Reports & Sharing", note: "Analyze insights and share reports with your team.", videos: [
    { title: "Reading Reports", note: "Understand charts, themes, and insights." },
    { title: "Share Results", note: "Export and share reports with your team." },
  ] },
  { title: "Setup & Administration", note: "Manage users, permissions, integrations, and account settings.", videos: [
    { title: "Manage Users", note: "Invite users and assign access." },
    { title: "Integrations", note: "Connect tools and configure settings." },
    { title: "Settings Overview", note: "Learn how to use the settings and administration tools." },
  ] },
  { title: "Support & Troubleshooting", note: "Find answers and resolve issues quickly.", videos: [
    { title: "Common Errors", note: "Resolve issues quickly." },
  ] },
];

export default function VideosPage() {
  return (
    <div className="tp-videos legal-page videos-page">
      <JsonLd graph={[orgNode(), siteNode(), pageNode("WebPage", "/videos", TITLE, DESCRIPTION, true), crumbNode("/videos", [["Home", "/"], ["Product demos", "/videos"]])]} />
      <a className="tp-skip" href="#main-content">Skip to main content</a>
      <LegalHeader />
      <main id="main-content" tabIndex={-1} className="vid-main">
        <header className="vid-hero">
          <div className="shell">
            <p className="eyebrow">Product demos</p>
            <h1>See TruPulse in action.</h1>
            <p className="vid-deck">Explore how TruPulse creates, conducts, and analyzes research&mdash;with your team guiding the process. Start with the product tour, then explore session types, study setup, and reports.</p>
          </div>
        </header>

        <div className="shell vid-lead">
          <VideoCard lead title="TruPulse product walkthrough" note="A two-minute tour of the TruPulse research workflow" />
          <div className="vid-lead-copy">
            <p className="section-label">Start here</p>
            <h2>TruPulse product walkthrough</h2>
            <p>See how a question about your organization becomes an AI-led survey, 1:1 discussion, or focus group&mdash;with findings and supporting evidence for your team to review.</p>
          </div>
        </div>

        {GROUPS.map((group) => (
          <section key={group.title} className="shell vid-group">
            <div className="vid-group-head">
              <h2>{group.title}</h2>
              <p>{group.note}</p>
            </div>
            <div className="vid-grid">
              {group.videos.map((v) => <VideoCard key={v.title} {...v} />)}
            </div>
          </section>
        ))}

        <section className="shell vid-cta">
          <div className="vid-cta-copy">
            <p className="vid-cta-eyebrow">Rather see it live?</p>
            <h3>Bring one question about your organization.</h3>
            <p>See how TruPulse creates the session, conducts the research, and delivers the report &mdash; on your question.</p>
          </div>
          <div className="vid-cta-row">
            <DemoButton className="btn light">Book a Demo <span>&rarr;</span></DemoButton>
            <a className="vid-cta-link" href="mailto:sales@trupulse.ai">Or email sales@trupulse.ai</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
