# Bugfix: docker-ci-rolldown-binding

## Introduction

The `docker-ci` job ("Build and Smoke Test Docker Image") in `.github/workflows/oidc-pipeline.yml` fails during its "Build Website" step because `@rolldown/binding-linux-x64-gnu` — the native Linux binding required by Vite/Rolldown — is not installed. The step executes `npm run build` directly without first performing the clean Linux reinstall that the other equivalent steps already use, so the binding is never present on the runner.

---

## Bug Analysis

### Current Behavior (Defect)

The "Build Website" step inside the `docker-ci` job contains only:

```yaml
- name: Build Website
  working-directory: apps/website
  run: npm run build
```

When this step runs on the `ubuntu-latest` GitHub Actions runner, `node_modules` does not contain the `@rolldown/binding-linux-x64-gnu` optional dependency because it was never explicitly installed for the Linux x64 glibc platform. The build fails with an error such as:

```
Cannot find module '@rolldown/binding-linux-x64-gnu'
```

**Bug Condition (isBugCondition):**

```
step.job == "docker-ci"
AND step.name == "Build Website"
AND step.run does NOT include "npm install --include=optional --os=linux --cpu=x64 --libc=glibc"
```

### Expected Behavior (Correct)

The "Build Website" step in `docker-ci` MUST perform the same clean Linux reinstall used by the two other equivalent steps in the workflow before calling `npm run build`:

```yaml
- name: Build Website
  working-directory: apps/website
  run: |
    rm -rf node_modules package-lock.json
    npm install --include=optional --os=linux --cpu=x64 --libc=glibc
    npm run build
```

**expectedBehavior:**

```
step.job == "docker-ci"
AND step.name == "Build Website"
AND step.run starts with "rm -rf node_modules package-lock.json"
AND step.run includes "npm install --include=optional --os=linux --cpu=x64 --libc=glibc"
AND step.run ends with "npm run build"
AND the build exits with code 0
```

This matches the pattern already present in:

- `docker-ci` → "Lint Website" step
- `website-deploy` → "Build Website" step

### Unchanged Behavior (Regression Prevention)

The following must remain identical after the fix:

1. **`docker-ci` → "Lint Website" step** — already uses the clean reinstall pattern; `run` block must not be modified.
2. **`website-deploy` → "Build Website" step** — already uses the clean reinstall pattern; `run` block must not be modified.
3. **All other jobs and steps** in `oidc-pipeline.yml` — no other step, job, environment variable, trigger, or permission is touched.
4. **Job execution order and step sequence** within `docker-ci` — only the `run` block of the "Build Website" step changes; all surrounding steps remain intact.

---

## Requirements

### 1. Bug Condition

- **1.1** The bug is triggered when the `docker-ci` "Build Website" step executes `npm run build` without first installing optional Linux-platform dependencies, causing the Vite build to fail with a missing native binding error.

### 2. Expected Behavior

- **2.1** After the fix, the `docker-ci` "Build Website" step MUST remove `node_modules` and `package-lock.json` before reinstalling dependencies.
- **2.2** After the fix, the `npm install` command MUST include the flags `--include=optional --os=linux --cpu=x64 --libc=glibc`.
- **2.3** After the fix, `npm run build` MUST succeed and the `docker-ci` job MUST pass.

### 3. Preservation Requirements

- **3.1** The `docker-ci` "Lint Website" step `run` block MUST remain unchanged.
- **3.2** The `website-deploy` "Build Website" step `run` block MUST remain unchanged.
- **3.3** No other steps, jobs, triggers, permissions, or environment variables in `oidc-pipeline.yml` MUST be modified.
