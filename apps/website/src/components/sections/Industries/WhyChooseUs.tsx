/******************************************************************************
File: WhyChooseUs.tsx
------------------------------------------------------------------------------
Purpose:
Display the reasons organizations choose Sandtongrid Technologies.

Responsibilities:
- Render the company's key differentiators.
- Read all business content from the centralized Industries data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import industries from "@/data/industries/industries";

import styles from "./WhyChooseUs.module.css";

import type { WhyChooseUsProps } from "./WhyChooseUs.types";

/* =============================================================================
   Component
============================================================================= */

const WhyChooseUs: FC<WhyChooseUsProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read differentiator content from the centralized Industries data source.
    ------------------------------------------------------------------------- */

  const { whyChooseUs } = industries;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <div className={styles.header}>
          <h2>{whyChooseUs.title}</h2>

          <p>{whyChooseUs.description}</p>
        </div>

        {/* ==========================================================
                    Differentiator Cards
                ========================================================== */}

        <div className={styles.grid}>
          {whyChooseUs.items.map((item) => (
            <article key={item.title} className={styles.card}>
              {/* --------------------------------------------------
                                Differentiator Title
                            --------------------------------------------------- */}

              <h3 className={styles.title}>{item.title}</h3>

              {/* --------------------------------------------------
                                Differentiator Description
                            --------------------------------------------------- */}

              <p className={styles.description}>{item.description}</p>
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

export default WhyChooseUs;
