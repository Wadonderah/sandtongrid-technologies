/******************************************************************************
File: SectionTitle.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable SectionTitle component.
******************************************************************************/

import type { HTMLAttributes } from "react";

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;

  title: string;

  description?: string;

  centered?: boolean;

  className?: string;
}
