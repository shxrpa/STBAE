# Feature Specification: STBAE - Should This Be an Email?

**Feature Branch**: `shx-166-stbae-mvp`  
**Created**: 2026-01-04  
**Status**: Draft  
**Linear Issue**: [SHX-166](https://linear.app/shxrpa/issue/SHX-166/stbae-mvp)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Calculate Meeting Cost (Priority: P1)

A user opens the app and needs to quickly calculate the estimated cost of a meeting by adding attendees, assigning roles or hourly rates, and setting the duration. The app displays the total cost in real-time.

**Why this priority**: This is the core MVP functionality - without this, the app provides no value. This single story delivers a complete, usable tool.

**Independent Test**: A user can open the app, add at least one attendee with an hourly rate, set a meeting duration, and see the calculated total meeting cost displayed clearly. The calculation updates instantly as inputs change.

**Acceptance Scenarios**:

1. **Given** the app is loaded, **When** a user adds an attendee with name and hourly rate, **Then** the attendee appears in the list
2. **Given** an attendee is added, **When** the user sets a meeting duration in minutes, **Then** the cost per minute and total meeting cost are displayed
3. **Given** multiple attendees are added, **When** the user sets a duration, **Then** the total cost reflects the sum of all attendee costs
4. **Given** an attendee is added with an hourly rate, **When** the user changes the duration, **Then** the total cost updates immediately without page refresh
5. **Given** the user has set up a meeting, **When** they remove an attendee, **Then** the total cost recalculates immediately

---

### User Story 2 - Assign Role-Based Rates (Priority: P2)

A user wants to assign common roles (like "Engineer", "Manager", "Designer") to attendees with preset hourly rates, rather than manually entering rates for each person.

**Why this priority**: This improves usability for repeat use, but the MVP can function without it (users can still manually enter rates).

**Independent Test**: A user can select a role from a dropdown/preset list and the hourly rate is automatically assigned. The meeting cost calculation still works correctly.

**Acceptance Scenarios**:

1. **Given** the app supports role presets, **When** a user selects a role for an attendee, **Then** the hourly rate is automatically populated
2. **Given** a role-based rate is assigned, **When** the user manually changes the rate, **Then** the manual rate takes precedence
3. **Given** multiple attendees have the same role, **When** the user changes the role's hourly rate, **Then** all attendees with that role update (or user can override individually)

---

### User Story 3 - Visual Cost Emphasis (Priority: P3)

A user wants the total meeting cost to be visually emphasized to create impact and awareness during meeting planning.

**Why this priority**: The visual emphasis improves the psychological impact and user experience, but the core calculation (P1) works without it.

**Independent Test**: The total meeting cost is displayed prominently with larger text, bold styling, or color emphasis that makes it stand out from other UI elements.

**Acceptance Scenarios**:

1. **Given** a meeting cost has been calculated, **When** the user views the app, **Then** the total cost is displayed with visual emphasis (larger text, bold, or distinctive color)
2. **Given** the cost display is emphasized, **When** the cost changes, **Then** the emphasis remains consistent
3. **Given** no cost is calculated yet (no attendees/duration), **When** the user views the app, **Then** the emphasis area shows a placeholder or clear state

---

### Edge Cases

- What happens when duration is 0 or negative? (Should disable calculation or show $0)
- What happens when hourly rate is 0? (Should allow for volunteer/free attendees)
- What happens when hourly rate is extremely high? (Should handle large numbers gracefully)
- How does system handle very long meeting durations (e.g., 8+ hours)?
- What happens when user removes all attendees? (Should show empty state)
- How does system handle rapid input changes? (Should remain responsive)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow users to add meeting attendees with name and hourly rate
- **FR-002**: System MUST allow users to remove meeting attendees
- **FR-003**: System MUST allow users to set meeting duration in minutes
- **FR-004**: System MUST calculate cost per minute for each attendee (hourly rate / 60)
- **FR-005**: System MUST calculate total meeting cost (sum of all attendee costs × duration)
- **FR-006**: System MUST display calculations in real-time as inputs change (no page refresh)
- **FR-007**: System MUST display total meeting cost with visual emphasis
- **FR-008**: System MUST allow manual input of hourly rates (no authentication required)
- **FR-009**: System MUST work as a single-page web application
- **FR-010**: System MUST function without server-side storage (client-side state only)

### Key Entities

- **Attendee**: Represents a meeting participant with name and hourly rate (or role). Can be added/removed dynamically. No persistence required.
- **Meeting**: Represents the collection of attendees and duration. Calculated total cost is derived from attendees and duration.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user can calculate a meeting's cost in under 30 seconds from app load
- **SC-002**: The calculation updates instantly (under 100ms) as inputs change
- **SC-003**: The app is understandable without documentation (discoverable UI)
- **SC-004**: The tool can be used during a live meeting or planning session (no login, fast load)
- **SC-005**: The app loads in under 2 seconds on typical network connection
- **SC-006**: The app works on modern browsers (Chrome, Firefox, Safari, Edge) without errors

