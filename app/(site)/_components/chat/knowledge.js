// What the website assistant knows beyond the FAQ, drawn from the TruPulse User Guide
// (trupulse-feedback-be/src/dashboard/data/trupulse_user_guide.pdf).
//
// Only what a prospective customer should hear on the public site. Deliberately left out:
// how to use the signed-in app (navigation, wizard steps, settings screens, sign-in and
// passwords), plan prices, and anything the guide marks as feature-flagged or unconfirmed.
// Questions about using the app are answered by APP_HELP instead.
//
// Each entry: keywords (lowercase words or phrases matched against the question; the
// best-scoring entry wins) and the answer.

export const KNOWLEDGE = [
  {
    keywords: ["session type", "which should i use", "survey, 1:1", "fits my question", "difference between", "choose between"],
    answer: "It depends on what you need to learn. Use a survey to hear from a wide audience with structured questions and AI follow-ups. Use AI-led 1:1 discussions to explore individual experiences in depth. Use an AI-moderated focus group when you want people to build on each other’s perspectives. Many teams combine them—for example, a survey first, then discussions to explore the themes that emerge.",
  },
  {
    keywords: ["help my organization", "help my company", "what can trupulse do", "how could trupulse", "use case", "use cases"],
    answer: "TruPulse helps you understand the people your decisions affect—employees, customers, students, members, and communities. Teams use it to understand experiences, discover unmet needs, test ideas, navigate change, strengthen engagement, and check that messages land as intended. You set the question; TruPulse creates the session, conducts it with AI, and prepares findings for your team to review.",
  },
  {
    keywords: ["1:1", "one-on-one", "one on one", "1 on 1", "discussion", "interview"],
    answer: "In an AI-led 1:1 discussion, TruPulse’s AI has a private conversation with each participant about the topics you approved, asking follow-up questions to understand the reasons behind their answers. Participants take part whenever it suits them, by chat or voice, in any of 17 languages. You get transcripts, individual reports, and a session report with themes and supporting quotes.",
  },
  {
    keywords: ["focus group", "group discussion", "moderat", "observer"],
    answer: "In an AI-moderated focus group, several participants join one live discussion while TruPulse’s AI moderates: it invites quieter voices, manages dominant speakers, asks for examples, and shares summaries so people can clarify or add more. You can add observers who watch live without taking part; participants are told when an observer is present.",
  },
  {
    keywords: ["survey", "follow-up", "follow up", "question types", "rating", "multiple choice"],
    answer: "TruPulse surveys support single choice, multiple choice, rating, and open-text questions. You can add follow-ups where you want deeper insight: Fixed (everyone sees it), Conditional (shown when an answer meets a rule, such as a rating below a threshold or a particular choice), or Adaptive (AI asks a relevant follow-up based on the response and your research intent).",
  },
  {
    keywords: ["create", "set up", "setup", "get started", "how does it work", "how it works", "template", "prompt"],
    answer: "You start with a question or research objective—or a template from the use case library. TruPulse’s AI asks a few questions to clarify your audience and goals, then drafts the session: topics or questions, participant-facing descriptions, and the invitation. Your team reviews and edits everything, chooses participants, and approves the session before launch. You can also test it with a few people first.",
  },
  {
    keywords: ["report", "findings", "insight", "analysis", "analyze", "export", "pdf", "powerpoint", "word", "excel", "csv"],
    answer: "TruPulse prepares reports built around your research objective: key findings, themes and differences, supporting quotes, engagement measures, and suggested next steps for your team to review. Reports are available for a whole session or an individual participant, and can be customized and branded. Download them as PDF, Word, or PowerPoint, and export survey responses to Excel or CSV.",
  },
  {
    keywords: ["metric", "score", "enps", "morale", "retention risk", "sentiment"],
    answer: "Alongside themes and quotes, sessions can include AI-driven measures such as morale, retention risk, workload balance, communication clarity, and eNPS. You choose which measures to include for each session.",
  },
  {
    keywords: ["language", "languages", "translate", "spanish", "arabic", "multilingual"],
    answer: "Participants can take part in any of 17 languages: English, Spanish, Hindi, Portuguese, French, German, Arabic, Chinese, Japanese, Korean, Indonesian, Italian, Dutch, Polish, Russian, Ukrainian, and Vietnamese.",
  },
  {
    keywords: ["voice", "by voice", "speak", "spoken", "talk instead", "microphone", "audio"],
    answer: "Yes—in 1:1 discussions, participants can respond by voice as well as chat, where their browser supports it.",
  },
  {
    keywords: ["anonymous", "anonymity", "identified", "identity", "confidential"],
    answer: "For each session, the creator chooses whether it is anonymous or identified, and participants are told which applies before they take part. In anonymous sessions, names are hidden from responses and reports—though details people share may still reveal who they are.",
  },
  {
    keywords: ["participant", "invite", "invitation", "join", "how do participants", "account"],
    answer: "Participants are invited by email and join through a link—they see what the session is about, whether it is anonymous or identified, and the topics it will cover before they begin. They can take part on any device, at a time that suits them, while the session is open.",
  },
  {
    keywords: ["contacts", "import", "hris", "upload", "audience", "groups"],
    answer: "You choose participants from your own contact list: add people individually, import a CSV, save reusable groups, or sync from your HRIS. You can filter by attributes such as department or location to reach the right audience.",
  },
  {
    keywords: ["schedule", "recurring", "repeat", "ongoing", "campaign", "pulse"],
    answer: "Sessions can launch immediately or be scheduled, and can repeat on a regular cadence for ongoing listening. Related sessions can be brought together in campaigns, with a combined report across them.",
  },
  {
    keywords: ["brand", "branding", "logo", "colors", "colours", "white label"],
    answer: "You can bring your organization’s identity to the experience—your logo, colors, and fonts appear in participant invitations, sessions, and reports.",
  },
  {
    keywords: ["guardrail", "sensitive", "tone", "control the ai", "rules", "compliance"],
    answer: "Your team sets guardrails for the AI: topics to avoid, tone, compliance language, and how sensitive subjects are handled. They apply across sessions, and every session is reviewed and approved by your team before launch.",
  },
  {
    keywords: ["roles", "permissions", "access", "who can see", "admin"],
    answer: "Access is managed with roles and permissions, so you decide who can create and run research, review responses, and see reports.",
  },
  {
    keywords: ["security", "secure", "encrypt", "aws", "hosting", "hosted", "data residency", "gdpr", "where is data", "stored"],
    answer: "TruPulse is hosted on Amazon Web Services. Data is encrypted in transit and at rest, and can be stored in the region that matches your regulatory requirements (for example, the US or Europe). TruPulse provides aggregated insight, not individual monitoring.",
  },
  {
    keywords: ["retention", "delete", "deletion", "how long", "keep data", "purge"],
    answer: "You control how long research data is kept. Set a retention period that matches your organization’s policy and data is deleted automatically when it ends.",
  },
  {
    keywords: ["train", "training data", "model training", "machine learning"],
    answer: "No. TruPulse does not use participant responses or any client data to train AI models. Your data is used only to conduct your research and prepare findings for your organization.",
  },
  {
    keywords: ["who is behind", "company behind", "scanta", "who makes"],
    answer: "TruPulse is developed by Scanta Inc.",
  },
  {
    keywords: ["demo", "call", "meet", "see it", "trial"],
    answer: "Happy to—use Book a Demo to pick a time, and bring one question about your organization. We’ll show you how TruPulse would research it.",
  },
  {
    keywords: ["price", "pricing", "cost", "plan", "how much"],
    answer: "Pricing depends on how many people you research and how often. Book a demo or email sales@trupulse.ai and we’ll put together the right option for you.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    answer: "Hello—I’m the TruPulse AI assistant. What would you like to understand about the people your decisions affect?",
  },
];

// Questions about using the signed-in app are answered here rather than from the guide.
export const APP_HELP = {
  keywords: ["log in", "login", "sign in", "password", "sidebar", "dashboard", "settings", "my account", "subscription", "upgrade my plan", "error", "bug", "not working", "technical support"],
  answer: "For help using the TruPulse app, signed-in users can find video walkthroughs under Tutorials and get help in Settings → Support & Troubleshooting. You can also email support@trupulse.ai and our team will help.",
};

export const FALLBACK = "I could not answer that one. Book a demo and we will walk through it with you, or email hello@trupulse.ai and a person will reply.";
