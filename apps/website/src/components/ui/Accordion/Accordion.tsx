/******************************************************************************
File: Accordion.tsx
------------------------------------------------------------------------------
Purpose:
Reusable Accordion component.
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
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <button
            type="button"
            className={styles.header}
            onClick={() => toggle(item.id)}
          >
            {item.title}
          </button>

          {activeItem === item.id && (
            <div className={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
