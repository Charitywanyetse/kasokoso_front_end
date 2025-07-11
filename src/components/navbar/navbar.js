import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../components/gallery/kasokoso logo.png';



const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
    },[]);

  return (
    <nav className={`container $ {sticky? 'dark-nav' : ''}`}>
     <img src={logo} alt="Kasokoso Logo" className="logo" />
     
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/aboutus">About Us</Link></li>
       <li><Link to="/services">Services</Link></li>
       <li><Link to="/contactus">Contact Us</Link></li>
       <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>

    
  )
}

export default Navbar;
