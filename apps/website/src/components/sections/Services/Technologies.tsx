/******************************************************************************
File: Technologies.tsx
------------------------------------------------------------------------------
Purpose:
Display the technologies and platforms used by Sandtongrid Technologies.

Responsibilities:
- Render the Technologies section.
- Read all technology data from the centralized Services data source.
- Present technologies as capability badges.
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
  const { technologies } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
            Section Header
        ========================================================== */}

        <div className={styles.header}>
          <p className={styles.eyebrow}>Technology Stack</p>

          <h2 className={styles.title}>
            {technologies.title}
          </h2>

          <p className={styles.description}>
            We leverage modern cloud platforms, DevOps tooling and proven
            engineering technologies to build secure, scalable and
            production-ready solutions.
          </p>
        </div>

        {/* ==========================================================
            Technology Grid
        ========================================================== */}

        <div className={styles.grid}>
          {technologies.items.map((technology) => (
            <article
              key={technology}
              className={styles.card}
            >
              <span className={styles.badge}>
                {technology}
              </span>
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