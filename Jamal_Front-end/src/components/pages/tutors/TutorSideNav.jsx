import React from 'react';
import { Link } from 'react-router-dom';
import './TutorSideNav.css';
import backgroundImage from '../../../assets/images/secondphoto.jpg';

const containerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',  // This will ensure the image covers the entire container
  backgroundRepeat: 'no-repeat',
  height: '100vh'  // This will make sure it covers the full viewport height
};

function TutorSideNav() {
  return (
    
    <nav className="tutorLayout" style={containerStyle}>
      <ul>
        <li><Link to="/tutors/session-details">Session Details</Link></li>
        <li><Link to="/tutors/view-questions">View & Log Questions</Link></li>
      </ul>
    </nav>
  );
}

export default TutorSideNav;