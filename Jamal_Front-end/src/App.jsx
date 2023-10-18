import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import StudentRegistration from './components/StudentRegistration';
import TutorRegistration from './components/TutorRegistration';
import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';
import StudentLayout from './components/pages/students/StudentLayout';
import SessionDetails from './components/pages/tutors/SessionDetails';
import TutorSideNav from './components/pages/tutors/TutorSideNav';
import ViewQuestions from './components/pages/tutors/ViewQuestions';
import AskQuestion from './components/pages/students/AskQuestion';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/student-registration" component={StudentRegistration} />
          <Route path="/tutor-registration" component={TutorRegistration} />
          <Route path="/admin-dashboard" component={AdminDashboard}/>
          {/* Routes for student pages */}
          <Route path="/students" component={StudentLayout} />
          <Route path="/tutors/session-details" component={SessionDetails} />
          <Route path="/tutors/sidenav" component={TutorSideNav} />
          <Route path="/tutors/view-questions" component={ViewQuestions} />
          <Route path="/students/ask-question" component={AskQuestion} />
          {/* Uncomment below if you have tutor related components ready */}
          {/* <Route path="/tutors" component={TutorLayout} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;