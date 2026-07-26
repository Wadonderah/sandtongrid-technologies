/******************************************************************************
File: Accordion.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Accordion component.
******************************************************************************/

import type { ReactNode } from "react";

export interface AccordionItem {
  id: string;

  title: string;

  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];

  className?: string;
}
