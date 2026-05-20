# Step 07 i18n and ARIA Summary

> This artifact summarizes message and accessibility obligations added to the operations UI work map.

Status: current

Audience: proof reviewers, designers, frontend developers, and agents.

Use when: you want to confirm Step 07 carries i18n and ARIA obligations into reports and slices.

## Contract Evidence

- Locale policy: en-US, ltr.
- Message examples: msg_incident_detail_title, msg_widget_alert_banner_label, msg_action_resolve_incident_label.
- Accessibility examples: widget_alert_banner live polite, widget_data_grid keyboard data_grid, widget_schedule_calendar keyboard arrow_keys.
- Review surface: ui-design-coverage, ui-realization-report, screen slice, and widget slice.

## Report Markers

- UI design coverage type: design_coverage
- UI realization report type: ui_realization_report
- UI realization summary keys: accessibility_obligations, contract_only, contract_only_accessibility_obligations, design_contract_token_mappings, design_contracts, design_realization_components, design_realization_sets, design_realization_unmapped_widget_usages, diagnostics, errors, failed, i18n_messages, rendered, rendered_accessibility_obligations, rendered_i18n_messages, routed_screens, screens, unsupported, warnings, widget_realizations, widget_usages
- Message section keys: localePolicy, messages
- Accessibility section keys: obligations

## Review Notes

- Static labels and message keys are contract evidence, not a full translation catalog.
- Keyboard and focus models are carried as obligations; complex interaction audits remain implementation proof work.
- Existing design review rows still show missing/contract-only/unsupported cases by design.

## Proof Commands

```sh
topogram query ui-design-coverage ./topo --projection proj_operations_web_surface --format markdown
topogram emit ui-realization-report ./topo --projection proj_operations_web_surface --json
topogram query slice ./topo --screen incident_detail --projection proj_operations_ui_contract --detail standard --format markdown
topogram query slice ./topo --widget widget_alert_banner --detail standard --format markdown
```
