/******************************************************************************
File: ContactForm.tsx
------------------------------------------------------------------------------
Purpose:
Displays the enquiry form for prospective customers.

Responsibilities:
- Render the contact form.
- Read business content from the centralized Contact data source.
- Read form structure from the centralized Contact Form configuration.
- Keep presentation separate from business content.
- Handle only UI responsibilities.
******************************************************************************/

/* =============================================================================
   Imports
============================================================================= */

import type { FC } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import contact from "@/data/contact/contact";
import contactFields from "@/config/forms/contactForm";

import styles from "./ContactForm.module.css";

import type { ContactFormProps } from "./ContactForm.types";

/* =============================================================================
   Component
============================================================================= */

const ContactForm: FC<ContactFormProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
     Read business content.
  ------------------------------------------------------------------------- */

  const { form } = contact;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
            Section Header
        ========================================================== */}

        <header className={styles.header}>
          <p className={styles.eyebrow}>{form.eyebrow}</p>

          <h2 className={styles.title}>{form.title}</h2>

          <p className={styles.description}>{form.description}</p>

          <div className={styles.meta} aria-label="Contact form trust signals">
            {form.trustSignals.map((signal) => (
              <span key={signal} className={styles.metaItem}>
                {signal}
              </span>
            ))}
          </div>
        </header>

        {/* ==========================================================
            Contact Form
        ========================================================== */}

        <form className={styles.form}>
          {contactFields.map((field) => (
            <div key={field.id} className={styles.field}>
              <label htmlFor={field.id}>{field.label}</label>

              {field.fieldType === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ) : (
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required={field.required}
                />
              )}
            </div>
          ))}

          {/* ======================================================
              Submit Button
          ====================================================== */}

          <Button type="submit" variant="secondary" size="lg">
            {form.submitButton}
          </Button>
        </form>
      </Container>
    </Section>
  );
};

/* =============================================================================
   Export
============================================================================= */

export default ContactForm;
