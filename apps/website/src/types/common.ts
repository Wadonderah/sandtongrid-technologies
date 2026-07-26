/******************************************************************************
File: common.ts
------------------------------------------------------------------------------
Purpose:
Shared application types.
******************************************************************************/

import type { ReactNode } from "react";

export interface BaseProps {
  className?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface Id {
  id: string;
}
