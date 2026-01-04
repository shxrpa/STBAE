# Implementation Plan: STBAE - Should This Be an Email?

**Branch**: `shx-166-stbae-mvp` | **Date**: 2026-01-04 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/SHX-166/spec.md`

## Summary

Build a lightweight single-page web application that calculates and displays the estimated monetary cost of a meeting based on attendee hourly rates and meeting duration. The app emphasizes real-time calculation updates and visual prominence of the total cost to increase awareness of meeting expenses.

**Technical Approach**: Frontend-only MVP using modern web technologies (HTML, CSS, JavaScript) with no backend requirements. Client-side state management only, no persistence needed.

## Technical Context

**Language/Version**: JavaScript (ES6+), HTML5, CSS3  
**Primary Dependencies**: No framework required for MVP - vanilla JavaScript acceptable. Consider lightweight options if needed (e.g., vanilla JS with optional CSS framework for styling)  
**Storage**: Client-side state only (in-memory, no localStorage required for MVP)  
**Testing**: Manual testing sufficient for MVP (no automated test framework required unless specified)  
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)  
**Project Type**: Single-page web application (SPA)  
**Performance Goals**: 
- Load time < 2 seconds
- Calculation updates < 100ms
- Smooth UI interactions (60fps)
**Constraints**: 
- No authentication
- No backend/server
- No data persistence
- Works offline after initial load (static assets)
**Scale/Scope**: 
- Designed for single-user use during meeting planning
- Handles 1-20 attendees typical meeting size
- No concurrent user concerns (single-page, single-user)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

For this MVP:
- ✅ Single page application (simple scope)
- ✅ Frontend-only (no backend complexity)
- ✅ No database or persistence (simplifies architecture)
- ✅ No authentication (reduces complexity)
- ✅ Vanilla JavaScript acceptable (minimal dependencies)

## Project Structure

### Documentation (this feature)

```text
specs/SHX-166/
├── plan.md              # This file
├── spec.md              # Feature specification
└── tasks.md             # Implementation tasks
```

### Source Code (repository root)

```text
# Single-page web application structure
src/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # Application styles
└── js/
    ├── app.js           # Main application logic
    ├── calculator.js    # Cost calculation logic
    └── attendee.js      # Attendee management logic

# Optional: If using build tools
public/                  # Static assets
  └── index.html

# Documentation
README.md                # Project documentation
```

**Structure Decision**: Single-page application with vanilla JavaScript. Simple file structure with HTML, CSS, and JS separated into logical modules. No build tools required for MVP, but structure allows for future addition if needed.

## Complexity Tracking

> **No violations identified - this is a simple frontend-only MVP**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |

## Implementation Notes

### Phase 0: Research (Complete)

- ✅ Confirmed frontend-only approach is viable
- ✅ Vanilla JavaScript sufficient (no framework required)
- ✅ No build tools needed for MVP
- ✅ Simple HTML/CSS/JS structure is appropriate

### Phase 1: Design

**UI/UX Approach**:
- Clean, simple interface focused on the calculation
- Large, prominent display of total cost
- Easy add/remove attendee controls
- Duration input (minutes)
- Real-time updates as user types/changes values

**Data Model**:
- Attendee: { name: string, hourlyRate: number, role?: string }
- Meeting: { attendees: Attendee[], duration: number }
- Calculation: { costPerMinute: number, totalCost: number }

**Technical Decisions**:
1. **No Framework**: Vanilla JS keeps bundle size minimal and reduces complexity
2. **Inline State**: State managed in JavaScript variables (no state management library needed)
3. **Event-Driven Updates**: DOM updates triggered by input events (change, input)
4. **CSS for Styling**: Plain CSS with modern features (CSS Grid/Flexbox for layout)
5. **No Build Step**: Direct HTML/CSS/JS files for fastest development iteration

### Phase 2: Implementation Strategy

1. **Setup**: Create basic HTML structure and file organization
2. **Core Calculation**: Implement cost calculation logic (pure functions, testable)
3. **Attendee Management**: Add/remove attendee functionality
4. **UI Integration**: Connect inputs to calculation and display results
5. **Styling**: Apply visual emphasis to total cost display
6. **Polish**: Error handling, edge cases, responsive design

