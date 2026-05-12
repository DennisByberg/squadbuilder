# ADR-007: shadcn/ui for UI Components

Status: Accepted  
Date: 2026-05-12  
Decision Makers: Dennis Byberg

## Context

The project needs reusable UI components like buttons, dropdowns, and selects. Installing a traditional component library as an npm package means the code lives inside `node_modules` and cannot be modified.

## Decision

We will use shadcn/ui as our component system. Components are copied into `src/components/ui/` and owned by the project.

## Why

- Components are fully customizable — the source lives in the repo
- Built on Base UI primitives with solid accessibility support
- Styled with Tailwind CSS, which we already use
- No version lock-in — updating a component is a deliberate choice, not a forced upgrade

## Alternatives

- **Radix UI + custom styling** — shadcn/ui already does this, no reason to reinvent it
- **Headless UI** — less component coverage and Tailwind-specific without the same ecosystem
- **MUI / Ant Design** — opinionated styling that conflicts with our custom Tailwind theme

## Consequences

- We own the component code and are responsible for keeping it up to date
- `src/components/ui/` is treated as shadcn-managed — do not edit those files by hand
- Custom components that wrap or extend shadcn live in `src/components/`, not `ui/`

## References

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Base UI Documentation](https://base-ui.com)
