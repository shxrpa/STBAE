// STBAE - Should This Be an Email? - Attendee Management Logic

/**
 * Create a new attendee object
 * @param {string} name - Attendee name
 * @param {number} hourlyRate - Hourly rate in dollars
 * @param {string} [role] - Optional role name
 * @returns {Object} Attendee object
 */
function createAttendee(name, hourlyRate, role) {
    return {
        name: name || '',
        hourlyRate: hourlyRate || 0,
        role: role || null
    };
}

/**
 * Add an attendee to the attendees array
 * @param {Array} attendees - Current attendees array
 * @param {Object} attendee - Attendee object to add
 * @returns {Array} New array with attendee added
 */
function addAttendee(attendees, attendee) {
    return [...attendees, attendee];
}

/**
 * Remove an attendee from the attendees array by index
 * @param {Array} attendees - Current attendees array
 * @param {number} index - Index of attendee to remove
 * @returns {Array} New array with attendee removed
 */
function removeAttendee(attendees, index) {
    if (index < 0 || index >= attendees.length) {
        return attendees;
    }
    return attendees.filter((_, i) => i !== index);
}

