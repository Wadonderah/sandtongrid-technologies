/******************************************************************************
File: Input.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Input component.
******************************************************************************/

import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label displayed above the input.
   */
  label?: string;

  /**
   * Optional helper text displayed below the input.
   */
  helperText?: string;

  /**
   * Validation error message.
   */
  error?: string;

  /**
   * Makes the input take the full available width.
   */
  fullWidth?: boolean;

  /**
   * Wrapper CSS class.
   */
  className?: string;
}
