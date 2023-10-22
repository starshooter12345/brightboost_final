import React from 'react';
import TutorSideNav from './pages/tutors/TutorSideNav';


const TutorLayout = ({ children }) => {
  return (
    <div className="tutorLayout">
      <TutorSideNav />
      <div className="tutorMainContent">
        {children}
      </div>
    </div>
  );
}

export default TutorLayout;
