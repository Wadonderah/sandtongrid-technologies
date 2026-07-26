/******************************************************************************
File: Stats.tsx
------------------------------------------------------------------------------
Purpose:
Display company statistics.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import styles from "./Stats.module.css";

import type { StatsProps } from "./Stats.types";

const STATS = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Enterprise Clients",
  },
  {
    value: "99.9%",
    label: "Platform Availability",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const Stats: FC<StatsProps> = ({ className = "" }) => {
  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.card}>
              <div className={styles.value}>{stat.value}</div>

              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Stats;
