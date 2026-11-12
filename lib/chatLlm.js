import { KNOWLEDGE, FALLBACK } from "@/app/(site)/_components/chat/knowledge";

const SYSTEM_RULES = `You are Luna, the TruPulse public website assistant. You help prospective customers evaluate TruPulse.

Voice and rules:
- Speak as TruPulse (“we”, “our”). Never say “the website says” or “public materials state”.
- Only use facts from the TruPulse knowledge below. Do not invent prices, certifications, customer names, integrations, SLAs, or features.
- If something is unconfirmed, say so briefly and refer the visitor to sales@trupulse.ai or Book a Demo.
- You cannot access customer research, account data, or another customer’s responses. Say that clearly when asked.
- Keep answers concise (2–5 sentences) unless the visitor asked for several parts—then cover each part.
- For pricing, do not invent amounts—ask the visitor to book a demo or email sales@trupulse.ai.
- For legal/privacy-law interpretation, tell visitors to check with their legal department.
- Prefer TruPulse session types: AI-led 1:1 Discussions, Surveys with AI follow-ups, AI-moderated Focus Groups, and Campaigns.
- TruPulse is for adults 18+. Do not invent HIPAA, SSO, on-prem hosting, or app-download requirements.
- If the question is off-topic or unsafe, decline briefly and offer TruPulse help.`;

function knowledgeDigest() {
  return KNOWLEDGE.map(function (k) {
    return "[" + k.id + "] " + k.answer;
  }).join("\n");
}

export function buildChatMessages(message, history) {
  var prior = Array.isArray(history) ? history.slice(-8) : [];
  var messages = [
    { role: "system", content: SYSTEM_RULES + "\n\nTruPulse knowledge:\n" + knowledgeDigest() },
  ];
  prior.forEach(function (m) {
    if (!m || !m.text) return;
    messages.push({ role: m.mine ? "user" : "assistant", content: String(m.text).slice(0, 1200) });
  });
  messages.push({ role: "user", content: String(message || "").slice(0, 2000) });
  return messages;
}

export async function askTruPulseLlm(message, history) {
  var apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return { ok: false, reason: "missing_key", answer: FALLBACK.answer, route: FALLBACK.route };
  }

  var base = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  var model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  var response = await fetch(base + "/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      temperature: 0.2,
      max_tokens: 500,
      messages: buildChatMessages(message, history),
    }),
  });

  if (!response.ok) {
    var errText = await response.text().catch(function () { return ""; });
    console.error("[chat/llm]", response.status, errText.slice(0, 300));
    return { ok: false, reason: "upstream", answer: FALLBACK.answer, route: FALLBACK.route };
  }

  var data = await response.json();
  var answer = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  answer = String(answer || "").trim();
  if (!answer) {
    return { ok: false, reason: "empty", answer: FALLBACK.answer, route: FALLBACK.route };
  }

  return { ok: true, answer: answer, route: "answer", id: "GPT_LUNA" };
}
