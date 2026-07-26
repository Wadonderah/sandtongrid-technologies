/**
 * =============================================================================
 * File: PageLoader.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Global loading component for lazy-loaded pages.
 *
 * Responsibilities:
 * - Display while React Suspense loads a page.
 * - Provide accessible loading feedback.
 * =============================================================================
 */

import styles from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div
      className={styles.loader}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className={styles.spinner} />

      <p>Loading...</p>
    </div>
  );
};

export default PageLoader;
