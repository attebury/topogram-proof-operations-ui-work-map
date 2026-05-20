# Operations UI Work Map Proof

> A step-by-step Topogram proof showing how layouts, screens, regions, widgets, design contracts, i18n, ARIA, and agent slices work together in a substantial operations dashboard.

Status: current

Audience: designers, front-end leads, product owners, and coding agents evaluating Topogram UI semantics.

Use when: you want to see Topogram's UI graph as a work map rather than a render tree.

## Current Checkpoint

Step 01 establishes the operations-dashboard domain and proof shell. Later steps add semantic regions, reusable layouts, screens, widget bindings, design realization sets, i18n/ARIA obligations, and agent slice review artifacts.

## Verify

```sh
npm ci
npm run verify
```

`npm run verify` checks path hygiene, proof completeness, Topogram validation, strict SDLC validation, agent briefing, commit-prep readiness, and clean worktree state.

## Step Branches And Tags

- Branch: `step/01-domain-and-app-shell`
- Tag: `proof-01-domain-and-app-shell`

Each later step will branch from the previous proof tag and stop for review before continuing.
