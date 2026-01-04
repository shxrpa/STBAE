// STBAE - Should This Be an Email? - Cost Calculation Logic

/**
 * Calculate cost per minute from an hourly rate
 * @param {number} hourlyRate - The hourly rate in dollars
 * @returns {number} Cost per minute
 */
function calculateCostPerMinute(hourlyRate) {
    return hourlyRate / 60;
}

/**
 * Calculate total meeting cost from attendees array and duration
 * @param {Array} attendees - Array of attendee objects with hourlyRate property
 * @param {number} durationMinutes - Meeting duration in minutes
 * @returns {number} Total meeting cost in dollars
 */
function calculateTotalMeetingCost(attendees, durationMinutes) {
    if (!attendees || attendees.length === 0 || !durationMinutes || durationMinutes <= 0) {
        return 0;
    }
    
    const totalCostPerMinute = attendees.reduce((sum, attendee) => {
        const rate = attendee.hourlyRate || 0;
        return sum + calculateCostPerMinute(rate);
    }, 0);
    
    return totalCostPerMinute * durationMinutes;
}

