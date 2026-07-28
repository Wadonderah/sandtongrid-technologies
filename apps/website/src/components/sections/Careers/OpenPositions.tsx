/******************************************************************************
File: OpenPositions.tsx
------------------------------------------------------------------------------
Purpose:
Displays current career opportunities.

Responsibilities:
- Render available jobs.
- Display an empty state when no jobs exist.
- Read all content from the centralized careers data source.
******************************************************************************/

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import careers, { type Job } from "@/data/careers/careers";

import styles from "./OpenPositions.module.css";

import type { OpenPositionsProps } from "./OpenPositions.types";

const OpenPositions: FC<OpenPositionsProps> = ({ className = "" }) => {
  const { openPositions } = careers;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <header className={styles.header}>
          <h2>{openPositions.title}</h2>

          <p>{openPositions.description}</p>
        </header>

        {openPositions.jobs.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>{openPositions.emptyState.title}</h3>

            <p>{openPositions.emptyState.description}</p>

            <Button to={openPositions.emptyState.buttonLink}>
              {openPositions.emptyState.buttonText}
            </Button>
          </div>
        ) : (
          <div className={styles.grid}>
            {openPositions.jobs.map((job: Job) => (
              <Card key={job.id} className={styles.card}>
                <h3 className={styles.title}>{job.title}</h3>

                <p className={styles.meta}>{job.location}</p>

                <p className={styles.department}>{job.department}</p>

                <p className={styles.description}>{job.description}</p>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default OpenPositions;