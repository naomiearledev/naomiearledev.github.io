import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './courses.css';

const Courses = () => {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses List</h1>
      <h4>Course cards</h4>
      <br />
      <p>More test</p>
      <NavLink style={({isActive}) => {
        return {
          backgroundColor: isActive ? "#e3bd54" : "#79eddc"
        }
      }} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
      <br />
      <NavLink to={`/learn/courses/tests`}>tests</NavLink>

      <Outlet />
    </div>
  )
}

export default Courses
