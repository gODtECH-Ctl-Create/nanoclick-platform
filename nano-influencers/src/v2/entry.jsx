import React from "react";
import { createRoot } from "react-dom/client";
import V2Landing from "./pages/V2Landing.jsx";
import V2Register from "./pages/V2Register.jsx";

const pathname = window.location.pathname;
const root = document.getElementById("root");

if (pathname === "/" || pathname === "") {
  createRoot(root).render(
    <React.StrictMode>
      <V2Landing />
    </React.StrictMode>,
  );
} else if (pathname === "/register") {
  createRoot(root).render(
    <React.StrictMode>
      <V2Register />
    </React.StrictMode>,
  );
} else {
  // Keep all other authenticated/auth routes on the current implementation
  // while V2 is rebuilt screen-by-screen.
  import("../advertiser-app.jsx");
}
