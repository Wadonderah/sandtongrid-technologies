/******************************************************************************
File: Modal.types.ts
------------------------------------------------------------------------------
Purpose:
Type definitions for the reusable Modal component.
******************************************************************************/

import type { ReactNode } from "react";

export interface ModalProps {
  /**
   * Controls modal visibility.
   */
  isOpen: boolean;

  /**
   * Modal title.
   */
  title?: string;

  /**
   * Modal content.
   */
  children: ReactNode;

  /**
   * Called when closing the modal.
   */
  onClose: () => void;

  /**
   * Optional footer actions.
   */
  footer?: ReactNode;

  /**
   * Wrapper class.
   */
  className?: string;
}
