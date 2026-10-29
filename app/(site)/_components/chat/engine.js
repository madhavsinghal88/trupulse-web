// The TruPulse assistant from the site design: a help-centre home, a conversation with
// quick replies, a typing beat and an emoji picker, and a list of past conversations.
// Ported from the design's script; it works directly on the markup ChatDock renders.
// Replies come from reply() below: the site FAQ, then the knowledge base in knowledge.js.

import { APP_HELP, FALLBACK, KNOWLEDGE } from "./knowledge";

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
  var view = "home";
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
  listen(launch, "click", function () { setOpen(panel.hidden); });
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
    backBtn.hidden = next === "home";
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
  listen(backBtn, "click", function () { go(view === "chat" && threads.length > 1 ? "messages" : "home"); });

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
      else { setOpen(false); openDemo(); }
    });
  });

  /* ---------- messages ---------- */
  function bubble(text, mine) {
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
    }
    if (current) current.msgs.push({ text: text, mine: !!mine });
    if (current) { current.last = text; current.at = Date.now(); }
    log.scrollTop = log.scrollHeight;
    return wrap;
  }
  function chips(list) {
    var box = document.createElement("div");
    box.className = "chat-chips";
    list.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = t;
      listen(b, "click", function () { box.remove(); var l = log.querySelector(".chat-try"); if (l) l.remove(); say(t); });
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

  /* Replies: the site FAQ first, then the website knowledge base (knowledge.js), which is
     drawn from the TruPulse User Guide but limited to what belongs on the public site.
     INTEGRATION POINT: swap this for an assistant endpoint to answer more freely. */
  var COMMON = ["does", "have", "much", "what", "with", "your", "that", "this", "from", "about", "same", "work", "when", "every", "used", "trupulse"];
  function reply(text) {
    var q = text.toLowerCase();
    var hit = FAQ.find(function (f) {
      var words = f.q.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ").filter(function (w) { return w.length > 3 && COMMON.indexOf(w) < 0; });
      return words.filter(function (w) { return q.indexOf(w) > -1; }).length >= 2;
    });
    if (hit) return hit.a;
    if (score(q, APP_HELP.keywords) > 0) return APP_HELP.answer;
    var best = null, bestScore = 0;
    KNOWLEDGE.forEach(function (k) {
      var sc = score(q, k.keywords);
      if (sc > bestScore) { best = k; bestScore = sc; }
    });
    return best ? best.answer : FALLBACK;
  }
  /* Matched keywords, weighted by length so specific phrases beat single words.
     Short keywords only count as whole words ("hi" is not in "this"). */
  function score(q, keywords) {
    return keywords.reduce(function (sum, k) {
      var found = k.length <= 4 && /^[a-z0-9]+$/.test(k) ? new RegExp("\\b" + k + "\\b").test(q) : q.indexOf(k) > -1;
      return found ? sum + k.length : sum;
    }, 0);
  }
  function say(text) {
    bubble(text, true);
    typing(function () { bubble(reply(text), false); });
  }

  function greet() {
    bubble("Hi! I can help you explore how TruPulse uses AI to create, conduct, and analyze surveys, 1:1 discussions, and focus groups\u2014with your team guiding the process.", false);
    bubble("What would you like to understand about your employees, customers, students, members, or community?", false);
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
      bubble(m.text, m.mine);
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
        typing(function () { bubble(f.a, false); });
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
