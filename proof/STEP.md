# Step 07: i18n, ARIA, And States

> This checkpoint adds translatable message keys, locale policy, accessibility obligations, and state labels to the operations UI work map.

Status: current

Audience: reviewers following the proof step by step.

Use when: you want to inspect how UI text and accessibility intent become reviewable contract evidence for agents and designers.

## What Changed

- Added `messages` for screen titles, empty states, widget labels, action labels, status labels, and alert labels.
- Added a locale policy for `en-US` with left-to-right direction.
- Added accessibility obligations for screens, widgets, and actions: roles, accessible names, keyboard models, focus models, and live-region behavior.
- Added Step 07 coverage/report/slice artifacts showing i18n and ARIA obligations alongside the existing design review rows.

## Verification

```sh
npm run verify
```

The current step proves that i18n and accessibility obligations are visible in reports and slices. It does not run a translation catalog, axe, Playwright, or native accessibility audit.
