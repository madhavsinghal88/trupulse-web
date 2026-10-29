import "../../styles/login.css";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import LoginCard from "./LoginCard";

export const metadata = pageMetadata({
  title: "Sign in | TruPulse",
  description: "Access your TruPulse research workspace.",
  path: "/login",
  robots: { index: false, follow: false },
});

export default function LoginPage() {
  return (
    <div className="tp-login login-page">
      <a className="tp-skip" href="#main-content">Skip to main content</a>
      <header className="login-header">
        <div className="shell login-nav">
          <Link className="brand-logo" href="/" aria-label="Back to Home Page"><img src="/assets/trupulse-logo.webp" alt="TruPulse" width="384" height="121" /></Link>
          <Link className="back-link" href="/"><span className="back-arrow" aria-hidden="true">←</span> Back to Home Page</Link>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="login-main">
        <LoginCard />
      </main>
      <div className="login-skyline" aria-hidden="true" />
      <footer className="login-footer">
        <span>© {new Date().getFullYear()} TruPulse. All rights reserved.</span>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@trupulse.ai" target="_blank" rel="noopener noreferrer">Support</a>
        <a href="https://www.linkedin.com/company/trupulse" target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}
