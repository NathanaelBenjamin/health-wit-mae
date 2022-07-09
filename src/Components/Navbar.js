import React from 'react';
import "../index.css";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='px-4 mt-4'>
        <div>
            <Link to="/">Home</Link>
        </div>

        <div>
            <Link to="/about-us">About Us</Link>
        </div>
        
        <div>
            <Link to="/blog">Blog</Link>
        </div>

        <div>
            <Link to="/our-team">Our team</Link>
        </div>
        
        <div>
            <Link to="/contact-us">Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar;