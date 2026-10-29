// JSON inside a script element: every "<" is escaped, so no closing tag can appear in it.
export default function JsonLd({ graph }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
