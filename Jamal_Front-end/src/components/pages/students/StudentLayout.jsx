import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentSideNav from './StudentSideNav';
import AskQuestion from './AskQuestion';
// Import other components as per your routes

function StudentLayout() {
  let { path } = useRouteMatch();

  return (
    <div>
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

