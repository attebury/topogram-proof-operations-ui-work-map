# Step 04: Screens And Navigation

> This checkpoint maps a substantial operations screen set onto the reusable layouts.

Status: current

Audience: reviewers following the proof step by step.

Use when: you want to inspect how screens, navigation, and web routes inherit reusable layouts and regions.

## What Changed

- Added a shared `ui_contract` projection for the operations dashboard.
- Added eight screens: dashboard, intake queue, incident detail, assignment board, schedule calendar, field team directory, audit timeline, and settings/preferences.
- Added navigation groups, concrete web routes, and screen support shapes.
- Added Step 04 screen catalog and screen slice artifacts so reviewers can inspect screen-to-layout mapping.

## Verification

```sh
npm run verify
```

The current step proves screens can inherit reusable layouts and expose route/navigation context. It does not yet include widget bindings or design realization contracts.
