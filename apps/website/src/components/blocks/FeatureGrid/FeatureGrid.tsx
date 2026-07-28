/******************************************************************************
File: FeatureGrid.tsx
------------------------------------------------------------------------------
Purpose:
Display the company's core services/features.

Responsibilities:
- Render the homepage services overview.
- Read all content from the centralized Home data source.
- Keep UI separate from business content.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import homeData from "@/data/home/home";

import styles from "./FeatureGrid.module.css";

import type { FeatureGridProps } from "./FeatureGrid.types";

const FeatureGrid: FC<FeatureGridProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
            Section Heading
        ========================================================== */}

        <div className={styles.heading}>
          <h2>{homeData.featureGrid.title}</h2>

          <p className={styles.description}>
            {homeData.featureGrid.description}
          </p>
        </div>

        {/* ==========================================================
            Feature Cards
        ========================================================== */}

        <div className={styles.grid}>
          {homeData.featureGrid.items.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <h3 className={styles.title}>{feature.title}</h3>

              <p className={styles.cardDescription}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeatureGrid;