"use client";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CalendlyModal from "./common/CalendlyModal";
import { CalendlyProvider } from "@/lib/CalendlyContext";

export default function ClientLayoutWrapper({ children }) {
  return (
    <CalendlyProvider>
      <Navbar />
      {children}
      <CalendlyModal />
      <Footer />
    </CalendlyProvider>
  );
}
