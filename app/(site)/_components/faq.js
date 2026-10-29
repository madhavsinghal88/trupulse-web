// The home page FAQ. The AI assistant answers from the same text, so the two never drift apart.
export const FAQ = [
  ["What is TruPulse?", ["TruPulse is an AI-led research platform that creates, conducts, and analyzes surveys, 1:1 discussions, and focus groups. Your team sets the direction, approves the questions, and reviews the findings."]],
  ["Who can use TruPulse?", ["Businesses, schools, nonprofits, public agencies, and other organizations can use TruPulse to better understand employees, customers, students, members, and communities."]],
  ["How is TruPulse different from a traditional survey tool?", ["TruPulse goes beyond collecting answers. It can ask relevant follow-up questions, conduct individual and group discussions, and analyze responses to help you understand the experiences and reasons behind the feedback."]],
  ["Who sees a participant’s identity?", [
    "The Creator chooses whether a session is anonymous or identified. Participants are told which setting applies before they take part.",
    "In anonymous sessions, participant names are hidden from individual responses and reports. Details participants share in their responses may still reveal their identity.",
    "In identified sessions, individual reports include the participant’s name. These reports are available to the Creator, people the Creator has authorized to view the results, and admins with global viewing access.",
    "In anonymous focus groups, all participants appear as “Anonymous” in the chat. Details shared during the discussion may still reveal their identity to other participants.",
  ]],
  ["Who can access individual responses?", [
    "Anyone with access to a session—the creator, people the creator has shared access with, and admins with global viewing access—can access all reports and responses for that session, including group reports, individual reports, discussion transcripts, and survey responses.",
    "In anonymous sessions, participant names are hidden in all reports and transcripts. Details participants share in their responses may still reveal their identity. In identified sessions, individual reports include the participant’s name.",
  ]],
  ["Does privacy work the same way in every session type?", ["No. A survey can be answered without anyone else present; a 1:1 discussion is between the participant and the AI; a focus group is held with multiple participants in the session. Participants are always notified if a session is anonymous or identified."]],
  ["How much control does our team have?", ["Your team defines the research objectives, reviews and approves the session details before launch, and chooses participants. TruPulse conducts the research and prepares findings for your team to review. You decide what happens next."]],
  ["Are participant responses used to train AI models?", ["No. TruPulse does not use participant responses—including survey answers, 1:1 discussions, and focus-group conversations—to train AI models. Responses are used to conduct your research and generate findings and reports for your organization."]],
];

// For the assistant: each answer's paragraphs joined.
export const FAQ_ANSWERS = FAQ.map(([q, answers]) => ({ q, a: answers.join("\n\n") }));
