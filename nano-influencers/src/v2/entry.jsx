import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import V2Landing from "./pages/V2Landing.jsx";
import V2Register from "./pages/V2Register.jsx";
import V2Login from "./pages/V2Login.jsx";
import V2ForgotPassword from "./pages/V2ForgotPassword.jsx";

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
} else {
  // Keep all other authenticated/auth routes on the current implementation
  // while V2 is rebuilt screen-by-screen.
  import("../advertiser-app.jsx");
}
