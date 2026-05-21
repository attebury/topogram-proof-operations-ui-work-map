# Context Slice: design_realization_set `realization_set_operations_control_room_widgets` — Operations Control Room Widget Realizations

## Summary
- Type: context_slice
- Description: Maps operations semantic widgets to platform component refs across web, iOS, and Android.

## Review Boundary
- Automation class: review_required
- Reasons: `design_realization_work_map`

## Slice Manifest
- Detail level: compact
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 3
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 5
- `agent_guidance` (must_read) — Agent Guidance
  - Mode, read order, follow-up queries, and required proof commands.
  - Items: 10
- `terms` (must_read) — Glossary Terms
  - Canonical vocabulary needed to interpret this slice.
  - Items: 4
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
  - Items: 10
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 5
- `related` (reference) — Related Records
  - Summaries for directly related graph records.
  - Items: 1
- `related_summary` (reference) — Related Summary
  - Compact counts and IDs for related records omitted from compact detail.
  - Items: 3
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --projection proj_operations_ui_contract --design-realization-set realization_set_operations_control_room_widgets --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --projection proj_operations_ui_contract --design-realization-set realization_set_operations_control_room_widgets --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## Glossary Terms
- `term_component_ref` — Component Ref
  - A stable design-system component identity used in Topogram instead of framework import paths or source file paths.
  - Category: `design`
- `term_design_contract` — Design Contract
  - A design-system scope record that names supported platforms, packages, and semantic token mappings before widgets are realized by platform components.
  - Category: `design`
- `term_design_realization_set` — Design Realization Set
  - A widget-first mapping from semantic widgets to platform component refs and behavior support for a design contract.
  - Category: `design`
- `term_widget` — Widget
  - A reusable semantic UI contract that can be realized by different platform components while keeping one product meaning.
  - Category: `ui_structure`

## Depends On
- design_contracts: `design_operations_product_ui`
- widgets: `widget_activity_timeline`, `widget_alert_banner`, `widget_assignment_form`, `widget_card_list`, `widget_command_toolbar`, `widget_data_grid`, `widget_detail_panel`, `widget_filter_panel`, `widget_kpi_summary_cards`, `widget_schedule_calendar`, `widget_status_board`
- projections: `proj_operations_ui_contract`
- terms: `term_component_ref`, `term_design_contract`, `term_design_realization_set`, `term_widget`

## Verification Targets
- Rationale: Design realization-set slices prove widget-to-platform component mappings and visible review gaps before UI implementation work.
- Generated checks: `compile-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
