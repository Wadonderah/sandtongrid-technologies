/******************************************************************************
File: ResourcesCTA.tsx
------------------------------------------------------------------------------
Purpose:
Final call-to-action section for the Resources page.

Responsibilities:
- Encourage visitors to contact Sandtongrid Technologies.
- Provide quick navigation to the Services page.
- Read all business content from the centralized Resources data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import resources from "@/data/resources/resources";

import styles from "./ResourcesCTA.module.css";

import type { ResourcesCTAProps } from "./ResourcesCTA.types";

/* =============================================================================
   Component
============================================================================= */

const ResourcesCTA: FC<ResourcesCTAProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read CTA content from the centralized Resources data source.
    ------------------------------------------------------------------------- */

  const { cta } = resources;

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

export default ResourcesCTA;
