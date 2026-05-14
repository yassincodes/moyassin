import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Portfolio from "./App.jsx";
import PitchFrame from "./PitchFrame.jsx";

function normalizePathname(pathname) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (base && pathname.startsWith(base)) {
    const rest = pathname.slice(base.length) || "/";
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname || "/";
}

function Root() {
  const [path, setPath] = useState(() =>
    typeof window !== "undefined" ? normalizePathname(window.location.pathname) : "/"
  );

  useEffect(() => {
    const onPop = () => setPath(normalizePathname(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (path === "/pitch") {
    return <PitchFrame />;
  }
  return <Portfolio />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
