/******************************************************************************
File: ResourcesHero.tsx
------------------------------------------------------------------------------
Purpose:
Hero section for the Resources page.

Responsibilities:
- Display the Resources page hero.
- Read all content from the centralized Resources data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import resources from "@/data/resources/resources";

import styles from "./ResourcesHero.module.css";

import type { ResourcesHeroProps } from "./ResourcesHero.types";

/* =============================================================================
   Component
============================================================================= */

const ResourcesHero: FC<ResourcesHeroProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read hero content from the centralized Resources data source.
    ------------------------------------------------------------------------- */

  const { hero } = resources;

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

export default ResourcesHero;
