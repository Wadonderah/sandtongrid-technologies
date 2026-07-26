/******************************************************************************
File: Stack.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Stack component.

Responsibilities:
- Define spacing variants.
- Define layout direction.
- Define alignment and justification.
- Forward native HTML div attributes.
******************************************************************************/

import type { HTMLAttributes, ReactNode } from "react";

/******************************************************************************
Stack Direction
******************************************************************************/

export type StackDirection = "vertical" | "horizontal";

/******************************************************************************
Stack Spacing
******************************************************************************/

export type StackSpacing = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

/******************************************************************************
Cross-axis Alignment
******************************************************************************/

export type StackAlignment = "start" | "center" | "end" | "stretch";

/******************************************************************************
Main-axis Justification
******************************************************************************/

export type StackJustify =
  "start" | "center" | "end" | "between" | "around" | "evenly";

/******************************************************************************
Stack Props
******************************************************************************/

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content rendered inside the stack.
   */
  children: ReactNode;

  /**
   * Stack direction.
   *
   * @default "vertical"
   */
  direction?: StackDirection;

  /**
   * Space between children.
   *
   * @default "lg"
   */
  spacing?: StackSpacing;

  /**
   * Cross-axis alignment.
   *
   * @default "stretch"
   */
  align?: StackAlignment;

  /**
   * Main-axis justification.
   *
   * @default "start"
   */
  justify?: StackJustify;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
