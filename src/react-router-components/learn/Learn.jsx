import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './learn.css';

const Learn = () => {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link to="/learn/courses">Courses</Link>
      <br />
      <Link to="/learn/bundles">Bundle</Link>
      <Outlet />
    </div>
  )
}

export default Learn
