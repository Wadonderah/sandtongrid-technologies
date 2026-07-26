/******************************************************************************
File: ContactCTA.tsx
------------------------------------------------------------------------------
Purpose:
Displays the final Call-To-Action section for the Contact page.

Responsibilities:
- Encourage visitors to contact Sandtongrid Technologies.
- Read all business content from the centralized Contact data source.
- Keep presentation separate from business content.
- Focus only on UI rendering.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import contact from "@/data/contact/contact";

import styles from "./ContactCTA.module.css";

import type { ContactCTAProps } from "./ContactCTA.types";

/* =============================================================================
   Component
============================================================================= */

const ContactCTA: FC<ContactCTAProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read CTA content from the centralized Contact data source.
    ------------------------------------------------------------------------- */

  const { cta } = contact;

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
                            Primary CTA
                        --------------------------------------------------- */}

            <Button
              to={cta.primaryButton.to}
              variant={cta.primaryButton.variant}
              size="lg"
            >
              {cta.primaryButton.label}
            </Button>

            {/* --------------------------------------------------
                            Secondary CTA
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

export default ContactCTA;
