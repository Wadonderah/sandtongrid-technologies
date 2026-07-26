/******************************************************************************
File: ResourceLibrary.tsx
------------------------------------------------------------------------------
Purpose:
Display the Resource Library section.

Responsibilities:
- Render the available learning resources.
- Read all business content from the centralized Resources data source.
- Keep presentation separate from business content.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import resources from "@/data/resources/resources";

import styles from "./ResourceLibrary.module.css";

import type { ResourceLibraryProps } from "./ResourceLibrary.types";

/* =============================================================================
   Component
============================================================================= */

const ResourceLibrary: FC<ResourceLibraryProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read featured resources from the centralized Resources data source.

       NOTE:
       At the moment the Resource Library uses the same collection as the
       Featured Insights section. In the future this can easily be replaced by
       a dedicated "library" collection or a CMS/API without changing this UI.
    ------------------------------------------------------------------------- */

  const { featured } = resources;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2>Resource Library</h2>

          <p>
            Browse technical articles, implementation guides and practical
            resources created by our engineers.
          </p>
        </header>

        {/* ==========================================================
                    Resource Cards
                ========================================================== */}

        <div className={styles.grid}>
          {featured.resources.map((resource) => (
            <article key={resource.title} className={styles.card}>
              {/* --------------------------------------------------
                                Resource Category
                            --------------------------------------------------- */}

              <span className={styles.category}>{resource.category}</span>

              {/* --------------------------------------------------
                                Resource Title
                            --------------------------------------------------- */}

              <h3 className={styles.title}>{resource.title}</h3>

              {/* --------------------------------------------------
                                Resource Description
                            --------------------------------------------------- */}

              <p className={styles.description}>{resource.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default ResourceLibrary;
