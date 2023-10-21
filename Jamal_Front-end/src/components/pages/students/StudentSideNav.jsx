import React from 'react';
import { Link } from 'react-router-dom';
import './StudentSideNav.css';


function StudentSideNav() {
  return (
    <nav className="studentLayout">
      <ul>
     
        <li><Link to="/students/ask-question">Ask a Question</Link></li>
       
    
      </ul>
    </nav>
  );
}


export default StudentSideNav;

