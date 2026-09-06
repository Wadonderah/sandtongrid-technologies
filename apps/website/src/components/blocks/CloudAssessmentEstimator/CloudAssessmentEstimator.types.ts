/******************************************************************************
File: CloudAssessmentEstimator.types.ts
------------------------------------------------------------------------------
Purpose:
TypeScript types for the interactive Cloud Assessment & ROI Estimator.
******************************************************************************/

export type EnvironmentType = "on-prem" | "early-cloud" | "hybrid" | "multi-cloud";

export type DeploymentCadence = "monthly" | "biweekly" | "weekly" | "daily";

export type FocusArea = "finops" | "devops" | "kubernetes" | "security";

export interface AssessmentState {
  environment: EnvironmentType;
  monthlySpend: number;
  deploymentCadence: DeploymentCadence;
  focusArea: FocusArea;
}

export interface CalculationResult {
  annualSpend: number;
  estimatedAnnualSavingsMin: number;
  estimatedAnnualSavingsMax: number;
  velocityMultiplier: string;
  incidentReductionPct: number;
  recommendedArchitecture: string;
  recommendedServices: string[];
  roadmapPhases: Array<{
    phase: string;
    duration: string;
    deliverable: string;
  }>;
}
