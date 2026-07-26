/******************************************************************************
File: MissionVision.tsx
------------------------------------------------------------------------------
Purpose:
Display the company's Mission and Vision.

Responsibilities:
- Read all content from the centralized About data source.
- Keep presentation separate from business content.
******************************************************************************/

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import about from "@/data/about/about";

import styles from "./MissionVision.module.css";

import type { MissionVisionProps } from "./MissionVision.types";

const MissionVision: FC<MissionVisionProps> = ({ className = "" }) => {
  const { missionVision } = about;

  return (
    <Section className={className}>
      <Container>
        <div className={styles.wrapper}>
          {/* ======================================================
                       Mission
                    ====================================================== */}

          <article className={styles.card}>
            <h2>{missionVision.mission.title}</h2>

            <p>{missionVision.mission.description}</p>
          </article>

          {/* ======================================================
                       Vision
                    ====================================================== */}

          <article className={styles.card}>
            <h2>{missionVision.vision.title}</h2>

            <p>{missionVision.vision.description}</p>
          </article>
        </div>
      </Container>
    </Section>
  );
};

export default MissionVision;
