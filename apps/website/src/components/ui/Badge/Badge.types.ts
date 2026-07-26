/******************************************************************************
File: Badge.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Badge component.

Responsibilities:
- Define badge variants.
- Define badge sizes.
- Forward native HTML span attributes.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/* =============================================================================
   Badge Variants
============================================================================= */

export type BadgeVariant =
  "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";

/* =============================================================================
   Badge Sizes
============================================================================= */

export type BadgeSize = "sm" | "md";

/* =============================================================================
   Badge Props
============================================================================= */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge content.
   */
  children: ReactNode;

  /**
   * Visual appearance.
   *
   * @default "primary"
   */
  variant?: BadgeVariant;

  /**
   * Badge size.
   *
   * @default "md"
   */
  size?: BadgeSize;
}
