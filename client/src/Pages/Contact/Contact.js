import React from 'react';
import Ellipse from "../../Components/Ellipse";
import JoinUs from "../Home/JOIN-US/JoinUs";
import Footer from "../../Components/Footer";
import BookAnAppointment from "./BookAnAppointment";
import favicon from "../../Images/Favicon-light-green.png";

const Contact = () => {
  return (
    <div>
      <Ellipse 
        heading="Contact Us"
      />
      
      <div className='pt-48'>
        <JoinUs />
      </div>

      <div className="flex flex-col gap-10 md:gap-16 mb-10 justify-center items-center">
        <div className="md:w-1/2 text-center">
          <BookAnAppointment />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img src={favicon} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact;