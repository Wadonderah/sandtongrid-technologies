/******************************************************************************
File: Button.tsx
------------------------------------------------------------------------------
Purpose:
Reusable Button component.

Responsibilities:
- Render a native button by default.
- Automatically render a React Router Link when "to" is provided.
- Automatically render an anchor when "href" is provided.
- Support loading state.
- Support variants and sizes.
******************************************************************************/

import type { FC } from "react";

import { Link } from "react-router-dom";

import styles from "./Button.module.css";

import type { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({
  as,
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...rest
}) => {
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
    ghost: styles.ghost,
    danger: styles.danger,
  }[variant];

  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  }[size];

  const classes = [
    styles.button,
    variantClass,
    sizeClass,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = loading ? (
    <span className={styles.loader} />
  ) : (
    <>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </>
  );

  /**
   * ==============================================================
   * React Router Link
   * ==============================================================
   */
  if (to && !as) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  /**
   * ==============================================================
   * External Link
   * ==============================================================
   */
  if (href && !as) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  /**
   * ==============================================================
   * Custom Component
   * ==============================================================
   */
  if (as) {
    const Component = as;

    return (
      <Component className={classes} to={to} href={href} {...rest}>
        {content}
      </Component>
    );
  }

  /**
   * ==============================================================
   * Native Button
   * ==============================================================
   */
  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
};

export default Button;
