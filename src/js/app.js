// STBAE - Should This Be an Email? - Main Application Logic

// Application state
let attendees = [];
let duration = 0;

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
    
    const name = nameInput.value.trim();
    const hourlyRate = parseFloat(rateInput.value);
    
    // Validate inputs - handle edge cases
    if (!name || isNaN(hourlyRate) || hourlyRate < 0) {
        return; // Invalid input, don't add attendee (allows zero rate for volunteers)
    }
    
    // Create attendee
    const attendee = createAttendee(name, hourlyRate);
    
    // Add to attendees array
    attendees = addAttendee(attendees, attendee);
    
    // Reset form
    event.target.reset();
    
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
        const attendeeText = document.createTextNode(`${attendee.name} - $${attendee.hourlyRate.toFixed(2)}/hr`);
        listItem.appendChild(attendeeText);
        
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
