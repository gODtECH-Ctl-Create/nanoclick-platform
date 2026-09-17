import React from "react";
import { createRoot } from "react-dom/client";
import V2Landing from "./pages/V2Landing.jsx";

const pathname = window.location.pathname;

if (pathname === "/" || pathname === "") {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <V2Landing />
    </React.StrictMode>,
  );
} else {
  // Keep all existing authenticated/auth routes on the current implementation
  // while V2 is rebuilt screen-by-screen.
  import("../advertiser-app.jsx");
}
