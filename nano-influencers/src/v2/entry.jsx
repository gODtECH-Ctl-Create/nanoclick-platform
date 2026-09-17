import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import V2Landing from "./pages/V2Landing.jsx";
import V2Register from "./pages/V2Register.jsx";
import V2Login from "./pages/V2Login.jsx";
import V2ForgotPassword from "./pages/V2ForgotPassword.jsx";
import V2Dashboard from "./pages/V2Dashboard.jsx";
import { V2FreeTrial, V2WeeklyGiveaway } from "./pages/V2DashboardExtras.jsx";
import { V2Wallet, V2WalletSuccess } from "./pages/V2Wallet.jsx";
import V2Settings from "./pages/V2Settings.jsx";
import V2HelpSupport from "./pages/V2HelpSupport.jsx";
import V2Campaign from "./pages/V2Campaign.jsx";
// Keep the comparison fixes in the V2 bundle so preview deployments always include them.
import "./pages/v2-dashboard-fixes.css";
import "./pages/v2-wallet-fixes.css";
import "./pages/v2-settings-fixes.css";
import {
  EmailVerificationPage,
  WhatsAppNumberPage,
  WhatsAppCodePage,
  VerificationSuccessPage,
} from "./pages/V2Verification.jsx";

const pathname = window.location.pathname;
const root = document.getElementById("root");

function renderV2(component) {
  createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>{component}</BrowserRouter>
    </React.StrictMode>,
  );
}

if (pathname === "/" || pathname === "") {
  renderV2(<V2Landing />);
} else if (pathname === "/register") {
  renderV2(<V2Register />);
} else if (pathname === "/login") {
  renderV2(<V2Login />);
} else if (pathname === "/forgot-password") {
  renderV2(<V2ForgotPassword />);
} else if (pathname === "/verify-email") {
  renderV2(<EmailVerificationPage />);
} else if (pathname === "/verify-whatsapp") {
  renderV2(<WhatsAppNumberPage />);
} else if (pathname === "/verify-whatsapp/code") {
  renderV2(<WhatsAppCodePage />);
} else if (pathname === "/verification-success") {
  renderV2(<VerificationSuccessPage />);
} else if (pathname === "/dashboard/free-trial") {
  renderV2(<V2FreeTrial />);
} else if (pathname === "/dashboard/giveaway") {
  renderV2(<V2WeeklyGiveaway />);
} else if (pathname === "/wallet/success") {
  renderV2(<V2WalletSuccess />);
} else if (pathname === "/wallet") {
  renderV2(<V2Wallet />);
} else if (pathname === "/settings") {
  renderV2(<V2Settings />);
} else if (pathname === "/help-support") {
  renderV2(<V2HelpSupport />);
} else if (pathname === "/campaigns") {
  renderV2(<V2Campaign />);
} else if (pathname === "/dashboard" || pathname === "/app") {
  renderV2(<V2Dashboard />);
} else {
  // Keep all other authenticated routes on the current implementation
  // while V2 is rebuilt screen-by-screen.
  import("../advertiser-app.jsx");
}
