import "../../../../styles/article.css";
import { notFound } from "next/navigation";
import { getArticle, listedSlugs } from "@/lib/articles";
import { SITE, crumbNode, orgNode, pageMetadata, pageNode, siteNode } from "@/lib/site";
import { ArticleHeader } from "../../../_components/InnerHeader";
import SiteFooter from "../../../_components/SiteFooter";
import JsonLd from "../../../_components/JsonLd";
import ArticleView from "../../../_components/blog/ArticleView";
import BackLink from "../../../_components/blog/BackLink";

export const dynamicParams = false;

export async function generateStaticParams() {
  return listedSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const found = await getArticle(id);
  if (!found) return { title: "Article not found | TruPulse" };
  const { article } = found;
  return pageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/blogs/blog/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const found = await getArticle(id);
  if (!found) notFound();
  const { article, more } = found;

  const path = `/blogs/blog/${article.slug}`;
  const url = SITE + path;
  const posting = {
    "@type": "BlogPosting", "@id": url + "#article", headline: article.title, description: article.metaDescription, url,
    mainEntityOfPage: { "@id": url + "#webpage" }, inLanguage: "en",
    ...(article.category && { articleSection: article.category }),
    keywords: article.tags.join(", "),
    ...(article.cover && { image: new URL(article.cover, SITE).href }),
    ...(article.created && { datePublished: new Date(article.created).toISOString() }),
    ...(article.updated && { dateModified: new Date(article.updated).toISOString() }),
    author: { "@type": "Organization", name: "TruPulse Research Team", url: SITE + "/" },
    publisher: { "@id": SITE + "/#organization" },
  };

  return (
    <div className="tp-article article-page">
      <JsonLd graph={[posting, pageNode("WebPage", path, article.metaTitle, article.metaDescription, true), crumbNode(path, [["Home", "/"], ["Articles", "/blogs"], [article.title, path]]), orgNode(), siteNode()]} />
      <a className="tp-skip" href="#main-content">Skip to main content</a>
      <ArticleView article={article} more={more} header={<ArticleHeader back={<BackLink />} />} />
      <SiteFooter />
    </div>
  );
}
