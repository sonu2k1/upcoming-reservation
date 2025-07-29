import React from 'react';
import './UpcomingReservations.css';

const UpcomingReservations = () => {
  const reservationsData = [
    { id: 1, venueName: "The Grand Cafe", date: "2024-08-15", time: "19:00", partySize: 2, status: "Confirmed" },
    { id: 2, venueName: "Ocean's Breeze", date: "2024-08-22", time: "20:30", partySize: 4, status: "Confirmed" },
    { id: 3, venueName: "The Rooftop Grill", date: "2024-09-01", time: "18:00", partySize: 5, status: "Pending" }
  ];

  const getVenueImage = (venueName) => {
    switch (venueName) {
      case "The Grand Cafe":
        return "/images/grand-cafe.jpeg";
      case "Ocean's Breeze":
        return "/images/oceans-breeze.jpeg";
      case "The Rooftop Grill":
        return "/images/rooftop-grill.jpeg";
      default:
        return "/default.jpg";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleCancelReservation = (id) => {
    console.log("Cancel reservation:", id);
  };

  const getStatusClass = (status) => {
    return status.toLowerCase() === 'confirmed' ? 'status-confirmed' : 'status-pending';
  };

  return (
    <div className="reservations-container">
      <div className="reservations-header">
        <h2>Upcoming Reservations</h2>
        <p className="reservations-subtitle">Manage your upcoming dining reservations</p>
      </div>

      <div className="reservations-grid">
        {reservationsData.map((reservation) => (
          <div key={reservation.id} className="reservation-card">
            
            <img 
              src={getVenueImage(reservation.venueName)} 
              alt={reservation.venueName} 
              className="venue-image"
            />

            <div className="card-header">
              <h3 className="venue-name">{reservation.venueName}</h3>
              <span className={`status-badge ${getStatusClass(reservation.status)}`}>
                {reservation.status}
              </span>
            </div>

            <div className="card-body">
              <div className="reservation-detail">
                <div className="detail-icon">📅</div>
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{formatDate(reservation.date)}</span>
                </div>
              </div>

              <div className="reservation-detail">
                <div className="detail-icon">🕐</div>
                <div className="detail-content">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{formatTime(reservation.time)}</span>
                </div>
              </div>

              <div className="reservation-detail">
                <div className="detail-icon">👥</div>
                <div className="detail-content">
                  <span className="detail-label">Party Size</span>
                  <span className="detail-value">{reservation.partySize} {reservation.partySize === 1 ? 'person' : 'people'}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button 
                className="cancel-button"
                onClick={() => handleCancelReservation(reservation.id)}
              >
                Cancel Reservation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReservations;
