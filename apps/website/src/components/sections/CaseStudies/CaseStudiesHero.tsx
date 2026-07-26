/******************************************************************************
File: CaseStudiesHero.tsx
------------------------------------------------------------------------------
Purpose:
Hero section for the Case Studies page.

Responsibilities:
- Display the Case Studies page hero.
- Read all content from the centralized Case Studies data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import caseStudies from "@/data/caseStudies/caseStudies";

import styles from "./CaseStudiesHero.module.css";

import type { CaseStudiesHeroProps } from "./CaseStudiesHero.types";

/* =============================================================================
   Component
============================================================================= */

const CaseStudiesHero: FC<CaseStudiesHeroProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read hero content from the centralized Case Studies data source.
    ------------------------------------------------------------------------- */

  const { hero } = caseStudies;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                        Eyebrow
                    ====================================================== */}

          <span className={styles.eyebrow}>{hero.eyebrow}</span>

          {/* ======================================================
                        Main Heading
                    ====================================================== */}

          <h1 className={styles.title}>{hero.title}</h1>

          {/* ======================================================
                        Supporting Description
                    ====================================================== */}

          <p className={styles.description}>{hero.description}</p>
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default CaseStudiesHero;
