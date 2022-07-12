import React from 'react';
import { Link } from "react-router-dom";
import logoName from "../Images/logoname.png";
import favicon from "../Images/favicon.png";

const Navbar = () => {
  return (
    <div className='px-12 py-4 flex justify-between items-center'>
        <div className="logo">
            <Link to="/">
                <div className="logo-items flex gap-2 items-center">
                    <img className='w-10 h-10' src={favicon} alt="logo icon" />
                    <img className=' h-4' src={logoName} alt="logo name" />
                </div>
            </Link>
        </div>

        <div className="links flex gap-4 items-center">
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

            <div className="search cursor-pointer">
                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Search</title><path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default Navbar;