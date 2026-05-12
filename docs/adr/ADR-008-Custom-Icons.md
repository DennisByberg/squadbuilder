# ADR-008: Custom SVG Icon Components

Status: Accepted  
Date: 2026-05-12  
Decision Makers: Dennis Byberg

## Context

The project needs icons throughout the UI. The initial setup used lucide-react, a popular icon library, but this adds an external dependency for something that can be handled with plain SVG.

## Decision

We will write icons as custom React components in `src/components/icons/`. Each icon is a `.tsx` file that renders an inline SVG.

## Why

- No external dependency — icons cannot change or disappear due to a library update
- Only the icons we actually use exist in the codebase
- Each icon is a small, predictable React component with typed props (`size`, `className`)
- Full control over the SVG paths if a design change is needed

## Alternatives

- **lucide-react** — large dependency, ships hundreds of icons we don't use
- **heroicons** — same tradeoff as lucide-react
- **SVG files in `public/`** — harder to style with Tailwind (no `currentColor`, no `className`)

## Consequences

- New icons must be created manually as React components in `src/components/icons/`
- Icon naming follows the pattern `<Name>Icon.tsx`, e.g. `CheckIcon.tsx`
- Props: `size?: number` (default `16`) and `className?: string`

## References

- [Lucide Icons](https://lucide.dev) — used as SVG path reference
