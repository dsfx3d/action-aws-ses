# pnpm-typescript-workspace

A pnpm workspace boilerplate for Typescript projects.

## Features

- Managed with `pnpm`, ensuring efficient package management.
- ESLint configuration extending [`eslint-config-dsfx3d`](https://github.com/dsfx3d/eslint-config-dsfx3d).
- Sample module `foo` exported in the main index.

## Workspace Structure

The workspace is structured as follows:

- Main packages are located in the `packages/` directory.
- Additional components can be added in the `components/` directory.
- Packages inside `test` directories are excluded.

## Installation

To set up the workspace:

```bash
pnpm bootstrap
```

## Scripts

- `bootstrap`: Update packages and install Husky hooks.

## Dependencies

- Development:
  - `@commitlint/cli`
  - `@commitlint/config-conventional`
  - `eslint`
  - `eslint-config-dsfx3d`
  - `husky`
  - `prettier`
  - `typescript`
