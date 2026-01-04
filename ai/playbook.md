# Project Playbook

This file defines mandatory rules that must be followed for this project.

## Canonical Sources

- Specifications live in `/specs/SHX-166/`
- Linear is used for execution tracking, not requirements


##DELIVERY MODEL — MUST FOLLOW

1. Linear Story = GitHub Pull Request
   - Each Linear story (parent issue) MUST have exactly one GitHub PR.
   - The PR title MUST include the Linear story ID.
     Example: SHX-XXX: Implement Email Classification MVP

2. Linear Sub-issues = Execution Tasks
   - Sub-issues represent internal execution steps only.
   - Sub-issues must be completed on the same branch as the story PR.

3. Commits = Internal Traceability
   - Commits are for implementation history only.
   - Commit messages MAY reference sub-issue IDs, but this is optional.
   - Workflow automation must NOT depend on commit linking.

4. Branching Rules
   - One branch per Linear story.
   - Branch name SHOULD include the story ID.
     Example: eng-201

5. Pull Request Rules
   - Open the PR as soon as meaningful work begins.
   - All commits for the story MUST go into the same PR.
   - The PR is the unit of review, approval, and delivery.

6. Completion Rules
   - A story is considered complete ONLY when:
     - All sub-issues are marked Done
     - The PR is approved and merged

## Process

1. Always fetch the Linear issue before starting work.
2. Write or update `spec.md` and `plan.md` before any coding.
3. Only implement tasks listed in `tasks.md`.
4. Implement one task at a time.
5. After each task:
   - Run build/tests
   - Commit changes to the story branch
   -All commits and PRs must include the Linear issue ID in the message.
   - Update the related Linear sub-issue
   - Do NOT open or merge a PR until all tasks are complete

6. If requirements are unclear, ask in Linear and stop.


## AGENT CONSTRAINTS

1.  Do NOT open more than one PR per Linear story.
2.  Do NOT open a PR without an explicit Linear story ID.
3.  Do NOT merge a PR unless explicitly instructed or all sub-issues are complete.

## Safety

- Never read or write secrets.
- Never add dependencies without noting it in Linear.
- Never mark tasks done without code + commit.
