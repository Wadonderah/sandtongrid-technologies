/******************************************************************************
File: ContactForm.tsx
------------------------------------------------------------------------------
Purpose:
Displays the enquiry form for prospective customers.

Responsibilities:
- Render the contact form.
- Read all business content from the centralized Contact data source.
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

import styles from "./ContactForm.module.css";

import type { ContactFormProps } from "./ContactForm.types";

/* =============================================================================
   Component
============================================================================= */

const ContactForm: FC<ContactFormProps> = ({ className = "" }) => {
  /* -------------------------------------------------------------------------
       Read form content from the centralized Contact data source.
    ------------------------------------------------------------------------- */

  const { form } = contact;

  return (
    <Section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {/* ==========================================================
                    Section Header
                ========================================================== */}

        <header className={styles.header}>
          <h2 className={styles.title}>{form.title}</h2>

          <p className={styles.description}>{form.description}</p>
        </header>

        {/* ==========================================================
                    Contact Form
                ========================================================== */}

        <form className={styles.form}>
          {/* ------------------------------------------------------
                        Full Name
                    ------------------------------------------------------- */}

          <div className={styles.field}>
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* ------------------------------------------------------
                        Email Address
                    ------------------------------------------------------- */}

          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* ------------------------------------------------------
                        Company
                    ------------------------------------------------------- */}

          <div className={styles.field}>
            <label htmlFor="company">Company</label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter your company name"
            />
          </div>

          {/* ------------------------------------------------------
                        Subject
                    ------------------------------------------------------- */}

          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          {/* ------------------------------------------------------
                        Message
                    ------------------------------------------------------- */}

          <div className={styles.field}>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
            />
          </div>

          {/* ======================================================
                        Submit Button
                    ====================================================== */}

          <Button type="submit" variant="secondary">
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
