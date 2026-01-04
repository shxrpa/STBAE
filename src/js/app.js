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
    
    // TODO: Update UI in subsequent tasks
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
