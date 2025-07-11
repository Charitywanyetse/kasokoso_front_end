
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import Services from './components/Services/Services';
import Title from './components/Title/Title';
import About_us from './components/About us/About_us';
import Gallery from './components/gallery/gallery';
import Log_in from './components/log in/log_in';
import Sign_up from './components/sign up/sign_up';


const App = () => {
  return (
     <Router>
      <Navbar />
      <Hero />
      <div className="container">
        <Routes>
          <Route path="/" element={<><Title /><Services /><About_us /><Gallery /></>} />
          <Route path="/login" element={<Log_in />} />
          <Route path="/signup" element={<Sign_up />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App



