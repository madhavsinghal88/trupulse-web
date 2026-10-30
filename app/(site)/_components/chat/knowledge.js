// What the website assistant knows beyond the FAQ, drawn from the customer knowledge base
// (KNOWLEDGE_BASE.md, next to this file). Update that document first, then mirror it here.
//
// Scope: product features, what they are for, and how organizations use TruPulse.
// Out of scope: Dashboard click-paths, TruPulse Connect (participant app) steps, internal
// admin troubleshooting, and plan prices. Questions about using the app get APP_HELP.
//
// Each entry: keywords (lowercase words or phrases matched against the question; the
// best-scoring entry wins) and the answer.

export const KNOWLEDGE = [
  {
    keywords: ["what is trupulse", "what does trupulse do", "about trupulse", "tell me about", "what is this", "overview"],
    answer: "TruPulse is an AI-led research platform that creates, conducts, and analyzes surveys, 1:1 discussions, and focus groups. Your team sets the direction, approves the research, and reviews the findings, while AI prepares the session, runs the conversations or surveys, and structures the analysis. The goal: go beyond what people think and understand why, with richer feedback and less manual work.",
  },
  {
    keywords: ["feature", "features", "benefit", "benefits", "advantage", "why use", "why should", "what can it do", "what can trupulse do", "how can it help", "how it can help", "how can trupulse help", "help my org", "help us", "value"],
    answer: "Key features and how they help: 1) A session creation agent turns your question into a ready-to-review survey, 1:1 discussion, or focus group—no research design from scratch. 2) AI conducts the research, asking follow-ups so you learn why, not just what. 3) Participants join anytime, by chat or voice, in 17 languages. 4) Reports bring key findings, themes, quotes, and suggested next steps together—no manual analysis. 5) You stay in control with approvals, research guidelines, roles, branding, and anonymity options. The result: richer feedback with less manual work for your team.",
  },
  {
    keywords: ["who is it for", "who uses", "who can use", "schools", "nonprofit", "public agenc", "government", "small business", "industry", "industries", "sector", "hospital", "healthcare", "university", "retail", "bank"],
    answer: "TruPulse is for businesses, schools, nonprofits, public agencies, and other organizations that need to understand employees, customers, students, members, or communities.",
  },
  {
    keywords: ["different from", "difference from", "compared to", "versus", "traditional survey", "survey tool", "why not just", "qualtrics", "surveymonkey", "google forms"],
    answer: "Unlike a traditional survey tool, TruPulse can ask relevant follow-up questions, run individual and group discussions, and analyze the responses—so your team sees people’s experiences and the reasons behind them, not only scores or raw answers.",
  },
  {
    keywords: ["how does it work", "how does trupulse work", "how it works", "journey", "get started", "getting started"],
    answer: "Four steps: 1) Define what you want to understand—start from a topic, objective, or use-case template, and TruPulse’s session creation agent helps you shape a session guide for your approval. 2) Invite the right participants from saved contacts, groups, or an imported list, and track who has started. 3) Let AI conduct the research, asking relevant follow-ups. 4) Review the findings—key findings, themes, and supporting evidence—and decide what’s next.",
  },
  {
    keywords: ["session type", "which should i use", "which format", "format should", "survey, 1:1", "fits my question", "difference between", "choose between", "which one"],
    answer: "Choose the format that fits the question. Surveys give breadth with explanation—structured questions plus AI follow-ups. AI-led 1:1 discussions give depth on individual experiences. AI-moderated focus groups let people build on each other’s perspectives. Many teams combine them—for example, a survey first, then discussions to explore the themes that emerge.",
  },
  {
    keywords: ["1:1", "one-on-one", "one on one", "1 on 1", "discussion", "interview", "stay interview"],
    answer: "AI-led 1:1 discussions are private, AI-conducted interviews. Your team approves the discussion guide; AI runs each discussion, asking follow-ups that explore reasons and examples. Participants join when it suits them, by chat or voice, in any of 17 languages—so your team doesn’t have to schedule or run every interview. Great for stay interviews, customer discovery, and member feedback.",
  },
  {
    keywords: ["survey", "follow-up", "follow up", "base question", "fixed", "conditional", "adaptive", "question types", "rating", "multiple choice"],
    answer: "Surveys combine base questions with follow-ups that explore why someone answered as they did. Fixed follow-ups are the same for everyone; conditional follow-ups appear only when an answer meets criteria you set (including sentiment on free text); adaptive follow-ups are generated in real time from each participant’s answer. You choose the kind of “why” you want—what influenced the answer, an example, whether it’s a pattern, or suggestions—and approve the survey before launch.",
  },
  {
    keywords: ["focus group", "group discussion", "moderat", "workshop", "observer"],
    answer: "In an AI-moderated focus group, participants join a live group discussion while AI moderates: it invites quieter voices and manages dominant speakers, asks for examples and probes differing viewpoints, and shares summaries so people can clarify or add more. Your team approves the guide. Ideal for idea workshops, product concept feedback, and team improvement.",
  },
  {
    keywords: ["create session", "create a session", "new session", "create a survey", "create a discussion", "create a focus group", "session creation", "creation agent", "set up", "setup", "prompt", "design research"],
    answer: "TruPulse’s session creation agent turns your research question into a ready-to-review session. Choose a format (or ask which fits), describe your goals or start from a template, and answer a short clarifying Q&A. The agent then prepares the questions or topics, descriptions, invitations, and suggested follow-ups. You edit, approve, and launch when ready—your role stays on what you want to learn, not writing everything from a blank page.",
  },
  {
    keywords: ["template", "templates", "use case library", "reuse"],
    answer: "Templates are optional starters: begin from a use-case template, reuse a previous session, or use your own saved template. You can always bring your own topic, audience, and objectives instead.",
  },
  {
    keywords: ["report", "findings", "insight", "analysis", "analyze", "summary", "quotes", "evidence", "next steps"],
    answer: "Reports move you from collected responses to a shared view your team can act on: key findings tied to your objective, themes and differences, supporting evidence and quotes (with paths to transcripts or full responses), conclusions, and Suggested Next Steps for your team to consider. 1:1 reports are organized by topic, survey reports by question with follow-up explanations, and focus group reports show agreement and disagreement.",
  },
  {
    keywords: ["export", "download", "pdf", "powerpoint", "word", "excel", "csv", "customize report", "individual report", "transcript"],
    answer: "Get reports for an entire session or one participant, and customize them by adding or removing sections and editorial comments. Download reports in Word, PDF, or PowerPoint where available, and export survey response data to Excel or CSV. Discussion and focus group transcripts are available too.",
  },
  {
    keywords: ["campaign", "campaigns", "multiple sessions", "combine sessions", "bigger picture"],
    answer: "Group related sessions into a Campaign. Review each session’s report, then explore a Campaign report that brings insights together across all its sessions.",
  },
  {
    keywords: ["use case", "use cases", "help my organization", "help my organisation", "help my company", "how could trupulse", "benefit my", "my organization", "my organisation", "my company", "my team", "my school", "examples", "onboarding", "retention", "customer satisfaction", "engagement", "change management", "communication"],
    answer: "Teams use TruPulse to understand experiences, discover unmet needs, test ideas, navigate change, strengthen engagement, and check that communication lands as intended—with employees, customers, students, members, or communities. For example: surveys for breadth and 1:1s for depth on onboarding, focus groups to react to a product concept, or 1:1s to understand why people stay or leave. You can also bring your own question.",
  },
  {
    keywords: ["participant", "invite", "invitation", "contact", "contacts", "audience", "groups", "import", "hris", "add user", "new user", "add employee", "phone", "mobile", "device", "laptop", "app to install", "download an app"],
    answer: "You invite participants from your saved contacts, participant groups, or an imported list, then track who has started and finished in one workspace. Participants take part on any device—phone, tablet, or computer—at a time that suits them while the session is open.",
  },
  {
    keywords: ["language", "languages", "translate", "spanish", "arabic", "multilingual"],
    answer: "Participants can take part in any of 17 languages: English, Spanish, Hindi, Portuguese, French, German, Arabic, Chinese, Japanese, Korean, Indonesian, Italian, Dutch, Polish, Russian, Ukrainian, and Vietnamese.",
  },
  {
    keywords: ["voice", "by voice", "speak", "spoken", "talk instead", "microphone", "audio"],
    answer: "Yes—in 1:1 discussions, participants can respond by voice as well as chat.",
  },
  {
    keywords: ["anonymous", "anonymity", "identified", "identity", "confidential", "who can see", "privacy"],
    answer: "The session Creator chooses anonymous or identified, and participants are told which applies before they take part. In anonymous sessions, names are hidden in responses and reports—though what people share may still identify them. In identified sessions, individual reports include the participant’s name for the Creator, people they authorize, and admins with global viewing access. Privacy also differs by type: surveys are solo, 1:1s are participant and AI, and focus groups include multiple participants.",
  },
  {
    keywords: ["train", "training data", "model training", "machine learning", "use my data"],
    answer: "No. Participant responses are not used to train AI models. They are used only to run your research and generate findings for your organization.",
  },
  {
    keywords: ["brand", "branding", "logo", "colors", "colours", "white label"],
    answer: "Your organization’s identity appears on invitations, sessions, and reports, so participants get a consistent experience that reflects your brand.",
  },
  {
    keywords: ["guardrail", "guideline", "sensitive", "tone", "control the ai", "rules", "compliance", "human review", "approve"],
    answer: "You stay in control. Research guidelines set rules for the AI’s language, questions, and sensitive topics in line with your standards. Your team approves every session before launch and evaluates findings and evidence before acting.",
  },
  {
    keywords: ["roles", "permissions", "access", "admin", "team member", "teammate", "colleague", "add my team"],
    answer: "Roles and permissions control who on your team can create research, review responses, and access reports.",
  },
  {
    keywords: ["retention", "delete", "deletion", "how long", "keep data", "purge"],
    answer: "You decide how long research data is kept and how deletion is managed, in line with your organization’s policy.",
  },
  {
    keywords: ["security", "secure", "encrypt", "aws", "hosting", "hosted", "data residency", "gdpr", "where is data", "stored"],
    answer: "TruPulse is hosted on Amazon Web Services. Data is encrypted in transit and at rest, and can be stored in the region that matches your regulatory requirements (for example, the US or Europe). TruPulse provides aggregated insight, not individual monitoring.",
  },
  {
    keywords: ["case study", "customer story", "success story", "example customer", "proof"],
    answer: "A global medical technology company used TruPulse to learn from 50 top sales performers in two weeks, with two leaders overseeing the work. AI ran ~30-minute 1:1 discussions plus follow-up surveys and prepared individual and executive reports—25+ hours of discussion analyzed. The findings informed targeted training, updated job descriptions, and plans to expand the research.",
  },
  {
    keywords: ["who is behind", "company behind", "scanta", "who makes"],
    answer: "TruPulse is developed by Scanta Inc.",
  },
  {
    keywords: ["demo", "call", "meet", "see it", "trial", "walkthrough", "contact sales", "talk to"],
    answer: "Happy to—use Book a Demo and bring one research question about your organization. We’ll show you how TruPulse creates, conducts, and reports on it. You can also email hello@trupulse.ai.",
  },
  {
    keywords: ["price", "pricing", "cost", "plan", "how much"],
    answer: "Pricing depends on how many people you research and how often. Book a demo or email hello@trupulse.ai and we’ll put together the right option for you.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello—I’m the TruPulse AI assistant. What would you like to understand about the people your decisions affect?",
  },
];

// Questions about using the signed-in app: no click-paths here, just where to get help.
export const APP_HELP = {
  keywords: ["log in", "login", "sign in", "password", "otp", "verification code", "notification", "tutorial", "sidebar", "dashboard", "settings", "my account", "subscription", "upgrade my plan", "error", "bug", "not working", "technical support"],
  answer: "I can’t walk through the TruPulse app itself here. If you already use TruPulse, email support@trupulse.ai and our team will help. If you’re exploring TruPulse, Book a Demo and we’ll show you how it works for your question.",
};

export const FALLBACK = "I can help with questions about TruPulse—sessions, surveys, 1:1 discussions, focus groups, reports, and privacy. For anything else, Book a Demo or email hello@trupulse.ai and a person will reply.";
