/******************************************************************************
File: IndustriesCTA.tsx
------------------------------------------------------------------------------
Purpose:
Final call-to-action section for the Industries page.

Responsibilities:
- Encourage visitors to contact Sandtongrid Technologies.
- Provide navigation to the Services page.
- Read all business content from the centralized Industries data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import industries from "@/data/industries/industries";

import styles from "./IndustriesCTA.module.css";

import type { IndustriesCTAProps } from "./IndustriesCTA.types";

/* =============================================================================
   Component
============================================================================= */

const IndustriesCTA: FC<IndustriesCTAProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read CTA content from the centralized Industries data source.
    ------------------------------------------------------------------------- */

  const { cta } = industries;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                        CTA Heading
                    ====================================================== */}

          <h2 className={styles.title}>{cta.title}</h2>

          {/* ======================================================
                        CTA Description
                    ====================================================== */}

          <p className={styles.description}>{cta.description}</p>

          {/* ======================================================
                        Action Buttons
                    ====================================================== */}

          <div className={styles.actions}>
            {/* --------------------------------------------------
                            Primary Action
                        --------------------------------------------------- */}

            <Button
              as={Link}
              to={cta.primaryButton.to}
              variant={cta.primaryButton.variant}
              size="lg"
            >
              {cta.primaryButton.label}
            </Button>

            {/* --------------------------------------------------
                            Secondary Action
                        --------------------------------------------------- */}

            <Button
              as={Link}
              to={cta.secondaryButton.to}
              variant={cta.secondaryButton.variant}
              size="lg"
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

export default IndustriesCTA;
