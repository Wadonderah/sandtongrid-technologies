/******************************************************************************
File: Select.tsx
------------------------------------------------------------------------------
Purpose:
Reusable enterprise select component.
******************************************************************************/

import type { FC } from "react";

import styles from "./Select.module.css";

import type { SelectProps } from "./Select.types";

const Select: FC<SelectProps> = ({
  label,
  helperText,
  error,
  options,
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

      <select
        id={id}
        className={`${styles.select} ${error ? styles.error : ""}`}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

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

export default Select;
