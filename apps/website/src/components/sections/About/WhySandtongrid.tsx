/******************************************************************************
File: WhySandtongrid.tsx
------------------------------------------------------------------------------
Purpose:
Display the "Why Choose Sandtongrid Technologies" section.

Responsibilities:
- Present the company's competitive advantages.
- Read all business content from the centralized About data source.
- Display reusable feature cards.
- Encourage visitors to contact the company through a clear Call-to-Action.
- Keep presentation separate from business content.

Modification History
------------------------------------------------------------------------------
✓ Added eyebrow text.
✓ Replaced simple bullet list with reusable feature cards.
✓ Added Call-to-Action section.
✓ Uses centralized About data.
******************************************************************************/

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import about from "@/data/about/about";

import styles from "./WhySandtongrid.module.css";

import type { WhySandtongridProps } from "./WhySandtongrid.types";

const WhySandtongrid: FC<WhySandtongridProps> = ({
  className = "",
}) => {
  const { whySandtongrid } = about;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
            Section Header
        ========================================================== */}

        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {whySandtongrid.eyebrow}
          </p>

          <h2 className={styles.title}>
            {whySandtongrid.title}
          </h2>

          <p className={styles.description}>
            {whySandtongrid.description}
          </p>
        </div>

        {/* ==========================================================
            Feature Cards
        ========================================================== */}

        <div className={styles.grid}>
          {whySandtongrid.highlights.map((item) => (
            <Card
              key={item.title}
              hover
              fullHeight
              className={styles.card}
            >
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </Card>
          ))}
        </div>

        {/* ==========================================================
            Call To Action
        ========================================================== */}

        <div className={styles.cta}>
          <h3>{whySandtongrid.cta.title}</h3>

          <Button to={whySandtongrid.cta.link}>
            {whySandtongrid.cta.button}
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default WhySandtongrid;