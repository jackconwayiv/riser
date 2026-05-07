import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

/** Production: Django serves client routes at `/`, `/product`, … — basename must be unset.
 *  Dev: Vite uses `base: "/static/"`, so visiting `/static/…` only matches routes if basename matches. */
function getRouterBasename(): string | undefined {
  if (import.meta.env.PROD) return undefined;

  const raw = import.meta.env.BASE_URL;
  if (raw === "/" || raw === "./") return undefined;

  const base = raw.replace(/\/$/, "");
  if (
    typeof window !== "undefined" &&
    base &&
    window.location.pathname.startsWith(base)
  ) {
    return base;
  }
  return undefined;
}

const routerBasename = getRouterBasename();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
