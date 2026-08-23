# AGENTS.md

Guidance for AI agents and developers working in this repository.

## Repository status

This repository currently contains only an initial `README.md` commit. There is no application source code, package manifest, build configuration, or test suite yet.

When application code is added, update this file with service-specific startup, lint, and test instructions.

## Cursor Cloud specific instructions

### Environment

The cloud VM includes:

- **Node.js** v22.x with **npm**
- **Python** 3.12
- **Go** 1.22
- **Rust** 1.83
- **Google Chrome** (for GUI/browser testing; `DISPLAY` is set)

There is no `package.json`, `Dockerfile`, or `docker-compose` in the repo yet, so no project dependencies or services are defined.

### Update script behavior

The VM update script runs `npm install` only when `package.json` exists. Until then it is a no-op.

### Lint / test / build

No lint, test, or build commands are available until project tooling is added (for example `package.json` scripts, `Makefile`, or CI config).

### Running services

No application services are defined in this repository yet. When a web app is added:

1. Install dependencies: `npm install` (or the project's documented package manager).
2. Start the dev server using the script documented in the project README (commonly `npm run dev`).
3. Confirm the server is listening before opening it in the browser.

### Gotchas

- Treat this as a **greenfield** repo until code lands on `main`.
- Do not assume a framework (React, Next.js, etc.) until `package.json` or docs specify one.
- If `npm install` is added to the update script later, keep it idempotent and avoid chaining with `&&` in the update script itself (use separate lines per command).
