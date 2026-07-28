/**
 * =============================================================================
 * File: Footer.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Enterprise application footer.
 *
 * Responsibilities:
 * - Display company branding.
 * - Display grouped navigation.
 * - Display contact information.
 * - Display copyright.
 * =============================================================================
 */

import { Link } from "react-router-dom";

import siteConfig from "../../config/site";

import Container from "./Container";

/* =============================================================================
   Company Logo
============================================================================= */

import logo from "@/assets/logos/Sandtongrid Tech Logo Final png-02.png";

import styles from "./Footer.module.css";

const Footer = () => {
  const { companyLinks, serviceLinks, resourceLinks } = siteConfig.footer;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* ==========================================================
              Company Branding
          ========================================================== */}

          <div>
            <Link
              to="/"
              className={styles.logoLink}
              aria-label="Sandtongrid Technologies Home"
            >
              <img
                src={logo}
                alt="Sandtongrid Technologies"
                className={styles.logo}
              />
            </Link>

            <p className={styles.description}>
              {siteConfig.company.description}
            </p>
          </div>

          {/* ==========================================================
              Company Links
          ========================================================== */}

          <div>
            <h4 className={styles.heading}>Company</h4>

            <ul className={styles.list}>
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================================
              Services
          ========================================================== */}

          <div>
            <h4 className={styles.heading}>Services</h4>

            <ul className={styles.list}>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================================
              Contact
          ========================================================== */}

          <div>
            <h4 className={styles.heading}>Contact</h4>

            <p>{siteConfig.contact.email}</p>

            <p>{siteConfig.contact.phone}</p>

            <p>
              {siteConfig.address.city}, {siteConfig.address.country}
            </p>

            <ul className={styles.list}>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;