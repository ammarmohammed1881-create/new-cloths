import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toasts } from "./Toasts";
import { SupportBubble } from "./SupportBubble";

function useNavigationProgress() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? "auto" : "smooth" }));
    const timer = window.setTimeout(() => setVisible(false), 520);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  return visible;
}

export function Layout() {
  const location = useLocation();
  const progress = useNavigationProgress();

  return (
    <>
      <div className={`route-progress ${progress ? "active" : ""}`} aria-hidden="true"><span /></div>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={`${location.pathname}${location.search}`}
          className="page-transition-shell"
          initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <SupportBubble />
      <Toasts />
    </>
  );
}
