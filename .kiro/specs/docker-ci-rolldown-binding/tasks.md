# Implementation Plan

## Overview

Fix the `docker-ci` "Build Website" step by adding the clean Linux reinstall before `npm run build`, matching the pattern used in the adjacent "Lint Website" step and the `website-deploy` "Build Website" step.

## Task Dependency Graph

```json
{
  "waves": [
    { "wave": 1, "tasks": ["1"] },
    { "wave": 2, "tasks": ["2"] },
    { "wave": 3, "tasks": ["3"] },
    { "wave": 4, "tasks": ["4"] }
  ]
}
```

## Tasks

- [ ] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Missing Linux Reinstall in docker-ci Build Website Step
  - **CRITICAL**: This test MUST FAIL on unfixed code — failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior — it will validate the fix when it passes after implementation
  - **GOAL**: Surface the concrete counterexample that demonstrates the bug exists
  - **Scoped PBT Approach**: The bug is deterministic — scope the property to the concrete failing case: the `run` block of the "Build Website" step in the `docker-ci` job in `.github/workflows/oidc-pipeline.yml`
  - Parse `.github/workflows/oidc-pipeline.yml` and locate the `docker-ci` job's "Build Website" step `run` block
  - Assert that the `run` block contains `npm install --include=optional --os=linux --cpu=x64 --libc=glibc` (from Bug Condition in bugfix.md § "Bug Analysis → Current Behavior")
  - Run the test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS — the assertion fails because the flag string is absent, confirming the bug exists
  - Document the counterexample: `docker-ci` "Build Website" `run` = `"npm run build"` (missing the reinstall)
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 1.1_

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Lint and Deploy Build Steps Remain Unchanged
  - **IMPORTANT**: Follow observation-first methodology
  - Observe on UNFIXED code:
    - `docker-ci` "Lint Website" `run` block contains `rm -rf node_modules package-lock.json`, `npm install --include=optional --os=linux --cpu=x64 --libc=glibc`, and `npm run lint`
    - `website-deploy` "Build Website" `run` block contains `rm -rf node_modules package-lock.json`, `npm install --include=optional --os=linux --cpu=x64 --libc=glibc`, and `npm run build`
  - Write property-based tests:
    - For all steps in `docker-ci` except "Build Website": assert their `run` blocks are byte-for-byte identical before and after the change
    - For all steps in `website-deploy`: assert their `run` blocks are byte-for-byte identical before and after the change
    - For all other jobs: assert no modification (from Preservation Requirements in bugfix.md § 3)
  - Verify tests PASS on UNFIXED code (confirms observed baseline)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3_

- [ ] 3. Fix the missing Linux reinstall in docker-ci "Build Website" step
  - [ ] 3.1 Implement the fix
    - Open `.github/workflows/oidc-pipeline.yml`
    - Locate the `docker-ci` job → "Build Website" step
    - Replace the `run` block:
      - **Before:** `run: npm run build`
      - **After:**
        ```yaml
        run: |
          rm -rf node_modules package-lock.json
          npm install --include=optional --os=linux --cpu=x64 --libc=glibc
          npm run build
        ```
    - Ensure the `working-directory: apps/website` line is preserved unchanged
    - _Bug_Condition: isBugCondition(step) where step.job="docker-ci", step.name="Build Website", step.run lacks "npm install --include=optional --os=linux --cpu=x64 --libc=glibc"_
    - _Expected_Behavior: expectedBehavior(step) — run block starts with clean wipe, installs with Linux flags, then builds; exits 0_
    - _Preservation: docker-ci "Lint Website" and website-deploy "Build Website" run blocks must remain identical; no other steps or jobs changed_
    - _Requirements: 2.1, 2.2, 2.3, 3.1, 3.2, 3.3_

  - [ ] 3.2 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Missing Linux Reinstall in docker-ci Build Website Step
    - **IMPORTANT**: Re-run the SAME test from task 1 — do NOT write a new test
    - The test from task 1 asserts that the `run` block contains the Linux reinstall flags
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 1
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed)
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ] 3.3 Verify preservation tests still pass
    - **Property 2: Preservation** - Lint and Deploy Build Steps Remain Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 2 — do NOT write new tests
    - Run preservation property tests from step 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions — lint and deploy steps unchanged)
    - Confirm all preservation assertions still pass after fix
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 4. Checkpoint — Ensure all tests pass
  - Run the full test suite for the spec (tasks 1–3)
  - Confirm Property 1 (Bug Condition / Expected Behavior) passes
  - Confirm Property 2 (Preservation) passes
  - Visually inspect the final `oidc-pipeline.yml` diff to ensure only the `docker-ci` "Build Website" `run` block changed
  - Ensure all tests pass; ask the user if questions arise

## Notes

- The fix is a one-liner replacement of `run: npm run build` with the three-line reinstall block. No other files are changed.
- The clean reinstall flags (`--include=optional --os=linux --cpu=x64 --libc=glibc`) must be identical to those in the two reference steps; do not alter them.
- The exploration test (task 1) is expected to FAIL on unfixed code — this is correct and confirms the bug exists. Do not treat a failing task-1 test as a problem to work around.
- The preservation tests (task 2) are expected to PASS on both unfixed and fixed code.
