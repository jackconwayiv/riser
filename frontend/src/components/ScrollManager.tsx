import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      let tries = 0;
      const maxTries = 8;

      const scrollToHashTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ block: "start", behavior: "auto" });
          return;
        }
        if (tries < maxTries) {
          tries += 1;
          window.setTimeout(scrollToHashTarget, 30);
        }
      };

      scrollToHashTarget();
      return;
    }

    if (navigationType === "POP") return;

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, navigationType, location.pathname]);

  return null;
}
