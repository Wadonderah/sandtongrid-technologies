/******************************************************************************
File: CTA.tsx
------------------------------------------------------------------------------
Purpose:
Primary Call-To-Action block.

Responsibilities:
- Display the homepage CTA.
- Read all content from the Home data source.
- Keep business content separate from the UI.
******************************************************************************/

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { homeData } from "@/data";

import styles from "./CTA.module.css";

import type { CTAProps } from "./CTA.types";

const CTA: FC<CTAProps> = ({ className = "" }) => {
  const cta = homeData.cta;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                       Section Heading
                    ====================================================== */}

          <h2 className={styles.title}>{cta.title}</h2>

          {/* ======================================================
                       Description
                    ====================================================== */}

          <p className={styles.description}>{cta.description}</p>

          {/* ======================================================
                       Actions
                    ====================================================== */}

          <div className={styles.actions}>
            <Button to={cta.primaryButton.link}>
              {cta.primaryButton.label}
            </Button>

            <Button to={cta.secondaryButton.link} variant="outline">
              {cta.secondaryButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
