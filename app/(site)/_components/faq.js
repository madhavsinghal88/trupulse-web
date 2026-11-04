// The home page FAQ. The AI assistant answers from the same text, so the two never drift apart.
// Aligned with Answer Library v2 (C001, C004, C006, C008, C071–C079, C081).
export const FAQ = [
  ["What is TruPulse?", [
    "We help organizations create, conduct, and analyze surveys, individual discussions, and focus groups using AI. Your team sets the direction, approves the research, and decides what to do with the findings.",
  ], "product"],
  ["Who can use TruPulse?", [
    "We serve organizations that need to understand the people their decisions affect, including employees, customers, adult students, members, volunteers, and communities.",
  ], "use_cases"],
  ["How is TruPulse different from a traditional survey tool?", [
    "We help you go beyond fixed answers. Our surveys can include follow-up questions, our individual discussions explore each person's experience, and our focus groups explore how people respond to one another. We then prepare findings for your team to review.",
  ], "product"],
  ["Who sees a participant’s identity?", [
    "The session creator chooses whether the session is Identified or Anonymous. We tell participants the setting in both their invitation and Session Dashboard before they begin supplying feedback.",
    "In anonymous sessions, we hide names and direct contact identifiers from organizers and collaborators in outputs. Distinctive words, voice, or circumstances may still reveal identity.",
    "In identified sessions, individual reports include the participant’s name for the creator, people authorized to view the results, and admins with global viewing access.",
    "In anonymous focus groups, participants appear as Anonymous in chat. Others can still read their contributions, and distinctive details may reveal who they are.",
  ], "privacy"],
  ["Who can access individual responses?", [
    "People with access to a session can access its reports and underlying responses, including individual reports, session reports, discussion transcripts, and survey responses, as applicable.",
    "The session’s Identified or Anonymous setting controls identity visibility. In anonymous sessions, names are hidden; details participants share may still reveal their identity.",
  ], "privacy"],
  ["Does privacy work the same way in every session type?", [
    "No. In our 1:1 Discussions, each participant interacts individually with our AI. Surveys collect individual responses, while focus groups let participants read one another’s shared contributions. Authorized organizational viewers can access the research outputs according to session permissions and the identity setting.",
  ], "privacy"],
  ["How much control does our team have?", [
    "Our AI helps prepare session content, conducts individual discussions, moderates groups, asks relevant follow-ups, and prepares reports. Your team defines the purpose and audience, reviews and approves the research, checks the findings, and makes the decisions.",
  ], "workflow"],
  ["Are participant responses used to train AI models?", [
    "We do not use customer research content to train general-purpose AI models. Our AI service providers are contractually restricted from doing so. We do send relevant research content to those providers to conduct the research and analysis.",
  ], "privacy"],
];

// For the assistant: each answer's paragraphs joined, with a route for action links.
export const FAQ_ANSWERS = FAQ.map(([q, answers, route]) => ({
  q,
  a: answers.join("\n\n"),
  route: route || "answer",
}));
