
// import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
// import "./globals.css";

// export const metadata = {
//   title: "TruPulse",
//   description: "Unlock real-time HR insights with TruPulse. TruPulse’s AI Agent conducts employee 1:1s, focus groups, and surveys—delivering polished executive summaries and metrics in minutes.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ClientLayoutWrapper>
//           {/* <TopBanner /> */}
//           {children}
//         </ClientLayoutWrapper>
//       </body>
//     </html>
//   );
// }


// import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
// import Script from "next/script";
// import "./globals.css";

// export const metadata = {
//   title: "TruPulse",
//   description:
//     "Unlock real-time HR insights with TruPulse. TruPulse’s AI Agent conducts employee 1:1s, focus groups, and surveys—delivering polished executive summaries and metrics in minutes.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Tawk.to Script */}
//         <Script
//           id="tawk-to"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//               (function(){
//                 var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//                 s1.async=true;
//                 s1.src='https://embed.tawk.to/68a454ec84efb51929abe507/1j30unh0i';
//                 s1.charset='UTF-8';
//                 s1.setAttribute('crossorigin','*');
//                 s0.parentNode.insertBefore(s1,s0);
//               })();
//             `,
//           }}
//         />
//       </head>
//       <body>
//         <ClientLayoutWrapper>
//           {/* <TopBanner /> */}
//           {children}
//         </ClientLayoutWrapper>
//       </body>
//     </html>
//   );
// }



// app/layout.jsx
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "TruPulse",
  description:
    "Unlock real-time HR insights with TruPulse. TruPulse’s AI Agent conducts employee 1:1s, focus groups, and surveys—delivering polished executive summaries and metrics in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
          {/* Tawk.to only on Pricing */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68ba8a2e3c8ad919211982bf/1j4cani0j';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
