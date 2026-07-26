/******************************************************************************
File: Testimonials.tsx
------------------------------------------------------------------------------
Purpose:
Displays customer testimonials for the Case Studies page.

Responsibilities:
- Render customer testimonials.
- Read all business content from the centralized Case Studies data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import caseStudies from "@/data/caseStudies/caseStudies";

import styles from "./Testimonials.module.css";

import type { TestimonialsProps } from "./Testimonials.types";

/* =============================================================================
   Component
============================================================================= */

const Testimonials: FC<TestimonialsProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read testimonial content from the centralized data source.
    ------------------------------------------------------------------------- */

  const { testimonials } = caseStudies;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>{testimonials.title}</h2>

          <p>{testimonials.description}</p>
        </header>

        {/* ==========================================================
                    Testimonials Grid
                ========================================================== */}

        <div className={styles.grid}>
          {testimonials.items.map((testimonial) => (
            <Card key={testimonial.author} className={styles.card}>
              {/* --------------------------------------------------
                                Customer Quote
                            --------------------------------------------------- */}

              <p className={styles.quote}>"{testimonial.quote}"</p>

              {/* --------------------------------------------------
                                Customer Name
                            --------------------------------------------------- */}

              <h3 className={styles.author}>{testimonial.author}</h3>

              {/* --------------------------------------------------
                                Customer Role
                            --------------------------------------------------- */}

              <p className={styles.role}>{testimonial.role}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default Testimonials;
