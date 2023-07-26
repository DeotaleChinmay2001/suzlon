import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h2 className="not-found-heading">404 - Page Not Found</h2>
      <p className="not-found-message">The requested page could not be found.</p>
      <Link to="/" className="not-found-link">Go back to homepage</Link>
    </div>
  );
}

export default NotFound;
