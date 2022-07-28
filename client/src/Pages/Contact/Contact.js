import React from 'react';
import Ellipse from "../../Components/Ellipse";
import JoinUs from "../Home/JOIN-US/JoinUs";
import Footer from "../../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Ellipse 
        heading="Contact Us"
      />
      
      <div className='pt-48'>
        <JoinUs />
      </div>

      <Footer />
    </div>
  )
}

export default Contact;