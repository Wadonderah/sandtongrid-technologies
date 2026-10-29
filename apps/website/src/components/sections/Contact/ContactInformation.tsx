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
            <h3 className={styles.title}>Email</h3>

            <p className={styles.value}>
              <a
                href={`mailto:${information.email}`}
                className={styles.link}
              >
                {information.email}
              </a>
            </p>
          </article>

          {/* ------------------------------------------------------
                        Phone
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3 className={styles.title}>Phone</h3>

            <p className={styles.value}>
              <a
                href={`tel:${information.phone.replace(/\s+/g, "")}`}
                className={styles.link}
              >
                {information.phone}
              </a>
            </p>
          </article>

          {/* ------------------------------------------------------
                        Office Location
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3 className={styles.title}>Office</h3>

            <p className={styles.value}>{information.address}</p>
          </article>

          {/* ------------------------------------------------------
                        Business Hours
                    ------------------------------------------------------- */}

          <article className={styles.card}>
            <h3 className={styles.title}>Business Hours</h3>

            <p className={styles.value}>{information.businessHours}</p>
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
