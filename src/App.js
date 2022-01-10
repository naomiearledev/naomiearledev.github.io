import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
import { Home, Learn, Courses, Bundles, CourseId, Dashboard } from './react-router-components';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom';

import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App">

      {/* Portfolio Site */}

      {/* Portfolio Site End */}

      {/*<div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
  <Brand />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />} >
          <Route path="courses" element={<Courses />} >
            <Route path=":courseid" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />*/}
    </div>
  )
}

export default App
