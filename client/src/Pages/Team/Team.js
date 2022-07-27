import React from 'react';
//import Navbar from '../../Components/Navbar'; 
import TeamLeads from './TeamLeads';
import Footer from '../../Components/Footer';
import Ellipse from "../../Components/Ellipse";


const Team = () => {
  
  return (
    <div className='flex flex-col relative gap-20'>
      <Ellipse 
        classname={`team`}
      />

      <div className='leaders md:mt-48 md:mb-24 mt-36 mb-16 h-full'>
        <TeamLeads 
          heading={`hidden`}
        />
      </div>

      <Footer />
    </div>
  )
}

export default Team;