import { APP_HELP, FALLBACK, KNOWLEDGE } from "./knowledge";

/* Replies: intent rules first, then the site FAQ, then the website knowledge base
   (knowledge.js — TruPulse Public Website Agent WEB catalogue). Returns { answer, route, id? }.
   Optional context.topic lets short follow-ups resolve “it”, “that”, and “one”. */

var COMMON = ["does", "have", "much", "what", "with", "your", "that", "this", "from", "about", "same", "work", "when", "every", "used", "trupulse"];
var MIN_SCORE = 10;

/* Common misspellings and light wording normalizations so FAQ paraphrases still match. */
function normalizeQuery(q) {
  return q
    .replace(/\bpricng\b/g, "pricing")
    .replace(/\bprcing\b/g, "pricing")
    .replace(/\bpriceing\b/g, "pricing")
    .replace(/\bcostin?g\b/g, "costing")
    .replace(/\btrupuls\b/g, "trupulse")
    .replace(/\btrupulsse\b/g, "trupulse")
    .replace(/\bfocus grups?\b/g, "focus groups")
    .replace(/\bfocusgrup\b/g, "focus group")
    .replace(/\bquestionaires?\b/g, "questionnaires")
    .replace(/\bhalf[- ]finished\b/g, "half finished")
    .replace(/\bon[- ]prem(ises)?\b/g, "on premises")
    .replace(/\bown servers?\b/g, "own servers")
    .replace(/\banswer out loud\b/g, "answer out loud")
    .replace(/\bmicrosoft entra\b/g, "microsoft entra")
    .replace(/\benra\b/g, "entra");
}

export function answerFor(text, FAQ, context) {
  var raw = String(text || "");
  var q = normalizeQuery(raw.toLowerCase().replace(/[’']/g, "'"));

  if (/<script|javascript:|on\w+\s*=/i.test(raw)) return Object.assign({}, FALLBACK, { id: "FALLBACK", skipLlm: true });

  var social = greeting(q) || thanks(q);
  if (social) return social;

  var multi = multiPart(q);
  if (multi) return multi;

  var intent =
    sampleReport(q) ||
    dataSecure(q) ||
    trainAi(q) ||
    whoSeesResponses(q) ||
    dataStored(q) ||
    dataRetention(q) ||
    phoneNumber(q) ||
    under18(q) ||
    howSurveysWork(q) ||
    editCompleted(q) ||
    incompleteSessions(q) ||
    participantRegister(q) ||
    voiceAudio(q) ||
    arabicVoice(q) ||
    reportsLanguage(q) ||
    humanModerator(q) ||
    editAfterLaunch(q) ||
    onPrem(q) ||
    hrisFrequency(q) ||
    ssoProviders(q) ||
    editionsCombo(q) ||
    scaleCustomers(q) ||
    campaignCompare(q) ||
    launchSettings(q) ||
    customerBoundary(q) ||
    marketingCookies(q) ||
    helpOrganization(q) ||
    findingsReports(q) ||
    nonprofitRenewal(q) ||
    howItWorks(q) ||
    customizeReports(q) ||
    seeTranscripts(q) ||
    joinMobile(q) ||
    salesforceAsk(q) ||
    namedCustomers(q) ||
    marketResearch(q) ||
    participantVisibility(q) ||
    resultsSpeed(q) ||
    talkToHuman(q) ||
    employeeLeaving(q) ||
    methodChoice(q) ||
    competitorCompare(q) ||
    campaignDefine(q);
  if (intent) return intent;

  var ctx = contextFollowup(q, context && context.topic);
  if (ctx) return ctx;

  var hit = FAQ && FAQ.find(function (f) {
    var words = f.q.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ").filter(function (w) { return w.length > 3 && COMMON.indexOf(w) < 0; });
    if (words.length < 2) return false;
    var matched = words.filter(function (w) { return q.indexOf(w) > -1; }).length;
    return matched >= Math.min(2, words.length) && matched / words.length >= 0.5;
  });
  if (hit) return { answer: hit.a, route: hit.route || "answer", id: hit.id || "FAQ" };

  var best = null, bestScore = 0;
  KNOWLEDGE.forEach(function (k) {
    var sc = score(q, k.keywords);
    if (sc > bestScore) { best = k; bestScore = sc; }
  });
  if (best && bestScore >= MIN_SCORE) return pack(best);

  if (score(q, APP_HELP.keywords) >= 8) return { answer: APP_HELP.answer, route: APP_HELP.route || "support", id: "APP_HELP" };

  var keyed = keywordOverlap(q);
  if (keyed) return keyed;

  return Object.assign({}, FALLBACK, { id: "FALLBACK", needsLlm: true });
}

/** True when local FAQ/knowledge had no good match and Luna/GPT should try. */
export function shouldAskLlm(result) {
  if (!result || result.skipLlm) return false;
  if (result.needsLlm) return true;
  return result.id === "FALLBACK" || (result.route === FALLBACK.route && result.answer === FALLBACK.answer);
}

function pack(k) {
  return { answer: k.answer, route: k.route || "answer", id: k.id };
}

function entry(id) {
  var k = KNOWLEDGE.find(function (x) { return x.id === id; });
  if (!k) return Object.assign({}, FALLBACK);
  return pack(k);
}

function combine(parts, route) {
  return { answer: parts.filter(Boolean).join(" "), route: route || "answer" };
}

/* ---------- social ---------- */
function greeting(q) {
  if (!/^(hi|hello|hey|hiya|good (morning|afternoon|evening)|howdy)\b/.test(q) && q !== "hi" && q !== "hello" && q !== "hey") return null;
  if (q.length > 40) return null;
  return {
    answer: "Hi! I can explain TruPulse, help you choose a research method, or show you sample reports. What would you like to explore?",
    route: "answer",
    id: "GREETING",
  };
}

function thanks(q) {
  if (!/^(thanks|thank you|thx|ty|appreciate it|cheers)\b/.test(q)) return null;
  if (q.length > 48) return null;
  return { answer: "You’re welcome. Ask anytime if you want help with TruPulse.", route: "answer", id: "THANKS" };
}

/* ---------- multi-part questions ---------- */
function multiPart(q) {
  var sso = /\bsso\b|single sign[- ]?on|okta|entra/.test(q);
  var mfa = /\bmfa\b|multi[- ]?factor|2fa|two[- ]?factor/.test(q);
  if (sso && mfa) {
    return combine([
      "We do not support SSO.",
      "We do support MFA for login to the administration and participant portals.",
    ], "support");
  }

  var voiceStored = /\b(voice|audio).{0,40}(record|recorded|recording|save|saved|store|stored|retain)|(?:record|save|store).{0,40}(voice|audio)/.test(q);
  var arabicVoice = /\barabic\b/.test(q) && /\b(voice|out loud|spoken|speak)\b/.test(q);
  if (voiceStored && arabicVoice) {
    return combine([
      "Voice responses are converted to text, and the text is processed and stored as session content.",
      "Arabic supports text responses only; voice responses are available in the other 16 supported languages for 1:1 Discussions.",
    ], "privacy");
  }

  var changeQ = /\b(change|edit|fix|typo).{0,30}question|\bquestion.{0,20}(change|edit|fix)/.test(q);
  var identity = /\b(anonymous|identified|identity)\b/.test(q);
  if (changeQ && identity && /\b(launch|launched|after|running)\b/.test(q)) {
    return {
      answer: "No. After launch, neither the questions nor the Anonymous or Identified setting can be changed. You can pause or close the session and create a new session with the required questions and identity setting.",
      route: "workflow",
      id: "SITE_LAUNCH_BOTH",
    };
  }

  var hris = /\bhris\b|\bhr system\b|\bhr sync\b/.test(q);
  var assistant = /\bresearch assistant\b/.test(q);
  if (hris && assistant && /\b(which|what|plan|edition|include)\b/.test(q)) {
    return {
      answer: "HRIS sync is available in Professional and Enterprise. The Research Assistant is available in Enterprise. Book a demo or email sales@trupulse.ai for the current edition comparison and pricing.",
      route: "pricing",
      id: "SITE_EDITIONS_COMBO",
    };
  }

  return null;
}

/* ---------- high-priority intents ---------- */
function dataSecure(q) {
  if (!/\b(secure|security|safe|encrypt|encryption|protected)\b/.test(q)) return null;
  if (!/\b(data|information|responses?|privacy)\b/.test(q) && !/\bis (it|trupulse|this) secure\b/.test(q)) return null;
  if (/\btrain\b|\bcookie|\bcertif|\bsoc\b|\biso\b/.test(q)) return null;
  return {
    answer: "Customer data is hosted in the US and encrypted in transit and at rest for relevant services. Certification is in progress, with expected completion in early 2027.",
    route: "privacy",
    id: "SITE_DATA_SECURE",
  };
}

function trainAi(q) {
  if (!/\btrain\b/.test(q)) return null;
  if (!/\b(ai|model|models|llm)\b/.test(q) && !/\b(our|customer|participant|research)\b.{0,20}\bdata\b/.test(q)) return null;
  if (!/\b(data|research|responses?|content|feedback)\b/.test(q) && !/\btrain (ai|models?)\b/.test(q)) return null;
  return entry("WEB087");
}

function whoSeesResponses(q) {
  if (!/\b(who can (see|access|view)|who sees|who has access|who views)\b/.test(q)) return null;
  if (!/\b(responses?|answers?|results?|feedback|research|participant)\b/.test(q)) return null;
  if (/\bother (people|participants|person)\b|\bwhat others\b/.test(q)) return entry("SITE_PARTICIPANT_VISIBILITY");
  return {
    answer: "Open and Restricted session access govern which authorized TruPulse users in your organization are allowed to view and edit sessions and results. Organizations can adjust role authorizations and individual authorizations, including permissions such as document downloading.",
    route: "privacy",
    id: "SITE_WHO_SEES",
  };
}

function dataStored(q) {
  if (!/\b(where.{0,20}(data|information).{0,20}(stored|hosted|kept)|where is data|data (stored|hosted)|data residency|hosting location)\b/.test(q)) return null;
  return entry("WEB085");
}

function dataRetention(q) {
  if (!/\b(how long|retention|retain|keep (data|information|responses)|data keep|kept)\b/.test(q)) return null;
  if (!/\b(data|information|responses?|research|records?)\b/.test(q)) return null;
  if (/\bchat\b|\bconversation\b|\bclear\b/.test(q)) return null;
  return entry("WEB089");
}

function phoneNumber(q) {
  if (!/\b(phone( number)?|telephone|call you|your number|contact number)\b/.test(q)) return null;
  return {
    answer: "We do not publish a general public phone number on the website. Email hello@trupulse.ai or book a demo. Existing customers can email support@trupulse.ai; customers with live phone support can find their number in the product’s Support section.",
    route: "human",
    id: "SITE_PHONE",
  };
}

function under18(q) {
  if (!/\b(under 18|under eighteen|minors?|children|aged 1[0-7]|age(d)? (1[0-7]|12|13|14|15|16|17)|people under)\b/.test(q)) return null;
  return {
    answer: "No. TruPulse is intended for adults aged 18 and older. We do not permit research involving minors through TruPulse.",
    route: "privacy",
    id: "SITE_ADULTS_ONLY",
  };
}

function howSurveysWork(q) {
  if (!/\bhow (do|does|can) (surveys?|an? survey) work\b|\bhow surveys work\b|\bexplain surveys?\b/.test(q)) return null;
  return entry("WEB027");
}

function editCompleted(q) {
  var completed = /\b(after completing|completed|submitted|finished|done with|already (submitted|completed))\b/.test(q);
  var edit = /\b(edit|change|update|revise|go back|correct)\b/.test(q);
  var response = /\b(responses?|answers?|survey|session)\b/.test(q);
  if (!(edit && response && (completed || /\bgo back\b/.test(q)))) return null;
  if (/\blaunch|running session|after launch\b/.test(q) && /\bquestion\b/.test(q) && !completed) return null;
  return {
    answer: "No. Once a session has been completed, the participant cannot edit or change a response.",
    route: "workflow",
    id: "WEB074",
  };
}

function incompleteSessions(q) {
  if (!/\b(incomplete|half finished|half-finished|partially (finished|complete)|unfinished)\b/.test(q)) return null;
  if (!/\b(session|survey|questionnaire|responses?|findings?|results?|counted|included)\b/.test(q)) return null;
  return entry("WEB076");
}

function participantRegister(q) {
  if (!/\b(register|sign up|create (an? )?account|registration)\b/.test(q)) return null;
  if (!/\b(participant|join|interview|session|discussion)\b/.test(q)) return null;
  return {
    answer: "Your participant account is generated automatically in TruPulse Connect. Follow the link in your session invitation email to join, and do not forward or share your invitation.",
    route: "workflow",
    id: "SITE_PARTICIPANT_JOIN",
  };
}

function voiceAudio(q) {
  if (!/\b(voice|audio|recording|recorded)\b/.test(q)) return null;
  if (!/\b(save|saved|store|stored|retain|record|transcript|recording)\b/.test(q)) return null;
  if (/\barabic\b/.test(q)) return null;
  return {
    answer: "When you use voice, your responses are converted to text. We process and store the text as session content, rather than retaining a voice recording.",
    route: "privacy",
    id: "WEB070",
  };
}

function arabicVoice(q) {
  if (!/\barabic\b/.test(q)) return null;
  if (!/\b(voice|out loud|spoken|speak|audio|orally)\b/.test(q) && !/\banswer out loud\b/.test(q)) return null;
  return {
    answer: "Arabic is supported for text responses only. Voice responses are available in 1:1 Discussions in the other 16 supported languages.",
    route: "product",
    id: "SITE_ARABIC_VOICE",
  };
}

function reportsLanguage(q) {
  if (!/\b(reports?|session creator|interface)\b/.test(q)) return null;
  if (!/\b(spanish|french|german|language|languages|translated|translation)\b/.test(q)) return null;
  if (/\bparticipant\b/.test(q) && !/\breports?\b/.test(q)) return null;
  return {
    answer: "Our reports and session creator interface are currently in English only. Additional language support is planned for 2027. Participants can provide feedback in the supported participant languages, including Spanish.",
    route: "product",
    id: "SITE_REPORT_LANG",
  };
}

function humanModerator(q) {
  if (!/\b(moderat|take over|step in|human (join|observer))\b/.test(q)) return null;
  if (!/\b(focus group|ai focus|stuck)\b/.test(q) && !/\bhuman moderator\b/.test(q)) return null;
  return {
    answer: "No. A human moderator cannot take over or participate in a focus group. A human moderator can join as an observer.",
    route: "product",
    id: "WEB037",
  };
}

function editAfterLaunch(q) {
  if (!/\b(launch|launched|running|already live)\b/.test(q)) return null;
  if (!/\b(typo|fix|edit|change|update).{0,40}question|question.{0,30}(typo|fix|edit|change)\b/.test(q)) return null;
  if (/\banonymous|identified\b/.test(q)) return null;
  return entry("WEB036");
}

function onPrem(q) {
  if (!/\b(on premises|on-premises|own servers?|own cloud|self[- ]host|install .{0,20}(servers?|cloud|ourselves))\b/.test(q)) return null;
  return {
    answer: "No. We do not support on-premises deployment or hosting TruPulse in your own cloud.",
    route: "privacy",
    id: "WEB150",
  };
}

function hrisFrequency(q) {
  if (!/\b(hris|hr system|hr sync|employees?.{0,20}(appear|sync)|how often.{0,20}sync|sync.{0,20}(monthly|manual|often|frequen))\b/.test(q)) return null;
  if (/\bwhich edition|which plan|include hris\b/.test(q) && !/\b(often|frequen|monthly|manual|appear)\b/.test(q)) return null;
  if (/\b(often|frequen|monthly|manual|appear|new employees)\b/.test(q) || /\bhow often\b/.test(q)) {
    return {
      answer: "HRIS contacts sync monthly by default, and you can trigger a sync manually. HRIS sync is available in the Professional and Enterprise Editions.",
      route: "workflow",
      id: "SITE_HRIS_FREQ",
    };
  }
  return null;
}

function ssoProviders(q) {
  if (!/\b(okta|entra|azure ad|single sign[- ]?on|\bsso\b)\b/.test(q)) return null;
  if (/\bmfa\b|multi[- ]?factor|2fa/.test(q)) return null;
  return {
    answer: "We do not support SSO, including signing in through an Okta or Microsoft Entra SSO integration. MFA is supported for login to the administration and participant portals.",
    route: "support",
    id: "SITE_SSO",
  };
}

function editionsCombo(q) {
  if (!/\bhris\b/.test(q) || !/\bresearch assistant\b/.test(q)) return null;
  if (!/\b(which|what|plan|edition|include)\b/.test(q)) return null;
  return {
    answer: "HRIS sync is available in Professional and Enterprise. The Research Assistant is available in Enterprise. Book a demo or email sales@trupulse.ai for the current edition comparison and pricing.",
    route: "pricing",
    id: "SITE_EDITIONS_COMBO",
  };
}

function scaleCustomers(q) {
  if (!/\b(1000|1,000|thousand)\b/.test(q)) return null;
  if (!/\b(customers?|users?|simultaneous|at once|scale)\b/.test(q)) return null;
  return {
    answer: "We have run scale testing with up to 1,000 simultaneous users. That is testing evidence; it does not establish that 1,000 paying customers used TruPulse simultaneously. Contact sales@trupulse.ai for customer experience information we can share.",
    route: "product",
    id: "SITE_SCALE",
  };
}

function campaignCompare(q) {
  if (!/\b(linked|independent)\b/.test(q)) return null;
  if (!/\b(campaign|difference|different|vs|versus|compared|compare)\b/.test(q)) return null;
  if (/\bwhat is an? (linked|independent) campaign\b/.test(q) && !/\b(difference|different|vs|versus|compared|and)\b/.test(q)) return null;
  return {
    answer: "In a Linked Campaign, earlier session data informs subsequent sessions. In an Independent Campaign, sessions do not share data with one another in that way. Both provide individual session reports and a Campaign Report combining information across the campaign.",
    route: "workflow",
    id: "SITE_CAMPAIGN_COMPARE",
  };
}

function launchSettings(q) {
  if (!/\b(anonymous|identified)\b/.test(q)) return null;
  if (!/\b(launch|launched|after launch|change)\b/.test(q)) return null;
  if (!/\b(question|identity|setting)\b/.test(q)) return null;
  return {
    answer: "No. After launch, neither the questions nor the Anonymous or Identified setting can be changed. You can pause or close the session and create a new session with the required questions and identity setting.",
    route: "workflow",
    id: "SITE_LAUNCH_BOTH",
  };
}

function customerBoundary(q) {
  if (/\b(another customer|other customer|named customers?|customer references?|which customers)\b/.test(q)) {
    if (/\b(responses?|research|employee|show me)\b/.test(q)) {
      return {
        answer: "I cannot access or share another customer’s research through this public website chat. I can help you find sample reports that use sample data.",
        route: "samples",
        id: "SITE_OTHER_CUSTOMER",
      };
    }
    return {
      answer: "Please contact sales@trupulse.ai for customer references we are authorized to share.",
      route: "contact",
      id: "SITE_NAMED_CUSTOMERS",
    };
  }
  if (/\b(my (trupulse )?account|our account|analyze .{0,40}(my|our) (research|account|data)|research in my)\b/.test(q)) {
    return {
      answer: "I cannot access or analyze your account’s research through this public website chat. Use the authorized workflows in your licensed TruPulse product. The Enterprise Research Assistant can investigate research that your permissions allow you to access.",
      route: "answer",
      id: "SITE_ACCOUNT_BOUNDARY",
    };
  }
  return null;
}

function marketingCookies(q) {
  if (!/\b(cookies?|tracking|analytics|marketing tracking)\b/.test(q)) return null;
  if (!/\b(dashboard|connect|participant site|user dashboard|inside|product|workspace)\b/.test(q)) return null;
  return {
    answer: "No. Optional analytics and marketing tracking is limited to our public website. We do not deploy these technologies in the User Dashboard, or Participant Connect site, customer workspaces, or participant research experiences. Necessary authentication and preference technologies are separate.",
    route: "privacy",
    id: "SITE_PRODUCT_COOKIES",
  };
}

function helpOrganization(q) {
  if (!/\bhow could trupulse help (my|our) organization\b|\bhow can trupulse help (us|me|my team)\b/.test(q)) return null;
  return {
    answer: "We help you create, conduct, and analyze surveys, 1:1 discussions, focus groups, and campaigns. Whose feedback do you need, and what would you like to understand or decide?",
    route: "clarify",
    id: "SITE_HELP_ORG",
  };
}

function findingsReports(q) {
  if (!/\bwhat findings and reports\b|\bwhat (findings|reports) will i get\b|\bfindings and reports will i get\b/.test(q)) return null;
  return entry("SITE_FINDINGS_REPORTS");
}

function nonprofitRenewal(q) {
  if (!/\b(nonprofit|non-profit|member renew|membership renew|member retention)\b/.test(q)) return null;
  return {
    answer: "Yes. TruPulse can help nonprofits research member experience and renewal decisions through surveys, 1:1 discussions, and focus groups—so you understand why members stay, leave, or renew, not only the score. Tell me whose feedback you need and what you want to decide.",
    route: "use_cases",
    id: "SITE_NONPROFIT",
  };
}

function howItWorks(q) {
  if (!/\bhow (does|do) (it|trupulse|this) work\b|\bhow does the process work\b|\bhow it works\b/.test(q)) return null;
  return {
    answer: "Your team sets the research objective and approves the session design. TruPulse’s AI helps create, conduct, and analyze 1:1 discussions, surveys, and focus groups. Participants join from an invitation link. Your team reviews the findings and reports. Want a walkthrough of a specific method?",
    route: "workflow",
    id: "SITE_HOW_IT_WORKS",
  };
}

function customizeReports(q) {
  if (!/\b(customi[sz]e|custom|own).{0,20}reports?|reports?.{0,20}(customi[sz]e|custom)\b/.test(q)) return null;
  return entry("WEB052");
}

function seeTranscripts(q) {
  if (!/\b(transcripts?|see (the )?source|underlying (responses?|feedback))\b/.test(q)) return null;
  return entry("WEB054");
}

function joinMobile(q) {
  if (!/\b(mobile|phone|smartphone|tablet|ipad|android|ios)\b/.test(q)) return null;
  if (!/\b(join|participate|participant|session|survey|discussion)\b/.test(q)) return null;
  if (/\bphone number\b/.test(q)) return null;
  return {
    answer: "Participants join through a web link in their invitation—no app download is required. Sessions work in a mobile browser.",
    route: "workflow",
    id: "SITE_MOBILE",
  };
}

function salesforceAsk(q) {
  if (!/\bsalesforce\b/.test(q)) return null;
  return {
    answer: "Please contact sales@trupulse.ai to confirm whether a Salesforce integration is available for your requirements.",
    route: "contact",
    id: "SITE_SALESFORCE",
  };
}

function namedCustomers(q) {
  if (!/\b(named customers?|customer (names?|references?|list)|which customers use)\b/.test(q)) return null;
  return {
    answer: "Please contact sales@trupulse.ai for customer references we are authorized to share.",
    route: "contact",
    id: "SITE_NAMED_CUSTOMERS",
  };
}

function competitorCompare(q) {
  if (!/\b(qualtrics|surveymonkey|survey monkey|better than|vs\.? |versus)\b/.test(q)) return null;
  return entry("WEB117");
}

function campaignDefine(q) {
  if (!/\bwhat is a campaign\b|\bwhat('?s| is) a campaign\b|\bdefine (a )?campaign\b|\bwhat does campaign mean\b/.test(q)) return null;
  return entry("WEB038");
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
    if (campaign) return { answer: "Here is our sample Campaign Report—open it below. It uses sample data only.", route: "sample_campaign" };
    if (survey) return entry(individual ? "SITE_SAMPLE_SURVEY_RESPONSES" : "SITE_SAMPLE_SURVEY_SESSION");
    return entry(individual ? "SITE_SAMPLE_DISCUSSION_INDIVIDUAL" : "SITE_SAMPLE_DISCUSSION_SESSION");
  }
  return {
    answer: "Here are our sample reports, built with sample data—open any of them below.",
    route: "samples",
  };
}

/* Market / product research questions were landing on the “not only for HR” answer via word overlap. */
function marketResearch(q) {
  if (!/\b(market research|product research|new product|concept test|test (a |the )?product|marketing (concept|idea))\b/.test(q)) return null;
  return entry("WEB021");
}

function participantVisibility(q) {
  if (!/\b(participants?|others?)\b/.test(q)) return null;
  if (!/\b(see what others|see others|see each other|see (other )?(responses|answers|replies)|what others said|what other people said)\b/.test(q)) return null;
  return entry("SITE_PARTICIPANT_VISIBILITY");
}

function resultsSpeed(q) {
  if (!/\b(results?|reports?|findings?|insights?)\b/.test(q)) return null;
  if (!/\b(how fast|how quickly|how soon|when do i get|turnaround|get results)\b/.test(q)) return null;
  if (/\blaunch|up and running|first (real )?session\b/.test(q)) return null;
  return entry("SITE_RESULTS_SPEED");
}

function talkToHuman(q) {
  if (!/\b(talk to (a )?human|speak to (a )?(human|person|someone)|real person|human (please|support)|hello@trupulse\.ai)\b/.test(q)) return null;
  return entry("WEB121");
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

/* Short follow-ups that need the prior topic (“How often does it sync?” after HRIS). */
function contextFollowup(q, topic) {
  if (!topic) return null;
  if (topic === "hris") {
    if (/\b(how often|frequen|sync|monthly|manual|it)\b/.test(q) && q.length < 80) {
      return {
        answer: "HRIS contacts sync monthly by default, and you can trigger a sync manually.",
        route: "workflow",
        id: "WEB153",
      };
    }
  }
  if (topic === "campaign") {
    if (/\b(different|difference|independent|linked|vs|versus|compared|that|one)\b/.test(q) && /\b(campaign|independent|linked|that|one)\b/.test(q)) {
      return {
        answer: "A Linked Campaign uses earlier session data to inform subsequent sessions. In an Independent Campaign, sessions do not share data with one another in that way. Both include session reports and a combined Campaign Report.",
        route: "workflow",
        id: "SITE_CAMPAIGN_COMPARE",
      };
    }
  }
  if (topic === "clarify" || topic === "METHOD" || topic === "SITE_HELP_ORG") {
    if (/\bwhat about (for )?students\b|\band how many\b|\btell me more\b/.test(q)) {
      return {
        answer: "I can tailor this—tell me whose feedback you need and what you want to understand or decide, and I’ll recommend a survey, 1:1 discussion, focus group, or a mix.",
        route: "clarify",
        id: "SITE_FOLLOWUP_CLARIFY",
      };
    }
  }
  return null;
}

/* Match against knowledge keywords (not answer text) so paraphrases still land, without
   unrelated answer-word collisions. */
function keywordOverlap(q) {
  var words = q.replace(/[^a-z0-9: ]/g, " ").split(/\s+/).filter(function (w) { return w.length > 3 && COMMON.indexOf(w) < 0 && STOP.indexOf(w) < 0; });
  if (words.length < 2) return null;
  var best = null, bestHits = 1;
  KNOWLEDGE.forEach(function (k) {
    var blob = (k.keywords || []).join(" ").toLowerCase();
    var hits = words.filter(function (w) { return blob.indexOf(w.replace(/s$/, "")) > -1; }).length;
    if (hits > bestHits) { best = k; bestHits = hits; }
  });
  return best && bestHits >= 2 ? pack(best) : null;
}

var STOP = ["what", "which", "would", "could", "should", "there", "their", "about", "does", "have", "with", "your", "that", "this", "from", "into", "they", "them", "when", "where", "will", "just", "like", "want", "need", "know", "tell", "trupulse", "help"];

/* Matched keywords, weighted by length so specific phrases beat single words.
   Phrase keywords are boosted. Short keywords only count as whole words. */
function score(q, keywords) {
  return keywords.reduce(function (sum, k) {
    var stem = k.length > 4 && /s$/.test(k) ? k.slice(0, -1) : k;
    var found = k.length <= 4 && /^[a-z0-9]+$/.test(k) ? new RegExp("\\b" + k + "\\b").test(q) : q.indexOf(stem) > -1;
    if (!found) return sum;
    var weight = k.length;
    if (k.indexOf(" ") >= 0) weight *= 2;
    return sum + weight;
  }, 0);
}

/* Exported for engine.js so guided-flow interruptions and follow-ups can reuse intents. */
export function topicFromResult(result) {
  if (!result) return null;
  var id = result.id || "";
  if (/HRIS|WEB102|WEB147|WEB153|SITE_EDITIONS_COMBO|SITE_HRIS_FREQ/i.test(id) || /\bhris\b/i.test(result.answer || "")) return "hris";
  if (/WEB038|WEB039|WEB040|SITE_CAMPAIGN_COMPARE/i.test(id) || (result.route === "workflow" && /\bcampaign\b/i.test(result.answer || ""))) return "campaign";
  if (id) return id;
  return result.route || null;
}
