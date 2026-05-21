# Context Slice: layout_contract `layout_queue_workspace` — Queue Workspace Layout

## Summary
- Type: context_slice
- Description: Queue/list workspace with command bar, filter rail, prioritized queue, and inspector panel.

## Review Boundary
- Automation class: review_required
- Reasons: `ui_layout_work_map`

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
  - `topogram query slice ./topo --mode implementation --projection proj_operations_ui_contract --layout layout_queue_workspace --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --projection proj_operations_ui_contract --layout layout_queue_workspace --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## Glossary Terms
- `term_region_contract` — Region Contract
  - A reusable semantic work area such as command bar, filter rail, results, detail summary, timeline, inspector, or footer actions.
  - Category: `ui_structure`
- `term_widget` — Widget
  - A reusable semantic UI contract that can be realized by different platform components while keeping one product meaning.
  - Category: `ui_structure`

## Depends On
- regions: `region_command_bar`, `region_filter_rail`, `region_inspector_panel`, `region_work_queue`
- widgets: `widget_card_list`, `widget_command_toolbar`, `widget_data_grid`, `widget_detail_panel`, `widget_filter_panel`
- projections: `proj_operations_ui_contract`
- terms: `term_region_contract`, `term_widget`

## Verification Targets
- Rationale: Layout slices prove inherited regions, widget placement, and UI design/realization coverage for screens using the layout.
- Generated checks: `compile-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
