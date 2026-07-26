/******************************************************************************
File: IndustriesList.tsx
------------------------------------------------------------------------------
Purpose:
Display the industries served by Sandtongrid Technologies.

Responsibilities:
- Render industry cards.
- Read all business content from the centralized Industries data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import industries from "@/data/industries/industries";

import styles from "./IndustriesList.module.css";

import type { IndustriesListProps } from "./IndustriesList.types";

/* =============================================================================
   Component
============================================================================= */

const IndustriesList: FC<IndustriesListProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read industries content from the centralized data source.
    ------------------------------------------------------------------------- */

  const { list } = industries;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <div className={styles.header}>
          <h2>{list.title}</h2>

          <p>{list.description}</p>
        </div>

        {/* ==========================================================
                    Industry Cards
                ========================================================== */}

        <div className={styles.grid}>
          {list.industries.map((industry) => (
            <article key={industry.title} className={styles.card}>
              {/* --------------------------------------------------
                                Industry Name
                            --------------------------------------------------- */}

              <h3 className={styles.title}>{industry.title}</h3>

              {/* --------------------------------------------------
                                Business Challenge
                            --------------------------------------------------- */}

              <span className={styles.label}>Challenge</span>

              <p className={styles.text}>{industry.challenge}</p>

              {/* --------------------------------------------------
                                Our Solution
                            --------------------------------------------------- */}

              <span className={styles.label}>Our Solution</span>

              <p className={styles.text}>{industry.solution}</p>

              {/* --------------------------------------------------
                                Business Outcome
                            --------------------------------------------------- */}

              <span className={styles.label}>Business Outcome</span>

              <p className={styles.text}>{industry.outcome}</p>
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

export default IndustriesList;
