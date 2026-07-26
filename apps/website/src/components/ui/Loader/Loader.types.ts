/******************************************************************************
File: Loader.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Loader component.
******************************************************************************/

export interface LoaderProps {
  /**
   * Loader size in pixels.
   */
  size?: number;

  /**
   * Optional loading text.
   */
  text?: string;

  /**
   * Wrapper class.
   */
  className?: string;
}
