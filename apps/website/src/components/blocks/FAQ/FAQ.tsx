/******************************************************************************
File: FAQ.tsx
------------------------------------------------------------------------------
Purpose:
Frequently Asked Questions block.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./FAQ.module.css";

import type { FAQProps } from "./FAQ.types";

const FAQS = [
  {
    question: "Which cloud platforms do you support?",
    answer:
      "We specialize in AWS and provide cloud architecture, migration, automation and managed services.",
  },
  {
    question: "Do you offer DevOps consulting?",
    answer:
      "Yes. We implement CI/CD pipelines, Infrastructure as Code with Terraform, Docker and Kubernetes.",
  },
  {
    question: "Can you migrate existing applications?",
    answer:
      "Yes. We assess, plan and execute secure migrations with minimal downtime.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer monitoring, maintenance, security updates and operational support.",
  },
];

const FAQ: FC<FAQProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.heading}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.list}>
          {FAQS.map((faq) => (
            <article key={faq.question} className={styles.item}>
              <h3 className={styles.question}>{faq.question}</h3>

              <p className={styles.answer}>{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
