import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
import Services from './components/Services/Services';
import Title from  './components/Title/Title';
import About_us from './components/About us/About_us';
import Gallery from './components/gallery/gallery';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title />
        <Services/>
        <About_us/>
        <Gallery/>
  
      </div>
    </div>
  )
}

export default App



