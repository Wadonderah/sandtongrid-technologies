/******************************************************************************
File: OpenPositions.tsx
------------------------------------------------------------------------------
Purpose:
Displays current career opportunities.

Responsibilities:
- Read career content from a single data source.
- Display a professional empty state when there are no vacancies.
- Keep business data out of the UI.
******************************************************************************/

import type { FC } from "react";

import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import careers from "@/data/careers/careers";

import styles from "./OpenPositions.module.css";

import type { OpenPositionsProps } from "./OpenPositions.types";

const OpenPositions: FC<OpenPositionsProps> = ({ className = "" }) => {
  const { page, emptyState, jobs } = careers;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>{page.sectionTitle}</h2>

          <p>{page.sectionDescription}</p>
        </header>

        {/* ==========================================================
                    Empty State
                ========================================================== */}

        {jobs.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>{emptyState.title}</h3>

            <p>{emptyState.description}</p>

            <Button as={Link} to={emptyState.buttonLink}>
              {emptyState.buttonText}
            </Button>
          </div>
        ) : (
          <div className={styles.grid}>
            {jobs.map((job) => (
              <Card key={job.id} className={styles.card}>
                <h3 className={styles.title}>{job.title}</h3>

                <p className={styles.meta}>
                  {job.location}

                  {" • "}

                  {job.employmentType}
                </p>

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
