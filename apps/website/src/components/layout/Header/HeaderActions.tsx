/******************************************************************************
File: HeaderActions.tsx
------------------------------------------------------------------------------
Purpose:
Header call-to-action area.

Responsibilities:
- Display the primary CTA.
- Navigate users to the Contact page.
******************************************************************************/

import type { FC } from "react";

import { Link } from "react-router-dom";

import type { HeaderActionsProps } from "./HeaderActions.types";

import styles from "./HeaderActions.module.css";

const HeaderActions: FC<HeaderActionsProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.actions} ${className}`.trim()}>
      <Link to="/contact" className={styles.button}>
        Contact Us
      </Link>
    </div>
  );
};

export default HeaderActions;
