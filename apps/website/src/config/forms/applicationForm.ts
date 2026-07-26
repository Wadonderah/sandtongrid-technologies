/**
 * =============================================================================
 * File: applicationForm.ts
 * -----------------------------------------------------------------------------
 * Purpose:
 * Configuration for the Job Application Form.
 * =============================================================================
 */

export interface ApplicationField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
  autoComplete?: string;
  fieldType?: "input" | "textarea";
  rows?: number;
  accept?: string;
}

export const applicationFields: ApplicationField[] = [
  {
    id: "position",
    name: "position",
    label: "Position Applying For",
    type: "text",
    required: true,
    autoComplete: "off",
  },
  {
    id: "fullName",
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    autoComplete: "name",
  },
  {
    id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
    autoComplete: "email",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
    autoComplete: "tel",
  },
  {
    id: "linkedin",
    name: "linkedin",
    label: "LinkedIn Profile",
    type: "url",
    placeholder: "https://linkedin.com/in/your-profile",
    required: false,
    autoComplete: "url",
  },
  {
    id: "github",
    name: "github",
    label: "GitHub / Portfolio",
    type: "url",
    placeholder: "https://github.com/yourusername",
    required: false,
    autoComplete: "url",
  },
  {
    id: "resume",
    name: "resume",
    label: "Upload Resume",
    type: "file",
    required: true,
    accept: ".pdf,.doc,.docx",
  },
  {
    id: "coverLetter",
    name: "coverLetter",
    label: "Cover Letter",
    type: "text",
    placeholder:
      "Tell us why you're interested in joining Sandtongrid Technologies...",
    required: true,
    fieldType: "textarea",
    rows: 8,
  },
];
