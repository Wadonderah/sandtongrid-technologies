/******************************************************************************
File: vite.config.ts
------------------------------------------------------------------------------
Purpose:
Configure Vite.

Responsibilities:
- Configure React.
- Configure path aliases.
******************************************************************************/

import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
