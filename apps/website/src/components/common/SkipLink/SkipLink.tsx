/**
 * =============================================================================
 * File: SkipLink.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Keyboard-accessible skip navigation link.
 *
 * Responsibilities:
 * - Allow keyboard users to skip directly to the main content.
 * - Remain visually hidden until focused.
 * =============================================================================
 */

import ACCESSIBILITY from "../../../utils/accessibility/constants";

import styles from "./SkipLink.module.css";

const SkipLink = () => {
  return (
    <a
      href={`#${ACCESSIBILITY.SKIP_TO_CONTENT_ID}`}
      className={styles.skipLink}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
