/******************************************************************************
File: Hero.tsx
------------------------------------------------------------------------------
Purpose:
Landing page Hero section.

Responsibilities:
- Display the homepage hero.
- Read all content from the Home data source.
- Keep the component free from business/content logic.
******************************************************************************/

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { homeData } from "@/data";

import styles from "./Hero.module.css";

import type { HeroProps } from "./Hero.types";

const Hero: FC<HeroProps> = ({ className = "" }) => {
  const hero = homeData.hero;

  return (
    <Section className={`${styles.hero} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                       Eyebrow
                    ====================================================== */}

          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          {/* ======================================================
                       Main Heading
                    ====================================================== */}

          <h1 className={styles.title}>{hero.title}</h1>

          {/* ======================================================
                       Description
                    ====================================================== */}

          <p className={styles.description}>{hero.description}</p>

          {/* ======================================================
                       Actions
                    ====================================================== */}

          <div className={styles.actions}>
            <Button to={hero.primaryButton.link}>
              {hero.primaryButton.label}
            </Button>

            <Button
              to={hero.secondaryButton.link}
              variant="outline"
              className={styles.secondaryButton}
            >
              {hero.secondaryButton.label}
            </Button>
          </div>

          <div className={styles.trustBar} aria-label="Trust signals">
            <p className={styles.trustLabel}>Built for teams that need:</p>

            <div className={styles.trustSignals}>
              {hero.trustSignals.map((signal) => (
                <span key={signal} className={styles.trustSignal}>
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
