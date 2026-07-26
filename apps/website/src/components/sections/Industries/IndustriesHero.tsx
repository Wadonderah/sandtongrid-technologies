/******************************************************************************
File: IndustriesHero.tsx
------------------------------------------------------------------------------
Purpose:
Hero section for the Industries page.

Responsibilities:
- Display the Industries page hero.
- Read all content from the centralized Industries data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import industries from "@/data/industries/industries";

import styles from "./IndustriesHero.module.css";

import type { IndustriesHeroProps } from "./IndustriesHero.types";

/* =============================================================================
   Component
============================================================================= */

const IndustriesHero: FC<IndustriesHeroProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read hero content from the centralized Industries data source.
    ------------------------------------------------------------------------- */

  const { hero } = industries;

  return (
    <Section className={`${styles.hero} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                        Eyebrow
                    ====================================================== */}

          <p className={styles.subtitle}>{hero.eyebrow}</p>

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

export default IndustriesHero;
