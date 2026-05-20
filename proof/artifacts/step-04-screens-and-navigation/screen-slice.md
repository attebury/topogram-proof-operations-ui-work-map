# Context Slice: screen `intake_queue` — Intake Queue

## Summary
- Type: context_slice
- Description: UI screen 'intake_queue' in projection 'proj_operations_ui_contract'.

## Review Boundary
- Automation class: review_required
- Reasons: `ui_screen_surface`

## Slice Manifest
- Detail level: compact
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`, `verification`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 3
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 4
- `agent_guidance` (must_read) — Agent Guidance
  - Mode, read order, follow-up queries, and required proof commands.
  - Items: 10
- `terms` (must_read) — Glossary Terms
  - Canonical vocabulary needed to interpret this slice.
  - Items: 3
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
  - Items: 20
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 6
- `related` (reference) — Related Records
  - Summaries for directly related graph records.
  - Items: 1
- `related_summary` (reference) — Related Summary
  - Compact counts and IDs for related records omitted from compact detail.
  - Items: 3
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4
- `verification` (proof) — Verification Records
  - Verification records directly linked to this slice.
  - Items: 4

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --projection proj_operations_ui_contract --screen intake_queue --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --projection proj_operations_ui_contract --screen intake_queue --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## Glossary Terms
- `term_layout_contract` — Layout Contract
  - A reusable semantic template that composes regions for screens without prescribing DOM, SwiftUI, Android, or CSS layout code.
  - Category: `ui_structure`
- `term_region_contract` — Region Contract
  - A reusable semantic work area such as command bar, filter rail, results, detail summary, timeline, inspector, or footer actions.
  - Category: `ui_structure`
- `term_widget` — Widget
  - A reusable semantic UI contract that can be realized by different platform components while keeping one product meaning.
  - Category: `ui_structure`

## Depends On
- projections: `proj_operations_ui_contract`
- capabilities: `cap_assign_field_work`, `cap_review_incident`, `cap_triage_incoming_work`
- shapes: `shape_work_queue_item`
- verifications: `verification_step01_domain_app_shell`, `verification_step02_semantic_regions`, `verification_step03_reusable_layouts`, `verification_step04_screens_navigation`
- terms: `term_layout_contract`, `term_region_contract`, `term_widget`

## Verification Targets
- Rationale: Screen slices should prove UI contract, realization coverage, widget behavior, and generated/maintained app checks for the selected surface.
- Verifications: `verification_step01_domain_app_shell`, `verification_step02_semantic_regions`, `verification_step03_reusable_layouts`, `verification_step04_screens_navigation`
- Generated checks: `compile-check`, `runtime-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
