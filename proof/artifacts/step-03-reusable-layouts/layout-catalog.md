# Step 03 Layout Catalog

> Reusable semantic layouts that compose Step 02 region contracts into screen templates.

Status: current

Audience: designers, front-end leads, and agents reviewing layout inheritance before screens are added.

Use when: you need to inspect how screens will inherit regions without restating screen_regions.

| Layout | Name | Parent | Fills | App Shell | Regions |
| --- | --- | --- | --- | --- | --- |
| layout_standard_app_shell | Standard App Shell | none | none | workspace | header -> region_app_header; nav -> region_global_navigation; content -> region_results (slot); live_updates -> region_live_updates |
| layout_dashboard_overview | Dashboard Overview Layout | layout_standard_app_shell | content | inherited | command_bar -> region_command_bar; results -> region_results (slot); live_updates -> region_live_updates |
| layout_queue_workspace | Queue Workspace Layout | layout_standard_app_shell | content | inherited | command_bar -> region_command_bar; filters -> region_filter_rail; queue -> region_work_queue (slot); inspector -> region_inspector_panel |
| layout_split_detail | Split Detail Layout | layout_standard_app_shell | content | inherited | summary -> region_detail_summary (slot); activity -> region_activity_timeline; inspector -> region_inspector_panel; footer_actions -> region_footer_actions |
| layout_board_workspace | Board Workspace Layout | layout_standard_app_shell | content | inherited | command_bar -> region_command_bar; filters -> region_filter_rail; board -> region_results (slot); inspector -> region_inspector_panel |
| layout_calendar_workspace | Calendar Workspace Layout | layout_standard_app_shell | content | inherited | command_bar -> region_command_bar; filters -> region_filter_rail; calendar -> region_results (slot) |
| layout_modal_task_flow | Modal Task Flow Layout | none | none | wizard | summary -> region_detail_summary; command_bar -> region_command_bar (slot); footer_actions -> region_footer_actions |
| layout_settings_workspace | Settings Workspace Layout | layout_standard_app_shell | content | inherited | filters -> region_filter_rail; settings -> region_results (slot); inspector -> region_inspector_panel |

## Review Notes

- Layouts are semantic templates, not framework templates.
- Screens in the next step should reference these layouts and inherit their regions.
- Widget bindings should target these inherited region IDs after screens exist.
