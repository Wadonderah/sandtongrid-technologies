
# Sandtongrid Technologies — Cloud Infrastructure & Automated Delivery Platform

An enterprise-grade, serverless web hosting platform and corporate website built with **React**, **TypeScript**, and **Docker**, provisioned on **Amazon Web Services (AWS)** using **Terraform (IaC)**, and delivered via **GitHub Actions** with **keyless OpenID Connect (OIDC)** authentication.

---

## Architecture Overview

The platform is designed around a cost-effective, zero-maintenance, and highly secure serverless architecture. The website bucket is strictly private and unreachable from the public internet; traffic is routed exclusively through Amazon CloudFront edge locations via Origin Access Control (OAC).

```text
+-------------------+
| AWS ACM TLS       |
| (us-east-1)       |
+---------+---------+
          |
          v
User --> Route 53 --> CloudFront (CDN) ====== OAC (SigV4) ======> Private S3 Bucket
       (DNS Alias)    - HTTPS Only                                  - Public Access Blocked
                      - TLS 1.2+                                    - Static Web Assets
                      - Gzip/Brotli                                 - s3:GetObject only via CF
                              |
                              v
                         Access Logs
                              |
                              v
                       S3 Logging Bucket
````

### Key Infrastructure Components

* **Amazon CloudFront:** Global Content Delivery Network serving as the single public entry point, enforcing HTTPS redirection and TLS 1.2 minimum protocol.
* **Origin Access Control (OAC):** Secures communication between CloudFront and S3 using SigV4 request signing. Direct public access to S3 is blocked across all 4 AWS Public Access Block settings.
* **AWS Route 53 & ACM:** DNS management with alias A records pointing apex and www domains to CloudFront, backed by an ACM-managed TLS certificate validated via DNS.
* **S3 Logging & CloudWatch:** Dedicated, encrypted S3 bucket for CloudFront access logs alongside CloudWatch log groups with defined retention policies.
* **Terraform Remote State & Locking:** Remote state stored in a versioned, encrypted S3 bucket with an Amazon DynamoDB table (LockID) enforcing distributed state locking.

---

## Repository Structure

This repository is structured as a lightweight monorepo containing application code, container configurations, Terraform modules, and operational runbooks:

```text
.
├── apps/
│   └── website/ # React 19 + TypeScript corporate site (Vite, CSS Modules)
├── docker/
│   ├── Dockerfile.website # Multi-stage production build (Node 22 build -> Nginx Alpine)
│   ├── docker-compose.dev.yml # Local development container with hot-reloading
│   ├── docker-compose.yml # Production smoke test container
│   └── nginx/ # Custom Nginx configuration & healthcheck endpoint
├── infrastructure/
│   ├── bootstrap/
│   │   ├── backend/ # S3 state bucket + DynamoDB lock table provisioning
│   │   └── github-oidc/ # AWS IAM OIDC provider & role configuration for GitHub Actions
│   ├── environments/
│   │   ├── dev/ # Development environment definition
│   │   └── prod/ # Production environment orchestration
│   ├── modules/ # Reusable Terraform modules (acm, cloudfront, route53, s3, etc.)
│   └── scripts/ # Helper scripts for plan, apply, fmt, and validation
├── docs/
│   ├── architecture/ # Architecture RFCs & OIDC authentication resolution docs
│   └── runbooks/ # Operational runbooks (e.g., Terraform state lock recovery)
└── .github/workflows/ # Automated CI/CD pipelines
```

---

## CI/CD & Deployment Pipeline

All infrastructure updates and web deployments are automated via GitHub Actions with zero long-lived credentials stored in the repository.

### 1. Keyless AWS Authentication (GitHub OIDC)

Deployments use an IAM OpenID Connect (OIDC) identity provider with temporary AWS STS credentials (`sts:AssumeRoleWithWebIdentity`). The IAM Trust Policy enforces least privilege by strictly matching the repository subject claims and GitHub Environment (production).

### 2. Workflow Pipelines (`.github/workflows/`)

* **terraform-prod.yml:**

  * **Pull Requests:** Runs `terraform fmt`, `terraform validate`, and generates a speculative `terraform plan`.
  * **Push to main:** Requires production environment approval, assumes the deployment IAM role, applies Terraform changes, compiles the React website, syncs assets to S3 (`aws s3 sync ... --delete`), and invalidates the CloudFront cache (`/*`).
* **docker.yml:** Builds and validates multi-stage Docker images on pull requests.
* **publish.yml:** Publishes versioned container images to GitHub Container Registry (GHCR).

---

## Local Development

### Prerequisites

* **Docker** & Docker Compose, or
* **Node.js 20+** & npm

### Option A: Using Docker (Recommended)

Isolates development dependencies and mirrors containerized execution:

```bash
# Start the local development server with hot module replacement:
docker compose -f docker/docker-compose.dev.yml up
```

The app will be available at `http://localhost:5173`.

To stop the container:

```bash
docker compose -f docker/docker-compose.dev.yml down
```

### Option B: Running Locally with Node

```bash
# Install workspace dependencies
npm install

# Run local dev server
npm run dev

# Run linter
npm run lint

# Run production build
npm run build
```

### Option C: Production Container Smoke Test

Test the multi-stage Alpine Nginx container locally:

```bash
docker compose -f docker/docker-compose.yml up --build
```

Access `http://localhost:8080` to verify the compiled static bundle and Nginx reverse proxy.

---

## Infrastructure Management

The Terraform configurations follow standard modular conventions.

### Formatting & Validation

```bash
cd infrastructure/environments/prod
terraform init
terraform fmt -check
terraform validate
terraform plan
```

### Branch Promotion Flow

1. Feature branches are cut from `develop`.
2. Pull requests against `develop` run automated linting, test suites, and Docker build checks.
3. Pull requests into `main` trigger a speculative `terraform plan` check.
4. Merges into `main` deploy the live website and apply infrastructure changes via the protected production GitHub environment.

---

## Engineering Challenges Solved

A summary of key challenges addressed during platform design and implementation:

1. **GitHub OIDC Token Claim Hardening:**

   Resolved an issue where AWS rejected GitHub OIDC authentication after GitHub introduced embedded numeric IDs in token subject claims (`repo:org@id/repo@id:ref:...`). Configured the IAM Trust Policy to safely evaluate subject claim arrays across both branch refs and protected GitHub environment contexts. *(Detailed in `docs/architecture/OIDC Authentication.md`)*.

2. **Resilient CI/CD Dependency Tracking:**

   Corrected `.gitignore` exclusion rules that blocked build lockfiles from version control, restoring deterministic `npm ci` builds across Docker multi-stage pipelines and GitHub Actions runners.

3. **Strict Origin Security with CloudFront OAC:**

   Replaced legacy S3 website endpoints with a private S3 bucket policy backed by Origin Access Control (OAC), ensuring all requests must be signed with SigV4 and originate exclusively from the CloudFront distribution ARN.

4. **Responsive Grid Layouts & Word Boundary Constraints:**

   Fixed continuous-string layout overflows on contact and communication modules using CSS Grid `min-width: 0`; containment and modern `overflow-wrap: anywhere;` rules.

---

## Documentation & Runbooks

Additional operational reference materials located in `/docs`:

* **Production Architecture Document** — Comprehensive infrastructure breakdown and security rationale.
* **OIDC Authentication Resolution** — Debugging process and policy updates for GitHub Actions AWS federation.
* **Terraform State Lock Runbook** — Procedure for identifying and recovering from stale DynamoDB state locks.

---

## License

This project is licensed under the MIT License — see the **LICENSE** file for details.

```
```
