/******************************************************************************
File: CareersHero.tsx
------------------------------------------------------------------------------
Purpose:
Introduces the Careers page and communicates the company's hiring message.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./CareersHero.module.css";

import type { CareersHeroProps } from "./CareersHero.types";

const CareersHero: FC<CareersHeroProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Careers</span>

          <h1 className={styles.title}>Build The Future With Us</h1>

          <p className={styles.description}>
            Join a team focused on cloud engineering, DevOps, software
            development, and building reliable technology solutions for
            businesses worldwide.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default CareersHero;
