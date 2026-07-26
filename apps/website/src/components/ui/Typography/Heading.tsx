/**
 * =============================================================================
 * File: Heading.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Reusable heading component.
 *
 * Responsibilities:
 * - Render semantic headings.
 * - Keep typography consistent.
 * =============================================================================
 */

import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};

export default Heading;
