/**
 * =============================================================================
 * File: NotFound.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Display a user-friendly 404 page when a route cannot be found.
 *
 * Responsibilities:
 * - Inform users that the requested page does not exist.
 * - Provide navigation back to key areas of the website.
 * - Maintain a consistent enterprise look and feel.
 *
 * Notes:
 * - Presentation component only.
 * - No business logic.
 * =============================================================================
 */

import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Section from "../../components/ui/Section";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.code}>404</p>

          <h1 className={styles.title}>Page Not Found</h1>

          <p className={styles.description}>
            Sorry, the page you're looking for doesn't exist, has been moved, or
            the URL may be incorrect.
          </p>

          <div className={styles.actions}>
            <Link to="/" className={styles.primaryButton}>
              Back to Home
            </Link>

            <Link to="/services" className={styles.secondaryButton}>
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
