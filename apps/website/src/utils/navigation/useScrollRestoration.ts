/**
 * =============================================================================
 * File: useScrollRestoration.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Automatically scroll to a stored section after navigation.
 * =============================================================================
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import scrollToSection from "./scrollToSection";

const useScrollRestoration = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const target = sessionStorage.getItem("scroll-target");

    if (target) {
      sessionStorage.removeItem("scroll-target");
      setTimeout(() => {
        scrollToSection(target);
      }, 100);
      return;
    }

    if (hash) {
      const sectionId = hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      return;
    }

    // Reset scroll position to the top of the new page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash, key]);
};

export default useScrollRestoration;
