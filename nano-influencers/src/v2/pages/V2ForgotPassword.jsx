import React from "react";
import { Link } from "react-router-dom";
import "./v2-auth.css";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/192a38cf-3a98-4ebd-b396-bdc70903d7ba.svg",
};

function AuthBrand() {
  return (
    <Link className="v2-auth-brand" to="/" aria-label="The Nano Influencers home">
      <img src={assets.brand} alt="" />
      <span>The Nano Influencers</span>
    </Link>
  );
}

export default function V2ForgotPassword() {
  return (
    <main className="ni-v2 v2-auth-page v2-auth-forgot">
      <section className="v2-auth-card" aria-labelledby="v2-forgot-title">
        <header className="v2-auth-header">
          <AuthBrand />
          <div className="v2-auth-heading-copy">
            <h1 id="v2-forgot-title">Forgot password?</h1>
            <p>Enter your email address and we&apos;ll send you a verification code.</p>
          </div>
        </header>

        <form className="v2-auth-form" onSubmit={(event) => event.preventDefault()}>
          <label className="v2-auth-field">
            <span className="v2-auth-field-label">Email</span>
            <span className="v2-auth-input-shell">
              <input type="email" placeholder="you@example.com" autoComplete="email" />
            </span>
          </label>

          <button className="v2-auth-submit" type="submit">Send verification code</button>
        </form>

        <p className="v2-auth-switch">
          <span>Remember your password?</span>
          <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}
