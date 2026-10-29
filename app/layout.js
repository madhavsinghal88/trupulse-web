import Script from "next/script";
import { SITE } from "@/lib/site";

// Tailwind (globals.css) is loaded by the blog admin layout only: its preflight reset
// would override the browser defaults the marketing pages' stylesheets rely on.
export const metadata = {
  metadataBase: new URL(SITE),
  title: "TruPulse | AI-Led Surveys, 1:1 Discussions & Focus Groups",
  description:
    "AI-led research to understand the people who matter to your organization. Create, conduct, and analyze surveys, 1:1 discussions, and focus groups—with your team guiding the process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLP9J3VE6L"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XLP9J3VE6L');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
