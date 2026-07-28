/******************************************************************************
File: Accordion.tsx
------------------------------------------------------------------------------
Purpose:
Reusable enterprise Accordion component.

Responsibilities:
- Display expandable content panels.
- Support a single expanded item.
- Provide accessible keyboard navigation.
- Expose proper ARIA attributes.
- Remain reusable across the application.

Modification History
------------------------------------------------------------------------------
✓ Added accessibility support.
✓ Added ARIA attributes.
✓ Added unique IDs for screen readers.
✓ Improved semantic structure.
******************************************************************************/

import { useState } from "react";

import styles from "./Accordion.module.css";

import type { AccordionProps } from "./Accordion.types";

const Accordion = ({ items, className = "" }: AccordionProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setActiveItem((current) => (current === id ? null : id));
  };

  return (
    <div className={`${styles.accordion} ${className}`.trim()}>
      {items.map((item) => {
        const expanded = activeItem === item.id;

        const buttonId = `${item.id}-button`;

        const panelId = `${item.id}-panel`;

        return (
          <div key={item.id} className={styles.item}>
            {/* ======================================================
                Accordion Header
            ====================================================== */}

            <button
              id={buttonId}
              type="button"
              className={styles.header}
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              {item.title}
            </button>

            {/* ======================================================
                Accordion Content
            ====================================================== */}

            {expanded && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={styles.content}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;