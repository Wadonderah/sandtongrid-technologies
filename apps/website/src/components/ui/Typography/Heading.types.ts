/******************************************************************************
File: Heading.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Heading component.
******************************************************************************/

import type { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Additional CSS class.
   */
  className?: string;
}
