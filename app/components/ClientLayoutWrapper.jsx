"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CalendlyModal from "./common/CalendlyModal";
import { CalendlyProvider } from "@/lib/CalendlyContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <CalendlyProvider>
      <div className={`${inter.variable} font-sans`}>
        {!isAuthPage && <Navbar />}
        {children}
        <CalendlyModal />
        {!isAuthPage && <Footer />}
      </div>
    </CalendlyProvider>
  );
}
