/**
 * =============================================================================
 * File: scrollToSection.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Smooth scrolling utility.
 *
 * Responsibilities:
 * - Scroll to a section.
 * - Respect sticky header.
 * =============================================================================
 */

const HEADER_OFFSET = 90;

const scrollToSection = (sectionId: string) => {
  requestAnimationFrame(() => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const top =
      element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
};

export default scrollToSection;
