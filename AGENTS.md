# AGENTS.md

## Scope and repo shape
- This is a multi-course academic repository, not a single deployable product.
- Disciplines are grouped by semester (`1-periodo/` … `8-periodo/`). Each discipline folder is named `dceXXX-nome-da-materia` and follows the study layout `programa-de-ensino/`, `aulas/`, `atividades/`, `trabalhos/`.
- Most folders are archival/course-material oriented; only a few subfolders are active code projects.
- Start from `README.md` (root) for discipline mapping, then inspect per-discipline `README.md` for intent.

## High-value code areas (read first)
- `Estudos/study-routine-app/`: full TypeScript app (Vite + React client, Express runtime server).
- `3-periodo/dce530-orientacao-a-objetos/aulas/Aula_05/my-app/`: Maven Java sample with JUnit 5 wiring.
- `3-periodo/dce672-programacao-logica/ferramentas/swish/`: Docker scripts for local SWI-Prolog/Swish environment.

## Architecture and data flow: study-routine-app
- Client entry: `Estudos/study-routine-app/client/src/main.tsx` -> `App.tsx` (wouter routes: `/`, `/404`).
- Shared domain model lives in `Estudos/study-routine-app/shared/types.ts` and seed/schedule data in `Estudos/study-routine-app/shared/const.ts`.
- Progress state is local-first: `client/src/hooks/useStudyProgress.ts` reads/writes `localStorage` key `studyProgress`.
- Production serving is static SPA: `server/index.ts` serves `dist/public` and rewrites all routes to `index.html`.
- Vite aliases are defined in `vite.config.ts` (`@`, `@shared`, `@assets`); keep imports consistent with these aliases.

## Commands and workflows
- Study app (pnpm, from `Estudos/study-routine-app/`):
  - `pnpm install`
  - `pnpm dev` (Vite dev server)
  - `pnpm check` (TypeScript typecheck)
  - `pnpm build` (client build + bundle `server/index.ts`)
  - `pnpm start` (serve built app)
- Java Maven sample (`3-periodo/dce530-orientacao-a-objetos/aulas/Aula_05/my-app/`):
  - `mvn test`
  - `mvn package`
- SWISH tooling (`3-periodo/dce672-programacao-logica/ferramentas/swish/`):
  - `./create-container.sh`, `./start.sh`, `./stop.sh`
  - Manual equivalent commands are documented in `dce672/ferramentas/swish/Readme.md`.

## Project-specific conventions
- Folder names and discipline codes are meaningful; keep new material under the correct discipline and subfolder type.
- In `study-routine-app`, discipline identifiers are constrained by `DisciplineCode` in `shared/types.ts`; do not invent new codes without updating shared types and defaults.
- Existing content mixes teaching snippets and experiments; verify nearby files before assuming production quality (example: `3-periodo/dce797-aeds3/aulas/aula_02/main.cpp` contains scratch-like content).
- There is no monorepo-wide build/test entrypoint at repo root; run commands in each project subdirectory.

## Integration points and external dependencies
- `study-routine-app` depends on React 19, Vite 7, Express 4, Tailwind, Radix UI, and `wouter` (with a patch declared in `patches/wouter@3.7.1.patch`).
- Dev-time debug capture is custom in `vite.config.ts` (writes logs to `.manus-logs/`).
- SWISH setup depends on Docker images `swipl/rserve` and `swipl/swish` mapped to localhost port `3050`.

