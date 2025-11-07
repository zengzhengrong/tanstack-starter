# TanStack-Starter

## Overview

Starter template for TanStack Start applications.

## Development

**PNPM Custom Commands**

```bash
# start app in dev mode
pnpm dev

# build the app for prod
pnpm build

# start app in prod mode
pnpm start

# format all the code
pnpm format

# initialize pre-commit
pnpm prepare
```

**PNPM Utility Commands**

```bash
# verify all dependencies
pnpm audit

# update all dependencies
pnpm update

# check for latest versions
pnpm outdated

# check for unused dependencies
pnpm dlx depcheck

# approve prebuilts for pnpm
pnpm approve-builds

# run editorconfig fixes on files
pnpm dlx eclint fix .

# update major latest (alt: ncu -u)
pnpm dlx npm-check-updates -u

# install dependencies for modules
pnpm install --frozen-lockfile

# drizzle defined migration
pnpm exec drizzle-kit generate

# apply migrations to database
pnpm exec drizzle-kit migrate

# ignore arbitrary script executions
pnpm config set ignore-scripts true

# migrate biome configuration
pnpm dlx @biomejs/biome migrate --write

# drizzle custom migration
pnpm exec drizzle-kit generate --custom

# detect circular dependencies
pnpm dlx dpdm --no-warning --no-tree **/*.ts

# validate for react compiler compatibility
pnpm dlx react-compiler-healthcheck@experimental
```

**Docker Utility Commands**

```bash
# quick start if no changes
docker compose up

# remove all containers
docker system prune --force --all

# remove all volumes
docker volume prune --force --all

# build and run
docker compose -f docker-compose.yaml up --build -d
```

**Node Utility Commands**

```bash
# generic secret generator
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```
