import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentSideNav from './StudentSideNav';
import AskQuestion from './AskQuestion';
import backgroundImage from '../../../assets/images/secondphoto.jpg';


function StudentLayout() {
  let { path } = useRouteMatch();

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    height: '100vh'  
  };

  return (
    <div style={containerStyle}>
      <StudentSideNav />
      <div>
        <Switch>
          <Route exact path={`${path}/ask-question`}>
            <AskQuestion />
          </Route>
          {/* Add more routes as per your navigation links */}
          {/* Example:
          <Route exact path={`${path}/my-profile`}>
            <MyProfile />
          </Route>
          */}
        </Switch>
      </div>
    </div>
  );
}

export default StudentLayout;

