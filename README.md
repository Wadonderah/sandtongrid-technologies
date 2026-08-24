# Sandtongrid Technologies

## Development Workflow

Run website development inside Docker so local trials do not use production credentials or infrastructure:

```text
docker compose -f docker/docker-compose.dev.yml up
```

Open `http://localhost:5173`. Source changes under `apps/website` are picked up by Vite automatically. Stop the development container with:

```text
docker compose -f docker/docker-compose.dev.yml down
```

The production-style container remains available for a local build and smoke test:

```text
docker compose -f docker/docker-compose.yml up --build
```

Open `http://localhost:8080` and stop it with `docker compose -f docker/docker-compose.yml down`.

## Promotion Flow

1. Create a feature branch from `develop`.
2. Open a pull request into `develop` and run the Docker, lint, and build checks.
3. Test the change locally with the Docker development service.
4. Open a pull request from `develop` into `main` and obtain the required review.
5. Merge to `main` only after validation. The existing production workflow and `production` environment approval are the only paths that deploy the live website.

The `develop` branch does not deploy to AWS, publish production Docker images, sync production S3, or invalidate production CloudFront.
