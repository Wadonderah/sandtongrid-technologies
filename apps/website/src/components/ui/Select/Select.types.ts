/******************************************************************************
File: Select.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Select component.
******************************************************************************/

import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;

  helperText?: string;

  error?: string;

  fullWidth?: boolean;

  className?: string;

  options: SelectOption[];
}
