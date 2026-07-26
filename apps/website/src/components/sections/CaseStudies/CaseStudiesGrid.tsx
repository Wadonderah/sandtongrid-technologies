/******************************************************************************
File: CaseStudiesGrid.tsx
------------------------------------------------------------------------------
Purpose:
Displays featured customer success stories.

Responsibilities:
- Render featured case studies.
- Read all business content from the centralized Case Studies data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import caseStudies from "@/data/caseStudies/caseStudies";

import styles from "./CaseStudiesGrid.module.css";

import type { CaseStudiesGridProps } from "./CaseStudiesGrid.types";

/* =============================================================================
   Component
============================================================================= */

const CaseStudiesGrid: FC<CaseStudiesGridProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read featured case studies from the centralized data source.
    ------------------------------------------------------------------------- */

  const { featured } = caseStudies;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>{featured.title}</h2>

          <p>{featured.description}</p>
        </header>

        {/* ==========================================================
                    Case Study Cards
                ========================================================== */}

        <div className={styles.grid}>
          {featured.studies.map((study) => (
            <Card key={study.title} className={styles.card}>
              {/* --------------------------------------------------
                                Industry
                            --------------------------------------------------- */}

              <span className={styles.industry}>{study.industry}</span>

              {/* --------------------------------------------------
                                Project Title
                            --------------------------------------------------- */}

              <h3 className={styles.title}>{study.title}</h3>

              {/* --------------------------------------------------
                                Solution Summary
                            --------------------------------------------------- */}

              <p className={styles.description}>{study.solution}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default CaseStudiesGrid;
