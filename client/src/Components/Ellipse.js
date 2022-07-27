import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import logomark from "../Images/Logomark-about-page.png";
import name from "../Images/healthwitMae-about-page.png";
import logoName from "../Images/logoname.png";
import favicon from "../Images/favicon.png";

const Ellipse = ({ heading, classname }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () =>{
          setWindowWidth(window.innerWidth);
        });
      }, []);

    return (
        <div>
            <Navbar 
            icon={windowWidth > 768 ? favicon : logomark}
            logo={windowWidth > 768 ? logoName : name}
            hamburgerBg={`bg-white`}
            />
            <div className={`${classname} blob font-bold text-2xl text-white bg-primary absolute top-0 right-0 left-0 -z-10 text-center h-40 md:w-1/4 md:m-auto flex justify-center`}>
                <h1 className="absolute bottom-0">{heading}</h1>
            </div>
        </div>
  )
}

export default Ellipse;