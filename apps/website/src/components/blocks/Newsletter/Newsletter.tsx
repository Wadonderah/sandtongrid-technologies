/******************************************************************************
File: Newsletter.tsx
------------------------------------------------------------------------------
Purpose:
Newsletter subscription block.

Responsibilities:
- Display newsletter content.
- Read all content from the Home data source.
******************************************************************************/

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { homeData } from "@/data";

import styles from "./Newsletter.module.css";

import type { NewsletterProps } from "./Newsletter.types";

const Newsletter: FC<NewsletterProps> = ({ className = "" }) => {
  const newsletter = homeData.newsletter;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          {/* ======================================================
                       Heading
                    ====================================================== */}

          <h2 className={styles.title}>{newsletter.title}</h2>

          {/* ======================================================
                       Description
                    ====================================================== */}

          <p className={styles.description}>{newsletter.description}</p>

          {/* ======================================================
                       Form
                    ====================================================== */}

          <form className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder={newsletter.placeholder}
            />

            <Button type="submit">{newsletter.button}</Button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Newsletter;
