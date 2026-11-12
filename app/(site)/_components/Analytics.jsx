"use client";

import { useEffect } from "react";

const GA_ID = "G-XLP9J3VE6L";
const SCRIPT_ID = "tp-ga-script";
const INLINE_ID = "tp-ga-inline";

const DENIED = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

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
    if (!name.startsWith("_ga") && !name.startsWith("_gcl") && name !== "_gid") continue;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    const host = window.location.hostname.replace(/^www\./, "");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${host}`;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
  }
}

function consentFromChoice(choice) {
  const analytics = !!(choice && choice.analytics);
  const marketing = !!(choice && choice.marketing);
  return {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  };
}

function loadGaScript() {
  if (document.getElementById(SCRIPT_ID)) return;
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

export function enableAnalytics(choice) {
  if (typeof window === "undefined") return;
  window["ga-disable-" + GA_ID] = false;
  ensureGtag();
  const consent = consentFromChoice(choice || { analytics: true, marketing: false });

  if (document.getElementById(SCRIPT_ID)) {
    window.gtag("consent", "update", consent);
    window.gtag("config", GA_ID, {
      allow_google_signals: !!choice?.marketing,
      allow_ad_personalization_signals: !!choice?.marketing,
    });
    return;
  }

  // Consent Mode v2 defaults before any hits: ads stay denied unless Marketing is on.
  window.gtag("consent", "default", DENIED);
  window.gtag("js", new Date());
  window.gtag("consent", "update", consent);
  window.gtag("config", GA_ID, {
    allow_google_signals: !!choice?.marketing,
    allow_ad_personalization_signals: !!choice?.marketing,
  });
  loadGaScript();
}

export function disableAnalytics() {
  if (typeof window === "undefined") return;
  window["ga-disable-" + GA_ID] = true;
  ensureGtag();
  window.gtag("consent", "update", DENIED);
  document.getElementById(SCRIPT_ID)?.remove();
  document.getElementById(INLINE_ID)?.remove();
  removeGaCookies();
}

export function applyAnalyticsConsent(choice) {
  if (choice && choice.analytics) enableAnalytics(choice);
  else disableAnalytics();
}

// Applies any saved consent on load. GA never loads until analytics is accepted.
// Advertising / audience signals stay denied unless Marketing is accepted.
export default function Analytics() {
  useEffect(() => {
    ensureGtag();
    window.gtag("consent", "default", DENIED);
    const choice = readChoice();
    if (choice) applyAnalyticsConsent(choice);
    else disableAnalytics();
    window.tpApplyAnalyticsConsent = applyAnalyticsConsent;
  }, []);
  return null;
}
