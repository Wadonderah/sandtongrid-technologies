/******************************************************************************
File: Container.tsx
------------------------------------------------------------------------------
Purpose:
Reusable layout container.

Responsibilities:
- Constrain content width.
- Center content horizontally.
- Apply consistent horizontal padding.
******************************************************************************/

import type { FC } from "react";

/******************************************************************************
Internal Imports
******************************************************************************/

import styles from "./Container.module.css";

import type { ContainerProps } from "./Container.types";

import { classNames, resolveVariant } from "../../../utils";

/******************************************************************************
Container Component
******************************************************************************/

const Container: FC<ContainerProps> = ({
  children,
  size = "xl",
  className = "",
}) => {
  /**************************************************************************
    Resolve width variant.
    **************************************************************************/

  const sizeClass = resolveVariant(size, {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
    xl: styles.xl,
    "2xl": styles.twoXl,
  });

  /**************************************************************************
    Render Container.
    **************************************************************************/

  return (
    <div className={classNames(styles.container, sizeClass, className)}>
      {children}
    </div>
  );
};

export default Container;
