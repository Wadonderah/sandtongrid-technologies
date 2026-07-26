/******************************************************************************
File: Icon.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Icon component.
******************************************************************************/

import type { ReactNode } from "react";

export interface IconProps {
  /**
   * SVG or icon element.
   */
  children: ReactNode;

  /**
   * Icon size.
   */
  size?: number;

  /**
   * Accessible label.
   */
  label?: string;

  /**
   * Optional CSS class.
   */
  className?: string;
}
