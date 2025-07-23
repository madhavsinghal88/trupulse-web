
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import "./globals.css";

export const metadata = {
  title: "TruPulse",
  description: "Unlock real-time HR insights with TruPulse. TruPulse’s AI Agent conducts employee 1:1s, focus groups, and surveys—delivering polished executive summaries and metrics in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>
          {/* <TopBanner /> */}
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
