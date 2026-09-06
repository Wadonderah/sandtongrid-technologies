/******************************************************************************
File: CloudAssessmentEstimator.tsx
------------------------------------------------------------------------------
Purpose:
Interactive Cloud Maturity & ROI Estimator for enterprise decision makers.
Allows users to input infrastructure scale and obtain estimated cost savings,
deployment velocity boosts, and AWS architecture recommendations.
******************************************************************************/

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import styles from "./CloudAssessmentEstimator.module.css";
import type {
  EnvironmentType,
  DeploymentCadence,
  FocusArea,
  AssessmentState,
  CalculationResult,
} from "./CloudAssessmentEstimator.types";

const SPEND_PRESETS = [3000, 10000, 25000, 50000, 100000];

const ENVIRONMENT_OPTIONS: Array<{
  id: EnvironmentType;
  title: string;
  desc: string;
}> = [
  {
    id: "on-prem",
    title: "On-Premises / Data Center",
    desc: "Physical servers, co-location, or legacy virtualization",
  },
  {
    id: "early-cloud",
    title: "Early AWS / Single Cloud",
    desc: "Lift-and-shift VMs, unoptimized instances, manual ops",
  },
  {
    id: "hybrid",
    title: "Hybrid Infrastructure",
    desc: "Mixed on-premises and AWS cloud environments",
  },
  {
    id: "multi-cloud",
    title: "Multi-Cloud / Fragmented",
    desc: "Workloads dispersed across multiple providers",
  },
];

const CADENCE_OPTIONS: Array<{
  id: DeploymentCadence;
  title: string;
  desc: string;
}> = [
  { id: "monthly", title: "Monthly / Slower", desc: "Heavy change approvals" },
  { id: "biweekly", title: "Bi-Weekly Sprints", desc: "Manual release testing" },
  { id: "weekly", title: "Weekly Automated", desc: "Basic CI/CD pipeline" },
  { id: "daily", title: "Daily / On-Demand", desc: "Automated test suites" },
];

const FOCUS_OPTIONS: Array<{
  id: FocusArea;
  title: string;
  desc: string;
}> = [
  {
    id: "finops",
    title: "Cloud Cost Reduction (FinOps)",
    desc: "Graviton, rightsizing & auto-scaling",
  },
  {
    id: "devops",
    title: "CI/CD & Terraform IaC",
    desc: "Automated pipelines & release velocity",
  },
  {
    id: "kubernetes",
    title: "Kubernetes / EKS Modernization",
    desc: "Microservices & container orchestration",
  },
  {
    id: "security",
    title: "Security & AWS Well-Architected",
    desc: "WAF, KMS, IAM, Zero-Trust compliance",
  },
];

export const CloudAssessmentEstimator = () => {
  const [state, setState] = useState<AssessmentState>({
    environment: "early-cloud",
    monthlySpend: 25000,
    deploymentCadence: "biweekly",
    focusArea: "finops",
  });

  const [copied, setCopied] = useState(false);

  // Dynamic calculations based on industry benchmarks & AWS Well-Architected Framework
  const results: CalculationResult = useMemo(() => {
    const annualSpend = state.monthlySpend * 12;

    // Savings rates vary by environment maturity
    let minRate = 0.22;
    let maxRate = 0.35;

    if (state.environment === "on-prem") {
      minRate = 0.3;
      maxRate = 0.48;
    } else if (state.environment === "early-cloud") {
      minRate = 0.25;
      maxRate = 0.4;
    } else if (state.focusArea === "finops") {
      minRate = 0.28;
      maxRate = 0.42;
    }

    const estimatedAnnualSavingsMin = Math.round(annualSpend * minRate);
    const estimatedAnnualSavingsMax = Math.round(annualSpend * maxRate);

    // Velocity multiplier calculation
    let velocityMultiplier: string;
    if (state.deploymentCadence === "monthly") velocityMultiplier = "9.2x";
    else if (state.deploymentCadence === "biweekly") velocityMultiplier = "6.4x";
    else if (state.deploymentCadence === "weekly") velocityMultiplier = "3.8x";
    else velocityMultiplier = "2.1x";

    // Downtime & incident reduction
    let incidentReductionPct = 78;
    if (state.environment === "on-prem") incidentReductionPct = 84;
    if (state.focusArea === "kubernetes") incidentReductionPct = 82;

    // Architecture recommendation
    let recommendedArchitecture = "AWS Well-Architected Landing Zone + Container Fleet";
    let recommendedServices = [
      "AWS Organizations",
      "Amazon EKS",
      "Terraform / OpenTofu",
      "AWS Graviton3",
      "Amazon CloudWatch",
      "AWS WAF",
    ];

    if (state.focusArea === "finops") {
      recommendedArchitecture = "AWS FinOps Auto-Scaling & Graviton Engine";
      recommendedServices = [
        "AWS Compute Optimizer",
        "AWS Cost Anomaly Detection",
        "AWS Graviton Instances",
        "Auto Scaling & Spot Fleets",
        "AWS Savings Plans",
      ];
    } else if (state.focusArea === "devops") {
      recommendedArchitecture = "GitOps Enterprise Pipeline & Multi-Region IaC";
      recommendedServices = [
        "Terraform Enterprise / Cloud",
        "GitHub Actions / AWS CodePipeline",
        "ArgoCD / Helm",
        "AWS KMS & Secrets Manager",
        "Datadog / Prometheus",
      ];
    } else if (state.focusArea === "kubernetes") {
      recommendedArchitecture = "Production-Grade Amazon EKS Microservices Platform";
      recommendedServices = [
        "Amazon EKS (Kubernetes 1.30+)",
        "AWS Load Balancer Controller",
        "Karpenter Node Autoscaling",
        "Cilium CNI / Network Policies",
        "AWS Distro for OpenTelemetry",
      ];
    } else if (state.focusArea === "security") {
      recommendedArchitecture = "Zero-Trust Cloud Landing Zone with Automated Guardrails";
      recommendedServices = [
        "AWS Control Tower & SCPs",
        "AWS Security Hub & GuardDuty",
        "AWS WAF & Shield Advanced",
        "IAM Identity Center (SSO)",
        "AWS KMS Customer Managed Keys",
      ];
    }

    const roadmapPhases = [
      {
        phase: "Phase 1",
        duration: "Weeks 1–2",
        deliverable: "AWS Well-Architected Audit & Cost Discovery Blueprint",
      },
      {
        phase: "Phase 2",
        duration: "Weeks 3–5",
        deliverable: "Automated Terraform IaC & Landing Zone Provisioning",
      },
      {
        phase: "Phase 3",
        duration: "Weeks 6–8",
        deliverable: "Zero-Downtime Migration & 24/7 SRE Monitoring Handover",
      },
    ];

    return {
      annualSpend,
      estimatedAnnualSavingsMin,
      estimatedAnnualSavingsMax,
      velocityMultiplier,
      incidentReductionPct,
      recommendedArchitecture,
      recommendedServices,
      roadmapPhases,
    };
  }, [state]);

  const formattedSpend = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(state.monthlySpend);

  const formattedSavingsMin = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(results.estimatedAnnualSavingsMin);

  const formattedSavingsMax = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(results.estimatedAnnualSavingsMax);

  const handleCopySummary = async () => {
    const text = `Sandtongrid Technologies - Cloud Architecture Assessment
Current Infrastructure: ${state.environment}
Monthly Cloud Spend: ${formattedSpend}
Target Focus: ${state.focusArea}
Estimated Annual Savings: ${formattedSavingsMin} - ${formattedSavingsMax}
Deployment Velocity Gain: ${results.velocityMultiplier}
Incident Reduction: ${results.incidentReductionPct}%
Recommended Architecture: ${results.recommendedArchitecture}
Key Services: ${results.recommendedServices.join(", ")}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="roi-estimator"
      className={styles.section}
      aria-labelledby="estimator-title"
    >
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Interactive Architecture Estimator</span>
          <h2 id="estimator-title" className={styles.title}>
            Calculate Your Cloud ROI & Architecture Roadmap
          </h2>
          <p className={styles.description}>
            Benchmark your current infrastructure footprint against AWS Well-Architected
            standards to forecast cost savings, release speed improvements, and recommended
            automation patterns.
          </p>
        </div>

        <div className={styles.grid}>
          {/* ==========================================================
              Interactive Form Inputs
          ========================================================== */}
          <div className={styles.formCard}>
            {/* Step 1: Environment */}
            <div className={styles.formGroup}>
              <div className={styles.groupLabel}>
                <span>1. Current Infrastructure Setup</span>
              </div>
              <div className={styles.optionGrid}>
                {ENVIRONMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`${styles.optionButton} ${
                      state.environment === opt.id ? styles.optionButtonActive : ""
                    }`}
                    onClick={() =>
                      setState((prev) => ({ ...prev, environment: opt.id }))
                    }
                    aria-pressed={state.environment === opt.id}
                  >
                    <span className={styles.optionTitle}>{opt.title}</span>
                    <span className={styles.optionDesc}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Monthly Spend */}
            <div className={styles.formGroup}>
              <div className={styles.groupLabel}>
                <span>2. Estimated Monthly Cloud / Server Spend</span>
                <span className={styles.groupHint}>Slide or choose preset</span>
              </div>
              <div className={styles.sliderWrapper}>
                <div className={styles.spendDisplay}>
                  <span style={{ fontSize: "0.9rem", color: "var(--color-text)" }}>
                    Current Monthly Budget:
                  </span>
                  <span className={styles.spendValue}>{formattedSpend}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={state.monthlySpend}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      monthlySpend: Number(e.target.value),
                    }))
                  }
                  className={styles.rangeSlider}
                  aria-label="Monthly cloud spend"
                />
                <div className={styles.presets}>
                  {SPEND_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      className={`${styles.presetChip} ${
                        state.monthlySpend === preset ? styles.presetChipActive : ""
                      }`}
                      onClick={() =>
                        setState((prev) => ({ ...prev, monthlySpend: preset }))
                      }
                    >
                      ${preset >= 1000 ? `${preset / 1000}k` : preset}/mo
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Deployment Cadence */}
            <div className={styles.formGroup}>
              <div className={styles.groupLabel}>
                <span>3. Production Release Cadence</span>
              </div>
              <div className={styles.optionGrid}>
                {CADENCE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`${styles.optionButton} ${
                      state.deploymentCadence === opt.id
                        ? styles.optionButtonActive
                        : ""
                    }`}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        deploymentCadence: opt.id,
                      }))
                    }
                    aria-pressed={state.deploymentCadence === opt.id}
                  >
                    <span className={styles.optionTitle}>{opt.title}</span>
                    <span className={styles.optionDesc}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Primary Goal */}
            <div className={styles.formGroup}>
              <div className={styles.groupLabel}>
                <span>4. Primary Modernization Objective</span>
              </div>
              <div className={styles.optionGrid}>
                {FOCUS_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`${styles.optionButton} ${
                      state.focusArea === opt.id ? styles.optionButtonActive : ""
                    }`}
                    onClick={() =>
                      setState((prev) => ({ ...prev, focusArea: opt.id }))
                    }
                    aria-pressed={state.focusArea === opt.id}
                  >
                    <span className={styles.optionTitle}>{opt.title}</span>
                    <span className={styles.optionDesc}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ==========================================================
              Live Dynamic Results Panel
          ========================================================== */}
          <div className={styles.resultsCard}>
            <span className={styles.resultsBadge}>Forecasted Optimization Impact</span>

            {/* Key Metrics */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricBlock}>
                <span className={styles.metricLabel}>Est. Annual Savings</span>
                <span className={`${styles.metricNumber} ${styles.metricHighlight}`}>
                  {formattedSavingsMin} – {formattedSavingsMax}
                </span>
                <span className={styles.metricSubtext}>via FinOps & Graviton</span>
              </div>

              <div className={styles.metricBlock}>
                <span className={styles.metricLabel}>Velocity Boost</span>
                <span className={styles.metricNumber}>{results.velocityMultiplier}</span>
                <span className={styles.metricSubtext}>faster deployment lead time</span>
              </div>

              <div className={styles.metricBlock}>
                <span className={styles.metricLabel}>Incident Drop</span>
                <span className={styles.metricNumber}>{results.incidentReductionPct}%</span>
                <span className={styles.metricSubtext}>fewer rollbacks via IaC</span>
              </div>
            </div>

            {/* Recommended Architecture Blueprint */}
            <div className={styles.blueprintBox}>
              <span className={styles.blueprintHeading}>
                <span>⚡</span> Recommended Architectural Pattern
              </span>
              <div className={styles.blueprintArchTitle}>
                {results.recommendedArchitecture}
              </div>
              <div className={styles.tagList}>
                {results.recommendedServices.map((service) => (
                  <span key={service} className={styles.serviceTag}>
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className={styles.formGroup}>
              <span className={styles.groupLabel}>Estimated Implementation Roadmap</span>
              <div className={styles.roadmapList}>
                {results.roadmapPhases.map((phase, idx) => (
                  <div key={phase.phase} className={styles.roadmapItem}>
                    <div className={styles.phaseNumber}>{idx + 1}</div>
                    <div className={styles.phaseText}>
                      <span className={styles.phaseTitle}>
                        {phase.phase} ({phase.duration}): {phase.deliverable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className={styles.actionRow}>
              <Link
                to={`/contact?subject=${encodeURIComponent(
                  `Architecture Assessment Request (${state.focusArea})`,
                )}&spend=${state.monthlySpend}`}
                className={styles.btnPrimary}
              >
                Schedule Engineering Consultation →
              </Link>
              <button
                type="button"
                onClick={handleCopySummary}
                className={styles.btnSecondary}
                aria-label="Copy assessment summary to clipboard"
              >
                {copied ? "✓ Copied" : "Copy Summary"}
              </button>
            </div>

            {copied && (
              <span className={styles.copiedNotification}>
                ✓ Assessment brief copied to clipboard. Ready to paste or share with your team.
              </span>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CloudAssessmentEstimator;
