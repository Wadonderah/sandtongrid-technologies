/******************************************************************************
File: Benefits.tsx
------------------------------------------------------------------------------
Purpose:
Highlights the key benefits of working at Sandtongrid Technologies.
******************************************************************************/

import type { FC } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./Benefits.module.css";

import type { BenefitsProps } from "./Benefits.types";

const benefits = [
  {
    title: "Continuous Learning",
    description:
      "Access training, certifications, and mentorship to accelerate your professional growth.",
  },
  {
    title: "Flexible Work",
    description:
      "Enjoy hybrid and remote work options that promote work-life balance.",
  },
  {
    title: "Meaningful Projects",
    description:
      "Work on cloud, DevOps, and software engineering projects that create real business value.",
  },
  {
    title: "Collaborative Culture",
    description:
      "Join a supportive team that values innovation, knowledge sharing, and continuous improvement.",
  },
];

const Benefits: FC<BenefitsProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <header className={styles.header}>
          <h2>Why Work With Us</h2>

          <p>
            We believe great people build great technology. Our culture is
            centered on growth, collaboration, and delivering meaningful impact.
          </p>
        </header>

        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <Card key={benefit.title} className={styles.card}>
              <h3 className={styles.title}>{benefit.title}</h3>

              <p className={styles.description}>{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Benefits;
