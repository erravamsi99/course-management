// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={CourseList} />
      <Route path="/course/:courseId" component={CourseDetails} />
      <Route path="/dashboard" component={StudentDashboard} />
    </Switch>
  </Router>
);

export default App;
