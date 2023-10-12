import React from 'react';
import { Link } from 'react-router-dom';
import './TutorSideNav.css';

function TutorSideNav() {
  return (
    <nav className="tutorLayout">
      <ul>
        <li><Link to="/tutors/session-details">Session Details</Link></li>
        <li><Link to="/tutors/view-questions">View & Log Questions</Link></li>
      </ul>
    </nav>
  );
}

export default TutorSideNav;