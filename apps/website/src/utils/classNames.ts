/******************************************************************************
File: classNames.ts
------------------------------------------------------------------------------
Purpose:
Utility for safely joining CSS class names.

Responsibilities:
- Ignore falsy values.
- Produce clean class strings.
- Reduce duplicated component logic.
******************************************************************************/

/* =============================================================================
   Types
============================================================================= */

export type ClassValue = string | false | null | undefined;

/* =============================================================================
   classNames
============================================================================= */

/**
 * Joins CSS class names while ignoring falsy values.
 *
 * Example:
 *
 * classNames(
 *     styles.card,
 *     isActive && styles.active,
 *     className
 * );
 */

export function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
