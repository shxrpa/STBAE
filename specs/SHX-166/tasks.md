---
description: "Task list for STBAE MVP implementation"
---

# Tasks: STBAE - Should This Be an Email?

**Input**: Design documents from `/specs/SHX-166/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Manual testing only for MVP - no automated tests required unless specified.

**Organization**: Tasks are organized by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single-page web application structure: `src/` at repository root
- HTML: `src/index.html`
- CSS: `src/css/styles.css`
- JavaScript: `src/js/` (app.js, calculator.js, attendee.js)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure (src/, src/css/, src/js/ directories)
- [ ] T002 Create basic HTML structure in src/index.html
- [ ] T003 [P] Create CSS file structure in src/css/styles.css
- [ ] T004 [P] Create JavaScript file structure in src/js/app.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Implement cost calculation functions in src/js/calculator.js
  - Function to calculate cost per minute from hourly rate
  - Function to calculate total meeting cost from attendees and duration
- [ ] T006 [P] Create attendee data model and management functions in src/js/attendee.js
  - Attendee object structure
  - Functions to add/remove attendees
- [ ] T007 Setup basic event handling structure in src/js/app.js
- [ ] T008 Create basic UI layout structure in src/index.html (container elements for attendees, duration input, cost display)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Calculate Meeting Cost (Priority: P1) 🎯 MVP

**Goal**: User can add attendees, set duration, and see real-time cost calculation

**Independent Test**: Open app, add attendee with hourly rate, set duration, see total cost displayed and updating in real-time

### Implementation for User Story 1

- [ ] T009 [US1] Create attendee input form in src/index.html (name input, hourly rate input, add button)
- [ ] T010 [US1] Implement add attendee functionality in src/js/app.js (connect form to attendee management)
- [ ] T011 [US1] Create attendee list display in src/index.html
- [ ] T012 [US1] Implement display attendees in list (src/js/app.js - render attendee list)
- [ ] T013 [US1] Create duration input in src/index.html
- [ ] T014 [US1] Implement duration input handling in src/js/app.js (connect to calculation)
- [ ] T015 [US1] Create total cost display area in src/index.html
- [ ] T016 [US1] Implement real-time cost calculation display in src/js/app.js (connect calculator to DOM updates)
- [ ] T017 [US1] Implement remove attendee functionality (remove button for each attendee)
- [ ] T018 [US1] Handle edge cases (empty attendees, zero duration, zero rates)

**Checkpoint**: At this point, User Story 1 should be fully functional - user can add/remove attendees, set duration, and see real-time cost updates

---

## Phase 4: User Story 2 - Assign Role-Based Rates (Priority: P2)

**Goal**: User can assign preset roles with default hourly rates to attendees

**Independent Test**: Select a role from dropdown, hourly rate auto-fills, cost calculation still works

### Implementation for User Story 2

- [ ] T019 [US2] Define role presets (data structure with role names and default rates) in src/js/app.js
- [ ] T020 [US2] Add role selector dropdown to attendee form in src/index.html
- [ ] T021 [US2] Implement role selection logic (auto-fill hourly rate when role selected) in src/js/app.js
- [ ] T022 [US2] Allow manual rate override (user can change rate after role selection) in src/js/app.js
- [ ] T023 [US2] Update attendee display to show role (if selected) in src/js/app.js

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - users can use roles or manual rates

---

## Phase 5: User Story 3 - Visual Cost Emphasis (Priority: P3)

**Goal**: Total meeting cost is visually emphasized with prominent styling

**Independent Test**: Total cost is displayed with larger text, bold styling, or distinctive color that stands out

### Implementation for User Story 3

- [ ] T024 [US3] Add CSS styling for prominent cost display in src/css/styles.css (large text, bold, color)
- [ ] T025 [US3] Apply visual emphasis classes to total cost display element in src/index.html
- [ ] T026 [US3] Ensure emphasis remains consistent on updates (CSS classes applied correctly) in src/js/app.js
- [ ] T027 [US3] Add empty state styling (when no cost calculated) in src/css/styles.css

**Checkpoint**: All user stories should now be complete with visual emphasis on total cost

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the overall application

- [ ] T028 [P] Add responsive design styles (mobile-friendly layout) in src/css/styles.css
- [ ] T029 [P] Add basic error handling and validation (invalid inputs, negative numbers) in src/js/app.js
- [ ] T030 [P] Improve UI/UX (loading states, transitions, better spacing) in src/css/styles.css and src/js/app.js
- [ ] T031 [P] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] T032 [P] Create README.md with setup and usage instructions
- [ ] T033 [P] Code cleanup and refactoring (ensure code is readable and maintainable)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories proceed sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after User Story 1 - Enhances attendee input functionality
- **User Story 3 (P3)**: Can start after User Story 1 - Adds styling to existing cost display

### Within Each User Story

- Core functionality before enhancements
- Data model before UI integration
- UI structure before styling
- Basic functionality before edge cases

### Parallel Opportunities

- CSS file creation (T003) and JS file creation (T004) can run in parallel
- Calculator functions (T005) and attendee management (T006) can run in parallel
- Polish tasks marked [P] can run in parallel
- Different styling improvements can be done in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently - core functionality works
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Polish → Final deployment

### Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- User Story 1 delivers complete MVP value
- User Stories 2 and 3 are enhancements
- Manual testing sufficient for MVP
- Commit after each task or logical group
- Stop at checkpoints to validate functionality

