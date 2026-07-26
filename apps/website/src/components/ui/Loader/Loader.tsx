/******************************************************************************
File: Loader.tsx
------------------------------------------------------------------------------
Purpose:
Reusable loading spinner.
******************************************************************************/

import type { FC } from "react";

import styles from "./Loader.module.css";

import type { LoaderProps } from "./Loader.types";

const Loader: FC<LoaderProps> = ({ size = 40, text, className = "" }) => {
  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <div
        className={styles.spinner}
        style={{
          width: size,
          height: size,
        }}
        aria-label="Loading"
      />

      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default Loader;
