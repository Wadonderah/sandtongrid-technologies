/******************************************************************************
File: CoreValues.tsx
------------------------------------------------------------------------------
Purpose:
Display Sandtongrid Technologies' core values.

Responsibilities:
- Read all content from the centralized About data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import about from "@/data/about/about";

import styles from "./CoreValues.module.css";

import type { CoreValuesProps } from "./CoreValues.types";

const CoreValues: FC<CoreValuesProps> = ({ className = "" }) => {
  const { coreValues } = about;

  return (
    <Section className={className}>
      <Container>
        {/* ======================================================
                   Section Heading
                ====================================================== */}

        <h2>{coreValues.title}</h2>

        {/* ======================================================
                   Values Grid
                ====================================================== */}

        <div className={styles.grid}>
          {coreValues.items.map((value) => (
            <article key={value.title} className={styles.card}>
              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CoreValues;
