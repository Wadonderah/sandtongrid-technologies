/******************************************************************************
File: Section.tsx
------------------------------------------------------------------------------
Purpose:
Reusable layout section.

Responsibilities:
- Control vertical spacing.
- Support spacing variants.
- Wrap logical page sections.
******************************************************************************/

import type { FC } from "react";

import styles from "./Section.module.css";

import type { SectionProps } from "./Section.types";

import { classNames, resolveVariant } from "../../../utils";

const Section: FC<SectionProps> = ({
  children,
  size = "lg",
  id,
  className = "",
}) => {
  /**************************************************************************
    Resolve spacing variant.
    **************************************************************************/

  const sizeClass = resolveVariant(size, {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
    xl: styles.xl,
  });

  /**************************************************************************
    Render Section.
    **************************************************************************/

  return (
    <section
      id={id}
      className={classNames(styles.section, sizeClass, className)}
    >
      {children}
    </section>
  );
};

export default Section;
