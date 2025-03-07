# Development and production Dockerfile for Next.js application
# Multi-stage build for optimized production image

# ------------------ Base Stage ------------------
FROM node:20-alpine AS base
WORKDIR /app
# Add package manager global
RUN npm install -g pnpm turbo

# ------------------ Development Stage ------------------
FROM base AS dev
ENV NODE_ENV=development
# Copy package files
COPY web/package.json web/yarn.lock ./
# Install dependencies
RUN yarn install --frozen-lockfile
# Copy the rest of the application
COPY web/ ./
# Expose port
EXPOSE 3000
# Start development server
CMD ["yarn", "dev"]

# ------------------ Dependencies Stage ------------------
FROM base AS deps
WORKDIR /app
# Copy package files
COPY web/package.json web/yarn.lock ./
# Install production dependencies
RUN yarn install --frozen-lockfile --production

# ------------------ Build Stage ------------------
FROM base AS builder
WORKDIR /app
# Copy package files and install all dependencies
COPY web/package.json web/yarn.lock ./
RUN yarn install --frozen-lockfile
# Copy application code
COPY web/ ./
# Build the application
RUN yarn build

# ------------------ Production Stage ------------------
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
# Copy built application
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# Expose port
EXPOSE 3000
# Start production server
CMD ["node", "server.js"] 