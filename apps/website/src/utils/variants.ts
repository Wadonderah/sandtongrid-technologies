/******************************************************************************
File: variants.ts
------------------------------------------------------------------------------
Purpose:
Reusable helper for resolving component variants.

Responsibilities:
- Return the correct mapped value.
- Support both string and numeric variants.
- Eliminate repeated lookup logic across components.
******************************************************************************/

/******************************************************************************
Resolve Variant
******************************************************************************/

export function resolveVariant<T extends PropertyKey, U>(
  value: T,
  mapping: Record<T, U>,
): U {
  return mapping[value];
}
