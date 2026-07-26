/******************************************************************************
File: ServiceProcess.tsx
------------------------------------------------------------------------------
Purpose:
Display Sandtongrid Technologies' service delivery process.

Responsibilities:
- Render the delivery process timeline.
- Read all business content from the centralized Services data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import services from "@/data/services/services";

import styles from "./ServiceProcess.module.css";

import type { ServiceProcessProps } from "./ServiceProcess.types";

/* =============================================================================
   Component
============================================================================= */

const ServiceProcess: FC<ServiceProcessProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read process content from the centralized Services data source.
    ------------------------------------------------------------------------- */

  const { process } = services;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Heading
                ========================================================== */}

        <h2>{process.title}</h2>

        {/* ==========================================================
                    Process Timeline
                ========================================================== */}

        <div className={styles.timeline}>
          {process.steps.map((step) => (
            <article key={step.number} className={styles.step}>
              {/* --------------------------------------------------
                                Step Number
                            --------------------------------------------------- */}

              <div className={styles.number}>{step.number}</div>

              {/* --------------------------------------------------
                                Step Details
                            --------------------------------------------------- */}

              <div>
                <h3 className={styles.title}>{step.title}</h3>

                <p className={styles.description}>{step.description}</p>
              </div>
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

export default ServiceProcess;
