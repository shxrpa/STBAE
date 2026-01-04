# Project Playbook

This file defines mandatory rules that must be followed for this project.

## Canonical Sources

- Specifications live in `/specs/SHX-166/`
- Linear is used for execution tracking, not requirements

## Process

1. Always fetch the Linear issue before starting work.
2. Write or update `spec.md` and `plan.md` before any coding.
3. Only implement tasks listed in `tasks.md`.
4. Implement one task at a time.
5. After each task:
   - Run build/tests
   - Commit changes
   - Update the related Linear sub-issue
6. If requirements are unclear, ask in Linear and stop.

## Safety

- Never read or write secrets.
- Never add dependencies without noting it in Linear.
- Never mark tasks done without code + commit.
