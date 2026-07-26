/******************************************************************************
File: Card.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Card component.

Responsibilities:
- Define supported visual variants.
- Define spacing and border radius options.
- Forward native HTML div attributes.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/* =============================================================================
   Card Variants
============================================================================= */

export type CardVariant = "default" | "outlined" | "elevated";

/* =============================================================================
   Card Padding
============================================================================= */

export type CardPadding = "none" | "sm" | "md" | "lg";

/* =============================================================================
   Card Radius
============================================================================= */

export type CardRadius = "sm" | "md" | "lg" | "xl";

/* =============================================================================
   Card Props
============================================================================= */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card content.
   */
  children: ReactNode;

  /**
   * Visual appearance.
   *
   * @default "default"
   */
  variant?: CardVariant;

  /**
   * Internal spacing.
   *
   * @default "md"
   */
  padding?: CardPadding;

  /**
   * Border radius.
   *
   * @default "lg"
   */
  radius?: CardRadius;

  /**
   * Enable hover animation.
   *
   * @default false
   */
  hover?: boolean;

  /**
   * Stretch card height.
   *
   * @default false
   */
  fullHeight?: boolean;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
