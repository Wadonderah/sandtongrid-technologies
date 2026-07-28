/**
 * =============================================================================
 * File: NotFoundPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Professional 404 page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Display a user-friendly error page.
 * - Guide visitors back to valid pages.
 * - Maintain consistent branding.
 * =============================================================================
 */



import SEO from "../components/seo";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        canonical="/404"
      />

      <Section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <span className={styles.code}>404</span>

            <h1 className={styles.title}>Page Not Found</h1>

            <p className={styles.description}>
              Sorry, the page you're looking for doesn't exist or may have been
              moved. You can return to the homepage or contact our team for
              assistance.
            </p>

            <div className={styles.actions}>
              <Button to="/">
                Return Home
              </Button>

              <Button
                to="/contact"
                variant="outline"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NotFoundPage;