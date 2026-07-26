/******************************************************************************
File: Card.tsx
------------------------------------------------------------------------------
Purpose:
Reusable Card component.

Responsibilities:
- Display grouped content.
- Support multiple visual variants.
- Support reusable spacing and radius.
- Forward native HTML attributes.
******************************************************************************/

import type { FC } from "react";

import styles from "./Card.module.css";

import type { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  radius = "lg",
  hover = false,
  fullHeight = false,
  className = "",
  ...rest
}) => {
  const variantClass = {
    default: styles.default,
    outlined: styles.outlined,
    elevated: styles.elevated,
  }[variant];

  const paddingClass = {
    none: styles.paddingNone,
    sm: styles.paddingSm,
    md: styles.paddingMd,
    lg: styles.paddingLg,
  }[padding];

  const radiusClass = {
    sm: styles.radiusSm,
    md: styles.radiusMd,
    lg: styles.radiusLg,
    xl: styles.radiusXl,
  }[radius];

  return (
    <div
      className={[
        styles.card,
        variantClass,
        paddingClass,
        radiusClass,
        hover && styles.hover,
        fullHeight && styles.fullHeight,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
