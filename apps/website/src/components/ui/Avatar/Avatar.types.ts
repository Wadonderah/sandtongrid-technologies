/******************************************************************************
File: Avatar.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Avatar component.
******************************************************************************/

export interface AvatarProps {
  /**
   * Avatar image.
   */
  src?: string;

  /**
   * Accessible alt text.
   */
  alt: string;

  /**
   * Fallback initials.
   */
  initials?: string;

  /**
   * Avatar size.
   */
  size?: number;

  /**
   * Optional CSS class.
   */
  className?: string;
}
