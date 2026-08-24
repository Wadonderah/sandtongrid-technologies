/******************************************************************************
File: TestimonialGrid.tsx
------------------------------------------------------------------------------
Purpose:
Display client testimonials.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./TestimonialGrid.module.css";

import type { TestimonialGridProps } from "./TestimonialGrid.types";

const TESTIMONIALS = [
  {
    quote:
      "Sandtongrid transformed our AWS infrastructure with a secure and scalable architecture.",
    author: "James Carter",
    role: "CTO, FinTech Company",
  },
  {
    quote:
      "Their DevOps automation reduced our deployment time from hours to minutes.",
    author: "Sarah Mitchell",
    role: "Engineering Manager",
  },
  {
    quote:
      "Professional, responsive and deeply knowledgeable in cloud technologies.",
    author: "David Kimani",
    role: "IT Director",
  },
];

const TestimonialGrid: FC<TestimonialGridProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.heading}>
          <h2>What Our Clients Say</h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <article key={testimonial.author} className={styles.card}>
              <p className={styles.quote}>"{testimonial.quote}"</p>

              <div className={styles.author}>{testimonial.author}</div>

              <div className={styles.role}>{testimonial.role}</div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialGrid;
