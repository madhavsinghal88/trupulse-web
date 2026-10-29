import Link from "next/link";
import { ChatLink, DemoLink } from "./actions";

const EXPLORE = [
  ["how-it-works", "How TruPulse Works"],
  ["product", "Session Types"],
  ["reports", "Reports"],
  ["use-cases", "Use Cases"],
];

// On the home page the Explore links scroll in place; elsewhere they lead back to it.
export default function SiteFooter({ home = false }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-about">
            {home ? (
              <a className="logo brand-logo footer-brand-logo" href="#top"><img src="/assets/trupulse-logo-footer.webp" alt="TruPulse" width="384" height="121" /></a>
            ) : (
              <Link className="logo brand-logo footer-brand-logo" href="/"><img src="/assets/trupulse-logo-footer.webp" alt="TruPulse" width="384" height="121" /></Link>
            )}
            <p>AI-led research to understand the people who matter to your organization. Create, conduct, and analyze surveys, 1:1 discussions, and focus groups&mdash;with your team guiding the process.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              {EXPLORE.map(([id, label]) =>
                home ? <a key={id} href={`#${id}`}>{label}</a> : <Link key={id} href={`/#${id}`}>{label}</Link>
              )}
            </div>
            <div>
              <strong>Resources &amp; Help</strong>
              <Link href="/blogs">Articles</Link>
              <ChatLink>Ask Our AI Assistant</ChatLink>
              <a href="mailto:hello@trupulse.ai">Contact Us</a>
            </div>
            <div>
              <strong>Connect</strong>
              <DemoLink>Book a Demo</DemoLink>
              <a href="https://www.linkedin.com/company/trupulse" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:hello@trupulse.ai">hello@trupulse.ai</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TruPulse. All rights reserved.</span>
        <span className="legal-footer-links">
          <Link href="/privacy">Privacy Policy</Link><span>·</span><Link href="/terms">Terms and Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
