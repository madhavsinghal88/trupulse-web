import "../../styles/blogs.css";
import { CATEGORIES, getListedArticles } from "@/lib/articles";
import { SITE, crumbNode, orgNode, pageMetadata, pageNode, siteNode } from "@/lib/site";
import { ArticleHeader } from "../_components/InnerHeader";
import SiteFooter from "../_components/SiteFooter";
import JsonLd from "../_components/JsonLd";
import BlogIndex from "../_components/blog/BlogIndex";

export const revalidate = 300;

const TITLE = "AI-Led Research Articles & Practical Guides | TruPulse";
const DESCRIPTION = "Practical guides to AI-led research: choosing between surveys, 1:1 discussions and focus groups, asking neutral questions, and turning findings into action.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/blogs" });

export default async function BlogsPage() {
  const articles = await getListedArticles();
  const collection = {
    ...pageNode("CollectionPage", "/blogs", TITLE, DESCRIPTION, true),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/blogs/blog/${a.slug}`, name: a.title })),
    },
  };

  return (
    <div className="tp-blogs idx-page">
      <JsonLd graph={[orgNode(), siteNode(), collection, crumbNode("/blogs", [["Home", "/"], ["Articles", "/blogs"]])]} />
      <a className="tp-skip" href="#main-content">Skip to main content</a>
      <ArticleHeader arrow />
      <main id="main-content" tabIndex={-1} className="shell">
        <section className="idx-hero">
          <p className="article-meta">TruPulse resources</p>
          <h1>Better research, in practice.</h1>
          <p>Practical guidance on AI-led surveys, discussions, focus groups, and turning participant feedback into informed decisions.</p>
        </section>
        <BlogIndex articles={articles} categories={CATEGORIES} />
      </main>
      <SiteFooter />
    </div>
  );
}
