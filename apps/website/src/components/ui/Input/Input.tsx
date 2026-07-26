/******************************************************************************
File: Input.tsx
------------------------------------------------------------------------------
Purpose:
Reusable enterprise text input component.
******************************************************************************/

import type { FC } from "react";

import styles from "./Input.module.css";

import type { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({
  label,
  helperText,
  error,
  fullWidth = true,
  className = "",
  id,
  ...props
}) => {
  return (
    <div
      className={`${styles.wrapper} ${
        fullWidth ? styles.fullWidth : ""
      } ${className}`.trim()}
    >
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={`${styles.input} ${error ? styles.error : ""}`}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {!error && helperText && (
        <small className={styles.helperText}>{helperText}</small>
      )}

      {error && (
        <small className={styles.errorText} role="alert">
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
