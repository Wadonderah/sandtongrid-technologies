/******************************************************************************
File: Logo.tsx
------------------------------------------------------------------------------
Purpose:
Displays the Sandtongrid Technologies logo in the site header.

Responsibilities:
- Link users back to the home page.
- Display the official company logo.
- Keep branding consistent across the application.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/logos/Sandtongrid Tech Logo Final png-02.png";

import styles from "./Logo.module.css";

import type { LogoProps } from "./Logo.types";

/* =============================================================================
   Component
============================================================================= */

const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${className}`.trim()}
      aria-label="Sandtongrid Technologies Home"
    >
      {/* ===============================================================
          Company Logo
      ================================================================ */}

      <img
        src={logo}
        alt="Sandtongrid Technologies"
        className={styles.image}
      />
    </Link>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default Logo;