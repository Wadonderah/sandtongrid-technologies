/**
 * =============================================================================
 * File: NotFoundPage.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * 404 Not Found page for Sandtongrid Technologies.
 *
 * Responsibilities:
 * - Display a user-friendly error message.
 * - Provide navigation options back to valid pages.
 * =============================================================================
 */

import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        canonical="/404"
      />
      <h1>404 - Page Not Found</h1>
    </>
  );
};

export default NotFoundPage;
