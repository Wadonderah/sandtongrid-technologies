/******************************************************************************
File: Modal.tsx
------------------------------------------------------------------------------
Purpose:
Reusable enterprise modal dialog.
******************************************************************************/

import type { FC } from "react";

import styles from "./Modal.module.css";

import type { ModalProps } from "./Modal.types";

const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  children,
  footer,
  onClose,
  className = "",
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${className}`.trim()}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
        )}

        <div className={styles.body}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
};

export default Modal;
