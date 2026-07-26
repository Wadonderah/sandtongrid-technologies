/******************************************************************************
File: EmptyState.tsx
------------------------------------------------------------------------------
Purpose:
Reusable empty state component.
******************************************************************************/

import type { FC } from "react";

import styles from "./EmptyState.module.css";

import type { EmptyStateProps } from "./EmptyState.types";

const EmptyState: FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = "",
}) => {
  return (
    <section className={`${styles.wrapper} ${className}`.trim()}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}

      {action && <div className={styles.action}>{action}</div>}
    </section>
  );
};

export default EmptyState;
