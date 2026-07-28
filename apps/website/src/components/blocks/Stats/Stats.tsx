/******************************************************************************
File: Stats.tsx
------------------------------------------------------------------------------
Purpose:
Display company statistics.

Responsibilities:
- Render homepage statistics.
- Read business content from the centralized Home data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import homeData from "@/data/home/home";

import styles from "./Stats.module.css";

import type { StatsProps } from "./Stats.types";

const Stats: FC<StatsProps> = ({ className = "" }) => {
  const { stats } = homeData;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <header className={styles.header}>
          <h2>{stats.title}</h2>

          <p>{stats.description}</p>
        </header>

        <div className={styles.grid}>
          {stats.items.map((stat) => (
            <article key={stat.label} className={styles.card}>
              <div className={styles.value}>{stat.value}</div>

              <div className={styles.label}>{stat.label}</div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Stats;