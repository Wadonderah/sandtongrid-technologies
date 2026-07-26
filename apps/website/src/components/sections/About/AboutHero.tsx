/******************************************************************************
File: AboutHero.tsx
------------------------------------------------------------------------------
Purpose:
Hero section for the About page.

Responsibilities:
- Display About page hero content.
- Read all content from the centralized data source.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import about from "@/data/about/about";

import styles from "./AboutHero.module.css";

import type { AboutHeroProps } from "./AboutHero.types";

const AboutHero: FC<AboutHeroProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.hero} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                       Eyebrow
                    ====================================================== */}

          <p className={styles.subtitle}>{about.hero.eyebrow}</p>

          {/* ======================================================
                       Title
                    ====================================================== */}

          <h1 className={styles.title}>{about.hero.title}</h1>

          {/* ======================================================
                       Description
                    ====================================================== */}

          <p className={styles.description}>{about.hero.description}</p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutHero;
