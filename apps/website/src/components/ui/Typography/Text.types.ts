/******************************************************************************
File: Text.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Text component.
******************************************************************************/

import type { HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;

  className?: string;
}
