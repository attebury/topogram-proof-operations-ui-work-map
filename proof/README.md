# Proof Steps

> The operations UI work-map proof is built as inspectable branches and tags, with each step adding one UI concept layer.

Status: current

Audience: humans and agents reviewing whether Topogram's UI model is understandable at real app scale.

Use when: you want to compare each checkpoint before the next UI layer is added.

## Steps

1. `proof-01-domain-and-app-shell`: establishes the operations-dashboard domain, actors, capabilities, proof scripts, SDLC policy, and app-map rules.
2. `proof-02-semantic-regions`: adds reusable region contracts.
3. `proof-03-reusable-layouts`: adds reusable layout contracts.
4. `proof-04-screens-and-navigation`: adds substantial screens and routes.
5. `proof-05-widgets-and-bindings`: binds semantic widgets into inherited layout regions.
6. `proof-06-design-contract-realizations`: maps widgets to web, iOS, and Android component refs.
7. `proof-07-i18n-aria-states`: adds messages, accessibility obligations, and state coverage.
8. `proof-08-agent-slice-review`: evaluates whether agent slices are useful without reading the whole repo.
