# ADR-004: React for User Interface

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs a way to build interactive user interface features for squads and lineups.

## Decision

We will use React for building the user interface through Next.js.

## Why

- React is the UI foundation for Next.js
- Components make it easier to split the interface into smaller parts
- Squad and lineup features can be built as reusable UI pieces
- React is widely used and well documented

## Alternatives

No alternatives were seriously considered. React was the natural choice because it is used by Next.js.

## Consequences

- UI code will follow React and Next.js conventions
- Components can be reused across pages and features
- The project depends on the React ecosystem

## References

- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
