# Step 05: Widgets And Bindings

> This checkpoint binds reusable semantic widgets into inherited layout regions.

Status: current

Audience: reviewers following the proof step by step.

Use when: you want to inspect how screens, layout regions, and widgets work together before design realization mappings are added.

## What Changed

- Added eleven semantic widgets for KPI cards, grids, card lists, filters, command bars, detail panels, boards, timelines, calendars, assignment forms, and alerts.
- Bound widgets into inherited layout regions such as `command_bar`, `queue`, `board`, `calendar`, `activity`, and `footer_actions`.
- Added one explicit screen-region override for the team directory table to show overrides remain possible without restating the whole layout.
- Added Step 05 widget catalog plus screen and widget slice artifacts so reviewers can inspect reusable widget placement.

## Verification

```sh
npm run verify
```

The current step proves widget bindings can target inherited layout regions and explicit region overrides. It does not yet include design realization contracts.
