
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import "./globals.css";

export const metadata = {
  title: "TruPulse - Best Employee Experience Tool",
  description: "TruPulse is an AI powered people analytics platform for real-time and continuous understanding of company morale, trending topics and corporate culture.",
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
