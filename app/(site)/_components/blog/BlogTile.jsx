import Link from "next/link";

// The article card used on the home page, the articles index and under each article.
export default function BlogTile({ article, hidden }) {
  return (
    <Link className="blog-tile" href={`/blogs/blog/${article.slug}`} hidden={hidden}>
      <span className="bc-media">
        {article.cover && (
          <img src={article.cover} alt={article.title} width="640" height="248" loading="lazy" decoding="async" />
        )}
      </span>
      <span className="bc-body">
        <span className="bc-eyebrow">
          {article.category && <span className="tp-sro">{article.category} · </span>}
          {article.readTime} read
        </span>
        <span className="bc-title">{article.title}</span>
        <span className="bc-desc">{article.excerpt}</span>
        <span className="bc-action">Read Article <em>→</em></span>
      </span>
    </Link>
  );
}
