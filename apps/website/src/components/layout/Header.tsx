/**
 * =============================================================================
 * File: Header.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Enterprise navigation header.
 *
 * Responsibilities:
 * - Display company branding.
 * - Display navigation links.
 * - Display the primary CTA.
 * - Remain sticky while scrolling.
 * =============================================================================
 */

import ACCESSIBILITY from "../../utils/accessibility/constants";

import Container from "./Container";

import Logo from "./Header/Logo";
import Navigation from "./Header/Navigation";
import HeaderActions from "./Header/HeaderActions";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      className={styles.header}
      aria-label={ACCESSIBILITY.ARIA.SITE_HEADER}
    >
      <Container>
        <nav
          className={styles.navigation}
          aria-label={ACCESSIBILITY.ARIA.MAIN_NAVIGATION}
        >
          <div className={styles.left}>
            <Logo />
          </div>

          <div className={styles.center}>
            <Navigation />
          </div>

          <div className={styles.right}>
            <HeaderActions />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
