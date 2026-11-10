// Shared demo-form / chat-booking checks for email and organization name.

export function validateWorkEmail(email) {
  const value = String(email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "That doesn’t look like an email address—could you check it?";
  }
  return "";
}

export function validateFullName(name) {
  const value = String(name || "").trim();
  if (looksLikeQuestion(value)) {
    return "That looks like a question. I’ll answer questions anytime—please enter your full name to continue booking.";
  }
  if (value.length < 2 || !/[a-zA-Z]/.test(value) || /^[a-zA-Z]$/.test(value)) {
    return "Please enter your full name.";
  }
  if (!/^[a-zA-Z][a-zA-Z\s'.-]{1,79}$/.test(value)) {
    return "Please enter your full name using letters.";
  }
  return "";
}

export function validateOrganization(org) {
  const value = String(org || "").trim();
  if (looksLikeQuestion(value)) {
    return "That looks like a question. Please enter your organization name to continue booking.";
  }
  if (value.length < 2 || /^.{1}$/.test(value) || !/[a-zA-Z0-9]/.test(value)) {
    return "Please enter a valid organization name (at least two characters).";
  }
  if (/^(n\/?a|na|none|test|asdf|xxx+)$/i.test(value)) {
    return "Please enter your organization name.";
  }
  return "";
}

export function looksLikeQuestion(text) {
  const value = String(text || "").trim();
  if (!value) return false;
  if (/\?/.test(value)) return true;
  return /^(what|whats|what's|how|why|when|where|who|which|can|could|would|should|do|does|did|is|are|am|will|may|might)\b/i.test(value);
}
