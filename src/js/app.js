// STBAE - Should This Be an Email? - Main Application Logic

// Application state
let attendees = [];

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
    
    // Validate inputs
    if (!name || isNaN(hourlyRate) || hourlyRate < 0) {
        return;
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
    
    // Render each attendee
    attendees.forEach((attendee, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${attendee.name} - $${attendee.hourlyRate.toFixed(2)}/hr`;
        attendeesList.appendChild(listItem);
    });
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
