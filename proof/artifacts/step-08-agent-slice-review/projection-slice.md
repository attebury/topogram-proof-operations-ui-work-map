# Context Slice: projection `proj_operations_ui_contract` — Operations UI Contract

## Summary
- Type: context_slice
- Description: Shared UI contract for the operations-dashboard proof with reusable layouts, screens, navigation, and semantic widget bindings.

## Review Boundary
- Automation class: review_required
- Reasons: `projection_surface`

## Slice Manifest
- Detail level: standard
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`, `verification`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 2
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 13
- `agent_guidance` (must_read) — Agent Guidance
  - Mode, read order, follow-up queries, and required proof commands.
  - Items: 10
- `terms` (must_read) — Glossary Terms
  - Canonical vocabulary needed to interpret this slice.
  - Items: 6
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
  - Items: 14
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 7
- `related` (reference) — Related Records
  - Summaries for directly related graph records.
  - Items: 6
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4
- `verification` (proof) — Verification Records
  - Verification records directly linked to this slice.
  - Items: 8

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `terms`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --projection proj_operations_ui_contract --json`
  - `topogram query single-agent-plan ./topo --mode implementation --projection proj_operations_ui_contract --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## Glossary Terms
- `term_design_realization_set` — Design Realization Set
  - A widget-first mapping from semantic widgets to platform component refs and behavior support for a design contract.
  - Category: `design`
- `term_layout_contract` — Layout Contract
  - A reusable semantic template that composes regions for screens without prescribing DOM, SwiftUI, Android, or CSS layout code.
  - Category: `ui_structure`
- `term_operations_control_room` — Operations Control Room
  - A coordination app for monitoring intake, triage, assignment, active field work, incident review, and resolution.
  - Category: `operations`
- `term_region_contract` — Region Contract
  - A reusable semantic work area such as command bar, filter rail, results, detail summary, timeline, inspector, or footer actions.
  - Category: `ui_structure`
- `term_widget` — Widget
  - A reusable semantic UI contract that can be realized by different platform components while keeping one product meaning.
  - Category: `ui_structure`
- `term_work_map` — Work Map
  - A graph that tells humans and agents where product work belongs without pretending to be a framework render tree.
  - Category: `ui_structure`

## Depends On
- shapes: `shape_incident_detail`
- capabilities: `cap_assign_field_work`, `cap_manage_field_teams`, `cap_monitor_operations_dashboard`, `cap_resolve_incident`, `cap_review_incident`, `cap_triage_incoming_work`
- widgets: `widget_activity_timeline`, `widget_alert_banner`, `widget_assignment_form`, `widget_card_list`, `widget_command_toolbar`, `widget_data_grid`, `widget_detail_panel`, `widget_filter_panel`, `widget_kpi_summary_cards`, `widget_schedule_calendar`, `widget_status_board`
- rules: `rule_agents_start_ui_changes_from_slices`, `rule_ui_graph_is_work_map`
- verifications: `verification_step01_domain_app_shell`, `verification_step02_semantic_regions`, `verification_step03_reusable_layouts`, `verification_step04_screens_navigation`, `verification_step05_widgets_bindings`, `verification_step06_design_realizations`, `verification_step07_i18n_aria_states`, `verification_step08_agent_slice_review`
- terms: `term_design_realization_set`, `term_layout_contract`, `term_operations_control_room`, `term_region_contract`, `term_widget`, `term_work_map`

## Related
### shapes
- `shape_incident_detail` — Incident Detail
  - Detailed incident payload for review and resolution screens.
### capabilities
- `cap_assign_field_work` — Assign Field Work
  - Match work items to available field operators based on urgency, location, and capacity.
- `cap_manage_field_teams` — Manage Field Teams
  - Review team rosters, assignment load, availability, and operational coverage.
- `cap_monitor_operations_dashboard` — Monitor Operations Dashboard
  - View active operational health, urgent work, team load, and service-level risk.
- `cap_resolve_incident` — Resolve Incident
  - Record resolution details, close out follow-up actions, and make the final status visible to operations.
- `cap_review_incident` — Review Incident
  - Inspect an incident, its activity timeline, related work, status changes, and next available actions.
- `cap_triage_incoming_work` — Triage Incoming Work
  - Review incoming work, classify priority, request missing details, and move ready work into assignment.
### widgets
- `widget_activity_timeline` — Activity Timeline
  - Chronological activity, handoff, status-change, and audit event trail.
- `widget_alert_banner` — Alert Banner
  - Time-sensitive operational alerts and live update summaries.
- `widget_assignment_form` — Assignment Form
  - Focused assignment or resolution form for terminal operational decisions.
- `widget_card_list` — Card List
  - Prioritized card list for queue-style operational work.
- `widget_command_toolbar` — Command Toolbar
  - Compact screen command surface for assignment, refresh, export, and escalation actions.
- `widget_data_grid` — Data Grid
  - Tabular operational collection for high-density team and incident review.
- `widget_detail_panel` — Detail Panel
  - Readable selected-record summary for incident, team, settings, and inspector contexts.
- `widget_filter_panel` — Filter Panel
  - Filter and search controls for operational queues, boards, calendars, and directories.
- `widget_kpi_summary_cards` — KPI Summary Cards
  - Reusable operational health cards for counts, trends, and service-level risk.
- `widget_schedule_calendar` — Schedule Calendar
  - Calendar view for field work due dates, assignments, and capacity windows.
- `widget_status_board` — Status Board
  - Board-style status lanes for assigned field work and escalations.
### rules
- `rule_agents_start_ui_changes_from_slices` — Agents Start UI Changes From Slices
  - Agent-facing UI work should start from a focused Topogram slice that shows screen, layout, region, widget, design, i18n, ARIA, gaps, and proof command context.
- `rule_ui_graph_is_work_map` — UI Graph Is Work Map
  - Proof UI records must describe semantic work areas, product meaning, and proof obligations, not framework render trees or source import paths.

## Verification Targets
- Rationale: Projection slices affect generated contract and runtime surfaces, so verification should follow the projection closure.
- Verifications: `verification_step01_domain_app_shell`, `verification_step02_semantic_regions`, `verification_step03_reusable_layouts`, `verification_step04_screens_navigation`, `verification_step05_widgets_bindings`, `verification_step06_design_realizations`, `verification_step07_i18n_aria_states`, `verification_step08_agent_slice_review`
- Generated checks: `compile-check`, `runtime-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
