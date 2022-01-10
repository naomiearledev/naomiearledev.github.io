import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const CourseId = () => {
  const navigate = useNavigate();
  const {courseid} = useParams();
  return (
    <div>
      <h1>URL Params is: {courseid}</h1>
      <button onClick={() => {
        navigate("/dashboard", {state: courseid});
      }}>Price</button>
      <Link to="/dashboard" state={"299"}>Test link</Link>
    </div>
  )
}

export default CourseId
