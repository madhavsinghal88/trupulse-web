import Link from "next/link";
import { DemoButton } from "./actions";

const logo = <img src="/assets/trupulse-logo.webp" alt="TruPulse" width="384" height="121" />;

// Terms, privacy, case study and videos: logo and a way back home.
export function LegalHeader() {
  return (
    <header className="legal-header">
      <div className="shell legal-nav">
        <Link className="logo brand-logo" href="/" aria-label="TruPulse home">{logo}</Link>
        <Link className="back-link" href="/"><span aria-hidden="true">←</span> Back to Home Page</Link>
      </div>
    </header>
  );
}

// Articles index and article pages add a Book a Demo button.
export function ArticleHeader({ back, arrow = false }) {
  return (
    <header className="article-header">
      <div className="shell article-nav">
        <Link className="logo brand-logo" href="/" aria-label="TruPulse home">{logo}</Link>
        {back || (
          <Link className="back-link" href="/" aria-label="Back to Home Page">
            <span className="back-arrow" aria-hidden="true">←</span> Back to Home Page
          </Link>
        )}
        <DemoButton>Book a Demo{arrow && <> <span>→</span></>}</DemoButton>
      </div>
    </header>
  );
}
