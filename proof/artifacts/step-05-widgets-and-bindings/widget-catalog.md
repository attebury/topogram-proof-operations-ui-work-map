# Step 05 Widget Catalog

> Semantic operations widgets bound into inherited layout regions.

Status: current

Audience: product owners, designers, front-end leads, and agents reviewing widget placement before design realization sets are added.

Use when: you need to see which widget belongs in each layout-inherited region and which capability or navigation outcome it is wired to.

| Widget | Screen regions | Data bindings | Event bindings |
| --- | --- | --- | --- |
| widget_activity_timeline | audit_timeline:activity (layout), incident_detail:activity (layout) | timeline_items<-cap_review_incident | none |
| widget_alert_banner | operations_dashboard:live_updates (screen_override) | alerts<-cap_monitor_operations_dashboard | alert_select:navigate->incident_detail |
| widget_assignment_form | incident_detail:footer_actions (screen_override) | value<-cap_resolve_incident | submit:action->cap_resolve_incident |
| widget_card_list | intake_queue:queue (layout) | items<-cap_triage_incoming_work | item_select:navigate->incident_detail |
| widget_command_toolbar | assignment_board:command_bar (layout), field_team_directory:command_bar (layout), intake_queue:command_bar (layout), operations_dashboard:command_bar (layout), schedule_calendar:command_bar (layout) | actions<-cap_assign_field_work, actions<-cap_manage_field_teams, actions<-cap_monitor_operations_dashboard, actions<-cap_triage_incoming_work | primary_action:action->cap_assign_field_work, primary_action:action->cap_manage_field_teams, primary_action:action->cap_triage_incoming_work |
| widget_data_grid | field_team_directory:queue (screen_override) | rows<-cap_manage_field_teams | row_select:action->cap_manage_field_teams |
| widget_detail_panel | audit_timeline:summary (layout), incident_detail:summary (layout), intake_queue:inspector (screen_override), settings_preferences:settings (screen_override) | item<-cap_manage_field_teams, item<-cap_review_incident | edit_requested:action->cap_assign_field_work, edit_requested:action->cap_manage_field_teams, edit_requested:action->cap_resolve_incident, edit_requested:action->cap_review_incident |
| widget_filter_panel | assignment_board:filters (layout), field_team_directory:filters (layout), intake_queue:filters (layout), schedule_calendar:filters (layout), settings_preferences:filters (layout) | filters<-cap_assign_field_work, filters<-cap_manage_field_teams, filters<-cap_triage_incoming_work | filter_change:action->cap_assign_field_work, filter_change:action->cap_manage_field_teams, filter_change:action->cap_triage_incoming_work |
| widget_kpi_summary_cards | operations_dashboard:results (layout) | items<-cap_monitor_operations_dashboard | card_select:navigate->intake_queue |
| widget_schedule_calendar | schedule_calendar:calendar (layout) | items<-cap_assign_field_work | item_select:navigate->incident_detail |
| widget_status_board | assignment_board:board (layout) | columns<-cap_assign_field_work | item_select:navigate->incident_detail |

## Review Notes

- Most regions come from reusable layout contracts, not screen-local region declarations.
- The team directory intentionally overrides the inherited queue region to a data-grid pattern while keeping the queue layout.
- Design component refs are intentionally absent until Step 06.
