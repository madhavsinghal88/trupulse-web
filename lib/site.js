export const SITE = "https://www.trupulse.ai";

export const CALENDLY_URL = "https://calendly.com/dirkpeters-scanta/30min?hide_event_type_details=1";

export const SITE_DESCRIPTION =
  "AI-led research to understand the people who matter to your organization. Create, conduct, and analyze surveys, 1:1 discussions, and focus groups—with your team guiding the process.";

// "Ask our AI assistant": opens the assistant (ChatDock) and, if given, asks the question.
export function openChat(question) {
  window.dispatchEvent(new CustomEvent("tp-open-chat", { detail: { question } }));
}

// Shared Open Graph / Twitter tags for a page, matching the design's <head>.
export function pageMetadata({ title, description, path, type = "website", robots }) {
  return {
    title,
    description,
    alternates: { canonical: SITE + path },
    robots,
    openGraph: { type, siteName: "TruPulse", url: SITE + path, title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

/* JSON-LD, as the design's build script produced it. */
export function orgNode() {
  return {
    "@type": "Organization", "@id": SITE + "/#organization", name: "TruPulse", url: SITE + "/",
    logo: { "@type": "ImageObject", url: SITE + "/assets/trupulse-logo.webp", width: 384, height: 121 },
    description: "AI-led research to understand the people who matter to your organization.",
    email: "hello@trupulse.ai",
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: "sales@trupulse.ai" }],
    sameAs: ["https://www.linkedin.com/company/trupulse"],
  };
}

export function siteNode() {
  return {
    "@type": "WebSite", "@id": SITE + "/#website", url: SITE + "/", name: "TruPulse", inLanguage: "en",
    publisher: { "@id": SITE + "/#organization" },
  };
}

export function pageNode(type, path, name, description, withCrumb) {
  const n = { "@type": type, "@id": SITE + path + "#webpage", url: SITE + path, name, inLanguage: "en", isPartOf: { "@id": SITE + "/#website" } };
  if (description) n.description = description;
  if (withCrumb) n.breadcrumb = { "@id": SITE + path + "#breadcrumb" };
  return n;
}

export function crumbNode(path, trail) {
  return {
    "@type": "BreadcrumbList", "@id": SITE + path + "#breadcrumb",
    itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c[0], item: SITE + c[1] })),
  };
}
