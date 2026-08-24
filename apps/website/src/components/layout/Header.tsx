/******************************************************************************
File: Header.tsx
------------------------------------------------------------------------------
Purpose:
Main header component with responsive navigation and mobile menu support.
******************************************************************************/

import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Header/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoPrimary}>Sandtongrid</span>
            <span className={styles.logoSecondary}>Technologies</span>
          </Link>
        </div>

        <div className={`${styles.center} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Navigation
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>

        <div className={`${styles.right} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <div className={styles.actions}>
            <Link to="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </div>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;