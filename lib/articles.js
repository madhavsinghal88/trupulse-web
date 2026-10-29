import POSTS from "@/lib/posts.json";

// The public articles come from lib/posts.json (the v106 article set, covers in
// public/blogs/covers). The older Firestore posts are no longer listed or served;
// toArticle below still shapes CMS posts for the dashboard preview.
//
// Posts written in the CMS before the redesign have no category, excerpt or read time;
// those fall back to the meta description and a read time from the word count.

export const CATEGORIES = ["Product & Use Cases", "Industry & Practical Guidance", "Thought Leadership"];

// The URL rule the CMS has always used, so existing article links keep working.
export function postSlug(post) {
  if (post.customURL?.length > 3) return post.customURL;
  return titleSlug(post.title);
}

function titleSlug(title = "") {
  return title.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ").join("-");
}

function millis(value) {
  if (!value) return 0;
  if (typeof value === "number") return value;
  if (value.seconds) return value.seconds * 1000;
  return new Date(value).getTime() || 0;
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”", mdash: "—", ndash: "–" };

export function plainText(html = "") {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#\d+|#x[0-9a-f]+|\w+);/gi, (m, e) => {
      if (ENTITIES[e]) return ENTITIES[e];
      if (e[0] === "#") return String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : +e.slice(1));
      return m;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ") > max / 2 ? cut.lastIndexOf(" ") : max) + "…";
}

export function toArticle(post, { withContent = false } = {}) {
  const content = post.content || "";
  const text = plainText(content);
  const words = text ? text.split(" ").length : 0;
  const excerpt = post.excerpt || post.metaDes || truncate(text, 240);
  const article = {
    id: post.id,
    slug: postSlug(post),
    title: (post.title || "Untitled").trim(),
    cover: post.cover_image || "",
    alt: post.altTag || post.title || "",
    category: post.category || "",
    readTime: post.readTime || `${Math.max(1, Math.round(words / 220))} min`,
    excerpt,
    tags: (Array.isArray(post.tags) ? post.tags : (post.tags || "").split(","))
      .map((t) => t.trim()).filter(Boolean),
    related: post.related || [],
    metaTitle: post.metaTitle || post.title || "",
    metaDescription: post.metaDes || excerpt,
    created: millis(post.created_at),
    updated: millis(post.last_edit) || millis(post.created_at),
    isPublished: post.isPublished === true,
    // The cover image already shows the title (the v100 design's article banners).
    titleInBanner: post.titleInBanner === true,
  };
  if (withContent) article.content = content;
  return article;
}

const ARTICLES = POSTS.map((p) => ({
  id: p.slug,
  alt: p.title,
  created: 0,
  updated: 0,
  isPublished: true,
  titleInBanner: true,
  ...p,
}));

// In the order the v106 design lists them.
export async function getListedArticles() {
  return ARTICLES.map(({ content, ...a }) => a);
}

export function listedSlugs() {
  return ARTICLES.map((a) => a.slug);
}

// An article by URL, with up to three others to read next.
export async function getArticle(slug) {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return null;
  return { article, more: pickMore(article, await getListedArticles()) };
}

// The article's own related list first, then others spread evenly across the list.
export function pickMore(article, listed) {
  const others = listed.filter((a) => a.slug !== article.slug);
  const bySlug = new Map(others.map((a) => [a.slug, a]));
  const step = Math.max(1, Math.floor(others.length / 3));
  const picks = [...article.related.map((s) => bySlug.get(s)), ...[0, 1, 2].map((i) => others[i * step])];
  return [...new Set(picks.filter(Boolean))].slice(0, 3);
}
