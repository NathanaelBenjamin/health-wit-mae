import React from 'react';
import Navbar from '../../Components/Navbar';
import logomark from "../../Images/Logomark-about-page.png";
import name from "../../Images/healthwitMae-about-page.png";
import Description from './Description';
import data from './descriptionData';
import favicon from "../../Images/Favicon2-aboutpage.png";
import Footer from '../../Components/Footer';

const About = () => {
  return (
   <div className='about-page flex flex-col gap-32'>
    <div className='blob bg-primary relative'>
      <Navbar 
        icon={logomark}
        logo={name}
        fontClass={`hover-white`}
        searchFill={`md:fill-white`} 
        hamburgerBg={`bg-white`}
      />

      <div className='about-us text-white flex flex-col justify-center items-center gap-8 mt-8 px-8 md:px-24'>
        {
          data.map(item => {
            return <Description 
              title={item.title}
              content={item.content}
            />
          })
        }
      </div>
    </div>
    
    <div className="about-logo">
        <img src={favicon} alt="favicon" />
    </div>

    <Footer />
   </div>
  )
}

export default About;