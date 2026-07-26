/******************************************************************************
File: CaseStudiesCTA.tsx
------------------------------------------------------------------------------
Purpose:
Displays the final Call-To-Action section for the Case Studies page.

Responsibilities:
- Encourage visitors to start their own cloud transformation journey.
- Read all business content from the centralized Case Studies data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import caseStudies from "@/data/caseStudies/caseStudies";

import styles from "./CaseStudiesCTA.module.css";

import type { CaseStudiesCTAProps } from "./CaseStudiesCTA.types";

/* =============================================================================
   Component
============================================================================= */

const CaseStudiesCTA: FC<CaseStudiesCTAProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read CTA content from the centralized Case Studies data source.
    ------------------------------------------------------------------------- */

  const { cta } = caseStudies;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                        Section Heading
                    ====================================================== */}

          <h2 className={styles.title}>{cta.title}</h2>

          {/* ======================================================
                        Supporting Description
                    ====================================================== */}

          <p className={styles.description}>{cta.description}</p>

          {/* ======================================================
                        Call-To-Action Buttons
                    ====================================================== */}

          <div className={styles.actions}>
            {/* --------------------------------------------------
                            Primary Button
                        --------------------------------------------------- */}

            <Button
              to={cta.primaryButton.to}
              variant={cta.primaryButton.variant}
              size="lg"
            >
              {cta.primaryButton.label}
            </Button>

            {/* --------------------------------------------------
                            Secondary Button
                        --------------------------------------------------- */}

            <Button
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

export default CaseStudiesCTA;
