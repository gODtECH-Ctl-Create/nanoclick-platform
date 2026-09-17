import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./v2-auth.css";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/00dc4b37-07e6-4bc5-8852-628db20bb03d.svg",
  google: "https://www.figma.com/api/mcp/asset/483355a7-04f4-42f3-a575-de33f77666af.svg",
  facebook: "https://www.figma.com/api/mcp/asset/ef4d1f1c-9e14-4fce-9797-1045e046e093.svg",
  eyeSlash: "https://www.figma.com/api/mcp/asset/ebc78009-5d30-4723-b5e9-39358506b5e7.svg",
};

function AuthBrand() {
  return (
    <Link className="v2-auth-brand" to="/" aria-label="The Nano Influencers home">
      <img src={assets.brand} alt="" />
      <span>The Nano Influencers</span>
    </Link>
  );
}

function OAuthButton({ icon, children }) {
  return (
    <button className="v2-auth-oauth-button" type="button">
      <img src={icon} alt="" />
      <span>{children}</span>
    </button>
  );
}

export default function V2Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <main className="ni-v2 v2-auth-page v2-auth-login">
      <section className="v2-auth-card" aria-labelledby="v2-login-title">
        <header className="v2-auth-header">
          <AuthBrand />
          <div className="v2-auth-heading-copy">
            <h1 id="v2-login-title">Welcome back</h1>
            <p>Sign in to your access your account.</p>
          </div>
        </header>

        <div className="v2-auth-oauth">
          <OAuthButton icon={assets.google}>Continue with Google</OAuthButton>
          <OAuthButton icon={assets.facebook}>Continue with Facebook</OAuthButton>
        </div>

        <div className="v2-auth-divider" aria-hidden="true">
          <i />
          <span>or sign in with email</span>
          <i />
        </div>

        <form className="v2-auth-form" onSubmit={(event) => event.preventDefault()}>
          <label className="v2-auth-field">
            <span className="v2-auth-field-label">Email</span>
            <span className="v2-auth-input-shell">
              <input type="email" placeholder="you@example.com" autoComplete="email" />
            </span>
          </label>

          <label className="v2-auth-field">
            <span className="v2-auth-password-row">
              <span>Password</span>
              <Link to="/forgot-password">Forgot password?</Link>
            </span>
            <span className="v2-auth-input-shell">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Min. 8 characters"
                autoComplete="current-password"
              />
              <button
                className="v2-auth-eye"
                type="button"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                onClick={() => setPasswordVisible(value => !value)}
              >
                <img src={assets.eyeSlash} alt="" />
              </button>
            </span>
          </label>

          <button className="v2-auth-submit" type="submit">Sign in</button>
        </form>

        <p className="v2-auth-switch">
          <span>Don&apos;t have an account?</span>
          <Link to="/register">Sign up</Link>
        </p>
      </section>
    </main>
  );
}
