# TruPulse Public Website Agent

**Updated:** November 5, 2026  
**Catalogue:** 151 retained WEB questions (numbering contains gaps where items were removed)

## Purpose

Provide answers to general questions prospective customers may ask on the TruPulse website. The public agent explains TruPulse and supports product evaluation. It does not access customer records or claim that a booking, purchase, or support action has completed merely by answering.

## Public response guidance

- Use “you” or “your team” where appropriate.
- For pricing questions, refer visitors to the Pricing page (and Book a Demo / `sales@trupulse.ai` while evaluation continues).
- For legal questions, privacy-law requirements, rights, or contractual interpretation, tell visitors to check with their legal department.
- Use the supplied wording for confirmed capabilities. Do not invent contract exceptions, customer references, payment methods, response-time promises, or implementation details.
- Preserve the distinction between testing evidence and production customer experience.

## Sales contact

Book a meeting through the TruPulse website or email `sales@trupulse.ai`.

## Topic map

| Topic | WEB IDs |
|-------|---------|
| Understand TruPulse | 001–012 |
| Use cases and research fit | 013–024 |
| AI discussions, focus groups, and surveys | 025–037 |
| Campaigns and participant management | 038–049 |
| Reports and the Enterprise Research Assistant | 050–063 |
| Participant experience and languages | 064–077 |
| Privacy, security, and organizational control | 078–099 |
| Editions, pricing, demos, and support | 100–114 |
| Positioning, fit, and buying guidance | 115–117, 119–120 |
| Commercial journey and implementation | 121–128 |
| Trust, procurement, and public claims | 129–135 |
| Pricing, contract, and purchasing details | 137–141, 144 |
| Technical and deployment requirements | 145–147, 149–151, 153 |
| Evaluation process and proof | 163–166 |

## Implementation notes

- Answers live in `knowledge.js` as `WEB###` entries plus website-only helpers (`SITE_*`, `METHOD`).
- Home FAQ text in `faq.js` stays aligned with the matching WEB answers.
- Sample-report downloads, case study links, and the method-advisor flow are website helpers layered on top of the WEB catalogue.
