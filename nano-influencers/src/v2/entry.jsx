import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import V2Landing from "./pages/V2Landing.jsx";
import V2Register from "./pages/V2Register.jsx";
import V2Login from "./pages/V2Login.jsx";
import V2ForgotPassword from "./pages/V2ForgotPassword.jsx";
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
} else {
  // Keep all other authenticated/auth routes on the current implementation
  // while V2 is rebuilt screen-by-screen.
  import("../advertiser-app.jsx");
}
