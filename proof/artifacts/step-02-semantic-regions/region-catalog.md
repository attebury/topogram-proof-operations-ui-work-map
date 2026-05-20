# Step 02 Region Catalog

> Reusable semantic work areas for the operations dashboard before layouts, screens, or widget bindings are added.

Status: current

Audience: designers, front-end leads, and agents reviewing the region vocabulary.

Use when: you need to inspect where future layouts and screens should place work.

| Region | Name | Kind | Pattern | Placement | Density | States |
| --- | --- | --- | --- | --- | --- | --- |
| region_app_header | App Header | header | app_header | top | compact | [] |
| region_global_navigation | Global Navigation | navigation | primary_navigation | shell | comfortable | [] |
| region_command_bar | Command Bar | toolbar | action_bar | secondary | compact | [] |
| region_filter_rail | Filter Rail | filters | filter_panel | start | compact | [loading empty error] |
| region_results | Results Region | results | data_grid_view | primary | comfortable | [loading empty error unauthorized] |
| region_work_queue | Work Queue | results | resource_cards | primary | comfortable | [loading empty error unauthorized] |
| region_detail_summary | Detail Summary | summary | detail_panel | primary | comfortable | [loading error not_found unauthorized] |
| region_activity_timeline | Activity Timeline | timeline | timeline_view | supporting | comfortable | [loading empty error] |
| region_inspector_panel | Inspector Panel | aside | inspector_pane | end | compact | [empty loading error] |
| region_footer_actions | Footer Actions | footer_actions | footer_bar | bottom | compact | [] |
| region_live_updates | Live Updates | activity | activity_feed | supporting | compact | [loading empty error] |

## Review Notes

- These records are semantic work areas, not DOM or native view hierarchy nodes.
- Layout contracts in the next step should compose these regions instead of making screens restate them.
- Widget bindings should target inherited layout regions after layouts and screens exist.
