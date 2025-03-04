# Docker Setup for plutopulp.com

This directory contains Docker configuration for development and production environments.

## Directory Structure

- `Dockerfile`: Multi-stage build file for development and production
- `docker-compose.yml`: Compose file with services for development and production
- `.dockerignore`: Files to exclude from Docker builds

## Development Environment

To start the development environment with hot reloading:

```bash
cd plutopulp.com/docker
docker-compose up web-dev
```

This will:

- Mount your local code into the container
- Enable hot reloading
- Expose the application on port 3000

## Production Environment

To build and start the production environment:

```bash
cd plutopulp.com/docker
docker-compose up --build web-prod
```

This will:

- Build an optimized production image
- Run the application in production mode
- Include health checks for monitoring

## Health Checks

The production container includes a health check endpoint at `/api/health` that returns basic application status information.

## Environment Variables

You can add environment variables by:

1. Adding them to the `environment` section in `docker-compose.yml`
2. Creating a `.env` file in the project root

## Customization

- Modify the `Dockerfile` to add dependencies or change build steps
- Update `docker-compose.yml` to add services or change configuration
- Adjust the health check parameters in `docker-compose.yml` as needed
