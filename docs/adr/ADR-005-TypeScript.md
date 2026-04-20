# ADR-005: TypeScript as Default Language

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs a default language for app code, shared helpers and local scripts.

## Decision

We will use TypeScript as the default language.

## Why

- TypeScript helps catch mistakes before the app runs
- Types make code easier to understand as the project grows
- Next.js has strong TypeScript support
- Shared helpers and local scripts can use the same language as the app

## Alternatives

No alternatives were seriously considered. TypeScript was the natural choice for this project.

## Consequences

- New app code, shared helpers and scripts should use TypeScript by default
- Developers need to understand basic TypeScript types
- Some setup and dependencies need TypeScript support

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Next.js TypeScript Documentation](https://nextjs.org/docs/app/api-reference/config/typescript)
