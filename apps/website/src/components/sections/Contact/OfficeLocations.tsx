/******************************************************************************
File: OfficeLocations.tsx
------------------------------------------------------------------------------
Purpose:
Displays the company's office and operational locations.

Responsibilities:
- Render company office locations.
- Read all business content from the centralized Contact data source.
- Keep presentation separate from business content.
- Focus only on UI rendering.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import contact from "@/data/contact/contact";

import styles from "./OfficeLocations.module.css";

import type { OfficeLocationsProps } from "./OfficeLocations.types";

/* =============================================================================
   Component
============================================================================= */

const OfficeLocations: FC<OfficeLocationsProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read office location content from the centralized Contact data source.
    ------------------------------------------------------------------------- */

  const { locations } = contact;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>{locations.title}</h2>

          <p>{locations.description}</p>
        </header>

        {/* ==========================================================
                    Office Locations Grid
                ========================================================== */}

        <div className={styles.grid}>
          {locations.offices.map((office) => (
            <article key={office.title} className={styles.card}>
              {/* ==================================================
                                Office Name
                            =================================================== */}

              <h3 className={styles.title}>{office.title}</h3>

              {/* ==================================================
                                Office Address
                            =================================================== */}

              <p className={styles.address}>{office.address}</p>

              {/* ==================================================
                                Geographic Region
                            =================================================== */}

              <span className={styles.region}>{office.region}</span>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default OfficeLocations;
