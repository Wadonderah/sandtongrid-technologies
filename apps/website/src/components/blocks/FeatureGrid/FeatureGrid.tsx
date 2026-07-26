/******************************************************************************
File: FeatureGrid.tsx
------------------------------------------------------------------------------
Purpose:
Display the company's core services/features.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./FeatureGrid.module.css";

import type { FeatureGridProps } from "./FeatureGrid.types";

const FEATURES = [
  {
    title: "Cloud Architecture",
    description:
      "Design scalable, resilient AWS cloud platforms following the Well-Architected Framework.",
  },
  {
    title: "Cloud Migration",
    description:
      "Modernize existing workloads with secure migration strategies and minimal downtime.",
  },
  {
    title: "DevOps Automation",
    description:
      "Automate infrastructure and deployments using Terraform, GitHub Actions and Kubernetes.",
  },
  {
    title: "Managed Cloud",
    description:
      "Continuous monitoring, security hardening and operational support for production workloads.",
  },
];

const FeatureGrid: FC<FeatureGridProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.heading}>
          <h2>What We Do</h2>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <h3 className={styles.title}>{feature.title}</h3>

              <p className={styles.description}>{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeatureGrid;
