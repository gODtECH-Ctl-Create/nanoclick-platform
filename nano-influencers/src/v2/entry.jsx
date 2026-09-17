import React from "react";
import { createRoot } from "react-dom/client";

const pathname = window.location.pathname;

if (pathname === "/" || pathname === "") {
  const { default: V2Landing } = await import("./pages/V2Landing.jsx");
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <V2Landing />
    </React.StrictMode>,
  );
} else {
  // Keep all existing authenticated/auth routes on the current implementation
  // while V2 is rebuilt screen-by-screen.
  await import("../advertiser-app.jsx");
}
