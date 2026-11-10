// Public website assistant answers (TruPulse Public Website Agent, WEB catalogue updated Nov 5 2026).
// 151 retained WEB questions plus website-only sample/case/chat helpers.
// Each entry: keywords (matched against the question), answer, and route key.

export const ROUTES = {
  answer: { actions: [] },
  clarify: { actions: [] },
  product: { actions: [{ label: "View Product", href: "/#product" }] },
  workflow: { actions: [{ label: "How TruPulse Works", href: "/#how-it-works" }] },
  reports: { actions: [{ label: "Open Reports", href: "/#reports" }] },
  samples: { actions: [
    { label: "1:1 Discussion Session Report", href: "/reports/1to1-Discussion-Session-Report.pdf", newTab: true },
    { label: "1:1 Discussion Individual Report", href: "/reports/1to1-Discussion-Individual-Report.pdf", newTab: true },
    { label: "Survey Session Report", href: "/reports/Survey-Session-Report.pdf", newTab: true },
    { label: "Survey Individual Responses Report", href: "/reports/Survey-Individual-Responses-Report.pdf", newTab: true },
    { label: "Focus Group Session Report", href: "/reports/Focus-Group-Session-Report.pdf", newTab: true },
    { label: "Campaign Report", href: "/reports/Campaign-Report.pdf", newTab: true },
  ] },
  use_cases: { actions: [{ label: "View Use Cases", href: "/#use-cases" }] },
  privacy: { actions: [{ label: "Privacy Policy", href: "/privacy" }] },
  privacy_contact: { actions: [{ label: "Email Privacy@trupulse.ai", href: "mailto:Privacy@trupulse.ai" }] },
  contact: { actions: [{ label: "Email sales@trupulse.ai", href: "mailto:sales@trupulse.ai" }] },
  support: { actions: [
    { label: "Sign in", href: "/login" },
    { label: "Email support@trupulse.ai", href: "mailto:support@trupulse.ai" },
  ] },
  sign_in: { actions: [{ label: "Sign in", href: "/login" }] },
  demo: { actions: [{ label: "Book a Demo", action: "demo" }] },
  videos: { actions: [{ label: "Watch a Demo", href: "/videos" }] },
  booking_status: { actions: [{ label: "Email sales@trupulse.ai", href: "mailto:sales@trupulse.ai" }] },
  sample_discussion_session: { actions: [{ label: "Open 1:1 Discussion Session Report", href: "/reports/1to1-Discussion-Session-Report.pdf", newTab: true }, { label: "All sample reports", href: "/#reports" }] },
  sample_discussion_individual: { actions: [{ label: "Open 1:1 Discussion Individual Report", href: "/reports/1to1-Discussion-Individual-Report.pdf", newTab: true }, { label: "All sample reports", href: "/#reports" }] },
  sample_survey_session: { actions: [{ label: "Open Survey Session Report", href: "/reports/Survey-Session-Report.pdf", newTab: true }, { label: "All sample reports", href: "/#reports" }] },
  sample_survey_responses: { actions: [{ label: "Open Survey Individual Responses Report", href: "/reports/Survey-Individual-Responses-Report.pdf", newTab: true }, { label: "All sample reports", href: "/#reports" }] },
  sample_focus_group: { actions: [
    { label: "Open Focus Group Session Report", href: "/reports/Focus-Group-Session-Report.pdf", newTab: true },
    { label: "Open Campaign Report", href: "/reports/Campaign-Report.pdf", newTab: true },
    { label: "All sample reports", href: "/#reports" },
  ] },
  sample_campaign: { actions: [{ label: "Open Campaign Report", href: "/reports/Campaign-Report.pdf", newTab: true }, { label: "All sample reports", href: "/#reports" }] },
  case_study: { actions: [{ label: "Read the Case Study", href: "/case-study" }] },
  pricing: { actions: [
    { label: "View Pricing", href: "/pricing" },
    { label: "Book a Demo", action: "demo" },
    { label: "Email sales@trupulse.ai", href: "mailto:sales@trupulse.ai" },
  ] },
  human: { actions: [
    { label: "Email hello@trupulse.ai", href: "mailto:hello@trupulse.ai" },
    { label: "Book a Demo", action: "demo" },
  ] },
};

export function routeActions(route) {
  var key = route && ROUTES[route] ? route : "answer";
  return ROUTES[key].actions || [];
}

const FOLLOWUPS = {
  product: ["Which research method should I use?", "What editions do you offer?", "Book a demo"],
  workflow: ["What is a campaign?", "How do participants join?", "Book a demo"],
  reports: ["What is the Research Assistant?", "What report formats are available?", "Show me a sample report"],
  samples: ["What's in a Survey Session Report?", "Book a demo", "How could TruPulse help my organization?"],
  sample_discussion_session: ["Show me the individual discussion report", "What findings will I get?", "Book a demo"],
  sample_discussion_individual: ["Show me the discussion session report", "Book a demo"],
  sample_survey_session: ["Show me survey individual responses", "How do survey follow-ups work?", "Book a demo"],
  sample_survey_responses: ["Show me the survey session report", "Book a demo"],
  sample_focus_group: ["What is an AI-moderated Focus Group?", "Book a demo"],
  sample_campaign: ["What is a campaign?", "Book a demo"],
  use_cases: ["Can we collect employee engagement feedback?", "Can customer feedback be collected?", "Book a demo"],
  privacy: ["Is customer research used to train AI models?", "Can sessions be anonymous or identified?", "Where is customer data hosted?"],
  privacy_contact: ["Is customer research used to train AI models?", "Can sessions be anonymous or identified?"],
  clarify: ["Employees", "Customers", "Students", "Members"],
  demo: ["What does the simulated website demo show?", "How much does TruPulse cost?", "Can we run a small live pilot?"],
  videos: ["What tutorials are available?", "Book a live demo", "How much does TruPulse cost?"],
  booking_status: ["Book a demo", "Email sales@trupulse.ai"],
  contact: ["Book a demo", "How could TruPulse help my organization?"],
  support: ["How do I sign in?", "Book a demo"],
  sign_in: ["How can an existing customer get support?", "Book a demo"],
  case_study: ["How could TruPulse help my organization?", "Book a demo"],
  pricing: ["What editions does TruPulse offer?", "Book a demo", "Is there a free trial?"],
  human: ["Book a demo", "What is TruPulse?", "How much does TruPulse cost?"],
  answer: ["What is TruPulse?", "Which research method should I use?", "Book a demo"],
};

export function routeFollowups(route) {
  var key = route && FOLLOWUPS[route] ? route : "answer";
  return FOLLOWUPS[key] || FOLLOWUPS.answer;
}

export const KNOWLEDGE = [
  {
    "id": "WEB001",
    "keywords": [
      "what is trupulse",
      "what does trupulse do",
      "about trupulse",
      "tell me about trupulse",
      "overview",
      "what is this"
    ],
    "answer": "TruPulse is an AI feedback platform that helps organizations create, conduct, and analyze 1:1 Discussions, Focus Groups, Surveys, and multi-session campaigns.",
    "route": "product"
  },
  {
    "id": "WEB002",
    "keywords": [
      "what problem does trupulse help solve",
      "what problem",
      "why would we use",
      "what does it solve",
      "why use trupulse",
      "what work does it save"
    ],
    "answer": "It helps organizations gather structured feedback and the reasons behind it, then turn the feedback into reports and insights for human review and decision-making.",
    "route": "product"
  },
  {
    "id": "WEB003",
    "keywords": [
      "who is trupulse for",
      "who can use",
      "who uses",
      "designed for",
      "would it suit"
    ],
    "answer": "Teams researching employee experience, customer needs, product ideas, and other topics where understanding people’s experiences and perspectives is useful.",
    "route": "use_cases"
  },
  {
    "id": "WEB004",
    "keywords": [
      "is trupulse only for hr",
      "only for hr",
      "hr only",
      "hr-only",
      "not just hr",
      "outside the workplace"
    ],
    "answer": "No. Its feedback methods can also support customer research, product research, marketing feedback, and other organizational research objectives.",
    "route": "use_cases"
  },
  {
    "id": "WEB005",
    "keywords": [
      "what are the main feedback methods",
      "main feedback methods",
      "what research methods",
      "methods does trupulse support",
      "kinds of studies",
      "what formats",
      "session types"
    ],
    "answer": "AI-led 1:1 Discussions, AI-moderated Focus Groups, and Adaptive Surveys.",
    "route": "product"
  },
  {
    "id": "WEB006",
    "keywords": [
      "what does ai do in trupulse",
      "what does the ai do",
      "what does ai do",
      "ai vs team",
      "who does what",
      "ai help"
    ],
    "answer": "AI helps your team design sessions, conduct discussions and surveys, generate follow-up questions, analyze feedback, and create reports.",
    "route": "product"
  },
  {
    "id": "WEB007",
    "keywords": [
      "do people still review the research",
      "do people still review",
      "human review",
      "team review",
      "who reviews the findings",
      "still need to review"
    ],
    "answer": "Yes. Your team reviews and customizes the questions and session settings before launch. Once the research is complete, your team should review the findings and recommendations before using them to make decisions.",
    "route": "workflow"
  },
  {
    "id": "WEB008",
    "keywords": [
      "how is trupulse different from a basic survey tool",
      "different from a basic survey",
      "different from a traditional survey",
      "versus surveymonkey",
      "compared to qualtrics",
      "ordinary questionnaire",
      "survey tool"
    ],
    "answer": "TruPulse’s AI agents help users create the perfect feedback session, conduct feedback sessions so you do not have to, and create detailed reports for your review. This saves your organization time and money and provides better feedback results.",
    "route": "product"
  },
  {
    "id": "WEB009",
    "keywords": [
      "can i use several feedback methods for the same objective",
      "several feedback methods",
      "combine methods",
      "mix research methods",
      "same objective",
      "use all three"
    ],
    "answer": "Yes. A campaign can bring related sessions together around one objective, including different session methods.",
    "route": "workflow"
  },
  {
    "id": "WEB010",
    "keywords": [
      "can trupulse make decisions for our organization",
      "make decisions",
      "decide for us",
      "does it decide",
      "replace our judgment"
    ],
    "answer": "It supplies feedback, analysis, and recommendations to support decisions. Your organization remains responsible for reviewing the evidence and deciding what to do.",
    "route": "product"
  },
  {
    "id": "WEB011",
    "keywords": [
      "does trupulse guarantee accurate ai conclusions",
      "guarantee accurate",
      "ai conclusions",
      "ai always right",
      "accurate ai",
      "errors in ai"
    ],
    "answer": "No. AI-generated outputs can contain errors or interpretations. Review important findings against the underlying evidence before relying on them.",
    "route": "product"
  },
  {
    "id": "WEB012",
    "keywords": [
      "can the public website agent analyze my company s research",
      "website agent analyze",
      "analyze my company",
      "analyze our research",
      "public chat analyze",
      "customer data in chat"
    ],
    "answer": "The website agent explains TruPulse and helps with product evaluation. Customer-data research belongs in the licensed product’s authorized workflows, including the Enterprise Research Assistant.",
    "route": "answer"
  },
  {
    "id": "WEB013",
    "keywords": [
      "can we collect employee engagement feedback",
      "employee engagement",
      "engagement feedback",
      "employee feedback"
    ],
    "answer": "Yes. TruPulse can gather employee feedback through discussions, surveys, and campaigns, with engagement metrics available as part of the research setup.",
    "route": "use_cases"
  },
  {
    "id": "WEB014",
    "keywords": [
      "can we study why employees consider leaving",
      "why employees",
      "consider leaving",
      "why people are leaving",
      "attrition",
      "stay or leave",
      "retention"
    ],
    "answer": "Yes. You can define research around the reasons employees give for staying or considering leaving and explore those reasons through follow-up questions.",
    "route": "use_cases"
  },
  {
    "id": "WEB015",
    "keywords": [
      "can trupulse help improve onboarding",
      "improve onboarding",
      "onboarding feedback",
      "onboarding experience"
    ],
    "answer": "Yes. You can collect feedback at different onboarding stages and compare the concerns, experiences, and suggestions participants report.",
    "route": "use_cases"
  },
  {
    "id": "WEB016",
    "keywords": [
      "can we run 30-day 60-day and 90-day onboarding check-ins",
      "30-day",
      "60-day",
      "90-day",
      "onboarding check-ins",
      "check-ins"
    ],
    "answer": "You can organize feedback sessions around those stages as part of a campaign. Participant selection and contact data should match the intended stage.",
    "route": "use_cases"
  },
  {
    "id": "WEB017",
    "keywords": [
      "can we research leadership communication or manager support",
      "leadership communication",
      "manager support",
      "manager effectiveness"
    ],
    "answer": "Yes. Those topics can be explored through a session’s questions, discussion guide, and relevant feedback metrics.",
    "route": "use_cases"
  },
  {
    "id": "WEB018",
    "keywords": [
      "can we explore workload or burnout concerns",
      "workload",
      "burnout",
      "burnout concerns"
    ],
    "answer": "Yes. You can ask about workload experiences and use relevant research metrics. Treat the outputs as feedback indicators, not medical diagnoses.",
    "route": "use_cases"
  },
  {
    "id": "WEB019",
    "keywords": [
      "can we gather feedback about organizational change",
      "organizational change",
      "change readiness",
      "about a change"
    ],
    "answer": "Yes. Sessions can explore understanding, concerns, readiness, and suggestions related to a change.",
    "route": "use_cases"
  },
  {
    "id": "WEB020",
    "keywords": [
      "can customer feedback be collected in trupulse",
      "customer feedback",
      "customer experiences",
      "customer needs",
      "customer research"
    ],
    "answer": "Yes. You can use the feedback methods to explore customer experiences, needs, pain points, and suggestions.",
    "route": "use_cases"
  },
  {
    "id": "WEB021",
    "keywords": [
      "can we test a product or marketing concept",
      "test a product",
      "marketing concept",
      "concept testing",
      "test a concept",
      "market research",
      "market research on a new product",
      "new product",
      "product research",
      "research on a new product"
    ],
    "answer": "Yes. You can ask an appropriate audience about its understanding and reactions to a concept and explore the reasons behind its feedback.",
    "route": "use_cases"
  },
  {
    "id": "WEB022",
    "keywords": [
      "can we compare feedback over time",
      "compare feedback over time",
      "track change over time",
      "repeated studies",
      "recurring research"
    ],
    "answer": "Yes. Repeated sessions and campaigns can support comparisons. Consistent questions, scales, and audience definitions make the comparisons more meaningful.",
    "route": "use_cases"
  },
  {
    "id": "WEB023",
    "keywords": [
      "can we use trupulse for a sensitive employee or customer topic",
      "sensitive employee",
      "sensitive customer",
      "sensitive topic",
      "sensitive information"
    ],
    "answer": "The research purpose, questions, privacy setting, and guardrails need careful review. Check with your legal department before collecting sensitive information or deciding the applicable requirements.",
    "route": "privacy"
  },
  {
    "id": "WEB024",
    "keywords": [
      "can feedback prove that a policy change caused an improvement",
      "prove that a policy",
      "caused an improvement",
      "establish causation",
      "before-and-after"
    ],
    "answer": "Not by itself. Before-and-after feedback can reveal reported changes, but it does not automatically establish causation.",
    "route": "use_cases"
  },
  {
    "id": "WEB025",
    "keywords": [
      "what is an ai-led 1:1 discussion",
      "what is an ai-led",
      "1:1 discussion",
      "one-on-one discussion",
      "individual discussion",
      "ai interview"
    ],
    "answer": "Each participant has an individual conversation with the AI interviewer, guided by the session objective and planned topics.",
    "route": "product"
  },
  {
    "id": "WEB026",
    "keywords": [
      "what is an ai-moderated focus group",
      "ai-moderated focus",
      "what is a focus group",
      "focus group"
    ],
    "answer": "Participants discuss a topic together with an AI moderator guiding the conversation. Group interaction can reveal agreement, disagreement, and different perspectives.",
    "route": "product"
  },
  {
    "id": "WEB027",
    "keywords": [
      "what is an adaptive survey",
      "adaptive survey",
      "what is an adaptive",
      "survey with follow-ups"
    ],
    "answer": "It combines base survey questions with follow-ups that may be fixed, conditional, or generated by AI around an intent tied to the research objective.",
    "route": "product"
  },
  {
    "id": "WEB028",
    "keywords": [
      "what is a fixed follow-up",
      "fixed follow-up",
      "what is a fixed",
      "same predefined"
    ],
    "answer": "It is a predefined follow-up question with wording set during session design.",
    "route": "product"
  },
  {
    "id": "WEB029",
    "keywords": [
      "what is a conditional follow-up",
      "conditional follow-up",
      "what is a conditional",
      "depend on an answer"
    ],
    "answer": "It is a follow-up selected according to the participant’s answer and the configured condition.",
    "route": "product"
  },
  {
    "id": "WEB030",
    "keywords": [
      "what is an ai-adaptive follow-up",
      "ai-adaptive follow-up",
      "adaptive follow-up",
      "ai tailor"
    ],
    "answer": "Your team selects the question intent, and the AI Agent decides the best follow-up question to ask based on the participant’s response.",
    "route": "product"
  },
  {
    "id": "WEB031",
    "keywords": [
      "why would different participants receive different questions",
      "different participants receive",
      "different questions",
      "same questions",
      "will everyone see the same"
    ],
    "answer": "Conditional and adaptive follow-ups depend on previous answers, so different responses can lead to different follow-up questions.",
    "route": "product"
  },
  {
    "id": "WEB032",
    "keywords": [
      "what can follow-up questions uncover",
      "follow-up questions uncover",
      "purpose of a follow-up",
      "what do follow-ups"
    ],
    "answer": "They can explore drivers, gather examples, distinguish systemic from isolated experiences, and surface recommendations.",
    "route": "product"
  },
  {
    "id": "WEB033",
    "keywords": [
      "can we review ai-proposed questions before launch",
      "review ai-proposed",
      "review questions before launch",
      "verify & customize",
      "approve questions"
    ],
    "answer": "For Surveys, yes. The session-creation workflow includes Verify & Customize, where you review and customize proposed content. For 1:1 Discussions and Focus Groups, you approve the topics the AI Agent will discuss with participants, and the agent selects questions to explore each topic. The agent will always follow the organizational guardrails you set for it.",
    "route": "workflow"
  },
  {
    "id": "WEB034",
    "keywords": [
      "can we control the topics an interviewer should cover",
      "control the topics",
      "discussion guide",
      "topics an interviewer",
      "approve the guide"
    ],
    "answer": "Yes. You approve the discussion guide for 1:1 Discussions and Focus Groups, which defines the intended topics and direction for the session.",
    "route": "workflow"
  },
  {
    "id": "WEB035",
    "keywords": [
      "can we test the participant experience before launching",
      "test the participant",
      "preview as participant",
      "test session",
      "before launching"
    ],
    "answer": "Yes. Session creation includes Preview as Participant to review the session description, invitation, and participant instructions, and a Test Session mode for trying the session from a participant’s perspective.",
    "route": "workflow"
  },
  {
    "id": "WEB036",
    "keywords": [
      "can we change questions once a session is running",
      "change questions once",
      "after launch",
      "questions cannot be changed",
      "edit running session"
    ],
    "answer": "No. Questions cannot be changed after launch. A session can be paused or closed, and a new session can be designed if different questions are needed.",
    "route": "workflow"
  },
  {
    "id": "WEB037",
    "keywords": [
      "can a human moderator take over a focus group",
      "human moderator",
      "take over a focus",
      "moderator take over",
      "join as an observer"
    ],
    "answer": "No. Human moderators cannot take over a focus group. A human moderator can join a session as an observer but cannot participate.",
    "route": "product"
  },
  {
    "id": "WEB038",
    "keywords": [
      "what is a campaign",
      "what does campaign mean",
      "why group sessions",
      "campaign report"
    ],
    "answer": "A campaign organizes multiple sessions around a shared research objective and can provide a combined Campaign Report in addition to reports on each session.",
    "route": "workflow"
  },
  {
    "id": "WEB039",
    "keywords": [
      "what is a linked campaign",
      "linked campaign",
      "what is a linked"
    ],
    "answer": "It uses data from earlier sessions to inform subsequent sessions, allowing later research to build on earlier findings. Individual sessions have reports, and a Campaign Report combines information from all sessions.",
    "route": "workflow"
  },
  {
    "id": "WEB040",
    "keywords": [
      "what is an independent campaign",
      "independent campaign",
      "what is an independent"
    ],
    "answer": "Its sessions do not share data with one another as Linked Campaign sessions do. The Campaign Report summarizes data from all sessions in the campaign, and each individual session also has a report.",
    "route": "workflow"
  },
  {
    "id": "WEB041",
    "keywords": [
      "what is a recurring campaign",
      "recurring campaign",
      "what is a recurring",
      "repeated feedback"
    ],
    "answer": "It organizes repeated feedback activities over time for ongoing research or comparison. The Campaign Report summarizes data from all sessions in the campaign, and each individual session also has a report.",
    "route": "workflow"
  },
  {
    "id": "WEB042",
    "keywords": [
      "how can we bring participant contacts into trupulse",
      "bring participant contacts",
      "upload contacts",
      "import contacts",
      "hris",
      "invite participants"
    ],
    "answer": "Contacts can be added manually, imported from a CSV file, or synced from a supported HRIS system. HRIS sync is available in Professional and Enterprise editions.",
    "route": "workflow"
  },
  {
    "id": "WEB043",
    "keywords": [
      "what contact information is required for a session participant",
      "contact information required",
      "required for a session participant",
      "name and email"
    ],
    "answer": "Name and email address are mandatory. Additional demographic and contact attributes are optional.",
    "route": "workflow"
  },
  {
    "id": "WEB044",
    "keywords": [
      "can we organize participants into groups",
      "organize participants",
      "participant groups",
      "static groups",
      "dynamic groups"
    ],
    "answer": "Yes. Static Groups contain manually added participants. Dynamic Groups use attribute conditions to refresh membership.",
    "route": "workflow"
  },
  {
    "id": "WEB045",
    "keywords": [
      "what is a dynamic group",
      "dynamic group"
    ],
    "answer": "It is a group defined by conditions, such as a hire-date window, whose membership refreshes from matching contact data rather than staying fixed.",
    "route": "workflow"
  },
  {
    "id": "WEB046",
    "keywords": [
      "will a session use updated dynamic group membership",
      "updated dynamic group",
      "latest membership",
      "dynamic group membership"
    ],
    "answer": "Yes. A session using a Dynamic Group uses its latest membership when the session begins. The organization must keep the underlying contact database updated or synced.",
    "route": "workflow"
  },
  {
    "id": "WEB047",
    "keywords": [
      "can we select participants using department or other attributes",
      "select participants using",
      "department or other",
      "filter contacts",
      "contact attributes"
    ],
    "answer": "Yes. Contacts can be filtered using contact attributes, with AND, OR, and NOT used to combine conditions.",
    "route": "workflow"
  },
  {
    "id": "WEB048",
    "keywords": [
      "is there a limit on how many sessions can run simultaneously",
      "limit on how many sessions",
      "sessions simultaneously",
      "how many sessions can run"
    ],
    "answer": "There is no limit on the number of sessions that can run simultaneously. For edition usage allowances and pricing, consult the Pricing page on the TruPulse website.",
    "route": "pricing"
  },
  {
    "id": "WEB049",
    "keywords": [
      "is there a minimum or maximum open period for sessions or campaigns",
      "minimum or maximum open",
      "open period",
      "how long can a session"
    ],
    "answer": "There is no minimum or maximum amount of time a session or campaign can remain open.",
    "route": "workflow"
  },
  {
    "id": "WEB050",
    "keywords": [
      "what reports can trupulse produce",
      "what reports",
      "what findings and reports",
      "what do we get back",
      "what does a report contain"
    ],
    "answer": "The default report set includes 1:1 Discussion Session and Individual reports, Survey Session and Individual Responses reports, Focus Group Session reports, and Campaign reports. An AI-led Report Generation feature also lets you custom-design a report from scratch.",
    "route": "reports"
  },
  {
    "id": "WEB051",
    "keywords": [
      "can one session produce reports for different audiences",
      "reports for different audiences",
      "several reports",
      "different audiences"
    ],
    "answer": "Yes. Your team can select several reports for a session to provide the right report for each audience.",
    "route": "reports"
  },
  {
    "id": "WEB052",
    "keywords": [
      "can we build our own report template",
      "build our own report",
      "report template",
      "create a new report template"
    ],
    "answer": "Yes. During Build Reports, your team can select a template or create a new report template with help from the Report Generation Agent.",
    "route": "reports"
  },
  {
    "id": "WEB053",
    "keywords": [
      "what report formats are available",
      "report formats",
      "download formats",
      "docx",
      "pptx",
      "xlsx",
      "csv",
      "export"
    ],
    "answer": "Supported formats include DOCX, PDF, and PPTX. XLSX or CSV may apply to raw survey data and selected transcripts.",
    "route": "reports"
  },
  {
    "id": "WEB054",
    "keywords": [
      "can we review the source feedback behind a report",
      "source feedback",
      "underlying responses",
      "transcripts behind",
      "supporting evidence"
    ],
    "answer": "Authorized users can access the relevant responses or transcripts through the product, subject to access and identity settings.",
    "route": "reports"
  },
  {
    "id": "WEB055",
    "keywords": [
      "how are survey follow-up question findings reported",
      "follow-up question findings",
      "follow-ups in the survey",
      "survey follow-up"
    ],
    "answer": "The Session Report summarizes follow-up question insights beneath the relevant Base Question. The Survey Individual Response Report provides individual follow-up questions and answers.",
    "route": "reports"
  },
  {
    "id": "WEB056",
    "keywords": [
      "can we comment on a generated report",
      "comment on a generated",
      "add commentary",
      "edit report content"
    ],
    "answer": "Yes. Add Commentary lets users add a comment under a report section. To edit report content directly, download the report in DOCX format and edit the downloaded file.",
    "route": "reports"
  },
  {
    "id": "WEB057",
    "keywords": [
      "can reports be regenerated",
      "reports be regenerated",
      "regenerate",
      "update a report"
    ],
    "answer": "Yes. When viewing a report, an authorized user can select Regenerate to update it.",
    "route": "reports"
  },
  {
    "id": "WEB058",
    "keywords": [
      "what is the research assistant",
      "research assistant",
      "enterprise research assistant"
    ],
    "answer": "It is the Enterprise capability for asking questions about authorized sessions, campaigns, reports, transcripts, responses, and supported account data without reading every source yourself.",
    "route": "reports"
  },
  {
    "id": "WEB059",
    "keywords": [
      "can it answer a question that the original report did not cover",
      "question that the original report",
      "report did not cover",
      "new question about data"
    ],
    "answer": "Yes. It can investigate the underlying transcripts and responses to answer a new question when the needed data is available and authorized.",
    "route": "reports"
  },
  {
    "id": "WEB060",
    "keywords": [
      "can it compare findings across sessions or over time",
      "compare findings across",
      "research assistant compare",
      "across sessions or over time"
    ],
    "answer": "Yes. It can research across authorized sources and make comparisons, with scope and data limitations considered.",
    "route": "reports"
  },
  {
    "id": "WEB061",
    "keywords": [
      "can research assistant findings become a report",
      "research assistant findings become",
      "save as a report",
      "export as a report"
    ],
    "answer": "Yes. Findings can be saved or exported as a report, without requiring a standard session or campaign report layout.",
    "route": "reports"
  },
  {
    "id": "WEB062",
    "keywords": [
      "does the research assistant respect user permissions",
      "research assistant respect",
      "inherits permissions",
      "research assistant permissions"
    ],
    "answer": "Yes. Its research access inherits the user’s permissions. Administrative data also requires the relevant administrative authorization.",
    "route": "reports"
  },
  {
    "id": "WEB063",
    "keywords": [
      "can the research assistant review interview quality",
      "review interview quality",
      "interview-quality",
      "topic fixation"
    ],
    "answer": "Yes. It can run interview-quality checks, including reviews of repetition, topic fixation, and discussion-guide coverage where the necessary data is available.",
    "route": "reports"
  },
  {
    "id": "WEB064",
    "keywords": [
      "do participants need to create their own account",
      "participants need to create",
      "create their own account",
      "participant account"
    ],
    "answer": "A participant account is generated automatically on the TruPulse Connect participant site.",
    "route": "workflow"
  },
  {
    "id": "WEB065",
    "keywords": [
      "how do participants join",
      "join a session",
      "email invitation"
    ],
    "answer": "They follow a link in the session’s email invitation. Invitations should not be forwarded or shared.",
    "route": "workflow"
  },
  {
    "id": "WEB066",
    "keywords": [
      "how long does participation take",
      "how long does participation",
      "how long does it take",
      "session duration"
    ],
    "answer": "The session invitation should state its expected duration. Timing depends on the session the organization creates.",
    "route": "workflow"
  },
  {
    "id": "WEB067",
    "keywords": [
      "can participants pause and return",
      "pause and return",
      "pause and resume",
      "come back later"
    ],
    "answer": "Yes. For Surveys and 1:1 Discussions, participants can pause and return to where they left off.",
    "route": "workflow"
  },
  {
    "id": "WEB068",
    "keywords": [
      "can participants skip a question",
      "skip a question",
      "skip question"
    ],
    "answer": "In a 1:1 Discussion, they can ask to skip or say or type “skip question.” In a Survey, they can use the forward arrow.",
    "route": "workflow"
  },
  {
    "id": "WEB069",
    "keywords": [
      "can participants respond by voice",
      "respond by voice",
      "voice responses",
      "voice"
    ],
    "answer": "Voice responses are available in 1:1 Discussions in 16 different languages.",
    "route": "product"
  },
  {
    "id": "WEB070",
    "keywords": [
      "are voice responses recorded",
      "voice responses recorded",
      "are voice",
      "voice to text"
    ],
    "answer": "No. When voice is used, responses are converted from voice to text, and the text is processed and stored as session content.",
    "route": "privacy"
  },
  {
    "id": "WEB071",
    "keywords": [
      "which participant languages are supported",
      "languages are supported",
      "which languages",
      "participant languages",
      "17 languages"
    ],
    "answer": "Arabic (text only), Chinese Simplified, Dutch, English, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, Ukrainian, and Vietnamese.",
    "route": "product"
  },
  {
    "id": "WEB072",
    "keywords": [
      "can participants choose their response language",
      "choose their response language",
      "select language",
      "change language"
    ],
    "answer": "Yes. Participants select their response language when they log into a session and can change their default language in the Connect participant portal before starting.",
    "route": "product"
  },
  {
    "id": "WEB073",
    "keywords": [
      "are the trupulse session creator interface and reports available in other languages",
      "creator interface",
      "reports available in other languages",
      "english only",
      "interface languages"
    ],
    "answer": "The creator interface and reports are currently in English only. Additional language support is planned for 2027.",
    "route": "product"
  },
  {
    "id": "WEB074",
    "keywords": [
      "can participants change responses after completing a session",
      "change responses after",
      "edit after completing",
      "cannot edit"
    ],
    "answer": "No. Once a session has been completed, the participant cannot edit or change a response.",
    "route": "workflow"
  },
  {
    "id": "WEB075",
    "keywords": [
      "do participants automatically receive the results",
      "automatically receive the results",
      "participants see results",
      "share results with participants"
    ],
    "answer": "Organizational policy determines how and where results are shared with participants.",
    "route": "workflow"
  },
  {
    "id": "WEB076",
    "keywords": [
      "are incomplete sessions included in results",
      "incomplete sessions",
      "included in results"
    ],
    "answer": "No. Incomplete sessions are not included in results.",
    "route": "reports"
  },
  {
    "id": "WEB077",
    "keywords": [
      "what happens if service disconnects during participation",
      "service disconnects",
      "connection drops",
      "progress is saved"
    ],
    "answer": "Session progress is saved, and participants can continue providing feedback after service resumes.",
    "route": "workflow"
  },
  {
    "id": "WEB078",
    "keywords": [
      "can sessions be anonymous or identified",
      "anonymous or identified",
      "identity setting",
      "who sees a participant",
      "identified or anonymous"
    ],
    "answer": "Yes. Each session has an Anonymous or Identified setting governing how participant identity is presented. Participants are notified in advance whether a session is Identified or Anonymous.",
    "route": "privacy"
  },
  {
    "id": "WEB079",
    "keywords": [
      "are participants names shown in anonymous reports",
      "names shown in anonymous",
      "anonymous reports",
      "hide names"
    ],
    "answer": "No. TruPulse does not list participants’ names in reports or transcripts from an Anonymous session. Participants should still avoid details that could reveal their identity.",
    "route": "privacy"
  },
  {
    "id": "WEB080",
    "keywords": [
      "does anonymous mean other focus group participants cannot recognize me",
      "other focus group participants cannot recognize",
      "recognize me",
      "anonymous focus group participants"
    ],
    "answer": "No. Other participants can see what you share, and details may reveal identity even when a name is hidden.",
    "route": "privacy"
  },
  {
    "id": "SITE_PARTICIPANT_VISIBILITY",
    "keywords": [
      "can participants see what others said",
      "see what others said",
      "see others responses",
      "see other participants",
      "participants see each other",
      "can participants see each other",
      "do participants see other answers"
    ],
    "answer": "It depends on the session type. In 1:1 Discussions and Surveys, feedback is individual—participants do not see what others said. In focus groups, participants can read one another’s contributions, so anonymity does not prevent recognition from shared details.",
    "route": "privacy"
  },
  {
    "id": "WEB081",
    "keywords": [
      "can the identity setting change after launch",
      "identity setting change",
      "change after launch",
      "identity settings cannot"
    ],
    "answer": "No. Once a session is launched, its identity settings cannot be changed.",
    "route": "privacy"
  },
  {
    "id": "WEB082",
    "keywords": [
      "does open session access mean public internet access",
      "open session access",
      "restricted session access",
      "public internet access"
    ],
    "answer": "No. Open and Restricted session access govern which authorized TruPulse users in your organization are allowed to view and edit sessions and results. They are separate from the participant identity setting.",
    "route": "privacy"
  },
  {
    "id": "WEB083",
    "keywords": [
      "can an organization control user permissions",
      "control user permissions",
      "roles and permissions",
      "who can access"
    ],
    "answer": "Yes. Organizations can adjust role authorizations and individual authorizations, including permissions such as document downloading.",
    "route": "privacy"
  },
  {
    "id": "WEB084",
    "keywords": [
      "are downloads logged",
      "downloads logged",
      "download logging",
      "audit downloads"
    ],
    "answer": "Yes. Downloads are logged by user, time, date, and the report or transcript downloaded.",
    "route": "privacy"
  },
  {
    "id": "WEB085",
    "keywords": [
      "where is customer data hosted",
      "where is customer data",
      "hosted",
      "data residency",
      "hosting"
    ],
    "answer": "Customer data is hosted in the US.",
    "route": "privacy"
  },
  {
    "id": "WEB086",
    "keywords": [
      "is customer data encrypted",
      "encrypted",
      "encryption",
      "in transit",
      "at rest"
    ],
    "answer": "Data is encrypted in transit and at rest for relevant services.",
    "route": "privacy"
  },
  {
    "id": "WEB087",
    "keywords": [
      "is customer research used to train general-purpose ai models",
      "used to train",
      "train ai models",
      "train general-purpose",
      "participant responses used to train"
    ],
    "answer": "No. Customer research content is not used to train general-purpose AI models.",
    "route": "privacy"
  },
  {
    "id": "WEB088",
    "keywords": [
      "can trupulse support personnel see research content",
      "support personnel",
      "see research content",
      "trupulse staff access"
    ],
    "answer": "Support personnel can access research content only when needed to investigate an issue.",
    "route": "privacy"
  },
  {
    "id": "WEB089",
    "keywords": [
      "can organizations configure retention",
      "configure retention",
      "data retention",
      "retention policy"
    ],
    "answer": "Yes. A user authorized by an organization to configure data retention can adjust its data-retention policy through Data Management.",
    "route": "privacy"
  },
  {
    "id": "WEB090",
    "keywords": [
      "can participants submit a data-deletion request",
      "data-deletion request",
      "deletion request",
      "delete my data"
    ],
    "answer": "Yes. Participants can initiate a Data Deletion Request in Connect. It is routed to the organization’s named Privacy Officer for follow-up. Check with your legal department about legal requirements and the treatment of a request.",
    "route": "privacy"
  },
  {
    "id": "WEB091",
    "keywords": [
      "can an organization s privacy officer delete anonymous as well as identified feedback",
      "privacy officer delete",
      "delete anonymous",
      "delete identified"
    ],
    "answer": "Yes. The organization’s designated Privacy Officer can use TruPulse to delete both Anonymous and Identified feedback from an individual. Check with your legal department about the appropriate handling of a request.",
    "route": "privacy"
  },
  {
    "id": "WEB092",
    "keywords": [
      "can participants withdraw their authorization to participate",
      "withdraw their authorization",
      "rescind authorization",
      "withdraw consent"
    ],
    "answer": "Yes. Participants may rescind authorization through User Settings in the Connect participant site. Check with your legal department about legal consequences and any further steps required.",
    "route": "privacy"
  },
  {
    "id": "WEB093",
    "keywords": [
      "does not accepting the consent notice prevent participation",
      "consent notice",
      "not accepting",
      "refuse consent"
    ],
    "answer": "Yes. A participant who does not accept cannot continue and is returned to the Connect participant dashboard. They will be prompted again if they restart a session.",
    "route": "privacy"
  },
  {
    "id": "WEB094",
    "keywords": [
      "do guardrails control what the ai may ask or report",
      "guardrails",
      "research guidelines",
      "what the ai may ask"
    ],
    "answer": "Organizational guardrails define restrictions for conducting and reporting activity. Reviews examine actual agent questions, generated reports, and participant disclosures against applicable historical guardrails.",
    "route": "privacy"
  },
  {
    "id": "WEB095",
    "keywords": [
      "who can run a guardrails review",
      "guardrails review",
      "who can run a guardrails",
      "super admin"
    ],
    "answer": "Only a Super Admin can run a Guardrails Review in Organization Guardrails. Users with Guardrail Editing access can add or edit guardrails; these are different authorizations.",
    "route": "privacy"
  },
  {
    "id": "WEB096",
    "keywords": [
      "does restricted information volunteered by a participant automatically fail the agent during a compliance review",
      "restricted information volunteered",
      "participant disclosure",
      "compliance review"
    ],
    "answer": "No. A participant disclosure is flagged as a potential issue. An agent failure occurs when the conducting or reporting agent violates an applicable guardrail.",
    "route": "privacy"
  },
  {
    "id": "WEB097",
    "keywords": [
      "can the enterprise research assistant run compliance-oriented checks",
      "compliance-oriented",
      "compliance checks",
      "era compliance"
    ],
    "answer": "Yes. It can run compliance and interview-quality checks. Guardrails Reviews are also available through the Guardrails workflow, subject to its authorization requirements.",
    "route": "privacy"
  },
  {
    "id": "WEB098",
    "keywords": [
      "does a clean guardrails review establish legal compliance",
      "legal compliance",
      "clean guardrails",
      "establish legal"
    ],
    "answer": "No. It reports results for its stated checks and available evidence. Check with your legal department about legal compliance and obligations.",
    "route": "privacy"
  },
  {
    "id": "WEB099",
    "keywords": [
      "is trupulse suitable for research subject to gdpr or other privacy laws",
      "gdpr",
      "privacy laws",
      "ccpa",
      "suitable for research subject"
    ],
    "answer": "Check with your legal department about your particular research, legal requirements, and contractual arrangements. Product features do not by themselves establish compliance.",
    "route": "privacy"
  },
  {
    "id": "WEB100",
    "keywords": [
      "what editions does trupulse offer",
      "what editions",
      "plans",
      "essentials",
      "professional",
      "enterprise edition"
    ],
    "answer": "Essentials, Professional, and Enterprise. Visit the Pricing page on the TruPulse website for the current edition comparison and pricing.",
    "route": "pricing"
  },
  {
    "id": "WEB101",
    "keywords": [
      "which edition includes the research assistant",
      "edition includes the research assistant",
      "research assistant edition"
    ],
    "answer": "Enterprise. Visit the Pricing page on the TruPulse website for current edition details and pricing.",
    "route": "pricing"
  },
  {
    "id": "WEB102",
    "keywords": [
      "which editions include hris sync",
      "editions include hris",
      "hris sync edition"
    ],
    "answer": "Professional and Enterprise. Visit the Pricing page on the TruPulse website for the current feature comparison and pricing.",
    "route": "pricing"
  },
  {
    "id": "WEB103",
    "keywords": [
      "is in-product help included for every licensed company",
      "in-product help",
      "product help",
      "help included"
    ],
    "answer": "Yes. Product Help is available to all companies licensing TruPulse through the AI Assistant’s Product Help feature.",
    "route": "support"
  },
  {
    "id": "WEB104",
    "keywords": [
      "how much does trupulse cost",
      "how much",
      "what does it cost",
      "pricing",
      "price",
      "pricng",
      "prcing",
      "prices",
      "how is trupulse priced"
    ],
    "answer": "Please visit the Pricing page on the TruPulse website for current plans and pricing.",
    "route": "pricing"
  },
  {
    "id": "WEB105",
    "keywords": [
      "do you offer monthly and annual billing",
      "monthly and annual",
      "billing",
      "annual billing"
    ],
    "answer": "Please check the Pricing page on the TruPulse website for current billing options and pricing.",
    "route": "pricing"
  },
  {
    "id": "WEB106",
    "keywords": [
      "what are the user participant and usage allowances",
      "usage allowances",
      "participant allowances",
      "plan limits",
      "how many participants"
    ],
    "answer": "Please check the Pricing page on the TruPulse website for current edition allowances. Demo participant counts do not establish paid-plan limits.",
    "route": "pricing"
  },
  {
    "id": "WEB107",
    "keywords": [
      "are there extra fees or overage charges",
      "extra fees",
      "overage",
      "additional charges"
    ],
    "answer": "Please review the Pricing page on the TruPulse website and the applicable terms for current charges. Do not assume extra usage is included.",
    "route": "pricing"
  },
  {
    "id": "WEB108",
    "keywords": [
      "are discounts or nonprofit options available",
      "discounts",
      "nonprofit options",
      "nonprofit pricing"
    ],
    "answer": "Please visit the Pricing page on the TruPulse website for current offers and eligibility information.",
    "route": "pricing"
  },
  {
    "id": "WEB109",
    "keywords": [
      "how can i see a demonstration",
      "see a demonstration",
      "watch a demo",
      "product walkthrough",
      "show me a demo video"
    ],
    "answer": "Select Watch a Demo on the TruPulse website to see a short demonstration from session creation through the final report, plus tutorials about main features.",
    "route": "videos"
  },
  {
    "id": "WEB110",
    "keywords": [
      "what does the simulated website demo show",
      "simulated website demo",
      "what does the demo show",
      "demo show"
    ],
    "answer": "For a research objective you define, it simulates a 1:1 Discussion with 10 participants, a Focus Group with 6 participants, and a Survey with 50 participants, then provides finished reports.",
    "route": "videos"
  },
  {
    "id": "WEB111",
    "keywords": [
      "does the demo show every trupulse capability",
      "demo show every",
      "every capability",
      "demo complete"
    ],
    "answer": "No. It demonstrates the basics. Tutorials also explain key features in more detail.",
    "route": "videos"
  },
  {
    "id": "WEB112",
    "keywords": [
      "what tutorials are available",
      "what tutorials",
      "tutorials available"
    ],
    "answer": "TruPulse Overview, Creating Sessions, Participating in Sessions, Reports and Sharing, and Setup and Administration. More tutorials are continually being added.",
    "route": "videos"
  },
  {
    "id": "WEB113",
    "keywords": [
      "how can an existing customer get support",
      "existing customer get support",
      "customer support",
      "support@trupulse",
      "technical support"
    ],
    "answer": "Customers can log support requests through Support & Troubleshooting in TruPulse or email support@trupulse.ai. Customers with live phone support can find their number in the product’s Support section.",
    "route": "support"
  },
  {
    "id": "WEB114",
    "keywords": [
      "where can we confirm uptime and recovery commitments",
      "uptime",
      "recovery commitments",
      "sla",
      "service agreement"
    ],
    "answer": "Review the applicable Service Agreement. Check with your legal department about contractual commitments.",
    "route": "pricing"
  },
  {
    "id": "WEB115",
    "keywords": [
      "who is the ideal customer for trupulse",
      "ideal customer",
      "who should buy",
      "best fit"
    ],
    "answer": "TruPulse may suit any organization that wants AI-led conversations and surveys combined with analysis across research activities.",
    "route": "use_cases"
  },
  {
    "id": "WEB116",
    "keywords": [
      "which industries does trupulse specialize in",
      "which industries",
      "specialize in",
      "industry"
    ],
    "answer": "TruPulse supports the research needs of all industries.",
    "route": "use_cases"
  },
  {
    "id": "WEB117",
    "keywords": [
      "how does trupulse compare with qualtrics surveymonkey or other vendors",
      "compare with qualtrics",
      "surveymonkey",
      "other vendors",
      "versus",
      "compared to"
    ],
    "answer": "TruPulse combines AI-led discussions, focus groups, adaptive surveys, and related-session reporting. TruPulse uses AI agents to create feedback sessions, so you do not need to be an expert to achieve high-quality research results. TruPulse uses AI to conduct feedback sessions, so your organization does not need to devote expensive human resources to conducting interviews. TruPulse also uses AI to analyze data, providing high-quality and quick analysis of your data.",
    "route": "product"
  },
  {
    "id": "WEB119",
    "keywords": [
      "what engagement metrics can trupulse measure",
      "engagement metrics",
      "what metrics",
      "retention risk",
      "employee nps"
    ],
    "answer": "Metrics include Retention Risk, Trust In Leadership, Workload Balance, Recognition & Appreciation, Career Development & Growth, Employee Morale, Employee NPS, Engagement Level, Psychological Safety, Burnout Risk, Belonging & Inclusion, Manager Effectiveness, Team Cohesion, Communication Clarity, and Change Readiness.",
    "route": "use_cases"
  },
  {
    "id": "WEB120",
    "keywords": [
      "how should we choose among the three editions",
      "choose among the three editions",
      "which edition",
      "which plan",
      "how should we choose"
    ],
    "answer": "Compare editions on the website Pricing page against your integration, analysis, and organizational requirements. Organizations that need multi-language participant support or integrated multi-session Campaigns should consider Professional. Organizations needing HRIS integration for large-volume contact handling or access to the Research Assistant should consider Enterprise.",
    "route": "pricing"
  },
  {
    "id": "WEB121",
    "keywords": [
      "can i book a live demo with someone",
      "book a live demo",
      "book a demo",
      "schedule a demo",
      "talk to someone",
      "talk to a human",
      "speak to a human",
      "speak to someone",
      "real person",
      "human support",
      "hello@trupulse.ai",
      "contact a person"
    ],
    "answer": "You can email hello@trupulse.ai or book a demo to talk with the TruPulse team.",
    "route": "human"
  },
  {
    "id": "WEB122",
    "keywords": [
      "can we run a small live pilot",
      "live pilot",
      "pilot project",
      "small pilot"
    ],
    "answer": "Contact the TruPulse sales team at sales@trupulse.ai for information on running a pilot project.",
    "route": "pricing"
  },
  {
    "id": "WEB123",
    "keywords": [
      "is there a free trial",
      "free trial",
      "trial"
    ],
    "answer": "Use the website’s Book a Demo option to discuss your needs with the TruPulse team.",
    "route": "demo"
  },
  {
    "id": "WEB124",
    "keywords": [
      "how quickly can we launch our first real session",
      "how quickly can we launch",
      "launch our first",
      "up and running",
      "how fast can we launch",
      "how fast to launch"
    ],
    "answer": "You create the session, review its content, select participants and reports, and schedule launch. You can be up and running in a day.",
    "route": "workflow"
  },
  {
    "id": "SITE_RESULTS_SPEED",
    "keywords": [
      "how fast do i get results",
      "how fast are results",
      "how quickly do i get results",
      "how soon do i get results",
      "when do i get results",
      "results turnaround",
      "how soon are reports",
      "how fast reports",
      "get results"
    ],
    "answer": "Reports are prepared after participants complete their sessions. TruPulse’s AI analyzes the feedback quickly so your team can review findings soon after a session or campaign wraps up—often the same day for smaller sessions. Timing depends on how long you leave a session open for responses.",
    "route": "reports"
  },
  {
    "id": "WEB125",
    "keywords": [
      "what onboarding or training help do you provide",
      "onboarding",
      "training help",
      "account setup"
    ],
    "answer": "TruPulse will assign an onboarding agent to assist you with account setup and launching your first session.",
    "route": "demo"
  },
  {
    "id": "WEB126",
    "keywords": [
      "can we use trupulse in a global organization",
      "global organization",
      "international",
      "multi-language organization"
    ],
    "answer": "Yes. Participant sessions support 17 languages, while the session setup interface and reports are in English.",
    "route": "product"
  },
  {
    "id": "WEB127",
    "keywords": [
      "can we migrate our existing survey or research material",
      "migrate",
      "upload existing",
      "existing survey",
      "import research"
    ],
    "answer": "Survey data and research material can be uploaded into TruPulse.",
    "route": "workflow"
  },
  {
    "id": "WEB128",
    "keywords": [
      "can we use our branding in the participant experience",
      "our branding",
      "white label",
      "brand the participant",
      "custom branding"
    ],
    "answer": "Organizations can use their own branding in the participant feedback experience.",
    "route": "product"
  },
  {
    "id": "WEB129",
    "keywords": [
      "is trupulse soc 2 or iso 27001 certified",
      "soc 2",
      "iso 27001",
      "certified",
      "certification"
    ],
    "answer": "Certification is in progress, with expected completion in early 2027.",
    "route": "privacy"
  },
  {
    "id": "WEB130",
    "keywords": [
      "what security documents can we review before purchase",
      "security documents",
      "security questionnaire",
      "before purchase",
      "vendor review"
    ],
    "answer": "Book a meeting with TruPulse to review security and privacy compliance and documentation.",
    "route": "demo"
  },
  {
    "id": "WEB131",
    "keywords": [
      "what safeguards make anonymous feedback safer",
      "safeguards",
      "anonymous feedback safer",
      "too few participants"
    ],
    "answer": "Participants’ names are omitted from Anonymous reports and transcripts, but feedback details can still reveal identity. Your team is warned if anonymous sessions have too few participants to provide anonymity.",
    "route": "privacy"
  },
  {
    "id": "WEB132",
    "keywords": [
      "what retention period applies by default",
      "retention period",
      "default retention",
      "how long is data kept"
    ],
    "answer": "By default, organizational data is retained. Organizations can configure their data-retention policy.",
    "route": "privacy"
  },
  {
    "id": "WEB133",
    "keywords": [
      "which systems and services process our research data",
      "systems and services",
      "subprocessors",
      "process our research data"
    ],
    "answer": "Contact the TruPulse sales team for a current list.",
    "route": "pricing"
  },
  {
    "id": "WEB134",
    "keywords": [
      "what happens to our data if we stop using trupulse",
      "stop using trupulse",
      "if we leave",
      "cancel subscription data"
    ],
    "answer": "Contact TruPulse to arrange retention or deletion of your organizational data if you plan to stop using TruPulse.",
    "route": "privacy"
  },
  {
    "id": "WEB135",
    "keywords": [
      "does trupulse meet accessibility standards",
      "accessibility",
      "wcag",
      "a11y"
    ],
    "answer": "Compliance with accessibility standards has not yet been established.",
    "route": "privacy"
  },
  {
    "id": "WEB137",
    "keywords": [
      "is there a minimum contract term",
      "minimum contract",
      "contract term",
      "12-month"
    ],
    "answer": "TruPulse is licensed for 12-month terms.",
    "route": "pricing"
  },
  {
    "id": "WEB138",
    "keywords": [
      "is there a minimum purchase or employee count",
      "minimum purchase",
      "employee count",
      "minimum seats"
    ],
    "answer": "No.",
    "route": "pricing"
  },
  {
    "id": "WEB139",
    "keywords": [
      "can we pay by invoice bank transfer or purchase order",
      "pay by invoice",
      "bank transfer",
      "purchase order",
      "payment",
      "stripe"
    ],
    "answer": "Payment processing is done through Stripe, with multiple payment options.",
    "route": "pricing"
  },
  {
    "id": "WEB140",
    "keywords": [
      "can we get a custom enterprise quote",
      "custom enterprise quote",
      "enterprise quote",
      "custom quote"
    ],
    "answer": "Contact sales@trupulse.ai or use Book a Demo on the TruPulse website to speak directly to a salesperson.",
    "route": "pricing"
  },
  {
    "id": "WEB141",
    "keywords": [
      "can we change editions during the contract",
      "change editions",
      "upgrade mid",
      "switch plans"
    ],
    "answer": "Organizations can change their licensed edition at any time.",
    "route": "pricing"
  },
  {
    "id": "WEB144",
    "keywords": [
      "is pricing based on users participants sessions or ai usage",
      "pricing based on",
      "users participants sessions",
      "ai usage pricing"
    ],
    "answer": "Pricing is based on the edition selected and usage. Visit the Pricing page on the TruPulse website for current pricing and allowances.",
    "route": "pricing"
  },
  {
    "id": "WEB145",
    "keywords": [
      "does trupulse support sso",
      "sso",
      "single sign-on"
    ],
    "answer": "No. TruPulse does not support SSO.",
    "route": "support"
  },
  {
    "id": "WEB146",
    "keywords": [
      "is multi-factor authentication available",
      "multi-factor",
      "mfa",
      "2fa",
      "two-factor"
    ],
    "answer": "Yes. Login to the administration and participant portals supports MFA.",
    "route": "support"
  },
  {
    "id": "WEB147",
    "keywords": [
      "which hris systems can we connect",
      "which hris",
      "hris systems",
      "hris integrations"
    ],
    "answer": "HRIS sync is available in Professional and Enterprise. Check with the TruPulse sales team for the latest list of integrations.",
    "route": "pricing"
  },
  {
    "id": "WEB149",
    "keywords": [
      "can trupulse integrate with our analytics or business intelligence tools",
      "integrate with our analytics",
      "business intelligence",
      "bi tools"
    ],
    "answer": "TruPulse offers report and selected data exports.",
    "route": "reports"
  },
  {
    "id": "WEB150",
    "keywords": [
      "can we host trupulse on premises or in our own cloud",
      "on premises",
      "on-premises",
      "own cloud",
      "self host"
    ],
    "answer": "No. TruPulse does not support on-premises deployment or hosting in your own cloud.",
    "route": "privacy"
  },
  {
    "id": "WEB151",
    "keywords": [
      "can we choose a hosting region outside the us",
      "hosting region",
      "outside the us",
      "data residency outside"
    ],
    "answer": "Contact TruPulse at sales@trupulse.ai for an updated list of hosting options.",
    "route": "pricing"
  },
  {
    "id": "WEB153",
    "keywords": [
      "how frequently do hris contacts sync",
      "hris contacts sync",
      "how frequently",
      "sync frequency"
    ],
    "answer": "HRIS contacts sync monthly by default, with the option to trigger a sync manually.",
    "route": "workflow"
  },
  {
    "id": "WEB163",
    "keywords": [
      "how do i contact sales or request a procurement review",
      "contact sales",
      "procurement review",
      "sales@trupulse"
    ],
    "answer": "Book a meeting through the TruPulse website or email sales@trupulse.ai.",
    "route": "demo"
  },
  {
    "id": "WEB164",
    "keywords": [
      "can i get a sandbox with my own real participants",
      "sandbox",
      "real participants sandbox"
    ],
    "answer": "Not at this time.",
    "route": "demo"
  },
  {
    "id": "WEB165",
    "keywords": [
      "what company sizes and research volumes have you supported",
      "company sizes",
      "research volumes",
      "scale testing",
      "1000",
      "1,000 simultaneous"
    ],
    "answer": "TruPulse has run scale testing with up to 1,000 simultaneous users.",
    "route": "product"
  },
  {
    "id": "WEB166",
    "keywords": [
      "can you complete our security questionnaire or vendor onboarding process",
      "security questionnaire",
      "vendor onboarding",
      "complete our security"
    ],
    "answer": "Yes. Contact sales@trupulse.ai for assistance with security questionnaires.",
    "route": "demo"
  },
  {
    "id": "METHOD",
    "keywords": [
      "which research method should i use",
      "which research method",
      "which method should i use",
      "which should i use",
      "help me choose a method",
      "recommend a method",
      "help us choose a format"
    ],
    "answer": "I can help you choose. First tell me whose feedback you need (employees, customers, students, members, or another group), then what you want to understand or decide. From that I can recommend a survey, 1:1 discussion, focus group, or a mix.",
    "route": "clarify"
  },
  {
    "id": "SITE_SAMPLE_DISCUSSION_SESSION",
    "keywords": [
      "show me a sample 1:1 discussion session report",
      "sample 1:1 discussion session",
      "sample discussion session report",
      "1:1 discussion session report"
    ],
    "answer": "Here is our sample 1:1 Discussion Session Report—open it below. It uses sample data to show findings across participants.",
    "route": "sample_discussion_session"
  },
  {
    "id": "SITE_SAMPLE_DISCUSSION_INDIVIDUAL",
    "keywords": [
      "show me a sample 1:1 discussion individual report",
      "sample individual discussion report",
      "1:1 discussion individual report",
      "sample discussion individual"
    ],
    "answer": "Here is our sample 1:1 Discussion Individual Report—open it below. It shows how we summarize one participant’s perspective using sample data.",
    "route": "sample_discussion_individual"
  },
  {
    "id": "SITE_SAMPLE_SURVEY_SESSION",
    "keywords": [
      "show me a sample survey session report",
      "sample survey session report",
      "sample survey report"
    ],
    "answer": "Here is our sample Survey Session Report—open it below. It shows results, response patterns, and follow-up insights using sample data.",
    "route": "sample_survey_session"
  },
  {
    "id": "SITE_SAMPLE_SURVEY_RESPONSES",
    "keywords": [
      "show me a sample survey individual responses report",
      "survey individual responses",
      "complete survey-response",
      "actual survey answers"
    ],
    "answer": "Here is our sample Survey Individual Responses Report—open it below. It contains specific survey questions, follow-ups, and responses for each participant.",
    "route": "sample_survey_responses"
  },
  {
    "id": "SITE_SAMPLE_FOCUS",
    "keywords": [
      "do you have a focus group sample report",
      "focus group sample",
      "campaign sample",
      "focus group or campaign report"
    ],
    "answer": "Here are our Focus Group Session Report and Campaign Report samples—open either below. Both use sample data only.",
    "route": "sample_focus_group"
  },
  {
    "id": "SITE_CASE",
    "keywords": [
      "is there a customer case study",
      "customer case study",
      "case study",
      "real project example"
    ],
    "answer": "Yes. Our case study covers research with 50 top sales performers at a global medical technology company. You can read it on the Case Study page.",
    "route": "case_study"
  },
  {
    "id": "SITE_CHAT",
    "keywords": [
      "how do i clear this chat",
      "clear this chat",
      "reset this chat",
      "start a new chat",
      "clearing the chat"
    ],
    "answer": "Use the conversation menu to start a new conversation or clear the current one. Clearing the visible history does not confirm that stored server copies have been deleted. To request deletion of stored chat data, email Privacy@trupulse.ai.",
    "route": "privacy_contact"
  }
];

// Questions about using the signed-in app: point to product support, not invent click-paths.
export const APP_HELP = {
  keywords: ["log in", "login", "sign in", "password", "otp", "verification code", "notification", "tutorial", "sidebar", "dashboard", "settings", "my account", "subscription", "upgrade my plan", "error", "bug", "not working", "technical support", "billing dispute", "invoice"],
  answer: "Select Sign in to access your account. If you need account support, email support@trupulse.ai. I can explain how TruPulse works for evaluation, but I cannot inspect your workspace or account records through this website chat.",
  route: "support",
};

export const FALLBACK = {
  answer: "I can help with questions about TruPulse—sessions, surveys, 1:1 discussions, focus groups, reports, privacy, editions, and demos. For anything else, book a meeting on the website or email sales@trupulse.ai.",
  route: "contact",
};
