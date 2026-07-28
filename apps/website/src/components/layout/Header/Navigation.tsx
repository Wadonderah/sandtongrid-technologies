/******************************************************************************
File: Navigation.tsx
------------------------------------------------------------------------------
Purpose:
Primary site navigation.

Responsibilities:
- Render the main navigation.
- Generate links from the centralized route configuration.
- Notify the parent when a navigation link is clicked.
******************************************************************************/

import type { FC } from "react";

import { NavLink } from "react-router-dom";

import { appRoutes } from "../../../config/routes/routes";

import type { NavigationProps } from "./Navigation.types";

import styles from "./Navigation.module.css";

const Navigation: FC<NavigationProps> = ({
  className = "",
  onNavigate,
}) => {
  return (
    <ul className={`${styles.navigation} ${className}`.trim()}>
      {appRoutes
        .filter((route) => route.navigation)
        .map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default Navigation;