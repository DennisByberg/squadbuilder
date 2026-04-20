# ADR-003: Next.js as Application Framework

Status: Accepted  
Date: 2026-04-20  
Decision Makers: Dennis Byberg

## Context

The project needs a framework for building the web app, routing, frontend pages and future backend endpoints.

## Decision

We will use Next.js as the main application framework.

## Why

- Next.js supports React-based frontend development
- File-based routing keeps pages and routes easy to organize
- API routes can be added later without creating a separate backend project
- Keeping frontend and backend features in one codebase is simpler while the project is small

## Alternatives

No alternatives were seriously considered. Next.js was the natural choice for this project.

## Consequences

- Frontend and backend features can live in the same codebase
- The project follows Next.js conventions for routing and app structure
- Some backend needs may require a separate service later if the app grows

## References

- [Next.js Documentation](https://nextjs.org/docs)
