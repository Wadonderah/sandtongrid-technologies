/******************************************************************************
File: environment.ts
------------------------------------------------------------------------------
Purpose:
Centralized environment variables.
******************************************************************************/

export const ENVIRONMENT = {
  mode: import.meta.env.MODE,

  isDevelopment: import.meta.env.DEV,

  isProduction: import.meta.env.PROD,

  baseUrl: import.meta.env.BASE_URL,
} as const;
