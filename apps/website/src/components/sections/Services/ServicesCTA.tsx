/******************************************************************************
File: ServicesCTA.tsx
------------------------------------------------------------------------------
Purpose:
Display the final call-to-action section for the Services page.

Responsibilities:
- Encourage visitors to contact Sandtongrid Technologies.
- Provide navigation to the Case Studies page.
- Read all business content from the centralized Services data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./ServicesCTA.module.css";

import type { ServicesCTAProps } from "./ServicesCTA.types";

/* =============================================================================
   Component
============================================================================= */

const ServicesCTA: FC<ServicesCTAProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read CTA content from the centralized Services data source.
    ------------------------------------------------------------------------- */

  const { cta } = services;

  return (
    <Section className={`${styles.cta} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{cta.title}</h2>

          <p className={styles.description}>{cta.description}</p>

          <div className={styles.trustBar} aria-label="Service promise">
            <span>Clear roadmap</span>
            <span>Practical execution</span>
            <span>Measured results</span>
          </div>

          <div className={styles.actions}>
            <Button
              to={cta.primaryButton.to}
              variant={cta.primaryButton.variant}
            >
              {cta.primaryButton.label}
            </Button>

            <Button
              to={cta.secondaryButton.to}
              variant={cta.secondaryButton.variant}
            >
              {cta.secondaryButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default ServicesCTA;
