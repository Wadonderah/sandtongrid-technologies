/**
 * =============================================================================
 * File: App.tsx
 * -----------------------------------------------------------------------------
 * Purpose:
 * Root application component.
 *
 * Responsibilities:
 * - Configure application routing.
 * - Lazy-load pages.
 * - Use centralized route configuration.
 * - Restore section scrolling after navigation.
 * - Display a shared loading UI.
 * - Wrap every page with the shared layout.
 * =============================================================================
 */

import { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { appRoutes } from "./config/routes/routes";

import PageLoader from "./components/common/PageLoader";
import Layout from "./components/layout/Layout";

import useScrollRestoration from "./utils/navigation/useScrollRestoration";

/* =============================================================================
   Lazy Loaded Pages
============================================================================= */

const HomePage = lazy(() => import("./pages/HomePage"));

const AboutPage = lazy(() => import("./pages/AboutPage"));

const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));

const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));

const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));

const CareersPage = lazy(() => import("./pages/CareersPage"));

const ContactPage = lazy(() => import("./pages/ContactPage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/* =============================================================================
   Route Component Map
============================================================================= */

const pageComponents = {
  "/": HomePage,

  "/about": AboutPage,

  "/services": ServicesPage,

  "/case-studies": CaseStudiesPage,

  "/industries": IndustriesPage,

  "/resources": ResourcesPage,

  "/careers": CareersPage,

  "/contact": ContactPage,
} as const;

/* =============================================================================
   Navigation Manager
============================================================================= */

const NavigationManager = () => {
  useScrollRestoration();

  return null;
};

/* =============================================================================
   Application
============================================================================= */

function App() {
  return (
    <BrowserRouter>
      <NavigationManager />

      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {appRoutes.map((route) => {
              const Component =
                pageComponents[route.path as keyof typeof pageComponents];

              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
