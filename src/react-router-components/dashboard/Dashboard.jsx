import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <h4>The price is £{location.state}</h4>
    </div>
  )
}

export default Dashboard
