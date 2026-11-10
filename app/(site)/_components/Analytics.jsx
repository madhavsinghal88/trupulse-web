"use client";

import { useEffect } from "react";

const GA_ID = "G-XLP9J3VE6L";
const SCRIPT_ID = "tp-ga-script";
const INLINE_ID = "tp-ga-inline";

function readChoice() {
  try {
    const raw = localStorage.getItem("tp-cookie-choice");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function removeGaCookies() {
  if (typeof document === "undefined") return;
  const cookies = document.cookie.split(";");
  for (const part of cookies) {
    const name = part.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    const host = window.location.hostname.replace(/^www\./, "");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${host}`;
  }
}

export function enableAnalytics() {
  if (typeof window === "undefined") return;
  window["ga-disable-" + GA_ID] = false;
  if (document.getElementById(SCRIPT_ID)) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    window.gtag?.("config", GA_ID);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("consent", "default", { analytics_storage: "granted" });
  window.gtag("config", GA_ID);

  const inline = document.createElement("script");
  inline.id = INLINE_ID;
  inline.text = "";
  document.head.appendChild(inline);

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function disableAnalytics() {
  if (typeof window === "undefined") return;
  window["ga-disable-" + GA_ID] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  document.getElementById(SCRIPT_ID)?.remove();
  document.getElementById(INLINE_ID)?.remove();
  removeGaCookies();
}

export function applyAnalyticsConsent(choice) {
  if (choice && choice.analytics) enableAnalytics();
  else disableAnalytics();
}

// Applies any saved consent on load. GA never loads until analytics is accepted.
export default function Analytics() {
  useEffect(() => {
    const choice = readChoice();
    if (choice) applyAnalyticsConsent(choice);
    else disableAnalytics();
    window.tpApplyAnalyticsConsent = applyAnalyticsConsent;
  }, []);
  return null;
}
