/******************************************************************************
File: Technologies.tsx
------------------------------------------------------------------------------
Purpose:
Display the technologies used by Sandtongrid Technologies.

Responsibilities:
- Render the Technologies section.
- Read all technology data from the centralized Services data source.
- Keep UI separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./Technologies.module.css";

import type { TechnologiesProps } from "./Technologies.types";

/* =============================================================================
   Component
============================================================================= */

const Technologies: FC<TechnologiesProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read data from the centralized Services data source.
    ------------------------------------------------------------------------- */

  const { technologies } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Heading
                ========================================================== */}

        <h2>{technologies.title}</h2>

        {/* ==========================================================
                    Technology Cards
                ========================================================== */}

        <div className={styles.grid}>
          {technologies.items.map((technology) => (
            <article key={technology} className={styles.card}>
              {technology}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default Technologies;
