/******************************************************************************
File: PageBanner.tsx
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./PageBanner.module.css";

import type { PageBannerProps } from "./PageBanner.types";

const PageBanner: FC<PageBannerProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <Section className={`${styles.banner} ${className}`.trim()}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          {description && <p className={styles.description}>{description}</p>}
        </div>
      </Container>
    </Section>
  );
};

export default PageBanner;
