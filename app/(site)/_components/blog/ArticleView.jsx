import Link from "next/link";
import { domToReact, htmlToDOM } from "html-react-parser";
import ArticleToc from "./ArticleToc";
import BlogTile from "./BlogTile";

function textOf(node) {
  if (node.type === "text") return node.data;
  return (node.children || []).map(textOf).join("");
}

function walk(nodes, visit) {
  for (const node of nodes) {
    if (node.type === "tag") {
      visit(node);
      walk(node.children || [], visit);
    }
  }
}

function slugify(text) {
  return text.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "section";
}

// The contents rail lists the article's section headings (h2, or h3 / h1 when a CMS
// post has none), each given a stable id to link to.
function prepareBody(html) {
  const nodes = htmlToDOM(html);
  const tags = new Set();
  walk(nodes, (el) => tags.add(el.name));
  const level = ["h2", "h3", "h1"].find((t) => tags.has(t));
  const headings = [];
  const used = new Set();
  walk(nodes, (el) => {
    if (el.name !== level) return;
    const text = textOf(el).replace(/ /g, " ").replace(/\s+/g, " ").trim();
    if (!text) return;
    let id = el.attribs.id || slugify(text);
    for (let n = 2; used.has(id); n++) id = `${slugify(text)}-${n}`;
    used.add(id);
    el.attribs.id = id;
    headings.push({ id, text });
  });
  return { headings, body: domToReact(nodes) };
}

export default function ArticleView({ article, more = [], header }) {
  const { headings, body } = prepareBody(article.content || "");
  const crumb = article.category || "Articles";

  return (
    <>
      {header}
      <main id="main-content" tabIndex={-1}>
        <section className={`article-hero${article.titleInBanner ? "" : " tp-banner-untitled"}`} data-hero="">
          <figure className="article-banner" style={{ aspectRatio: "2400/930", backgroundImage: article.cover ? `url("${article.cover}")` : undefined }}>
            {article.cover && (
              <img src={article.cover} alt={article.alt || article.title} decoding="async" fetchPriority="high" width="2400" height="930" />
            )}
          </figure>
          <div className="article-banner-text">
            <p className="article-meta">
              {article.category && <>{article.category} &middot; </>}{article.readTime} read &middot; TruPulse Research Team
            </p>
            <h1>{article.title}</h1>
            {article.excerpt && <p className="article-deck">{article.excerpt}</p>}
            <nav className="tp-crumb" aria-label="Breadcrumb">
              <Link href="/blogs">Resources</Link><span aria-hidden="true">›</span><span>{crumb}</span>
            </nav>
            {article.tags.length > 0 && (
              <p className="article-tags">{article.tags.map((t) => <span key={t}>{t}</span>)}</p>
            )}
          </div>
        </section>
        <div className="shell article-layout">
          <ArticleToc headings={headings} />
          <article className="article-body" data-body="">{body}</article>
        </div>
        {more.length > 0 && (
          <section className="more-blogs">
            <div className="shell">
              <div className="more-head">
                <h2>Explore other blogs</h2>
                <Link href="/blogs">View all articles →</Link>
              </div>
              <div className="more-grid">{more.map((a) => <BlogTile key={a.id} article={a} />)}</div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
