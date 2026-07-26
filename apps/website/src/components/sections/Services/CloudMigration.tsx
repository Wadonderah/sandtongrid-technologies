/******************************************************************************
File: CloudMigration.tsx
------------------------------------------------------------------------------
Purpose:
Cloud migration methodology section.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

import styles from "./CloudMigration.module.css";

import type { CloudMigrationProps } from "./CloudMigration.types";

const migrationSteps = [
  {
    title: "Assessment",
    description:
      "Evaluate infrastructure, applications and workloads to determine migration readiness.",
  },
  {
    title: "Planning",
    description:
      "Create a migration roadmap with timelines, architecture and risk mitigation.",
  },
  {
    title: "Migration",
    description:
      "Move workloads securely using proven AWS migration practices.",
  },
  {
    title: "Validation",
    description:
      "Verify application functionality, security and performance after migration.",
  },
  {
    title: "Optimization",
    description:
      "Improve reliability, security and cost efficiency after deployment.",
  },
];

const CloudMigration: FC<CloudMigrationProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.header}>
          <p className={styles.subtitle}>Cloud Migration</p>

          <h2 className={styles.title}>Migrate With Confidence</h2>

          <p className={styles.description}>
            We help organizations modernize their infrastructure through
            structured migration planning, secure execution and continuous
            optimization.
          </p>
        </div>

        <div className={styles.grid}>
          {migrationSteps.map((step) => (
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
