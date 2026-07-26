/******************************************************************************
File: DevOpsAutomation.tsx
------------------------------------------------------------------------------
Purpose:
Display Sandtongrid Technologies' DevOps and Automation services.

Responsibilities:
- Render the DevOps & Automation section.
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

import styles from "./DevOpsAutomation.module.css";

import type { DevOpsAutomationProps } from "./DevOpsAutomation.types";

/* =============================================================================
   Component
============================================================================= */

const DevOpsAutomation: FC<DevOpsAutomationProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read data from the centralized Services data source.
    ------------------------------------------------------------------------- */

  const { devOpsAutomation } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Heading
                ========================================================== */}

        <h2>{devOpsAutomation.title}</h2>

        {/* ==========================================================
                    Service Cards
                ========================================================== */}

        <div className={styles.grid}>
          {devOpsAutomation.services.map((service) => (
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

export default DevOpsAutomation;
