// STBAE - Should This Be an Email? - Main Application Logic

// Application state
let attendees = [];
let duration = 0;

// Role presets with default hourly rates
const ROLE_PRESETS = {
    'Engineer': 150,
    'Manager': 200,
    'Designer': 120,
    'Product Manager': 175,
    'Executive': 300,
    'Consultant': 250
};

/**
 * Initialize the application
 */
function initializeApp() {
    // Get form element
    const attendeeForm = document.getElementById('attendee-form');
    
    // Attach form submit handler
    if (attendeeForm) {
        attendeeForm.addEventListener('submit', handleAddAttendee);
    }
    
    // Get duration input
    const durationInput = document.getElementById('meeting-duration');
    
    // Attach duration input handler
    if (durationInput) {
        durationInput.addEventListener('input', handleDurationChange);
    }
    
    // Get role selector
    const roleSelector = document.getElementById('attendee-role');
    
    // Attach role selection handler
    if (roleSelector) {
        roleSelector.addEventListener('change', handleRoleSelection);
    }
}

/**
 * Handle role selection change
 * @param {Event} event - Change event
 */
function handleRoleSelection(event) {
    const selectedRole = event.target.value;
    const rateInput = document.getElementById('attendee-rate');
    
    if (selectedRole && selectedRole !== '' && ROLE_PRESETS[selectedRole]) {
        rateInput.value = ROLE_PRESETS[selectedRole];
    }
}

/**
 * Handle duration input change
 * @param {Event} event - Input event
 */
function handleDurationChange(event) {
    const value = parseFloat(event.target.value);
    duration = (isNaN(value) || value < 0) ? 0 : value;
    updateCostDisplay();
}

/**
 * Handle add attendee form submission
 * @param {Event} event - Form submit event
 */
function handleAddAttendee(event) {
    event.preventDefault();
    
    // Get form data
    const nameInput = document.getElementById('attendee-name');
    const rateInput = document.getElementById('attendee-rate');
    const roleSelector = document.getElementById('attendee-role');
    
    const name = nameInput.value.trim();
    const hourlyRate = parseFloat(rateInput.value);
    const selectedRole = roleSelector ? roleSelector.value : null;
    const role = (selectedRole && selectedRole !== '') ? selectedRole : null;
    
    // Validate inputs - handle edge cases
    if (!name || isNaN(hourlyRate) || hourlyRate < 0) {
        return; // Invalid input, don't add attendee (allows zero rate for volunteers)
    }
    
    // Create attendee
    const attendee = createAttendee(name, hourlyRate, role);
    
    // Add to attendees array
    attendees = addAttendee(attendees, attendee);
    
    // Reset form
    event.target.reset();
    if (roleSelector) {
        roleSelector.value = '';
    }
    
    // Update attendees list display
    renderAttendeesList();
    
    // Update cost display
    updateCostDisplay();
}

/**
 * Render attendees list in the DOM
 */
function renderAttendeesList() {
    const attendeesList = document.getElementById('attendees-list');
    if (!attendeesList) return;
    
    // Clear existing list
    attendeesList.innerHTML = '';
    
    // Handle edge case: empty attendees
    if (!attendees || attendees.length === 0) {
        return; // Show empty list
    }
    
    // Render each attendee
    attendees.forEach((attendee, index) => {
        const listItem = document.createElement('li');
        
        // Build attendee text with role if present
        let attendeeText = `${attendee.name} - $${attendee.hourlyRate.toFixed(2)}/hr`;
        if (attendee.role) {
            attendeeText = `${attendee.name} (${attendee.role}) - $${attendee.hourlyRate.toFixed(2)}/hr`;
        }
        
        const textNode = document.createTextNode(attendeeText);
        listItem.appendChild(textNode);
        
        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.type = 'button';
        removeButton.addEventListener('click', () => handleRemoveAttendee(index));
        listItem.appendChild(removeButton);
        
        attendeesList.appendChild(listItem);
    });
}

/**
 * Handle remove attendee
 * @param {number} index - Index of attendee to remove
 */
function handleRemoveAttendee(index) {
    attendees = removeAttendee(attendees, index);
    renderAttendeesList();
    updateCostDisplay();
}

/**
 * Update cost display
 */
function updateCostDisplay() {
    const costDisplay = document.getElementById('total-cost');
    if (!costDisplay) return;
    
    // Handle edge cases: empty attendees or zero duration
    if (!attendees || attendees.length === 0 || !duration || duration <= 0) {
        costDisplay.textContent = '$0.00';
        return;
    }
    
    const totalCost = calculateTotalMeetingCost(attendees, duration);
    costDisplay.textContent = `$${totalCost.toFixed(2)}`;
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
