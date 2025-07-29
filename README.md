# Upcoming Reservations Component

A responsive React component for displaying and managing upcoming restaurant reservations.

## Features

- **Responsive Design**: Optimized for desktop (1200px) and mobile (375px) viewports
- **Interactive Cards**: Each reservation displays venue name, date, time, and party size
- **Status Indicators**: Visual badges for reservation status (Confirmed/Pending)
- **Cancel Functionality**: Cancel button logs reservation ID to console
- **Modern UI**: Clean, professional design with hover effects

## Tech Stack

- React 18
- CSS3 (No external frameworks)
- Modern ES6+ JavaScript

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository**
git clone [your-repository-url]
cd upcoming-reservations

text

2. **Install dependencies**
   
`npm install`

text

3. **Start the development server**
   
`npm start`

text

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically reload when you make changes to the source code.

## Project Structure

upcoming-reservations/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── UpcomingReservations.js
│ │ └── UpcomingReservations.css
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json
└── README.md

text

## Component Features

### Data Structure
The component uses static JSON data with the following structure:
- `id`: Unique identifier
- `venueName`: Restaurant name
- `date`: Reservation date (YYYY-MM-DD)
- `time`: Reservation time (HH:MM)
- `partySize`: Number of guests
- `status`: Reservation status (Confirmed/Pending)

### Responsive Breakpoints
- **Desktop**: 1200px and above (3-column grid)
- **Tablet**: 768px - 1199px (2-column grid)
- **Mobile**: 375px - 767px (1-column grid)
- **Small Mobile**: Below 375px (optimized single column)

### Functionality
- **Date Formatting**: Displays dates in readable format (e.g., "Monday, August 15, 2024")
- **Time Formatting**: Shows time in 12-hour format with AM/PM
- **Cancel Action**: Clicking "Cancel Reservation" logs the reservation ID to browser console

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
