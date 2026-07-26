/******************************************************************************
File: FAQ.tsx
------------------------------------------------------------------------------
Purpose:
Frequently Asked Questions block.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import homeData from "@/data/home/home";

import styles from "./FAQ.module.css";

import type { FAQProps } from "./FAQ.types";

const FAQ: FC<FAQProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.heading}>
          <h2>{homeData.faq.title}</h2>
        </div>

        <div className={styles.list}>
          {homeData.faq.items.map((faq) => (
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