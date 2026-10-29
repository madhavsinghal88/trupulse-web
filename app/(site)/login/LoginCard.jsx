"use client";

import { useRef, useState } from "react";

const API_URL = "https://api.trupulse.ai";
const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://dashboard.trupulse.ai";

async function postJson(path, body) {
  const res = await fetch(API_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong. Please try again.");
  return json.data;
}

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [resetting, setResetting] = useState(false);
  const [resetFor, setResetFor] = useState("");
  const [busy, setBusy] = useState(false);
  const resetEmail = useRef(null);
  const signInEmail = useRef(null);

  function showReset(reset) {
    setResetting(reset);
    setResetFor("");
    setTimeout(() => (reset ? resetEmail : signInEmail).current?.focus(), 30);
  }

  return (
    <section className="login-card" aria-labelledby="login-title">
      <h1 id="login-title" hidden={resetting}>Sign in to TruPulse</h1>
      <form
        className="login-form"
        hidden={resetting}
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          setBusy(true);
          setMessage("");
          try {
            const { user } = await postJson("/api/auth/login", {
              email: form.email.value.trim(),
              password: form.password.value,
            });
            // The dashboard keeps its session in its own localStorage, so the session is
            // handed over in the URL fragment (never sent to a server) for it to store.
            window.location.assign(`${DASHBOARD_URL}/#session=${encodeURIComponent(JSON.stringify(user))}`);
          } catch (error) {
            setMessage(error.message);
            setBusy(false);
          }
        }}
      >
        <label>Email address<input ref={signInEmail} name="email" type="email" autoComplete="email" placeholder="Registered email address" required /></label>
        <label>
          Password
          <span className="password-field">
            <input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Password" required />
            <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </span>
        </label>
        <button className="btn login-submit" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        <a href="#" onClick={(event) => { event.preventDefault(); showReset(true); }}>Forgot password?</a>
        <p className="login-message" role="status">{message}</p>
      </form>
      <div className="login-reset" hidden={!resetting}>
        <p className="eyebrow">Password help</p>
        <h2>Reset your password</h2>
        <p className="login-reset-lead">Enter the email address you use for TruPulse and we will send you a link to set a new password.</p>
        <form
          className="login-form"
          hidden={Boolean(resetFor)}
          onSubmit={async (event) => {
            event.preventDefault();
            const value = resetEmail.current.value.trim();
            if (!value) return;
            setBusy(true);
            // The outcome is not shown, so the page never reveals whether an address is registered.
            await postJson("/api/auth/forgot", { email: value }).catch(() => {});
            setBusy(false);
            setResetFor(value);
          }}
        >
          <label>Email address<input ref={resetEmail} type="email" autoComplete="email" placeholder="Registered email address" required /></label>
          <button className="btn login-submit" type="submit" disabled={busy}>Send reset link</button>
          <a href="#" onClick={(event) => { event.preventDefault(); showReset(false); }}>
            <span className="back-arrow" aria-hidden="true">←</span> Back to sign in
          </a>
        </form>
        <p className="login-message login-reset-message" role="status" hidden={!resetFor}>
          {resetFor && (
            <>
              If <strong>{resetFor}</strong> is registered with TruPulse, a reset link is on its way.
              Still stuck? Write to <a href="mailto:support@trupulse.ai">support@trupulse.ai</a>.
              <button className="btn outline login-reset-again" type="button" onClick={() => showReset(false)}>Back to sign in</button>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
