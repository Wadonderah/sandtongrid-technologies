/******************************************************************************
File: ContactHero.tsx
------------------------------------------------------------------------------
Purpose:
Displays the hero section for the Contact page.

Responsibilities:
- Introduce the Contact page.
- Read all business content from the centralized Contact data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import contact from "@/data/contact/contact";

import styles from "./ContactHero.module.css";

import type { ContactHeroProps } from "./ContactHero.types";

/* =============================================================================
   Component
============================================================================= */

const ContactHero: FC<ContactHeroProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read hero content from the centralized Contact data source.
    ------------------------------------------------------------------------- */

  const { hero } = contact;

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
                        Supporting Description
                    ====================================================== */}

          <p className={styles.description}>{hero.description}</p>
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default ContactHero;
