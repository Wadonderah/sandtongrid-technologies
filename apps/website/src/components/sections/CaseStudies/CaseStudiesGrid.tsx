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

import type { FC } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import caseStudies from "@/data/caseStudies/caseStudies";

import styles from "./CaseStudiesGrid.module.css";

import type { CaseStudiesGridProps } from "./CaseStudiesGrid.types";

const CaseStudiesGrid: FC<CaseStudiesGridProps> = ({
  className = "",
}) => {
  const { featured } = caseStudies;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <header className={styles.header}>
          <h2>{featured.title}</h2>

          <p>{featured.description}</p>
        </header>

        <div className={styles.grid}>
          {featured.studies.map((study) => (
            <Card
              key={study.title}
              className={styles.card}
            >
              <span className={styles.industry}>
                {study.industry}
              </span>

              <h3 className={styles.title}>
                {study.title}
              </h3>

              <div className={styles.content}>
                <div className={styles.block}>
                  <h4>Challenge</h4>

                  <p>{study.challenge}</p>
                </div>

                <div className={styles.block}>
                  <h4>Solution</h4>

                  <p>{study.solution}</p>
                </div>

                <div className={styles.block}>
                  <h4>Outcome</h4>

                  <p>{study.outcome}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CaseStudiesGrid;