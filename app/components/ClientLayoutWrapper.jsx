"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CalendlyModal from "./common/CalendlyModal";
import { CalendlyProvider } from "@/lib/CalendlyContext";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <CalendlyProvider>
      {!isAuthPage && <Navbar />}
      {children}
      <CalendlyModal />
      {!isAuthPage && <Footer />}
    </CalendlyProvider>
  );
}
