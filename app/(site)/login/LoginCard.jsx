"use client";

import { useRef, useState } from "react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [resetting, setResetting] = useState(false);
  const [resetFor, setResetFor] = useState("");
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
        onSubmit={(event) => {
          event.preventDefault();
          // INTEGRATION POINT: replace with a real call to the TruPulse auth service.
          setMessage("Sign-in is not connected yet. Email support@trupulse.ai for workspace access.");
        }}
      >
        <label>Email address<input ref={signInEmail} type="email" autoComplete="email" placeholder="Registered email address" required /></label>
        <label>
          Password
          <span className="password-field">
            <input type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Password" required />
            <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </span>
        </label>
        <button className="btn login-submit" type="submit">Sign in</button>
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
          onSubmit={(event) => {
            event.preventDefault();
            const value = resetEmail.current.value.trim();
            if (value) setResetFor(value);
          }}
        >
          <label>Email address<input ref={resetEmail} type="email" autoComplete="email" placeholder="Registered email address" required /></label>
          <button className="btn login-submit" type="submit">Send reset link</button>
          <a href="#" onClick={(event) => { event.preventDefault(); showReset(false); }}>
            <span className="back-arrow" aria-hidden="true">←</span> Back to sign in
          </a>
        </form>
        {/* No mail is sent from this page; the reader is told exactly that, and given
            the address to write to, rather than left waiting. */}
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
