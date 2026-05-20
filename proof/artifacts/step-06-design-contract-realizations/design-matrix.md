# Step 06 Design Matrix

> Widget-first design realization matrix for the operations UI proof.

Status: current

Audience: designers, front-end leads, and agents reviewing component mappings before i18n and ARIA obligations are authored.

Use when: you need to see which semantic widgets map to which platform component refs and which items remain review work.

## Summary

| Metric | Value |
| --- | ---: |
| Design contracts | 2 |
| Design realization sets | 2 |
| Widget realizations | 21 |
| Matrix rows | 43 |
| Review rows | 120 |
| Missing platforms | 2 |
| Missing states | 15 |
| Missing token mappings | 1 |
| Missing accessibility | 37 |
| Missing i18n | 37 |

## Review Codes

| Code | Count |
| --- | ---: |
| design_behavior_review_required | 14 |
| design_missing_accessibility | 37 |
| design_missing_i18n | 37 |
| design_missing_platform | 6 |
| design_missing_state | 15 |
| design_missing_token_mapping | 1 |
| design_realization_status_review | 10 |

## Sample Matrix Rows

| Widget | Platform | Viewport | Component Ref | Status | State Coverage |
| --- | --- | --- | --- | --- | --- |
| widget_activity_timeline | android | any | (missing) | missing_platform | (none) |
| widget_activity_timeline | ios | any | ops.ios.timeline | implementation_owned | loading, empty, error |
| widget_activity_timeline | web | wide | ops.timeline.auditTrail | rendered | loading, empty, error |
| widget_alert_banner | android | any | ops.android.liveAlert | unsupported | loading |
| widget_alert_banner | ios | any | ops.ios.liveAlert | implementation_owned | loading, empty |
| widget_alert_banner | web | wide | ops.reviewGap.liveAlert | contract_only | loading |
| widget_alert_banner | web | wide | ops.alerts.liveBanner | rendered | loading, empty, error |
| widget_assignment_form | android | any | ops.android.assignmentSheet | implementation_owned | loading, empty, error |
| widget_assignment_form | ios | any | ops.ios.assignmentSheet | implementation_owned | loading, empty, error |
| widget_assignment_form | web | narrow | ops.forms.assignmentSheet | contract_only | loading, empty |
| widget_assignment_form | web | wide | ops.forms.assignmentDrawer | rendered | loading, empty, error |
| widget_card_list | android | any | ops.android.queueCards | unsupported | loading, empty |
| widget_card_list | ios | any | ops.ios.queueList | implementation_owned | loading, empty, error |
| widget_card_list | web | narrow | ops.queue.mobileCards | contract_only | loading, empty |
| widget_card_list | web | wide | ops.queue.priorityCards | rendered | loading, empty, error |
| widget_command_toolbar | android | any | ops.android.actionRow | implementation_owned | loading, empty, error |
| widget_command_toolbar | ios | any | ops.ios.commandBar | implementation_owned | loading, empty, error |
| widget_command_toolbar | web | narrow | ops.commandToolbar.overflow | rendered | loading, empty, error |
| widget_command_toolbar | web | wide | ops.commandToolbar.desktop | rendered | loading, empty, error |
| widget_data_grid | android | any | (missing) | missing_platform | (none) |

## Sample Review Rows

| Code | Widget | Platform | Component Ref | Message |
| --- | --- | --- | --- | --- |
| design_missing_platform | widget_activity_timeline | android | (missing) | Widget 'widget_activity_timeline' has no android design realization in 'design_operations_product_ui'. |
| design_missing_accessibility | widget_activity_timeline | ios | ops.ios.timeline | Widget 'widget_activity_timeline' has no authored accessibility obligation. |
| design_missing_i18n | widget_activity_timeline | ios | ops.ios.timeline | Widget 'widget_activity_timeline' has no authored message key. |
| design_missing_accessibility | widget_activity_timeline | web | ops.timeline.auditTrail | Widget 'widget_activity_timeline' has no authored accessibility obligation. |
| design_missing_i18n | widget_activity_timeline | web | ops.timeline.auditTrail | Widget 'widget_activity_timeline' has no authored message key. |
| design_behavior_review_required | widget_alert_banner | android | ops.android.liveAlert | Behavior 'realtime_update' is 'unsupported'. |
| design_missing_accessibility | widget_alert_banner | android | ops.android.liveAlert | Widget 'widget_alert_banner' has no authored accessibility obligation. |
| design_missing_i18n | widget_alert_banner | android | ops.android.liveAlert | Widget 'widget_alert_banner' has no authored message key. |
| design_missing_state | widget_alert_banner | android | ops.android.liveAlert | Realization 'alert_banner_android' does not declare 'empty' state coverage. |
| design_missing_state | widget_alert_banner | android | ops.android.liveAlert | Realization 'alert_banner_android' does not declare 'error' state coverage. |
| design_realization_status_review | widget_alert_banner | android | ops.android.liveAlert | Realization 'alert_banner_android' is 'unsupported'. |
| design_missing_accessibility | widget_alert_banner | ios | ops.ios.liveAlert | Widget 'widget_alert_banner' has no authored accessibility obligation. |
| design_missing_i18n | widget_alert_banner | ios | ops.ios.liveAlert | Widget 'widget_alert_banner' has no authored message key. |
| design_missing_state | widget_alert_banner | ios | ops.ios.liveAlert | Realization 'alert_banner_ios' does not declare 'error' state coverage. |
| design_behavior_review_required | widget_alert_banner | web | ops.reviewGap.liveAlert | Behavior 'realtime_update' is 'contract_only'. |
| design_missing_accessibility | widget_alert_banner | web | ops.reviewGap.liveAlert | Widget 'widget_alert_banner' has no authored accessibility obligation. |
| design_missing_accessibility | widget_alert_banner | web | ops.alerts.liveBanner | Widget 'widget_alert_banner' has no authored accessibility obligation. |
| design_missing_i18n | widget_alert_banner | web | ops.reviewGap.liveAlert | Widget 'widget_alert_banner' has no authored message key. |
| design_missing_i18n | widget_alert_banner | web | ops.alerts.liveBanner | Widget 'widget_alert_banner' has no authored message key. |
| design_missing_state | widget_alert_banner | web | ops.reviewGap.liveAlert | Realization 'alert_banner_gap_probe' does not declare 'empty' state coverage. |
| design_missing_state | widget_alert_banner | web | ops.reviewGap.liveAlert | Realization 'alert_banner_gap_probe' does not declare 'error' state coverage. |
| design_missing_token_mapping | widget_alert_banner | web | ops.reviewGap.liveAlert | Design contract 'design_operations_review_gap_probe' has no token mappings. |
| design_realization_status_review | widget_alert_banner | web | ops.reviewGap.liveAlert | Realization 'alert_banner_gap_probe' is 'contract_only'. |
| design_missing_accessibility | widget_assignment_form | android | ops.android.assignmentSheet | Widget 'widget_assignment_form' has no authored accessibility obligation. |
| design_missing_i18n | widget_assignment_form | android | ops.android.assignmentSheet | Widget 'widget_assignment_form' has no authored message key. |
| design_missing_accessibility | widget_assignment_form | ios | ops.ios.assignmentSheet | Widget 'widget_assignment_form' has no authored accessibility obligation. |
| design_missing_i18n | widget_assignment_form | ios | ops.ios.assignmentSheet | Widget 'widget_assignment_form' has no authored message key. |
| design_behavior_review_required | widget_assignment_form | web | ops.forms.assignmentSheet | Behavior 'keyboard_navigation' is 'contract_only'. |
| design_behavior_review_required | widget_assignment_form | web | ops.forms.assignmentSheet | Behavior 'optimistic_update' is 'contract_only'. |
| design_missing_accessibility | widget_assignment_form | web | ops.forms.assignmentSheet | Widget 'widget_assignment_form' has no authored accessibility obligation. |

## Review Notes

- design_operations_product_ui is the canonical operations design contract with token mappings.
- design_operations_review_gap_probe is proof-only and intentionally lacks token mappings so the matrix exposes missing-token review work.
- Step 07 is expected to reduce missing accessibility and missing i18n rows by adding authored obligations and messages.
