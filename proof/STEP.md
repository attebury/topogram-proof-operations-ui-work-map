# Step 01: Domain And App Shell

> This checkpoint defines the operations-dashboard product surface before adding UI structure.

Status: current

Audience: reviewers following the proof step by step.

Use when: you want to understand the domain and proof shell before semantic regions, layouts, screens, and widgets are introduced.

## What Changed

- Added a maintained Topogram workspace in `topo/`.
- Added an enforced SDLC policy for the proof repo.
- Defined the operations-control-room domain, actors, glossary terms, and core capabilities.
- Added proof rules that keep the graph a work map and require UI changes to start from focused slices.
- Added verification scripts and Step 01 artifacts.

## Verification

```sh
npm run verify
```

The current step proves the workspace is valid and the proof repo is ready for the next checkpoint. It does not yet include region, layout, screen, widget, or design realization contracts.
