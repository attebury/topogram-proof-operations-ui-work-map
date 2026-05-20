# UI Design Coverage

Surfaces: 1
Design matrix rows: 43
Review rows: 46

## Design Matrix

| Widget | Platform | Viewport | Density | Component | Status | States | Review |
| --- | --- | --- | --- | --- | --- | --- | --- |
| widget_activity_timeline | android | any | unspecified | (missing) | missing_platform | (none) | review_required |
| widget_activity_timeline | ios | any | comfortable | ops.ios.timeline | implementation_owned | loading, empty, error | mapped |
| widget_activity_timeline | web | wide | comfortable | ops.timeline.auditTrail | rendered | loading, empty, error | mapped |
| widget_alert_banner | android | any | compact | ops.android.liveAlert | unsupported | loading | review_required |
| widget_alert_banner | ios | any | compact | ops.ios.liveAlert | implementation_owned | loading, empty | review_required |
| widget_alert_banner | web | wide | compact | ops.reviewGap.liveAlert | contract_only | loading | review_required |
| widget_alert_banner | web | wide | compact | ops.alerts.liveBanner | rendered | loading, empty, error | mapped |
| widget_assignment_form | android | any | comfortable | ops.android.assignmentSheet | implementation_owned | loading, empty, error | mapped |
| widget_assignment_form | ios | any | comfortable | ops.ios.assignmentSheet | implementation_owned | loading, empty, error | mapped |
| widget_assignment_form | web | narrow | comfortable | ops.forms.assignmentSheet | contract_only | loading, empty | review_required |
| widget_assignment_form | web | wide | comfortable | ops.forms.assignmentDrawer | rendered | loading, empty, error | mapped |
| widget_card_list | android | any | comfortable | ops.android.queueCards | unsupported | loading, empty | review_required |
| widget_card_list | ios | any | comfortable | ops.ios.queueList | implementation_owned | loading, empty, error | mapped |
| widget_card_list | web | narrow | comfortable | ops.queue.mobileCards | contract_only | loading, empty | review_required |
| widget_card_list | web | wide | comfortable | ops.queue.priorityCards | rendered | loading, empty, error | mapped |
| widget_command_toolbar | android | any | comfortable | ops.android.actionRow | implementation_owned | loading, empty, error | mapped |
| widget_command_toolbar | ios | any | comfortable | ops.ios.commandBar | implementation_owned | loading, empty, error | mapped |
| widget_command_toolbar | web | narrow | compact | ops.commandToolbar.overflow | rendered | loading, empty, error | review_required |
| widget_command_toolbar | web | wide | compact | ops.commandToolbar.desktop | rendered | loading, empty, error | mapped |
| widget_data_grid | android | any | unspecified | (missing) | missing_platform | (none) | review_required |
| widget_data_grid | ios | any | unspecified | (missing) | missing_platform | (none) | review_required |
| widget_data_grid | web | narrow | comfortable | ops.table.cardFallback | contract_only | loading, empty | review_required |
| widget_data_grid | web | wide | compact | ops.table.dataGrid | rendered | loading, empty, error | mapped |
| widget_detail_panel | android | any | comfortable | ops.android.detailSheet | implementation_owned | loading, empty, error | mapped |
| widget_detail_panel | ios | any | comfortable | ops.ios.detailSheet | implementation_owned | loading, empty, error | mapped |
| widget_detail_panel | web | wide | comfortable | ops.settings.sectionPanel | contract_only | loading, empty | review_required |
| widget_detail_panel | web | wide | comfortable | ops.detail.summaryPanel | rendered | loading, empty, error | mapped |
| widget_detail_panel | web | wide | compact | ops.detail.inspector | rendered | loading, empty, error | mapped |
| widget_filter_panel | android | any | unspecified | (missing) | missing_platform | (none) | review_required |
| widget_filter_panel | ios | any | comfortable | ops.ios.filterSheet | implementation_owned | loading, empty, error | mapped |
| widget_filter_panel | web | narrow | comfortable | ops.filters.sheet | contract_only | loading, empty | review_required |
| widget_filter_panel | web | wide | compact | ops.filters.rail | rendered | loading, empty, error | mapped |
| widget_kpi_summary_cards | android | any | unspecified | (missing) | missing_platform | (none) | review_required |
| widget_kpi_summary_cards | ios | any | comfortable | ops.ios.metricCards | implementation_owned | loading, empty, error | mapped |
| widget_kpi_summary_cards | web | narrow | comfortable | ops.kpi.summaryCarousel | contract_only | loading, empty | review_required |
| widget_kpi_summary_cards | web | wide | comfortable | ops.kpi.summaryGrid | rendered | loading, empty, error | mapped |
| widget_schedule_calendar | android | any | comfortable | ops.android.scheduleCalendar | implementation_owned | loading, empty, error | mapped |
| widget_schedule_calendar | ios | any | comfortable | ops.ios.scheduleCalendar | implementation_owned | loading, empty, error | mapped |
| widget_schedule_calendar | web | narrow | comfortable | ops.calendar.agendaList | unsupported | loading | review_required |
| widget_schedule_calendar | web | wide | comfortable | ops.calendar.scheduleBoard | rendered | loading, empty, error | mapped |
| widget_status_board | android | any | unspecified | (missing) | missing_platform | (none) | review_required |
| widget_status_board | ios | any | comfortable | ops.ios.statusBoard | implementation_owned | loading, empty | review_required |
| widget_status_board | web | wide | compact | ops.board.statusLanes | rendered | loading, empty, error | mapped |

## Review Work

| Code | Widget | Platform | Component | Message |
| --- | --- | --- | --- | --- |
| design_missing_platform | widget_activity_timeline | android | (missing) | Widget 'widget_activity_timeline' has no android design realization in 'design_operations_product_ui'. |
| design_behavior_review_required | widget_alert_banner | android | ops.android.liveAlert | Behavior 'realtime_update' is 'unsupported'. |
| design_missing_state | widget_alert_banner | android | ops.android.liveAlert | Realization 'alert_banner_android' does not declare 'empty' state coverage. |
| design_missing_state | widget_alert_banner | android | ops.android.liveAlert | Realization 'alert_banner_android' does not declare 'error' state coverage. |
| design_realization_status_review | widget_alert_banner | android | ops.android.liveAlert | Realization 'alert_banner_android' is 'unsupported'. |
| design_missing_state | widget_alert_banner | ios | ops.ios.liveAlert | Realization 'alert_banner_ios' does not declare 'error' state coverage. |
| design_behavior_review_required | widget_alert_banner | web | ops.reviewGap.liveAlert | Behavior 'realtime_update' is 'contract_only'. |
| design_missing_state | widget_alert_banner | web | ops.reviewGap.liveAlert | Realization 'alert_banner_gap_probe' does not declare 'empty' state coverage. |
| design_missing_state | widget_alert_banner | web | ops.reviewGap.liveAlert | Realization 'alert_banner_gap_probe' does not declare 'error' state coverage. |
| design_missing_token_mapping | widget_alert_banner | web | ops.reviewGap.liveAlert | Design contract 'design_operations_review_gap_probe' has no token mappings. |
| design_realization_status_review | widget_alert_banner | web | ops.reviewGap.liveAlert | Realization 'alert_banner_gap_probe' is 'contract_only'. |
| design_behavior_review_required | widget_assignment_form | web | ops.forms.assignmentSheet | Behavior 'keyboard_navigation' is 'contract_only'. |
| design_behavior_review_required | widget_assignment_form | web | ops.forms.assignmentSheet | Behavior 'optimistic_update' is 'contract_only'. |
| design_missing_state | widget_assignment_form | web | ops.forms.assignmentSheet | Realization 'assignment_form_web_narrow' does not declare 'error' state coverage. |
| design_realization_status_review | widget_assignment_form | web | ops.forms.assignmentSheet | Realization 'assignment_form_web_narrow' is 'contract_only'. |
| design_behavior_review_required | widget_card_list | android | ops.android.queueCards | Behavior 'filtering' is 'unsupported'. |
| design_missing_state | widget_card_list | android | ops.android.queueCards | Realization 'card_list_android' does not declare 'error' state coverage. |
| design_realization_status_review | widget_card_list | android | ops.android.queueCards | Realization 'card_list_android' is 'unsupported'. |
| design_behavior_review_required | widget_card_list | web | ops.queue.mobileCards | Behavior 'filtering' is 'contract_only'. |
| design_missing_state | widget_card_list | web | ops.queue.mobileCards | Realization 'card_list_web_narrow' does not declare 'error' state coverage. |
| design_realization_status_review | widget_card_list | web | ops.queue.mobileCards | Realization 'card_list_web_narrow' is 'contract_only'. |
| design_behavior_review_required | widget_command_toolbar | web | ops.commandToolbar.overflow | Behavior 'bulk_action' is 'contract_only'. |
| design_missing_platform | widget_data_grid | android | (missing) | Widget 'widget_data_grid' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_data_grid | ios | (missing) | Widget 'widget_data_grid' has no ios design realization in 'design_operations_product_ui'. |
| design_behavior_review_required | widget_data_grid | web | ops.table.cardFallback | Behavior 'filtering' is 'contract_only'. |
| design_behavior_review_required | widget_data_grid | web | ops.table.cardFallback | Behavior 'keyboard_navigation' is 'contract_only'. |
| design_behavior_review_required | widget_data_grid | web | ops.table.cardFallback | Behavior 'sorting' is 'contract_only'. |
| design_missing_state | widget_data_grid | web | ops.table.cardFallback | Realization 'data_grid_web_narrow' does not declare 'error' state coverage. |
| design_realization_status_review | widget_data_grid | web | ops.table.cardFallback | Realization 'data_grid_web_narrow' is 'contract_only'. |
| design_missing_state | widget_detail_panel | web | ops.settings.sectionPanel | Realization 'detail_panel_web_settings' does not declare 'error' state coverage. |
| design_realization_status_review | widget_detail_panel | web | ops.settings.sectionPanel | Realization 'detail_panel_web_settings' is 'contract_only'. |
| design_missing_platform | widget_filter_panel | android | (missing) | Widget 'widget_filter_panel' has no android design realization in 'design_operations_product_ui'. |
| design_behavior_review_required | widget_filter_panel | web | ops.filters.sheet | Behavior 'filtering' is 'contract_only'. |
| design_behavior_review_required | widget_filter_panel | web | ops.filters.sheet | Behavior 'search' is 'contract_only'. |
| design_missing_state | widget_filter_panel | web | ops.filters.sheet | Realization 'filter_panel_web_narrow' does not declare 'error' state coverage. |
| design_realization_status_review | widget_filter_panel | web | ops.filters.sheet | Realization 'filter_panel_web_narrow' is 'contract_only'. |
| design_missing_platform | widget_kpi_summary_cards | android | (missing) | Widget 'widget_kpi_summary_cards' has no android design realization in 'design_operations_product_ui'. |
| design_behavior_review_required | widget_kpi_summary_cards | web | ops.kpi.summaryCarousel | Behavior 'selection' is 'contract_only'. |
| design_missing_state | widget_kpi_summary_cards | web | ops.kpi.summaryCarousel | Realization 'kpi_cards_web_narrow' does not declare 'error' state coverage. |
| design_realization_status_review | widget_kpi_summary_cards | web | ops.kpi.summaryCarousel | Realization 'kpi_cards_web_narrow' is 'contract_only'. |
| design_behavior_review_required | widget_schedule_calendar | web | ops.calendar.agendaList | Behavior 'selection' is 'unsupported'. |
| design_missing_state | widget_schedule_calendar | web | ops.calendar.agendaList | Realization 'calendar_web_narrow' does not declare 'empty' state coverage. |
| design_missing_state | widget_schedule_calendar | web | ops.calendar.agendaList | Realization 'calendar_web_narrow' does not declare 'error' state coverage. |
| design_realization_status_review | widget_schedule_calendar | web | ops.calendar.agendaList | Realization 'calendar_web_narrow' is 'unsupported'. |
| design_missing_platform | widget_status_board | android | (missing) | Widget 'widget_status_board' has no android design realization in 'design_operations_product_ui'. |
| design_missing_state | widget_status_board | ios | ops.ios.statusBoard | Realization 'status_board_ios' does not declare 'error' state coverage. |

## Next Commands

- `topogram query ui-design-coverage ./topo --projection proj_operations_web_surface --json`
- `topogram emit ui-realization-report ./topo --projection proj_operations_web_surface --json`
- `topogram widget check ./topo --json`
