# Context Slice: widget `widget_alert_banner` — Alert Banner

## Summary
- Type: context_slice
- Status: active
- Description: Time-sensitive operational alerts and live update summaries.

## Review Boundary
- Automation class: review_required
- Reasons: `widget_surface`

## Slice Manifest
- Detail level: standard
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 2
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 18
- `agent_guidance` (must_read) — Agent Guidance
  - Mode, read order, follow-up queries, and required proof commands.
  - Items: 10
- `terms` (must_read) — Glossary Terms
  - Canonical vocabulary needed to interpret this slice.
  - Items: 2
- `review_boundary` (must_read) — Review Boundary
  - Automation and human-review expectations for this scope.
  - Items: 2
- `ownership_boundary` (must_read) — Ownership Boundary
  - Generated, maintained, and human-owned boundaries that constrain edits.
  - Items: 4
- `write_scope` (must_read) — Write Scope
  - Files and surfaces that are safe, risky, or out of bounds to edit.
  - Items: 4
- `ui_agent_packet` (must_read) — UI Agent Packet
  - Screen, layout, region, widget, accessibility, i18n, design-token, and UI proof context for UI slices.
  - Items: 11
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 7
- `related` (reference) — Related Records
  - Summaries for directly related graph records.
  - Items: 6
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --widget widget_alert_banner --json`
  - `topogram query single-agent-plan ./topo --mode implementation --widget widget_alert_banner --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## Glossary Terms
- `term_operations_control_room` — Operations Control Room
  - A coordination app for monitoring intake, triage, assignment, active field work, incident review, and resolution.
  - Category: `operations`
- `term_work_map` — Work Map
  - A graph that tells humans and agents where product work belongs without pretending to be a framework render tree.
  - Category: `ui_structure`

## Depends On
- shapes: `shape_work_queue_item`
- projections: `proj_operations_ui_contract`, `proj_operations_web_surface`
- terms: `term_operations_control_room`, `term_work_map`

## Related
### shapes
- `shape_work_queue_item` — Work Queue Item
  - Compact queue row or card for triage and assignment screens.
### projections
- `proj_operations_ui_contract` — Operations UI Contract
  - Shared UI contract for the operations-dashboard proof with reusable layouts, screens, navigation, and semantic widget bindings.
- `proj_operations_web_surface` — Operations Web Surface
  - Concrete web route surface for the operations-dashboard UI contract.

## Verification Targets
- Rationale: Widget changes affect every related projection, so verification should follow the widget contract closure.
- Generated checks: `compile-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
