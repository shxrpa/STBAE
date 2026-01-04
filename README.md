# Should This Be an Email? (STBAE)

A simple web application that calculates the cost of a meeting based on attendee hourly rates and meeting duration. Use it to quickly assess whether a meeting might have been better handled via email or other asynchronous communication.

## Features

- Add meeting attendees with their hourly rates
- Quick role-based presets (Engineer, Manager, Designer, Product Manager, Executive, Consultant)
- Manual rate entry for custom rates
- Real-time cost calculation as you adjust meeting duration
- Prominent display of total meeting cost
- Mobile-friendly responsive design

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/shxrpa/STBAE.git
   cd STBAE
   ```

2. No build step or dependencies required! This is a pure vanilla HTML/CSS/JavaScript application.

3. Start a local HTTP server. You can use Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or use the provided PowerShell script (Windows)
   .\test-app.ps1
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000/src/index.html
   ```

## Usage

1. **Add Attendees:**
   - Enter the attendee's name
   - Optionally select a role from the dropdown (this will auto-fill the hourly rate)
   - Enter or adjust the hourly rate in dollars
   - Click "Add Attendee"

2. **Set Meeting Duration:**
   - Enter the meeting duration in minutes
   - The total cost updates automatically as you type

3. **View Total Cost:**
   - The total meeting cost is displayed prominently at the bottom
   - Cost updates in real-time as you add/remove attendees or change duration

4. **Remove Attendees:**
   - Click the "Remove" button next to any attendee to remove them from the calculation

## Role Presets

The following roles have preset hourly rates:
- Engineer: $150/hr
- Manager: $200/hr
- Designer: $120/hr
- Product Manager: $175/hr
- Executive: $300/hr
- Consultant: $250/hr

You can override these rates manually by typing a custom value.

## Technical Details

- **Technology Stack:** Vanilla HTML5, CSS3, JavaScript (ES5+)
- **No Build Tools:** Runs directly in any modern web browser
- **No Dependencies:** Pure client-side code
- **Browser Support:** Chrome, Firefox, Safari, Edge (modern versions)

## Project Structure

```
STBAE/
├── src/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── styles.css      # Application styles
│   └── js/
│       ├── calculator.js   # Cost calculation logic
│       ├── attendee.js     # Attendee data management
│       └── app.js          # Main application logic
├── specs/
│   └── SHX-166/           # Project specifications
├── ai/
│   └── playbook.md        # Development guidelines
└── README.md              # This file
```

## License

[Add your license here]

## Contributing

[Add contributing guidelines here if needed]

