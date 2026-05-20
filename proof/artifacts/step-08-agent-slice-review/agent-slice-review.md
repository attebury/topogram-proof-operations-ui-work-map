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

## Dedicated Selector Gap

- Direct `--layout`, `--region`, and `--design-realization-set` slice selectors currently fail.
- The fallback is workable but too indirect: an agent must ask for a screen/projection slice and infer the layout, region, or realization-set context from nested data.
- This should become a Topogram follow-up: first-class layout, region, and design-realization-set slice selectors with compact Markdown output.

## What An Agent Can Do Today

1. Start with `topogram query slice ./topo --screen intake_queue --projection proj_operations_ui_contract --detail standard --format markdown`.
2. Use the resolved layout and region packet to see where work belongs.
3. Use `topogram query slice ./topo --widget widget_alert_banner --detail standard --format markdown` for component refs, i18n, ARIA, and behavior review.
4. Use `topogram query ui-design-coverage ./topo --projection proj_operations_web_surface --format markdown` to see design gaps before implementation.
5. Run `npm run verify` before considering the proof checkpoint complete.

## Product Follow-Ups

- Add first-class context-slice selectors for `layout_contract`, `region_contract`, and `design_realization_set`.
- Add compact Markdown summaries specifically for layout/region/design work so agents do not need to inspect huge projection slices.
- Add query-list selector documentation for `--screen`, since the command supports it but the query list output does not advertise it.
- Consider a `query ui-work-map` view that starts from screen/layout/region/widget/design as peer concepts.

## Artifact Index

- `screen-slice.md` and `screen-slice.json` show the most useful current agent packet.
- `widget-slice.md` and `widget-slice.json` show semantic widget, design, i18n, and ARIA context.
- `projection-slice.md` and `projection-slice.json` show broad context but are too large for most agent tasks.
- `layout-context.*`, `region-context.*`, and `design-realization-set-context.*` are review cards derived from current outputs.
- `selector-attempts.json` records the missing first-class selector support.
