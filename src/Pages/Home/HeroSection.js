import React from 'react';
import { Link } from "react-router-dom";
import heroimage from "../../Images/photo-lovely-young-lady-has-curly-afro-hair-smiles-gently-wears-earrings-white-jumper-being-satisfied-with-getting-new-job-position-has-pleasant-talk-with-colleague-stands-pink-wall 1.png";

const HeroSection = () => {
  return (
    <div className="px-12 mt-8 w-full gap-6 md:gap-0 hero-section flex flex-col md:flex-row justify-between md:justify-center items-center">
        <div className="hero-text flex flex-col justify-center items-center md:items-start gap-8 w-full md:w-3/4 font-bold ">
          <p className="flex flex-col items-center md:items-start">
            <span className='text-lg md:text-2xl'>You're welcome to<br/></span>
            <span className='text-xl md:text-3xl'>D-creative health brand</span>
          </p>

          <h2 className='text-[32px] md:text-5xl w-full text-center md:text-left'>
            Ensuring a <span className="text-primary">healthy<br/></span> and <span className="text-secondary">happy</span> YOU. 
          </h2>

          <Link to="/contact-us">
            <button className="button bg-primary text-">
                Contact us
            </button>
          </Link>
        </div>

        <div className="hero-image flex justify-center items-center">
          <img className='object-cover w-10/12 max-w-full' src={heroimage} alt="" />
        </div>
      </div>
  )
}

export default HeroSection;