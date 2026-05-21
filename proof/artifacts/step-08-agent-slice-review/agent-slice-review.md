# Step 08 Agent Slice Review

> This review checks whether the operations UI work map is useful enough for an agent to make UI changes from focused context instead of reading the whole repo.

Status: current

Audience: Topogram maintainers, designers, frontend developers, and coding agents.

Use when: deciding what the next UI slice/report product gap should be after this proof.

## Useful Enough

- Screen slices are useful: `intake_queue` includes layout inheritance, resolved regions, widget bindings, i18n messages, accessibility obligations, write scope, and proof commands.
- Widget slices are useful: `widget_alert_banner` includes design realization states, component refs, i18n keys, live-region obligations, and related source usages.
- Projection slices are useful for broad orientation: they show the full UI work map, terms, rules, capabilities, widgets, verifications, and proof commands.
- Design coverage is useful for designer/developer review: it makes rendered, contract-only, implementation-owned, unsupported, missing-state, and missing-token rows visible.

## Dedicated Selectors Resolved

- Direct `--layout`, `--region`, and `--design-realization-set` slice selectors work in `@topogram/cli@0.3.113`.
- The layout slice gives agents inherited regions, widgets using the layout, design context, and proof commands without scanning the full projection slice.
- The region slice gives agents style intent, region obligations, widget usages, and affected screens in one focused packet.
- The design realization set slice gives designers and agents the widget-to-component mapping, behavior support, token/i18n/a11y review context, and proof commands.

## What An Agent Can Do Today

1. Start with `topogram query slice ./topo --screen intake_queue --projection proj_operations_ui_contract --detail compact --format markdown`.
2. Use the resolved layout and region packet to see where work belongs.
3. Use `topogram query slice ./topo --layout layout_queue_workspace --projection proj_operations_ui_contract --detail compact --format markdown` for reusable layout work.
4. Use `topogram query slice ./topo --region region_work_queue --projection proj_operations_ui_contract --detail compact --format markdown` for a focused region packet.
5. Use `topogram query slice ./topo --design-realization-set realization_set_operations_control_room_widgets --projection proj_operations_ui_contract --detail compact --format markdown` for component mapping review.
6. Use `topogram query slice ./topo --widget widget_alert_banner --detail compact --format markdown` for component refs, i18n, ARIA, and behavior review.
7. Use `topogram query ui-design-coverage ./topo --projection proj_operations_web_surface --format markdown` to see design gaps before implementation.
8. Run `npm run verify` before considering the proof checkpoint complete.

## Product Follow-Ups

- Keep improving compact Markdown summaries for layout/region/design work as the proof exposes new agent friction.
- Consider a `query ui-work-map` view that starts from screen/layout/region/widget/design as peer concepts.

## Artifact Index

- `screen-slice.md` and `screen-slice.json` show the most useful current agent packet.
- `widget-slice.md` and `widget-slice.json` show semantic widget, design, i18n, and ARIA context.
- `projection-slice.md` and `projection-slice.json` show broad context but are too large for most agent tasks.
- `layout-context.*`, `region-context.*`, and `design-realization-set-context.*` are direct first-class context slices.
- `selector-attempts.json` records that the dedicated selector gap is resolved in `@topogram/cli@0.3.113`.
