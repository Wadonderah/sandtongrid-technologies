/******************************************************************************
File: navigation.ts
------------------------------------------------------------------------------
Purpose:
Navigation-related types.
******************************************************************************/

export interface NavigationItem {
  label: string;

  href: string;

  external?: boolean;
}
