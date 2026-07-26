/******************************************************************************
File: SuccessMetrics.tsx
------------------------------------------------------------------------------
Purpose:
Displays measurable business outcomes delivered for customers.

Responsibilities:
- Render success metrics.
- Read all business content from the centralized Case Studies data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import caseStudies from "@/data/caseStudies/caseStudies";

import styles from "./SuccessMetrics.module.css";

import type { SuccessMetricsProps } from "./SuccessMetrics.types";

/* =============================================================================
   Component
============================================================================= */

const SuccessMetrics: FC<SuccessMetricsProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read success metrics from the centralized data source.
    ------------------------------------------------------------------------- */

  const { metrics } = caseStudies;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>{metrics.title}</h2>

          <p>{metrics.description}</p>
        </header>

        {/* ==========================================================
                    Success Metrics Grid
                ========================================================== */}

        <div className={styles.grid}>
          {metrics.items.map((metric) => (
            <article key={metric.label} className={styles.metric}>
              {/* --------------------------------------------------
                                Metric Value
                            --------------------------------------------------- */}

              <span className={styles.value}>{metric.value}</span>

              {/* --------------------------------------------------
                                Metric Label
                            --------------------------------------------------- */}

              <h3 className={styles.label}>{metric.label}</h3>

              {/* --------------------------------------------------
                                Metric Description
                            --------------------------------------------------- */}

              <p className={styles.description}>{metric.description}</p>
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

export default SuccessMetrics;
