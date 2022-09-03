import React, { useRef, useContext } from 'react';
import { NavLink } from "react-router-dom";
import logoName from "../Images/logoname.png";
import favicon from "../Images/favicon.png";
import { IdContext } from '../Contexts/IdContext';

const Navbar = ({logo = logoName, icon = favicon, fontClass = "hover", searchFill = `fill-black`, hamburgerBg = `bg-black`}) => {

   const menuOpen = useRef();
   const firstLine = useRef();
   const secondLine = useRef();
   const thirdLine = useRef();

   const openNav = () =>{
     menuOpen.current.classList.toggle("translate-x-full");
   }

   const rotateLines = () => {
        firstLine.current.classList.toggle("first-rotate");
        secondLine.current.classList.toggle("second-rotate");
        thirdLine.current.classList.toggle("hidden");
   }

   const { footerId } = useContext(IdContext)

  return (
    <div id={`${footerId}`} className='md:px-12 p-4 flex justify-between items-center'>
        <div className="logo">
            <NavLink to="/">
                <div className="logo-items flex gap-1 items-center">
                    <img className='w-10 h-10' src={icon} alt="logo icon" />
                    <img className=' h-4' src={logo} alt="logo name" />
                </div>
            </NavLink>
        </div>
        
        <div className="hamburger-menu cursor-pointer md:hidden z-30"

        >
            <label htmlFor='checkBox' className='flex flex-col gap-1 cursor-pointer'
            onClick={() => {
                openNav();
                rotateLines();
            }}
            >
                <div className={`line w-5 h-0.5 ${hamburgerBg} first origin-top transform`} ref={firstLine} 
                ></div>

                <div className={`line w-5 h-0.5 ${hamburgerBg} second transform`} ref={secondLine}
                ></div>

                <div className={`line w-5 h-0.5 ${hamburgerBg} third transform`} ref={thirdLine}
                ></div>
            </label>
            <input type="checkbox" id='checkBox' className='hidden'/>
        </div>

        <div className="nav-links flex flex-col gap-4 md:items-center md:flex-row fixed top-0 right-0 px-12 py-16 bg-green-600 h-full w-3/4 text-green-600 uppercase md:capitalize md:text-black md:bg-transparent md:gap-4 transform translate-x-full transition-all ease-in duration-300 md:static md:transform md:translate-x-0 md:w-auto md:h-auto md:p-0"
            ref={menuOpen}
        >
            <div>
                <NavLink to="/"><span className={fontClass}>Home</span></NavLink>
            </div>

            <div>
                <NavLink to="/about-us"><span className={fontClass}>About Us</span></NavLink>
            </div>
            
            <div>
                <NavLink to="/blogs"><span className={fontClass}>Blog</span></NavLink>
            </div>

            <div>
                <NavLink to="/our-team"><span className={fontClass}>Our team</span></NavLink>
            </div>
            
            <div>
                <NavLink to="/contact-us"><span className={fontClass}>Contact Us</span></NavLink>
            </div>

            <div className="search cursor-pointer">
                <svg className={`w-4 h-4 ${searchFill}`} height="512" viewBox="0 0 512 512"><title>Search</title><path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default Navbar;