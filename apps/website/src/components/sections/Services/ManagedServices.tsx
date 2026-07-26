/******************************************************************************
File: ManagedServices.tsx
------------------------------------------------------------------------------
Purpose:
Display Sandtongrid Technologies' managed cloud services.

Responsibilities:
- Render the Managed Cloud Services section.
- Read all business content from the centralized Services data source.
- Keep UI separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./ManagedServices.module.css";

import type { ManagedServicesProps } from "./ManagedServices.types";

/* =============================================================================
   Component
============================================================================= */

const ManagedServices: FC<ManagedServicesProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read data from the centralized Services data source.
    ------------------------------------------------------------------------- */

  const { managedServices } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Heading
                ========================================================== */}

        <h2>{managedServices.title}</h2>

        {/* ==========================================================
                    Service Cards
                ========================================================== */}

        <div className={styles.grid}>
          {managedServices.services.map((service) => (
            <article key={service.title} className={styles.card}>
              {/* --------------------------------------------------
                                Service Icon
                            --------------------------------------------------- */}

              <div className={styles.icon}>{service.icon}</div>

              {/* --------------------------------------------------
                                Service Title
                            --------------------------------------------------- */}

              <h3 className={styles.title}>{service.title}</h3>

              {/* --------------------------------------------------
                                Service Description
                            --------------------------------------------------- */}

              <p className={styles.description}>{service.description}</p>
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

export default ManagedServices;
