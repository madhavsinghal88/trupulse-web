# TruPulse Website — Customer Knowledge Base

Hand-maintained guide for the public TruPulse website ([trupulse-web](https://trupulse-web-zsfq.vercel.app/)) AI assistant and customer-facing help.

**Scope:** product features, what they are for, and how organizations use TruPulse at a customer level.  
**Out of scope:** admin dashboard how-to, Connect app (participant) usage, and internal ops steps.

> The website assistant's answers live in `knowledge.js` next to this file. When this document changes, update the matching entries there.

---

## What TruPulse is

TruPulse is an AI-led research platform that **creates, conducts, and analyzes** surveys, 1:1 discussions, and focus groups.

- Your team sets the direction, approves the research, and reviews the findings.
- AI helps prepare the session, runs the conversations or surveys, and structures the analysis.
- Goal: go beyond what people think—**understand why**—with richer feedback and less manual research work.

**Who it is for:** businesses, schools, nonprofits, public agencies, and other organizations that need to understand employees, customers, students, members, or communities.

**How it differs from a traditional survey tool:** TruPulse can ask relevant follow-up questions, run individual and group discussions, and analyze responses so teams see experiences and reasons—not only scores or raw answers.

---

## The customer research journey (four steps)

1. **Define what you want to understand**  
   Start from a topic, research objective, or a use-case template. TruPulse’s **session creation agent** asks clarifying questions about audience, goals, and details you might overlook. Together you shape a session guide for **review and approval** before launch.

2. **Invite the right participants**  
   Choose people from saved contacts, participant groups, or an imported list. Send invitations and track who has started—in one workspace.

3. **Let AI conduct the research**  
   TruPulse guides participants through the session and asks relevant follow-ups so answers are explored, not just collected.

4. **Review the findings and decide what’s next**  
   TruPulse prepares reports with key findings, themes, and supporting evidence. Your team reviews and decides how to act.

**Campaigns:** group related sessions into a Campaign. Review each session’s report, then a Campaign report that brings insights together across sessions.

---

## Session types — features and when to use them

One platform. Three experiences. Choose the format that fits the question.

### 1. AI-led 1:1 discussions

**What it is:** Private, AI-conducted interviews. Your team sets the direction and approves the discussion guide; AI runs each discussion.

**What it is for:** Depth—stay interviews, customer discovery, member feedback, and any question that needs the “why” behind an experience.

**Customer benefits:**
- Flexible timing—participants join when it suits them
- Chat or voice, in any of 17 languages
- AI follow-up questions that explore reasons and examples
- No need for your team to schedule or personally run every interview

**Creation output (what the AI prepares for your review):** topic list for the AI interviewer, session description, participant-facing description, email invitation, and welcome message.

### 2. Surveys with AI-powered follow-ups

**What it is:** Structured questions plus optional follow-ups that explore why someone answered as they did. AI helps recommend questions and follow-up approaches; you review and approve before launch.

**What it is for:** Breadth with explanation—employee engagement, customer satisfaction, member experience, and any rating or choice that needs context.

**Core building blocks:**
- **Base questions** — the core questions tied to your research objectives
- **Fixed follow-ups** — the same follow-up for everyone (consistent detail you approve in advance)
- **Conditional follow-ups** — appear only when an answer meets criteria you set (including sentiment-based conditions on free text); wording reviewed before launch
- **Adaptive follow-ups** — generated in real time from the participant’s answer; tailored, not pre-approved word-for-word

**Follow-up intent (what kind of “why” you want):** what influenced the answer, a concrete example, whether it feels like a pattern or a one-off, or suggestions for improvement.

**In the report:** each question’s results sit next to an explanatory summary of follow-up responses; text questions can include illustrative quotes.

### 3. AI-moderated focus groups

**What it is:** Live group discussions. Your team approves the guide; AI moderates so facilitation work is reduced.

**What it is for:** Shared perspectives—idea workshops, product concept feedback, team improvement, and topics where people should build on each other’s views.

**Customer benefits:**
- Encourages participation—invites quieter voices and manages dominant speakers
- Explores perspectives—asks for examples and probes differing viewpoints
- Checks understanding—shares summaries so participants can clarify or add more

---

## Session creation agent — customer experience

**Purpose:** Turn a research question into a ready-to-review session without starting every piece of research design from scratch.

**How customers use it (conceptually):**
1. Choose **1:1 Discussion**, **Survey**, or **Focus Group** (or ask the agent which format fits).
2. Describe goals in your own words, pick a **use-case template**, reuse a previous session, or use a saved custom template.
3. Answer a short clarifying Q&A (type answers or use AI-recommended options).
4. Review what the agent prepared: questions/topics, descriptions, invitations, and (for surveys) suggested follow-ups.
5. Edit, approve, then launch when ready.

Your role stays on **what you want to learn** and **whether the materials match that**—not on writing every artifact from a blank page.

---

## Reports — features and what they are for

**Purpose:** Move from collected responses to a shared view your team can discuss and act on—without assembling themes and quotes by hand.

**Common report building blocks (across session types):**
- Executive summaries / key findings tied to the research objective
- Patterns, themes, and differences (including question-level or topic-level detail)
- Supporting evidence and illustrative quotes (with paths to transcripts or full survey responses)
- Conclusions and **Suggested Next Steps** (suggestions for the team to consider—not automatic decisions)
- Engagement metrics alongside other reporting content

**By session type:**
| Session | What reports emphasize |
|--------|-------------------------|
| **1:1 Discussions** | Results by discussion topic + illustrative quotes. Formats: Session Report, Individual Report, Discussion Chat Transcript |
| **Surveys** | Per-question results + follow-up explanation paragraphs + quotes for text answers. Formats: Session Report, Individual Responses, raw data (Excel/CSV) |
| **Focus Groups** | Topic summaries, quotes, and areas of agreement or disagreement. Formats: Session Report, Chat Transcript |

**Customization & delivery:**
- Reports for an entire session or one participant
- Add/remove sections and editorial comments
- Download Word, PDF, or PowerPoint where available; export survey response data to Excel or CSV

---

## Use cases — pick the question, then the format

| Theme | Guiding question | Example situations | Suggested ways to explore |
|-------|------------------|--------------------|---------------------------|
| **Understand experiences** | What is the experience really like—and why? | Employee onboarding, customer service, student support, community programs | Survey for breadth; 1:1 discussions for depth |
| **Discover needs** | What do people need that we are not yet addressing? | Customer discovery, employee development, member services, community needs | 1:1s for individual needs; focus groups for shared challenges; survey to test themes at scale |
| **Test ideas** | How do people respond to this idea—and what would improve it? | Product concepts, service proposals, school initiatives, membership benefits | Focus groups for reaction and improvement; 1:1s for independent views; survey for structured options |
| **Navigate change** | How are people experiencing this change? | Organizational changes, new technology, campus changes, public service updates | Surveys at key stages; 1:1s or focus groups for the story behind scores |
| **Strengthen engagement** | What keeps people involved—and what gets in the way? | Employee retention, customer loyalty, member renewal, volunteer participation | 1:1s for motivations and exit reasons; surveys across involvement levels |
| **Improve communication** | Is our message understood the way we intended? | Employee announcements, customer messaging, student guidance, public information | 1:1s for interpretation in people’s words; surveys with follow-ups for clarity at scale |

Customers can also bring **their own** topic, audience, and objectives—templates are optional starters.

---

## Trust, brand, and control (customer-facing)

| Feature | What it is for |
|--------|----------------|
| **Your brand** | Organization identity on invitations, sessions, and reports for a consistent participant experience |
| **Research guidelines** | Rules for AI language, questions, and sensitive topics—aligned to your standards |
| **Roles & permissions** | Control who can create research, review responses, and access reports |
| **Data retention** | How long research data is kept and how deletion is managed |
| **Human review at key steps** | Approve sessions before launch; evaluate findings and evidence before acting |

---

## Privacy & access (FAQ-aligned)

- The **Creator** chooses **anonymous** or **identified** for a session. Participants are told which applies before they take part.
- **Anonymous:** names are hidden in individual responses and reports. Content in answers may still identify someone. In anonymous focus groups, people appear as “Anonymous” in chat; shared details may still reveal identity to others.
- **Identified:** individual reports include the participant’s name for the Creator, people they authorize, and admins with global viewing access.
- Anyone with session access can see that session’s reports and responses (group reports, individual reports, transcripts, survey responses)—subject to anonymity settings.
- Privacy **differs by session type:** surveys are solo; 1:1 is participant + AI; focus groups include multiple participants.
- **Participant responses are not used to train AI models.** They are used to run your research and generate findings for your organization.

---

## Example outcome (case study, summary)

A global medical technology company used TruPulse to learn from **50 top sales performers** in **two weeks**, with **two leaders** overseeing the work. Leaders set objectives and approved materials; AI ran ~30-minute 1:1 discussions plus follow-up surveys and prepared individual and executive reports (25+ hours of discussion analyzed). Findings informed targeted training, updated job descriptions, and plans to expand the research.

---

## How customers typically get started

1. Bring one research question about people who matter to the organization.
2. Explore session types and use cases on the website, or ask the TruPulse AI assistant.
3. **Book a demo** to see create → conduct → report for that question.  
   Contact: [hello@trupulse.ai](mailto:hello@trupulse.ai)

Website resources: product overview, how it works, reports, use cases, articles, sample reports, case study, FAQs, Privacy Policy, Terms.

---

## Assistant boundaries (for website AI)

- Answer from this knowledge base: features, purpose, journey, privacy, use cases, and high-level “how TruPulse works for customers.”
- Do **not** give dashboard click-paths, Connect app sign-in/session UI steps, or internal admin troubleshooting.
- For product walkthroughs or tailored fit, point people to **Book a Demo** or `hello@trupulse.ai`.
- Off-topic requests: briefly redirect to TruPulse research questions (sessions, surveys, discussions, focus groups, reports, privacy).
