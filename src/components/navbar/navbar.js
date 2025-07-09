import React, { useState, useEffect } from 'react'
import './navbar.css'
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
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
        <li>Gallery</li>
     </ul>
    </nav>
  )
}

export default Navbar;
