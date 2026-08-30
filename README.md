# Kindo

Frontend React web application for Kindo, a platform for daycares and preschools. Uses kindo-api as its backend.

## About Kindo

Kindo helps teachers, parents, and directors stay connected around a child's day:

- **Teachers** communicate with parents, create reports, plan activities, and post photos and videos.
- **Parents** chat with teachers and directors, and inform them about a child's absence.
- **Directors** communicate with families.

## Tech stack

- [React](https://react.dev) — UI library
- [Vite](https://vite.dev) — build tool and dev server
- [TypeScript](https://www.typescriptlang.org) — type-safe JavaScript

## Setup

```bash
npm install
```

## Run

```bash
# development
npm run dev

# production build
npm run build

# preview production build
npm run preview
```

## Lint

```bash
npm run lint
```

## Commits

Same guidelines as kindo-api. Use [Conventional Commits](https://www.conventionalcommits.org):

```
<type>(<scope>): <imperative summary>

<body>
```

Omit `(<scope>)` only when the change is repo-wide and no scope fits.

| Type | When |
|---|---|
| `feat` | New user-facing capability |
| `fix` | Bug fix |
| `refactor` | Behavior-preserving restructure |
| `docs` | Documentation only |
| `test` | Tests only |
| `chore` | Tooling, deps, config, CI |
| `perf` | Performance improvement |
| `revert` | Reverts a previous commit |

- Subject: one line, ≤72 characters, no trailing period, imperative mood, lowercase after the colon.
- Body: 1–2 sentences on **why**, wrap at 72 characters. Skip only for trivial one-line changes.

Example:

```
feat(ui): add absence report form

Parents need a way to tell teachers a child will be out
without sending a separate chat message.
```
