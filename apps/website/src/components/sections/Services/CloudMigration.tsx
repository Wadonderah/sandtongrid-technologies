/******************************************************************************
File: CloudMigration.tsx
------------------------------------------------------------------------------
Purpose:
Cloud migration methodology section.

Responsibilities:
- Render the Cloud Migration section.
- Read all business content from the centralized Services data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./CloudMigration.module.css";

import type { CloudMigrationProps } from "./CloudMigration.types";

const CloudMigration: FC<CloudMigrationProps> = ({ className = "" }) => {
  const { cloudMigration } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.header}>
          <p className={styles.subtitle}>
            {cloudMigration.eyebrow}
          </p>

          <h2 className={styles.title}>
            {cloudMigration.title}
          </h2>

          <p className={styles.description}>
            {cloudMigration.description}
          </p>
        </div>

        <div className={styles.grid}>
          {cloudMigration.steps.map((step) => (
            <Card key={step.title}>
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CloudMigration;