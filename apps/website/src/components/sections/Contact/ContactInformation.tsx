/******************************************************************************
File: ContactInformation.tsx
------------------------------------------------------------------------------
Purpose:
Displays the company's primary contact information.

Responsibilities:
- Render contact details.
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

import styles from "./ContactInformation.module.css";

import type { ContactInformationProps } from "./ContactInformation.types";

/* =============================================================================
   Component
============================================================================= */

const ContactInformation: FC<ContactInformationProps> = ({
  className = "",
}) => {
  /* -------------------------------------------------------------------------
       Read contact information from the centralized data source.
    ------------------------------------------------------------------------- */

  const { information } = contact;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>{information.title}</h2>

          <p>{information.description}</p>
        </header>

        {/* ==========================================================
                    Contact Information Grid
                ========================================================== */}

        <div className={styles.grid}>
          {/* ------------------------------------------------------
                        Email
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3>Email</h3>

            <p>{information.email}</p>
          </article>

          {/* ------------------------------------------------------
                        Phone
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3>Phone</h3>

            <p>{information.phone}</p>
          </article>

          {/* ------------------------------------------------------
                        Office Location
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3>Office</h3>

            <p>{information.address}</p>
          </article>

          {/* ------------------------------------------------------
                        Business Hours
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3>Business Hours</h3>

            <p>{information.businessHours}</p>
          </article>
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default ContactInformation;
