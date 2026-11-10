// The TruPulse assistant from the site design: a help-centre home, a conversation with
// quick replies, a typing beat and an emoji picker, and a list of past conversations.
// Ported from the design's script; it works directly on the markup ChatDock renders.
// Replies come from answerFor() in answer.js: intent rules, the site FAQ, then knowledge.js.

import { routeActions, routeFollowups } from "./knowledge";
import { answerFor } from "./answer";
import { looksLikeQuestion, validateFullName, validateOrganization, validateWorkEmail } from "@/lib/demoValidation";

export const ASK_EVENT = "tp-open-chat";

// Returns a cleanup function that removes every listener it added.
export function initChat(dock, { faq, openDemo }) {
  var listeners = [];
  function listen(target, type, fn) { target.addEventListener(type, fn); listeners.push([target, type, fn]); }
  function on(type, fn) { listen(type === ASK_EVENT ? window : document, type, fn); }

  var panel = dock.querySelector("[data-chat-panel]");
  var launch = dock.querySelector("[data-chat-launch]");
  var log = dock.querySelector("[data-chat-log]");
  var form = dock.querySelector("[data-chat-form]");
  var input = form.querySelector("input");
  var sendBtn = form.querySelector(".chat-send");
  var titleEl = dock.querySelector("[data-chat-title]");
  var subEl = dock.querySelector("[data-chat-sub]");
  var backBtn = dock.querySelector("[data-chat-back]");
  var menuBtn = dock.querySelector("[data-chat-menu]");
  var menu = dock.querySelector("[data-chat-menu-list]");
  var picker = dock.querySelector("[data-chat-picker]");
  var threadsEl = dock.querySelector("[data-chat-threads]");
  var emptyEl = dock.querySelector("[data-chat-empty]");
  var view = "chat";
  var threads = [];
  var current = null;

  /* ---------- the help centre is the site FAQ (same text as the home page) ---------- */
  var FAQ = faq;

  /* ---------- open / close ---------- */
  function setOpen(open) {
    panel.hidden = !open;
    launch.setAttribute("aria-expanded", String(open));
    launch.setAttribute("aria-label", open ? "Close chat" : "Open chat");
    launch.setAttribute("title", open ? "Close chat" : "Chat with TruPulse");
    if (open) setTimeout(function () { (view === "chat" ? input : (dock.querySelector("[data-chat-search]") || dock.querySelector("[data-chat-new]"))).focus(); }, 80);
    if (!open) closeMenu();
  }
  setOpen(false);                       /* closed until the icon is clicked */
  /* Opening goes straight into a conversation; reopening keeps the current one. */
  listen(launch, "click", function () {
    var opening = panel.hidden;
    if (opening && !current) startConversation();
    setOpen(opening);
  });
  listen(dock.querySelector("[data-chat-close]"), "click", function () { setOpen(false); launch.focus(); });
  on("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!picker.hidden) { picker.hidden = true; return; }
    if (!menu.hidden) { closeMenu(); return; }
    if (!panel.hidden) { setOpen(false); launch.focus(); }
  });

  /* ---------- views ---------- */
  function go(next) {
    view = next;
    [].forEach.call(dock.querySelectorAll(".chat-view"), function (v) { v.classList.toggle("is-on", v.dataset.view === next); });
    [].forEach.call(dock.querySelectorAll("[data-chat-tab]"), function (t) {
      t.classList.toggle("is-on", t.dataset.chatTab === next || (next === "chat" && t.dataset.chatTab === "messages"));
    });
    backBtn.hidden = next !== "chat";
    picker.hidden = true;
    closeMenu();
    if (next === "chat") {
      titleEl.textContent = "TruPulse AI Assistant";
      subEl.innerHTML = '<i class="chat-dot"></i>AI assistant';
      setTimeout(function () { input.focus(); }, 60);
    } else if (next === "messages") {
      titleEl.textContent = "Messages";
      subEl.innerHTML = '<i class="chat-dot"></i>Your conversations with us';
      renderThreads();
    } else {
      titleEl.textContent = "TruPulse AI Assistant";
      subEl.innerHTML = '<i class="chat-dot"></i>AI assistant';
    }
  }
  [].forEach.call(dock.querySelectorAll("[data-chat-tab]"), function (t) {
    listen(t, "click", function () { go(t.dataset.chatTab); });
  });
  listen(backBtn, "click", function () { go("messages"); });

  /* ---------- the conversation menu ---------- */
  function closeMenu() { menu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
  listen(menuBtn, "click", function () {
    menu.hidden = !menu.hidden;
    menuBtn.setAttribute("aria-expanded", String(!menu.hidden));
  });
  on("click", function (e) {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) closeMenu();
  });
  [].forEach.call(menu.querySelectorAll("[data-chat-action]"), function (b) {
    listen(b, "click", function () {
      closeMenu();
      if (b.dataset.chatAction === "new") startConversation();
      else if (b.dataset.chatAction === "clear") { if (current) { current.msgs = []; } log.innerHTML = ""; greet(); }
      else { setOpen(false); openDemo(null); }
    });
  });

  /* ---------- messages ---------- */
  function goHref(href) {
    if (!href) return;
    if (href.indexOf("mailto:") === 0) { window.location.href = href; return; }
    if (href.indexOf("/#") === 0) {
      var id = href.slice(2);
      if (window.location.pathname === "/" || window.location.pathname === "") {
        var el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        try { history.replaceState(null, "", "/#" + id); } catch (e) { window.location.hash = id; }
      } else {
        window.location.href = href;
      }
      return;
    }
    window.location.href = href;
  }
  function renderActions(route) {
    var actions = routeActions(route);
    if (!actions.length) return;
    var box = document.createElement("div");
    box.className = "chat-actions";
    actions.forEach(function (a) {
      var el;
      if (a.action === "demo") {
        el = document.createElement("button");
        el.type = "button";
        el.textContent = a.label;
        listen(el, "click", function () { setOpen(false); openDemo(null); });
      } else {
        el = document.createElement("a");
        el.href = a.href;
        el.textContent = a.label;
        if (a.newTab) el.target = "_blank";
        if (a.newTab || (a.href && a.href.indexOf("mailto:") === 0)) el.rel = "noopener noreferrer";
        listen(el, "click", function (e) {
          if (a.newTab || (a.href && a.href.indexOf("mailto:") === 0)) return;
          e.preventDefault();
          goHref(a.href);
        });
      }
      box.appendChild(el);
    });
    log.appendChild(box);
    log.scrollTop = log.scrollHeight;
  }
  function bubble(text, mine, route) {
    var wrap;
    if (mine) {
      wrap = document.createElement("p");
      wrap.className = "chat-msg me";
      wrap.textContent = text;
      log.appendChild(wrap);
    } else {
      var who = document.createElement("p");
      who.className = "chat-who";
      who.textContent = "TruPulse";
      var row = document.createElement("div");
      row.className = "chat-row";
      row.innerHTML = '<span class="chat-face" aria-hidden="true"><svg class="ico-bubble" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 4c7.2 0 13 4.6 13 10.3S23.2 24.6 16 24.6c-1.2 0-2.4-.1-3.5-.4l-6 3a.7.7 0 0 1-1-.8l1.2-4A9.6 9.6 0 0 1 3 14.3C3 8.6 8.8 4 16 4Z" fill="currentColor"/><circle cx="10.6" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)"/><circle cx="16" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)"/><circle cx="21.4" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)"/></svg></span>';
      wrap = document.createElement("p");
      wrap.className = "chat-msg bot";
      wrap.textContent = text;
      row.appendChild(wrap);
      log.appendChild(who);
      log.appendChild(row);
      if (route) renderActions(route);
    }
    if (current) current.msgs.push({ text: text, mine: !!mine, route: mine ? undefined : route });
    if (current) { current.last = text; current.at = Date.now(); }
    log.scrollTop = log.scrollHeight;
    return wrap;
  }
  function clearChips() {
    [].forEach.call(log.querySelectorAll(".chat-chips, .chat-try"), function (el) { el.remove(); });
  }
  function chips(list) {
    if (!list || !list.length) return;
    var box = document.createElement("div");
    box.className = "chat-chips";
    list.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = t;
      listen(b, "click", function () { clearChips(); say(t); });
      box.appendChild(b);
    });
    log.appendChild(box);
    log.scrollTop = log.scrollHeight;
  }
  function typing(then) {
    var row = document.createElement("div");
    row.className = "chat-row";
    row.innerHTML = '<span class="chat-face" aria-hidden="true"><svg class="ico-bubble" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 4c7.2 0 13 4.6 13 10.3S23.2 24.6 16 24.6c-1.2 0-2.4-.1-3.5-.4l-6 3a.7.7 0 0 1-1-.8l1.2-4A9.6 9.6 0 0 1 3 14.3C3 8.6 8.8 4 16 4Z" fill="currentColor"/><circle cx="10.6" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)"/><circle cx="16" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)"/><circle cx="21.4" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)"/></svg></span>' +
      '<p class="chat-msg bot chat-typing"><i></i><i></i><i></i></p>';
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    setTimeout(function () { row.remove(); then(); }, 850);
  }

  /* Replies come from answer.js (intent rules, the site FAQ, then knowledge.js). */
  function reply(text) { return answerFor(text, FAQ); }

  /* Booking a demo in the chat: ask for the same details as the demo form, one at a
     time, then open the calendar with them filled in. */
  var BOOK_INTENT = /\b(book|schedule|arrange|set up|get)\b.*\b(demo|call|meeting)\b|\b(demo|call) (please|for me)\b|^demo\??$/;
  var BOOK_STEPS = [
    { key: "name", ask: "Great, let’s book your demo. What’s your full name?", check: validateFullName },
    { key: "email", ask: "Thanks! What’s your email address?", check: validateWorkEmail },
    { key: "organization", ask: "Which organization are you with?", check: validateOrganization },
    { key: "explore", ask: "What would you like to explore in the demo? Tell us about your audience or what you want to learn—or type “skip”." },
  ];
  var booking = null;
  function bookStep(text) {
    var step = BOOK_STEPS[booking.at];
    // Mid-booking questions: answer them instead of saving the question as a field value.
    if (step.key !== "explore" && looksLikeQuestion(text) && !METHOD_CANCEL.test(text)) {
      var aside = reply(text);
      return aside.answer + "\n\nWhen you’re ready to continue booking: " + step.ask;
    }
    var problem = step.check && step.check(text);
    if (problem) return problem;
    booking.details[step.key] = step.key === "explore" && /^skip$/i.test(text) ? "" : text;
    booking.at += 1;
    if (booking.at < BOOK_STEPS.length) return BOOK_STEPS[booking.at].ask;
    var details = booking.details;
    booking = null;
    setTimeout(function () { setOpen(false); openDemo(details); }, 1200);
    return "Thanks, " + details.name.split(" ")[0] + "! Opening the calendar so you can pick a time—your details are already filled in.";
  }

  /* Method advisor: collect audience (team) and purpose, then recommend session types.
     Without this, “Which research method should I use?” falls through to a Campaign
     answer via word overlap. */
  var METHOD_INTENT = /\bwhich (research )?method\b|\bwhich (one|format|session|approach) should (i|we) use\b|\bwhich should (i|we) use\b|\bhelp (me|us) choose (a |the )?(research )?method\b|\bhelp (me|us) choose (a |the )?(format|session|approach)\b|\brecommend (a |an |the )?(research )?method\b|\brecommend (a |an |the )?(session|format|approach)\b|\b(survey|discussion|focus group).{0,40}\bor\b.{0,40}(survey|discussion|focus)/i;
  var METHOD_CANCEL = /^(cancel|stop|never ?mind)$/i;
  var methodPick = null;
  function recommendSessions(team, purpose) {
    var blob = (team + " " + purpose).toLowerCase();
    var survey = /\b(survey|questionnaire|scale|score|rating|compare|many people|large (group|audience)|quant|across|percentage|trend|benchmark)\b/.test(blob);
    var discussion = /\b(why|experience|depth|story|stories|interview|1:1|one[- ]on[- ]one|sensitive|confidential|independent|motivat|leaving|attrition|retention|personal)\b/.test(blob);
    var focus = /\b(focus group|discuss(ion)? together|react|concept|idea|workshop|brainstorm|group (chat|conversation|feedback)|one another)\b/.test(blob);
    var picks = [];
    if (discussion) picks.push("AI-led 1:1 discussions — useful when you need independent depth and people should not influence one another");
    if (survey) picks.push("Surveys — useful for structured feedback across an audience, with follow-ups to explore the reasons behind answers");
    if (focus) picks.push("AI-moderated focus groups — useful when interaction matters and people can build on one another’s views");
    if (!picks.length) {
      picks = [
        "AI-led 1:1 discussions — if you need independent depth from each person",
        "Surveys — if you want comparable answers across a wider audience",
        "AI-moderated focus groups — if hearing people discuss together would help",
      ];
    }
    var lead = "Based on hearing from " + team.trim() + " to understand “" + purpose.trim() + "”, I’d start with:";
    var more = picks.length === 1
      ? "You can add another session type later in a Campaign if you want to go wider or deeper."
      : "You can run these as related sessions in a Campaign if more than one fits.";
    return lead + "\n\n• " + picks.join("\n• ") + "\n\n" + more + " Want me to show sample reports, or book a demo to walk through a fit for your team?";
  }
  function methodStep(text) {
    if (methodPick.at === 0) {
      methodPick.team = text;
      methodPick.at = 1;
      return "Thanks. What do you want to understand or decide from hearing them?";
    }
    methodPick.purpose = text;
    var team = methodPick.team;
    var purpose = methodPick.purpose;
    methodPick = null;
    return recommendSessions(team, purpose);
  }
  function say(text) {
    clearChips();
    bubble(text, true);
    typing(function () {
      var result;
      var showFollowups = true;
      var q = text.toLowerCase();
      if (booking && METHOD_CANCEL.test(text)) {
        booking = null;
        result = { answer: "No problem—I’ve stopped the booking. What else would you like to know about TruPulse?", route: "answer" };
      } else if (booking) {
        showFollowups = false;
        result = { answer: bookStep(text), route: "answer" };
      } else if (methodPick && METHOD_CANCEL.test(text)) {
        methodPick = null;
        result = { answer: "No problem—I’ve stopped the method recommendation. What else would you like to know about TruPulse?", route: "answer" };
      } else if (methodPick) {
        var finishing = methodPick.at === 1;
        result = { answer: methodStep(text), route: finishing ? "product" : "clarify" };
        showFollowups = finishing;
        bubble(result.answer, false, result.route);
        if (finishing) chips(["Can I see a sample report?", "Book a demo", "How does the process work?"]);
        else chips(["Why people stay or leave", "What onboarding feels like", "Whether a new idea lands"]);
        return;
      } else if (BOOK_INTENT.test(q)) {
        booking = { at: 0, details: {} };
        showFollowups = false;
        result = { answer: BOOK_STEPS[0].ask + " (Type “cancel” anytime to stop.)", route: "answer" };
      } else if (METHOD_INTENT.test(q)) {
        methodPick = { at: 0, team: "", purpose: "" };
        result = {
          answer: "I can help you choose. First—whose feedback are you after (for example employees, customers, students, members, or another group)? (Type “cancel” anytime to stop.)",
          route: "clarify",
        };
        bubble(result.answer, false, result.route);
        chips(["Employees", "Customers", "Students", "Members"]);
        return;
      } else {
        result = reply(text);
      }
      bubble(result.answer, false, result.route);
      if (showFollowups) chips(routeFollowups(result.route));
    });
  }

  function greet() {
    bubble("Hi! I can explain TruPulse, help you choose a research method, or show you sample reports. What would you like to explore?", false);
    var tryL = document.createElement("p"); tryL.className = "chat-try"; tryL.textContent = "Try asking\u2026"; log.appendChild(tryL);
    chips(["How could TruPulse help my organization?", "Which should I use\u2014a survey, 1:1 discussion, or focus group?", "What findings and reports will I get?"]);
  }
  function startConversation() {
    current = { id: Date.now(), title: "TruPulse AI Assistant", msgs: [], last: "", at: Date.now() };
    threads.unshift(current);
    log.innerHTML = "";
    greet();
    go("chat");
  }
  [].forEach.call(dock.querySelectorAll("[data-chat-new]"), function (b) { listen(b, "click", startConversation); });
  /* "Ask our AI assistant" buttons elsewhere on the page (see openChat in lib/site.js). */
  on(ASK_EVENT, function (e) {
    setOpen(true);
    startConversation();
    var q = e.detail && e.detail.question;
    if (q) setTimeout(function () { say(q); }, 420);
  });

  function renderThreads() {
    threadsEl.innerHTML = "";
    emptyEl.hidden = threads.length > 0;
    threads.forEach(function (t) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.innerHTML = '<span><strong></strong><small></small></span><em></em><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      b.querySelector("strong").textContent = t.title;
      b.querySelector("small").textContent = t.last || "New conversation";
      b.querySelector("em").textContent = ago(t.at);
      listen(b, "click", function () { openThread(t); });
      li.appendChild(b);
      threadsEl.appendChild(li);
    });
  }
  function ago(ts) {
    var s = Math.round((Date.now() - ts) / 1000);
    if (s < 60) return "now";
    if (s < 3600) return Math.round(s / 60) + "m";
    return Math.round(s / 3600) + "h";
  }
  function openThread(t) {
    current = t;
    log.innerHTML = "";
    t.msgs.forEach(function (m) {
      var keep = current; current = null;      /* replay without re-recording */
      bubble(m.text, m.mine, m.route);
      current = keep;
    });
    go("chat");
  }

  /* ---------- composer ---------- */
  listen(input, "input", function () { sendBtn.disabled = !input.value.trim(); });
  listen(form, "submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    if (!current) startConversation();
    input.value = "";
    sendBtn.disabled = true;
    picker.hidden = true;
    say(text);
  });

  /* ---------- emoji ---------- */
  var EMOJI = [
    ["grinning face", "\uD83D\uDE00"], ["smile", "\uD83D\uDE03"], ["laughing", "\uD83D\uDE06"], ["wink", "\uD83D\uDE09"],
    ["blush", "\uD83D\uDE0A"], ["heart eyes", "\uD83D\uDE0D"], ["thinking face", "\uD83E\uDD14"], ["neutral", "\uD83D\uDE10"],
    ["thumbs up", "\uD83D\uDC4D"], ["thumbs down", "\uD83D\uDC4E"], ["clap hands", "\uD83D\uDC4F"], ["wave hand", "\uD83D\uDC4B"],
    ["ok hand", "\uD83D\uDC4C"], ["raising hands", "\uD83D\uDE4C"], ["pray thanks", "\uD83D\uDE4F"], ["muscle", "\uD83D\uDCAA"],
    ["heart", "\u2764\uFE0F"], ["sparkles", "\u2728"], ["star", "\u2B50"], ["fire", "\uD83D\uDD25"],
    ["rocket", "\uD83D\uDE80"], ["party", "\uD83C\uDF89"], ["bulb idea", "\uD83D\uDCA1"], ["chart data", "\uD83D\uDCCA"],
    ["memo notes", "\uD83D\uDCDD"], ["calendar", "\uD83D\uDCC5"], ["clock time", "\u23F0"], ["check", "\u2705"],
    ["question", "\u2753"], ["eyes", "\uD83D\uDC40"], ["speech chat", "\uD83D\uDCAC"], ["email", "\uD83D\uDCE7"],
    ["people team", "\uD83D\uDC65"], ["handshake", "\uD83E\uDD1D"], ["coffee", "\u2615"], ["hundred", "\uD83D\uDCAF"]
  ];
  var grid = dock.querySelector("[data-emoji-grid]");
  var emojiSearch = dock.querySelector("[data-emoji-search]");
  function drawEmoji(q) {
    grid.innerHTML = "";
    EMOJI.filter(function (e) { return !q || e[0].indexOf(q) > -1; }).forEach(function (e) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = e[1];
      b.setAttribute("aria-label", e[0]);
      listen(b, "click", function () {
        input.value += e[1];
        sendBtn.disabled = !input.value.trim();
        input.focus();
      });
      grid.appendChild(b);
    });
  }
  drawEmoji("");
  listen(emojiSearch, "input", function () { drawEmoji(emojiSearch.value.trim().toLowerCase()); });
  listen(dock.querySelector("[data-chat-emoji]"), "click", function () {
    picker.hidden = !picker.hidden;
    if (!picker.hidden) emojiSearch.focus();
  });

  /* ---------- help centre search ---------- */
  var search = dock.querySelector("[data-chat-search]");
  var results = dock.querySelector("[data-chat-results]");
  if (search) listen(search, "input", function () {
    var q = search.value.trim().toLowerCase();
    results.innerHTML = "";
    if (q.length < 2) return;
    var hits = FAQ.filter(function (f) { return (f.q + " " + f.a).toLowerCase().indexOf(q) > -1; }).slice(0, 5);
    if (!hits.length) {
      var none = document.createElement("li");
      none.className = "chat-no-hit";
      none.textContent = "Nothing matched — start a conversation and we will answer it.";
      results.appendChild(none);
      return;
    }
    hits.forEach(function (f) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.innerHTML = '<span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      b.querySelector("span").textContent = f.q;
      listen(b, "click", function () {
        if (!current) { current = { id: Date.now(), title: "TruPulse AI Assistant", msgs: [], last: "", at: Date.now() }; threads.unshift(current); log.innerHTML = ""; }
        go("chat");
        bubble(f.q, true);
        typing(function () { bubble(f.a, false, f.route || "answer"); });
        search.value = "";
        results.innerHTML = "";
      });
      li.appendChild(b);
      results.appendChild(li);
    });
  });

  return function () {
    listeners.forEach(function (l) { l[0].removeEventListener(l[1], l[2]); });
  };
}
