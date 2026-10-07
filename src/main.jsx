import React from "react";
import ReactDOM from "react-dom/client";
import "./organic-tokens.css";
import "./App.css";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build ships pre-rendered HTML (scripts/prerender.js), so
// hydrate it; the dev server serves an empty #root, so render from scratch.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
