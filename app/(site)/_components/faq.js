// The home page FAQ. The AI assistant answers from the same text, so the two never drift apart.
// Aligned with Public Website Agent WEB catalogue (WEB 001, 003, 008, 078–080, 083, 006/007, 087).
export const FAQ = [
  ["What is TruPulse?", [
    "TruPulse is an AI feedback platform that helps organizations create, conduct, and analyze 1:1 Discussions, Focus Groups, Surveys, and multi-session campaigns.",
  ], "product"],
  ["Who can use TruPulse?", [
    "Teams researching employee experience, customer needs, product ideas, and other topics where understanding people’s experiences and perspectives is useful.",
  ], "use_cases"],
  ["How is TruPulse different from a traditional survey tool?", [
    "TruPulse’s AI agents help users create the perfect feedback session, conduct feedback sessions so you do not have to, and create detailed reports for your review. This saves your organization time and money and provides better feedback results.",
  ], "product"],
  ["Who sees a participant’s identity?", [
    "Each session has an Anonymous or Identified setting governing how participant identity is presented. Participants are notified in advance whether a session is Identified or Anonymous.",
    "TruPulse does not list participants’ names in reports or transcripts from an Anonymous session. Participants should still avoid details that could reveal their identity.",
    "In anonymous focus groups, other participants can see what you share, and details may reveal identity even when a name is hidden.",
  ], "privacy"],
  ["Who can access individual responses?", [
    "Open and Restricted session access govern which authorized TruPulse users in your organization are allowed to view and edit sessions and results. They are separate from the participant identity setting.",
    "Organizations can adjust role authorizations and individual authorizations, including permissions such as document downloading.",
  ], "privacy"],
  ["Does privacy work the same way in every session type?", [
    "Identity presentation follows each session’s Anonymous or Identified setting. In 1:1 Discussions and Surveys, feedback is individual. In focus groups, participants can read one another’s contributions, so anonymity does not prevent recognition from shared details.",
  ], "privacy"],
  ["How much control does our team have?", [
    "AI helps your team design sessions, conduct discussions and surveys, generate follow-up questions, analyze feedback, and create reports. Your team reviews and customizes questions and session settings before launch, then reviews findings and recommendations before deciding what to do.",
  ], "workflow"],
  ["Are participant responses used to train AI models?", [
    "No. Customer research content is not used to train general-purpose AI models.",
  ], "privacy"],
];

// For the assistant: each answer's paragraphs joined, with a route for action links.
export const FAQ_ANSWERS = FAQ.map(([q, answers, route]) => ({
  q,
  a: answers.join("\n\n"),
  route: route || "answer",
}));
