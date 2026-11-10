import "../../styles/legal.css";
import { crumbNode, orgNode, pageMetadata, pageNode, siteNode } from "@/lib/site";
import { LegalHeader } from "../_components/InnerHeader";
import SiteFooter from "../_components/SiteFooter";
import JsonLd from "../_components/JsonLd";
import { DemoButton } from "../_components/actions";

const TITLE = "Pricing | TruPulse";
const DESCRIPTION =
  "Compare TruPulse editions—Essentials, Professional, and Enterprise—and book a demo to discuss the right plan for your organization.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/pricing" });

const EDITIONS = [
  {
    name: "Essentials",
    note: "Core AI-led surveys, 1:1 discussions, and focus groups for teams getting started with structured feedback.",
  },
  {
    name: "Professional",
    note: "Adds multi-language participant support and integrated multi-session Campaigns for broader research programs.",
  },
  {
    name: "Enterprise",
    note: "Includes HRIS sync for large-volume contact handling and the Research Assistant for asking questions across authorized research data.",
  },
];

export default function PricingPage() {
  return (
    <div className="tp-legal legal-page">
      <JsonLd graph={[orgNode(), siteNode(), pageNode("WebPage", "/pricing", TITLE, DESCRIPTION, true), crumbNode("/pricing", [["Home", "/"], ["Pricing", "/pricing"]])]} />
      <a className="tp-skip" href="#main-content">Skip to main content</a>
      <LegalHeader />
      <main id="main-content" tabIndex={-1} className="legal-main">
        <div className="shell">
          <article className="legal-copy">
            <p className="eyebrow">Pricing</p>
            <h1>Plans that grow with your research.</h1>
            <p className="legal-updated">Current edition comparison. Pricing is tailored to your organization—book a demo or email sales for a quote.</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              TruPulse is available in three editions. Visit this page for the edition overview, then talk with our team about allowances, billing, and the right fit for your research volume.
            </p>
            <div className="tp-price-grid">
              {EDITIONS.map((edition) => (
                <section key={edition.name} className="tp-price-card">
                  <h2>{edition.name}</h2>
                  <p>{edition.note}</p>
                </section>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Need help choosing? Compare editions against your integration, analysis, and organizational requirements, or book a demo with our team.
            </p>
            <div className="tp-price-cta">
              <DemoButton>Book a Demo <span>→</span></DemoButton>
              <a className="btn outline" href="mailto:sales@trupulse.ai">Email sales@trupulse.ai</a>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
