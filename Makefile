# Makefile for plutopulp.com

# Variables
DOCKER_COMPOSE = docker compose
DOCKER_DIR = docker
YARN = yarn
WEB_DIR = web
PORT ?= 3000  # Default port, can be overridden with make PORT=xxxx dev

.PHONY: help dev dev-prod down build test lint install clean docker-build logs shell

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev         - Start development environment with Docker Compose"
	@echo "  make dev-prod    - Start production environment with Docker Compose"
	@echo "  make down        - Stop and remove Docker Compose containers"
	@echo "  make build       - Build the Next.js application locally"
	@echo "  make docker-build - Build Docker images"
	@echo "  make test        - Run tests locally"
	@echo "  make lint        - Run linting locally"
	@echo "  make install     - Install dependencies locally"
	@echo "  make clean       - Clean build artifacts"
	@echo "  make logs        - Show Docker logs for development service"
	@echo "  make logs-prod   - Show Docker logs for production service"
	@echo "  make shell       - Enter shell in development container"
	@echo "  make shell-prod  - Enter shell in production container"
	@echo ""
	@echo "Port configuration:"
	@echo "  Override default port (3000) by setting PORT variable:"
	@echo "  make PORT=8080 dev    - Start dev environment on port 8080"

# Start development environment
dev:
	cd $(DOCKER_DIR) && PORT=$(PORT) $(DOCKER_COMPOSE) up -d web-dev

# Start production environment
dev-prod:
	cd $(DOCKER_DIR) && PORT=$(PORT) $(DOCKER_COMPOSE) up -d web-prod

# Stop Docker containers
down:
	cd $(DOCKER_DIR) && $(DOCKER_COMPOSE) down

# Build Docker images
docker-build:
	cd $(DOCKER_DIR) && PORT=$(PORT) $(DOCKER_COMPOSE) build

# Run dev server locally (without Docker)
dev-local:
	cd $(WEB_DIR) && $(YARN) dev

# Build the application locally
build:
	cd $(WEB_DIR) && $(YARN) build

# Run tests locally
test:
	cd $(WEB_DIR) && $(YARN) test

# Run test coverage locally
test-coverage:
	cd $(WEB_DIR) && $(YARN) test:coverage

# Run linting locally
lint:
	cd $(WEB_DIR) && $(YARN) lint

# Install dependencies locally
install:
	cd $(WEB_DIR) && $(YARN) install

# Clean build artifacts
clean:
	rm -rf $(WEB_DIR)/.next
	rm -rf $(WEB_DIR)/node_modules/.cache

# Restart Docker containers
restart-dev: down dev
	@echo "Development Docker containers restarted"

restart-prod: down dev-prod
	@echo "Production Docker containers restarted"

# Show Docker logs for development service
logs:
	cd $(DOCKER_DIR) && $(DOCKER_COMPOSE) logs -f web-dev

# Show Docker logs for production service
logs-prod:
	cd $(DOCKER_DIR) && $(DOCKER_COMPOSE) logs -f web-prod

# Enter shell in development container
shell:
	cd $(DOCKER_DIR) && $(DOCKER_COMPOSE) exec web-dev sh

# Enter shell in production container
shell-prod:
	cd $(DOCKER_DIR) && $(DOCKER_COMPOSE) exec web-prod sh 