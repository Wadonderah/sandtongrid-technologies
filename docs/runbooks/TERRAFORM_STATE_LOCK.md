# Terraform State Lock Recovery

## Purpose

This runbook describes the approved procedure for recovering from a **stale Terraform state lock**.

The project uses:

* Amazon S3 for remote Terraform state
* Amazon DynamoDB for Terraform state locking

State locking protects the infrastructure from concurrent Terraform operations.

---

## Important

**Never force-unlock a state that may still be in use.**

Before unlocking, confirm that no Terraform operation is currently running.

Do **not** routinely use:

```bash
terraform apply -lock=false
```

or:

```bash
terraform plan -lock=false
```

Disabling state locking can allow concurrent operations and potentially corrupt or conflict with infrastructure state.

---

## Recovery Procedure

### Step 1 — Verify Terraform Is Not Running

Confirm that no Terraform process or deployment is currently executing.

On Windows:

* Open Task Manager
* Check for `terraform.exe`
* Confirm that no Terraform operation is running

Also check whether another team member or CI/CD pipeline is currently deploying.

---

### Step 2 — Identify the Lock

If Terraform reports that the state is locked, inspect the lock information shown in the error.

Example:

```text
Lock ID:
5b35b2f8-99a0-d39b-5a6d-70c9d0bb333a
```

Do not immediately force-unlock the state.

First confirm that the lock belongs to a failed or interrupted Terraform operation.

---

### Step 3 — Force-Unlock Only If Confirmed Stale

Once the lock has been confirmed as stale:

```bash
terraform force-unlock LOCK_ID
```

Example:

```bash
terraform force-unlock 5b35b2f8-99a0-d39b-5a6d-70c9d0bb333a
```

Terraform will ask for confirmation.

---

### Step 4 — Confirm the Unlock

Type:

```text
yes
```

Only confirm if you have verified that the previous Terraform operation is no longer running.

---

### Step 5 — Validate the State

Run:

```bash
terraform plan
```

If the lock was stale and the state is healthy, Terraform should proceed normally.

Review the plan carefully before applying any changes.

---

## Normal Terraform Workflow

Use the following workflow for infrastructure changes:

```text
terraform fmt
      ↓
terraform validate
      ↓
terraform plan
      ↓
Review plan
      ↓
terraform apply
```

Never intentionally interrupt `terraform apply`.

---

## Production Deployment

Production infrastructure changes should preferably be executed through the project's CI/CD pipeline rather than directly from a developer workstation.

This provides:

* Controlled deployments
* Consistent execution environments
* Auditability
* Reduced risk of concurrent Terraform operations
* Better separation between development and production access

---

## Key Rule

**A Terraform state lock should be forcefully removed only when it has been confirmed to be stale.**

When in doubt, stop and verify before running `terraform force-unlock`.
