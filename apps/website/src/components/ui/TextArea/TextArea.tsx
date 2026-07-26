/******************************************************************************
File: TextArea.tsx
------------------------------------------------------------------------------
Purpose:
Reusable enterprise textarea component.
******************************************************************************/

import type { FC } from "react";

import styles from "./TextArea.module.css";

import type { TextAreaProps } from "./TextArea.types";

const TextArea: FC<TextAreaProps> = ({
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

      <textarea
        id={id}
        className={`${styles.textarea} ${error ? styles.error : ""}`}
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

export default TextArea;
