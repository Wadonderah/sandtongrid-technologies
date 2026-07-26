/**
 * =============================================================================
 * File: useScrollRestoration.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Automatically scroll to a stored section after navigation.
 * =============================================================================
 */

import { useEffect } from "react";

import scrollToSection from "./scrollToSection";

const useScrollRestoration = () => {
  useEffect(() => {
    const target = sessionStorage.getItem("scroll-target");

    if (!target) {
      return;
    }

    sessionStorage.removeItem("scroll-target");

    setTimeout(() => {
      scrollToSection(target);
    }, 100);
  }, []);
};

export default useScrollRestoration;
