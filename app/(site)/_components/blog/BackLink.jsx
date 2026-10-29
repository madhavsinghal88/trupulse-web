"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { previousPath } from "../SiteBehaviors";

// An article's Back returns readers to the articles list when they came from it,
// rather than always to the home page.
export default function BackLink() {
  const [fromArticles, setFromArticles] = useState(false);

  useEffect(() => {
    // Read after SiteBehaviors has recorded this navigation.
    const t = setTimeout(() => setFromArticles(previousPath().startsWith("/blogs")), 0);
    return () => clearTimeout(t);
  }, []);

  const label = fromArticles ? "Resources" : "TruPulse";
  return (
    <Link className="back-link" href={fromArticles ? "/blogs" : "/"} aria-label={`Back to ${label}`}>
      <span className="back-arrow" aria-hidden="true">←</span> Back to {label}
    </Link>
  );
}
