/**
 * =============================================================================
 * File: Layout.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Shared application layout.
 *
 * Responsibilities:
 * - Render the Skip Link.
 * - Render the header.
 * - Render page content.
 * - Render the footer.
 * =============================================================================
 */

import type { ReactNode } from "react";

import SkipLink from "../common/SkipLink";

import ACCESSIBILITY from "../../utils/accessibility/constants";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <SkipLink />

      <Header />

      <main id={ACCESSIBILITY.SKIP_TO_CONTENT_ID} role="main">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
