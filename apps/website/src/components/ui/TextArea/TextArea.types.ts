/******************************************************************************
File: TextArea.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable TextArea component.
******************************************************************************/

import type { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;

  helperText?: string;

  error?: string;

  fullWidth?: boolean;

  className?: string;
}
