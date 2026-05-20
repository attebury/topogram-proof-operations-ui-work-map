# Step 03: Reusable Layouts

> This checkpoint composes reusable semantic regions into layouts before screens and widgets are introduced.

Status: current

Audience: reviewers following the proof step by step.

Use when: you want to see how screens will inherit reusable work areas instead of restating scattered screen regions.

## What Changed

- Added `layout_contract` records for the standard app shell, dashboard overview, queue workspace, split detail, board workspace, calendar workspace, modal task flow, and settings workspace.
- Each layout composes Step 02 region contracts and marks slots/fills for future screens.
- Added a Step 03 layout catalog artifact showing parent relationships, fills, and region composition.

## Verification

```sh
npm run verify
```

The current step proves layouts can compose semantic regions. It does not yet include screens, widget bindings, or design realization contracts.
