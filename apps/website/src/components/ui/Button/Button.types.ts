/******************************************************************************
File: Button.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Button component.

Responsibilities:
- Define visual variants.
- Define size options.
- Support loading state.
- Support icons.
- Support rendering as button, anchor, or React Router Link.
******************************************************************************/

import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

export type ButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Render another component instead of <button>.
   *
   * Example:
   * as={Link}
   */
  as?: ElementType;

  /**
   * React Router destination.
   */
  to?: string;

  /**
   * Standard anchor href.
   */
  href?: string;

  children: ReactNode;

  variant?: ButtonVariant;

  size?: ButtonSize;

  fullWidth?: boolean;

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  className?: string;
}
