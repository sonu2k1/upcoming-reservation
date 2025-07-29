import React from 'react';
import './App.css';
import UpcomingReservations from './components/UpcomingReservations';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Dashboard</h1>
      </header>
      <main className="app-main">
        <UpcomingReservations />
      </main>
    </div>
  );
}

export default App;
