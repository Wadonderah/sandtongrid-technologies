/**
 * =============================================================================
 * File: contactForm.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Centralized configuration for the Contact form.
 * =============================================================================
 */

export interface ContactField {
  id: string;
  name: string;
  label: string;

  type?: string;
  fieldType?: "input" | "textarea";

  placeholder: string;

  autoComplete?: string;

  required: boolean;

  rows?: number;
}

export const contactFields: ContactField[] = [
  {
    id: "fullName",
    name: "fullName",
    type: "text",
    fieldType: "input",
    label: "Full Name",
    placeholder: "Enter your full name",
    autoComplete: "name",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    fieldType: "input",
    label: "Email Address",
    placeholder: "Enter your email address",
    autoComplete: "email",
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    type: "tel",
    fieldType: "input",
    label: "Phone Number",
    placeholder: "Optional",
    autoComplete: "tel",
    required: false,
  },
  {
    id: "company",
    name: "company",
    type: "text",
    fieldType: "input",
    label: "Company",
    placeholder: "Your organization",
    autoComplete: "organization",
    required: false,
  },
  {
    id: "subject",
    name: "subject",
    type: "text",
    fieldType: "input",
    label: "Subject",
    placeholder: "How can we help?",
    required: true,
  },
  {
    id: "message",
    name: "message",
    fieldType: "textarea",
    label: "Message",
    placeholder: "Tell us about your project or enquiry...",
    required: true,
    rows: 7,
  },
];

export default contactFields;
