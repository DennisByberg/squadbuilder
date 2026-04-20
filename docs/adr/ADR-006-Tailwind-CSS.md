# ADR-006: Tailwind CSS for Styling

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs a consistent way to style the user interface. The owner also wants to learn Tailwind CSS properly by using it directly instead of relying on a component library.

## Decision

We will use Tailwind CSS as the styling tool for the UI.

## Why

- Tailwind CSS is already configured in the project
- Utility classes make styling fast without adding another CSS framework
- Styling can stay close to the components that use it
- Using Tailwind directly helps build a better understanding of the styling system
- Avoiding a component library keeps the UI choices more explicit

## Alternatives

MUI or another component library was considered, but will not be used now because the project should use Tailwind CSS directly.

## Consequences

- UI styling should use Tailwind CSS by default
- Developers need to understand Tailwind utility classes
- Ready-made component libraries such as MUI should not be added without a new ADR

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Styling Documentation](https://nextjs.org/docs/app/getting-started/css)
