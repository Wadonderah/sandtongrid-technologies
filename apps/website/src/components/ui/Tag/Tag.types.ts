/******************************************************************************
File: Tag.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Tag component.

Responsibilities:
- Define visual variants.
- Define supported sizes.
- Forward native HTML span attributes.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/* =============================================================================
   Tag Variants
============================================================================= */

export type TagVariant = "filled" | "outlined" | "soft";

/* =============================================================================
   Tag Sizes
============================================================================= */

export type TagSize = "sm" | "md";

/* =============================================================================
   Tag Props
============================================================================= */

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Tag content.
   */
  children: ReactNode;

  /**
   * Visual appearance.
   *
   * @default "soft"
   */
  variant?: TagVariant;

  /**
   * Tag size.
   *
   * @default "md"
   */
  size?: TagSize;
}
