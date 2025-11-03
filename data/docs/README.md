# Project documentation index

This file collects and links the detailed project documentation available in the `data/docs/` folder. Use it as a starting point for architecture, conventions and onboarding.

## Available docs

- [1_general.md](./1_general.md) — Project structure, Feature-Sliced Design (FSD) guidance and core conventions. (Recommended start)
- [2_codestyle.md](./2_codestyle.md) — Coding style, linting and formatting rules.
- [3_ui-kit.md](./3_ui-kit.md) — UI library, component conventions and atomic/shared/ui guidance.
- [4_ssr.md](./4_ssr.md) — Notes and best practices for SSR in Nuxt.
- [5_typescript.md](./5_typescript.md) — TypeScript-specific guidance, shims and typing patterns used in the project.
- [6_tests.md](./6_tests.md) — Testing strategy (Vitest, unit tests, suggested e2e tests).
- [7_fsd.md](./7_fsd.md) — Feature-Sliced Design detailed recommendations and examples.

## Suggested reading order

1. `1_general.md` — overview and structure (FSD).
2. `2_codestyle.md` and `5_typescript.md` — coding rules and typing conventions.
3. `3_ui-kit.md` and `7_fsd.md` — component-level patterns and decomposition.
4. `6_tests.md` and `4_ssr.md` — testing and runtime specifics.

## How to contribute docs

Place new docs under `data/docs/` and add a link here. Prefer short focused files (one topic per file) and use the existing naming `NN_title.md` to keep ordering.
