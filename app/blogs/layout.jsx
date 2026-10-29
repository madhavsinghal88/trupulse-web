import Link from "next/link";
import "../globals.css";

export const metadata = { robots: { index: false, follow: false } };

// Blog admin: sign-in, dashboard, create and edit. These pages use Tailwind, which is
// loaded only here. Links out to the marketing site are plain <a> so they do a full
// page load and leave Tailwind's reset behind.
export default function BlogAdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="/" aria-label="TruPulse home">
            <img src="/assets/trupulse-logo.webp" alt="TruPulse" width="128" height="40" className="h-9 w-auto" />
          </a>
          <nav className="flex items-center gap-6 text-sm font-semibold text-[#252257]">
            <Link href="/blogs/dashboard">Dashboard</Link>
            <a href="/blogs">View articles</a>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
