import React from 'react';
import { Link } from 'react-router-dom';
import './StudentSideNav.css';


function StudentSideNav() {
  return (
    <nav className="studentLayout">
      <ul>
        <li><Link to="/students/my-profile">My Profile</Link></li>
        <li><Link to="/students/ask-question">Ask a Question</Link></li>
        <li><Link to="/students/view-tutors">View Tutors</Link></li>
        <li><Link to="/students/tutor-availability">Tutor Availability</Link></li>
      </ul>
    </nav>
  );
}


export default StudentSideNav;

