/******************************************************************************
File: FeaturedInsights.tsx
------------------------------------------------------------------------------
Purpose:
Display featured technical insights and engineering articles.

Responsibilities:
- Render featured resource cards.
- Read all business content from the centralized Resources data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import resources from "@/data/resources/resources";

import styles from "./FeaturedInsights.module.css";

import type { FeaturedInsightsProps } from "./FeaturedInsights.types";

/* =============================================================================
   Component
============================================================================= */

const FeaturedInsights: FC<FeaturedInsightsProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read featured insights from the centralized Resources data source.
    ------------------------------------------------------------------------- */

  const { featured } = resources;

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
                    Featured Insight Cards
                ========================================================== */}

        <div className={styles.grid}>
          {featured.resources.map((resource) => (
            <article key={resource.title} className={styles.card}>
              {/* --------------------------------------------------
                                Resource Category
                            --------------------------------------------------- */}

              <span className={styles.date}>{resource.category}</span>

              {/* --------------------------------------------------
                                Resource Title
                            --------------------------------------------------- */}

              <h3 className={styles.title}>{resource.title}</h3>

              {/* --------------------------------------------------
                                Resource Summary
                            --------------------------------------------------- */}

              <p className={styles.summary}>{resource.description}</p>
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

export default FeaturedInsights;
