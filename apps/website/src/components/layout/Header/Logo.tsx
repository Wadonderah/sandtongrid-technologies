/******************************************************************************
File: Logo.tsx
------------------------------------------------------------------------------
Purpose:
Displays the Sandtongrid Technologies logo in the site header.

Responsibilities:
- Link back to the home page.
- Display the company branding.
******************************************************************************/

import type { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

import type { LogoProps } from "./Logo.types";

const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${className}`.trim()}
      aria-label="Sandtongrid Technologies Home"
    >
      <div className={styles.text}>
        <span className={styles.brand}>Sandtongrid</span>

        <span className={styles.company}>Technologies</span>
      </div>
    </Link>
  );
};

export default Logo;
