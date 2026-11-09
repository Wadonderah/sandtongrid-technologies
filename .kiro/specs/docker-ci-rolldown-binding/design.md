# docker-ci-rolldown-binding Bugfix Design

## Overview

The `docker-ci` job in `.github/workflows/oidc-pipeline.yml` fails during the "Build Website" step
because it calls `npm run build` directly without first performing a clean Linux reinstall. The
preceding "Lint Website" step already does the correct reinstall (`rm -rf node_modules package-lock.json
&& npm install --include=optional --os=linux --cpu=x64 --libc=glibc`), but the "Build Website" step
that immediately follows it skips that reinstall and runs `npm run build` against whatever
`node_modules` state was left by the lint step.

The fix is minimal: replicate the same clean reinstall block in the "Build Website" step so the Linux
binding (`@rolldown/binding-linux-x64-gnu`) is always present before `npm run build` is invoked. No
other job or step needs to change.

## Glossary

- **Bug_Condition (C)**: The condition that triggers the bug — the "Build Website" step in `docker-ci`
  invokes `npm run build` without first performing a clean Linux reinstall.
- **Property (P)**: The desired behavior — `npm run build` succeeds on the Linux runner because the
  correct platform-specific binding is installed.
- **Preservation**: The existing behaviour of all other steps and jobs (Lint Website, website-deploy
  build, Docker image build, smoke test, cleanup) that must remain unchanged by this fix.
- **docker-ci job**: The `docker-ci` job in `.github/workflows/oidc-pipeline.yml` responsible for
  building and smoke-testing the Docker image, linting the website source, and verifying the website
  builds cleanly.
- **rolldown native binding**: The platform-specific npm optional dependency
  `@rolldown/binding-linux-x64-gnu` required by Vite 8 on Linux x64 glibc runners.
- **clean Linux reinstall**: The three-command sequence
  `rm -rf node_modules package-lock.json && npm install --include=optional --os=linux --cpu=x64 --libc=glibc`
  that forces npm to resolve and download the correct Linux binding.

## Bug Details

### Bug Condition

The bug manifests when the "Build Website" step executes in the `docker-ci` job on a Linux runner.
The step calls `npm run build` without the preceding clean reinstall, so Vite 8 cannot find the
rolldown Linux x64 native binding and aborts with a module-not-found error.

**Formal Specification:**
```
FUNCTION isBugCondition(step)
  INPUT: step — a GitHub Actions step configuration object
  OUTPUT: boolean

  RETURN step.job             == "docker-ci"
         AND step.name        == "Build Website"
         AND step.run         DOES NOT CONTAIN "rm -rf node_modules"
         AND step.run         DOES NOT CONTAIN "--os=linux --cpu=x64 --libc=glibc"
         AND step.run         CONTAINS "npm run build"
END FUNCTION
```

### Examples

- **Bug present**: "Build Website" step in `docker-ci` contains only `npm run build` → Vite fails
  with `Cannot find module '@rolldown/binding-linux-x64-gnu'`.
- **Bug absent (Lint step)**: "Lint Website" step in `docker-ci` runs
  `rm -rf node_modules package-lock.json && npm install --include=optional --os=linux --cpu=x64 --libc=glibc && npm run lint`
  → lint succeeds because the Linux binding is installed.
- **Bug absent (website-deploy)**: "Build Website" step in `website-deploy` also includes the clean
  reinstall before `npm run build` → build succeeds in that job.
- **Edge case**: If a future refactor removes the lint step, the missing reinstall in "Build Website"
  would still cause a failure; the fix is self-contained so it stays correct regardless.

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- The "Lint Website" step in `docker-ci` must continue to perform its own clean reinstall with Linux
  platform flags before running `npm run lint`.
- The "Build Website" step in `website-deploy` must continue to perform its existing clean reinstall
  followed by `npm run build`, without modification.
- The Docker image build, container start, smoke-test (curl), wait, and cleanup steps in `docker-ci`
  must continue to execute in their current order and with their current configuration.
- The `publish-image`, `terraform-check`, `terraform-plan`, `terraform-apply`, and `website-deploy`
  jobs must remain entirely unaffected by this change.

**Scope:**
All steps that do NOT correspond to the "Build Website" step inside the `docker-ci` job should be
completely unaffected by this fix. This includes:
- Every step in every other job.
- The "Lint Website" step within `docker-ci` (it already has the correct reinstall).
- The Docker and cloud-related steps within `docker-ci`.

## Hypothesized Root Cause

Based on the bug description and workflow file, the root cause is:

1. **Missing reinstall before build**: The "Build Website" step only contains `npm run build`. It does
   not perform a clean reinstall, so it inherits whatever `node_modules` is on disk after the lint
   step. Although the lint step installed Linux bindings, the state of `node_modules` after lint may
   not be identical to what a fresh install produces — and in any case the step was written without
   the guard, making it fragile.

2. **Cross-platform lock file**: The `package-lock.json` committed from a Windows development machine
   records only the Windows rolldown binding (`@rolldown/binding-win32-x64-msvc`). On a Linux runner,
   `npm ci` would install only what the lock file records, omitting the Linux binding. The lint step
   already works around this with `--os=linux --cpu=x64 --libc=glibc`, but the build step does not.

3. **Step isolation assumption**: The "Build Website" step was likely written assuming that whatever
   `node_modules` the lint step left behind would be sufficient for the build. This assumption breaks
   when the lint step's install does not also satisfy the build's module requirements, or when the
   steps are reordered or the lint step is removed.

4. **No shared install step**: The `docker-ci` job has no dedicated install step that all subsequent
   npm steps depend on. Each npm step that needs a clean Linux install must include it explicitly.

## Correctness Properties

Property 1: Bug Condition - Build Website Step Performs Clean Linux Reinstall

_For any_ "Build Website" step configuration in the `docker-ci` job where the bug condition holds
(isBugCondition returns true — i.e., the step runs `npm run build` without a prior clean Linux
reinstall), the fixed step configuration SHALL include `rm -rf node_modules package-lock.json`,
`npm install --include=optional --os=linux --cpu=x64 --libc=glibc`, and `npm run build` in that
order, ensuring the rolldown Linux x64 native binding is present before the build executes.

**Validates: Requirements 2.1, 2.2**

Property 2: Preservation - Other Steps and Jobs Remain Unchanged

_For any_ step or job configuration where the bug condition does NOT hold (isBugCondition returns
false — i.e., it is not the "Build Website" step in `docker-ci`), the fixed workflow file SHALL
produce the same configuration as the original workflow file, preserving all existing step
commands, ordering, conditions, and job dependencies.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `.github/workflows/oidc-pipeline.yml`

**Job**: `docker-ci`

**Step**: `Build Website`

**Specific Changes**:

1. **Add clean reinstall before build**: Replace the single-line `npm run build` run block with the
   three-command sequence already used by the "Lint Website" step and the `website-deploy` job:
   ```yaml
   run: |
     rm -rf node_modules package-lock.json
     npm install --include=optional --os=linux --cpu=x64 --libc=glibc
     npm run build
   ```

2. **No other changes**: All other steps in `docker-ci` and all other jobs remain exactly as they are.
   The fix is a single step modification confined to the `docker-ci` job's "Build Website" step.

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the
bug on the unfixed workflow, then verify the fix works correctly and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bug BEFORE implementing the fix. Confirm or
refute the root cause analysis. If we refute, we will need to re-hypothesize.

**Test Plan**: Write tests that parse the YAML workflow file and assert that every npm build step in
`docker-ci` includes the clean Linux reinstall commands. Run these tests against the UNFIXED workflow
file to observe failures and confirm the root cause.

**Test Cases**:
1. **Build Website step has reinstall** (will fail on unfixed code): Assert that the "Build Website"
   step's `run` block contains `rm -rf node_modules` and `--os=linux --cpu=x64 --libc=glibc`.
2. **Build Website step order** (will fail on unfixed code): Assert that the clean reinstall commands
   appear before `npm run build` in the step's `run` block.
3. **Lint step still has reinstall** (should pass on unfixed code): Assert that the "Lint Website"
   step still contains the existing reinstall block — confirms the lint step was not accidentally
   broken.
4. **No extra steps introduced** (may fail on unfixed code): Assert that the step count in `docker-ci`
   has not unexpectedly changed.

**Expected Counterexamples**:
- The "Build Website" step's `run` block is a single line (`npm run build`) with no reinstall.
- Possible causes: step was written without the guard, steps were split without propagating the
  install, or the lint step's install was assumed to persist.

### Fix Checking

**Goal**: Verify that for all "Build Website" step configurations where the bug condition holds, the
fixed configuration produces the expected behavior.

**Pseudocode:**
```
FOR ALL step WHERE isBugCondition(step) DO
  fixedStep := applyFix(step)
  ASSERT fixedStep.run CONTAINS "rm -rf node_modules package-lock.json"
  ASSERT fixedStep.run CONTAINS "npm install --include=optional --os=linux --cpu=x64 --libc=glibc"
  ASSERT fixedStep.run CONTAINS "npm run build"
  ASSERT indexOf("npm run build") > indexOf("npm install") IN fixedStep.run
END FOR
```

### Preservation Checking

**Goal**: Verify that for all steps and jobs where the bug condition does NOT hold, the fixed workflow
file produces the same configuration as the original.

**Pseudocode:**
```
FOR ALL step WHERE NOT isBugCondition(step) DO
  ASSERT originalWorkflow[step] = fixedWorkflow[step]
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain (all steps/jobs in the file).
- It catches accidental edits to unrelated steps that manual review might miss.
- It provides strong guarantees that the fix is truly minimal and confined.

**Test Plan**: Parse the original workflow file, apply the fix, then compare every step and job that
is not the "Build Website" step in `docker-ci`.

**Test Cases**:
1. **Lint Website step preservation**: Verify the "Lint Website" step's `run` block is unchanged
   after applying the fix.
2. **website-deploy Build Website preservation**: Verify the `website-deploy` job's "Build Website"
   step is unchanged.
3. **Docker/smoke-test steps preservation**: Verify all Docker build, start, wait, verify, and
   cleanup steps in `docker-ci` are unchanged.
4. **Other jobs preservation**: Verify `terraform-check`, `terraform-plan`, `terraform-apply`,
   `publish-image`, and `changes` jobs are all unchanged.

### Unit Tests

- Test that the fixed "Build Website" step's `run` block contains all three required commands in
  the correct order.
- Test that no other steps in `docker-ci` were modified.
- Test that the `working-directory` and other step metadata remain unchanged.

### Property-Based Tests

- Generate random permutations of the three reinstall commands and verify only the correct order
  (clean → install → build) satisfies the bug condition fix.
- For all steps in the fixed workflow file where `isBugCondition` is false, assert that each step's
  YAML representation equals the corresponding step in the original file.
- Generate random additional steps and verify that inserting them elsewhere in the job does not
  affect the fix check result.

### Integration Tests

- Trigger the `docker-ci` job on a branch and verify it completes successfully end-to-end.
- Verify that the "Lint Website" and "Build Website" steps both pass in the same job run.
- Verify that the Docker smoke test (curl to localhost:8080) still passes after the fix is applied.
