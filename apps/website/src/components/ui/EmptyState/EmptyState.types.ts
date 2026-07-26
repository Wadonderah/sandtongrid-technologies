/******************************************************************************
File: EmptyState.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable EmptyState component.
******************************************************************************/

import type { ReactNode } from "react";

export interface EmptyStateProps {
  /**
   * Main heading.
   */
  title: string;

  /**
   * Supporting description.
   */
  description?: string;

  /**
   * Optional illustration or icon.
   */
  icon?: ReactNode;

  /**
   * Optional action button.
   */
  action?: ReactNode;

  /**
   * Wrapper class.
   */
  className?: string;
}
