"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientLayoutWrapper({ children }) {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

  // Refresh AOS in case of dynamic content
  AOS.refresh();
}, []);

  return <>{children}</>;
}
