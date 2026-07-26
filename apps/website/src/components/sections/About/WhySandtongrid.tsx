/******************************************************************************
File: WhySandtongrid.tsx
------------------------------------------------------------------------------
Purpose:
Highlights why customers choose Sandtongrid Technologies.

Responsibilities:
- Display the company's strengths.
- Read all content from the centralized About data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import about from "@/data/about/about";

import styles from "./WhySandtongrid.module.css";

import type { WhySandtongridProps } from "./WhySandtongrid.types";

const WhySandtongrid: FC<WhySandtongridProps> = ({ className = "" }) => {
  const { whySandtongrid } = about;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {/* ======================================================
                           Section Heading
                        ====================================================== */}

            <h2>{whySandtongrid.title}</h2>

            {/* ======================================================
                           Description
                        ====================================================== */}

            <p>{whySandtongrid.description}</p>

            {/* ======================================================
                           Highlights
                        ====================================================== */}

            <ul className={styles.list}>
              {whySandtongrid.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhySandtongrid;
