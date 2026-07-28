/******************************************************************************
File: FAQ.tsx
------------------------------------------------------------------------------
Purpose:
Homepage Frequently Asked Questions section.

Responsibilities:
- Display homepage FAQs.
- Read FAQ content from the centralized Home data source.
- Render questions using the reusable Accordion component.
- Keep presentation separate from business content.

Modification History
------------------------------------------------------------------------------
✓ Replaced static FAQ cards with reusable Accordion.
✓ Uses centralized homepage FAQ data.
✓ No duplicated accordion logic.
******************************************************************************/

import type { FC } from "react";

import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import homeData from "@/data/home/home";

import styles from "./FAQ.module.css";

import type { FAQProps } from "./FAQ.types";

const FAQ: FC<FAQProps> = ({ className = "" }) => {
  const accordionItems = homeData.faq.items.map((item, index) => ({
    id: `faq-${index + 1}`,

    title: item.question,

    content: item.answer,
  }));

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ===========================================================
            Section Heading
        =========================================================== */}

        <div className={styles.heading}>
          <h2>{homeData.faq.title}</h2>

          <p className={styles.subtitle}>
            Find answers to the questions organizations ask most often before
            beginning their cloud transformation journey.
          </p>
        </div>

        {/* ===========================================================
            Accordion
        =========================================================== */}

        <Accordion
          items={accordionItems}
          className={styles.accordion}
        />
      </Container>
    </Section>
  );
};

export default FAQ;