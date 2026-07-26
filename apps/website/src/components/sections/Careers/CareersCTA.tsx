/******************************************************************************
File: CareersCTA.tsx
------------------------------------------------------------------------------
Purpose:
Final call-to-action inviting candidates to join Sandtongrid Technologies.

Responsibilities:
- Direct visitors to current career opportunities.
- Provide a way to contact the recruitment team.
- Maintain consistent CTA behavior across the website.
******************************************************************************/

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./CareersCTA.module.css";

import type { CareersCTAProps } from "./CareersCTA.types";

const CareersCTA: FC<CareersCTAProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready To Grow Your Career?</h2>

          <p className={styles.description}>
            Join a team that values innovation, continuous learning, and
            building world-class cloud and software solutions. We'd love to hear
            from you.
          </p>

          <div className={styles.actions}>
            <Button to="/careers" variant="secondary" size="lg">
              View Open Roles
            </Button>

            <Button to="/contact" variant="outline" size="lg">
              Contact Recruiting
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CareersCTA;
