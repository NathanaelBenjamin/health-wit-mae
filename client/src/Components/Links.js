import React from 'react';
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div>
        <div>
                    <NavLink to="/">Home</NavLink>
                </div>

                <div>
                    <NavLink to="/about-us">About Us</NavLink>
                </div>
                
                <div>
                    <NavLink to="/blogs">Blog</NavLink>
                </div>

                <div>
                    <NavLink to="/our-team">Our team</NavLink>
                </div>
                
                <div>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </div>
    </div>
  )
}

export default Links;