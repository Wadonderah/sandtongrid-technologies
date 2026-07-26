/******************************************************************************
File: CloudConsulting.tsx
------------------------------------------------------------------------------
Purpose:
Cloud consulting services section.

Responsibilities:
- Display Cloud Consulting content.
- Read all content from the centralized Services data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./CloudConsulting.module.css";

import type { CloudConsultingProps } from "./CloudConsulting.types";

const CloudConsulting: FC<CloudConsultingProps> = ({ className = "" }) => {
  const { cloudConsulting } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.header}>
          <p className={styles.subtitle}>{cloudConsulting.eyebrow}</p>

          <h2 className={styles.title}>{cloudConsulting.title}</h2>

          <p className={styles.description}>{cloudConsulting.description}</p>
        </div>

        <div className={styles.grid}>
          {cloudConsulting.services.map((service) => (
            <Card key={service.title}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CloudConsulting;
