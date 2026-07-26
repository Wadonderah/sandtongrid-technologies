/******************************************************************************
File: HiringProcess.tsx
------------------------------------------------------------------------------
Purpose:
Displays the hiring process followed by Sandtongrid Technologies.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./HiringProcess.module.css";

import type { HiringProcessProps } from "./HiringProcess.types";

const hiringSteps = [
  {
    step: "01",
    title: "Application Review",
    description:
      "Our team reviews your application, skills, and experience to determine the best fit for the role.",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description:
      "Depending on the position, you'll complete a practical exercise or technical interview to demonstrate your abilities.",
  },
  {
    step: "03",
    title: "Team Interview",
    description:
      "Meet members of our engineering and leadership teams to discuss your experience, goals, and our culture.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "Successful candidates receive an offer and begin a structured onboarding process designed for long-term success.",
  },
];

const HiringProcess: FC<HiringProcessProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <header className={styles.header}>
          <h2>Our Hiring Process</h2>

          <p>
            We aim to make our recruitment process transparent, efficient, and
            focused on finding the right fit for both you and our team.
          </p>
        </header>

        <div className={styles.timeline}>
          {hiringSteps.map((item) => (
            <article key={item.step} className={styles.step}>
              <div className={styles.number}>{item.step}</div>

              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>

                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HiringProcess;
