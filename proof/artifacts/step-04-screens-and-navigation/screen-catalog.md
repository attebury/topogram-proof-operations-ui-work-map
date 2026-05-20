# Step 04 Screen Catalog

> Operations dashboard screens mapped to reusable layouts and concrete web routes.

Status: current

Audience: product owners, designers, front-end leads, and agents reviewing screen-to-layout mapping.

Use when: you need to see which reusable layout each screen inherits before widgets are bound.

| Screen | Title | Kind | Layout | Route | Load | Primary Action | Shape |
| --- | --- | --- | --- | --- | --- | --- | --- |
| operations_dashboard | Operations Dashboard | dashboard | layout_dashboard_overview | /operations | cap_monitor_operations_dashboard | none | shape_operation_summary_card |
| intake_queue | Intake Queue | inbox | layout_queue_workspace | /operations/intake | cap_triage_incoming_work | cap_assign_field_work | shape_work_queue_item |
| incident_detail | Incident Detail | detail | layout_split_detail | /operations/incidents/:id | cap_review_incident | cap_resolve_incident | shape_incident_detail |
| assignment_board | Assignment Board | board | layout_board_workspace | /operations/assignments | cap_assign_field_work | cap_assign_field_work | shape_work_queue_item |
| schedule_calendar | Schedule Calendar | calendar | layout_calendar_workspace | /operations/schedule | cap_assign_field_work | cap_assign_field_work | shape_work_queue_item |
| field_team_directory | Field Team Directory | list | layout_queue_workspace | /operations/teams | cap_manage_field_teams | none | shape_field_team_card |
| audit_timeline | Audit Timeline | feed | layout_split_detail | /operations/audit | cap_review_incident | none | shape_incident_detail |
| settings_preferences | Settings And Preferences | settings | layout_settings_workspace | /operations/settings | cap_manage_field_teams | none | none |

## Review Notes

- Screens reference reusable layouts; they do not restate the whole region structure.
- `screen_regions` entries are limited to screen-specific overrides such as selected-work inspector and footer actions.
- Widget bindings are intentionally absent until Step 05 so the screen/layout map can be reviewed alone.
