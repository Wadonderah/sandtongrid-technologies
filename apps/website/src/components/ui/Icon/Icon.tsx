/******************************************************************************
File: Icon.tsx
------------------------------------------------------------------------------
Purpose:
Reusable icon wrapper.
******************************************************************************/

import type { FC } from "react";

import styles from "./Icon.module.css";

import type { IconProps } from "./Icon.types";

const Icon: FC<IconProps> = ({
  children,
  size = 24,
  label,
  className = "",
}) => {
  return (
    <span
      className={`${styles.icon} ${className}`.trim()}
      style={{
        width: size,
        height: size,
      }}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {children}
    </span>
  );
};

export default Icon;
