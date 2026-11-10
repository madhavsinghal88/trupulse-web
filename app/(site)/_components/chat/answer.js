import { APP_HELP, FALLBACK, KNOWLEDGE } from "./knowledge";

/* Replies: intent rules first, then the site FAQ, then the website knowledge base
   (knowledge.js — TruPulse Public Website Agent WEB catalogue). Returns { answer, route }.
   INTEGRATION POINT: swap for an assistant endpoint later. */
var COMMON = ["does", "have", "much", "what", "with", "your", "that", "this", "from", "about", "same", "work", "when", "every", "used", "trupulse"];
export function answerFor(text, FAQ) {
  var q = text.toLowerCase().replace(/[’']/g, "'");
  var intent = sampleReport(q) || employeeLeaving(q) || methodChoice(q);
  if (intent) return intent;
  var hit = FAQ.find(function (f) {
    var words = f.q.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ").filter(function (w) { return w.length > 3 && COMMON.indexOf(w) < 0; });
    return words.filter(function (w) { return q.indexOf(w) > -1; }).length >= 2;
  });
  if (hit) return { answer: hit.a, route: hit.route || "answer" };
  var best = null, bestScore = 0;
  KNOWLEDGE.forEach(function (k) {
    var sc = score(q, k.keywords);
    if (sc > bestScore) { best = k; bestScore = sc; }
  });
  if (best) return { answer: best.answer, route: best.route || "answer" };
  if (score(q, APP_HELP.keywords) > 0) return { answer: APP_HELP.answer, route: APP_HELP.route || "support" };
  return overlap(q) || FALLBACK;
}
function entry(id) {
  var k = KNOWLEDGE.find(function (x) { return x.id === id; });
  return { answer: k.answer, route: k.route || "answer" };
}

/* "Show me a sample report" in any wording: keyword phrases miss most of these, and a
   near miss lands on an unrelated answer (demos, follow-ups). Picks the report type
   named in the question, or offers every sample when none is. Questions about who can
   see reports, or about export formats, are left to the knowledge base. */
var SAMPLE = /\b(samples?|examples?)\b/;
var REPORT = /\breports?\b/;
var REQUEST = /\b(show (me|us)|send (me|us)|share|download|preview|view|open)\b|\bsee (a |an |the |some |your |one of your |what )?(samples?|examples?|reports?)\b|\blooks? like\b|\bcopy of\b/;
var NOT_SAMPLE = /\bwho\b|\baccess\b|\bpermissions?\b|\bvisible\b|\b(word|excel|powerpoint|csv|export|formats?)\b/;
function sampleReport(q) {
  q = q.replace(/\bfor example\b|\bsample sizes?\b/g, "");
  var survey = /\bsurveys?\b/.test(q);
  var discussion = /\b1:1\b|\b1 ?on ?1\b|\bone[- ]on[- ]one\b|\binterviews?\b|\bdiscussions?\b/.test(q);
  var focus = /\bfocus[- ]?groups?\b/.test(q);
  var campaign = /\bcampaigns?\b/.test(q);
  var individual = /\b(individual|each participant|per participant|single participant|one participant|one person|raw|responses|answers)\b/.test(q);
  var types = [survey, discussion, focus, campaign].filter(Boolean).length;
  var sample = SAMPLE.test(q), report = REPORT.test(q), request = REQUEST.test(q);
  if (NOT_SAMPLE.test(q) || !((sample && (report || request || types)) || (report && request))) return null;
  if (focus && campaign && types === 2) return entry("SITE_SAMPLE_FOCUS");
  if (types === 1) {
    if (focus) return entry("SITE_SAMPLE_FOCUS");
    if (campaign) return entry("SITE_SAMPLE_FOCUS");
    if (survey) return entry(individual ? "SITE_SAMPLE_SURVEY_RESPONSES" : "SITE_SAMPLE_SURVEY_SESSION");
    return entry(individual ? "SITE_SAMPLE_DISCUSSION_INDIVIDUAL" : "SITE_SAMPLE_DISCUSSION_SESSION");
  }
  return {
    answer: "Here are our sample reports, built with sample data—open any of them below. Focus Group Session Report and Campaign Report samples are coming soon; we can walk you through those in a demo.",
    route: "samples",
  };
}

/* Employee stay/leave research (WEB 014), however it is worded. */
function employeeLeaving(q) {
  var employees = /\b(employees?|staff|workforce|team members?|people)\b/.test(q);
  var leaving = /\b(leav(e|ing)|quit|resign|attrition|turnover|retention|stay or leave|considering leaving)\b/.test(q);
  return employees && leaving ? entry("WEB014") : null;
}

/* “Which research method should I use?” and similar: clarify audience and purpose
   (engine.js also runs a short advisor flow when these phrases are asked in chat). */
function methodChoice(q) {
  if (!/\bwhich (research )?method\b|\bwhich (one|format|session|approach) should (i|we) use\b|\bwhich should (i|we) use\b|\bhelp (me|us) choose (a |the )?(research )?method\b|\brecommend (a |an |the )?(research )?method\b|\b(survey|discussion|focus group).{0,40}\bor\b.{0,40}(survey|discussion|focus)/.test(q)) return null;
  return entry("METHOD");
}

/* Last resort before the fallback: the answer that shares the most meaningful words
   with the question (at least two), so unlisted phrasings still find something. */
var STOP = ["what", "which", "would", "could", "should", "there", "their", "about", "does", "have", "with", "your", "that", "this", "from", "into", "they", "them", "when", "where", "will", "just", "like", "want", "need", "know", "tell", "trupulse"];
function overlap(q) {
  var words = q.replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(function (w) { return w.length > 3 && STOP.indexOf(w) < 0; });
  var best = null, bestHits = 1;
  KNOWLEDGE.forEach(function (k) {
    var text = k.answer.toLowerCase();
    var hits = words.filter(function (w) { return text.indexOf(w.replace(/s$/, "")) > -1; }).length;
    if (hits > bestHits) { best = k; bestHits = hits; }
  });
  return best ? { answer: best.answer, route: best.route || "answer" } : null;
}
/* Matched keywords, weighted by length so specific phrases beat single words.
   Short keywords only count as whole words ("hi" is not in "this"), and a plural
   keyword also matches its singular ("contacts" matches "contact"). */
function score(q, keywords) {
  return keywords.reduce(function (sum, k) {
    var stem = k.length > 4 && /s$/.test(k) ? k.slice(0, -1) : k;
    var found = k.length <= 4 && /^[a-z0-9]+$/.test(k) ? new RegExp("\\b" + k + "\\b").test(q) : q.indexOf(stem) > -1;
    return found ? sum + k.length : sum;
  }, 0);
}
