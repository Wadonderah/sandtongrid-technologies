/******************************************************************************
File: ServicesHero.tsx
------------------------------------------------------------------------------
Purpose:
Hero section for the Services page.

Responsibilities:
- Display the Services page hero.
- Read all content from the centralized Services data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./ServicesHero.module.css";

import type { ServicesHeroProps } from "./ServicesHero.types";

const ServicesHero: FC<ServicesHeroProps> = ({ className = "" }) => {
  const { hero } = services;

  return (
    <Section className={`${styles.hero} ${className}`.trim()}>
      <Container>
        <div className={`${styles.content} animate-fade-up`}>
          {/* ======================================================
                       Eyebrow
                    ====================================================== */}

          <p className={styles.subtitle}>{hero.eyebrow}</p>

          {/* ======================================================
                       Heading
                    ====================================================== */}

          <h1 className={styles.title}>{hero.title}</h1>

          {/* ======================================================
                       Description
                    ====================================================== */}

          <p className={styles.description}>{hero.description}</p>

          <div className={styles.trustBar} aria-label="Service trust signals">
            {hero.trustSignals.map((signal) => (
              <span key={signal} className={styles.trustSignal}>
                {signal}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesHero;
