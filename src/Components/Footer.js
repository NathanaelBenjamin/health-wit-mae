import React, { useContext } from 'react';
import { IdContext } from "../Contexts/IdContext";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {

    const year = new Date().getFullYear();
    const { footerId } = useContext(IdContext)
    //id={footerId}

  return (
    <footer className='flex flex-col lg:grid lg:grid-cols-4 p-12 bg-primary text-gray-100 items-start gap-x-12 gap-y-16 lg:justify-items-center relative'>

        <div className="pages">
            <h1 className="font-bold text-3xl mb-10">Pages</h1>

            <div className="links flex flex-col gap-2">
                <div>
                    <NavLink to="/">Home</NavLink>
                </div>

                <div>
                    <NavLink to="/about-us">About Us</NavLink>
                </div>
                
                <div>
                    <NavLink to="/blog">Blog</NavLink>
                </div>

                <div>
                    <NavLink to="/our-team">Our team</NavLink>
                </div>
                
                <div>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </div>
            </div>
        </div>

        <div className="line w-full h-[2px] lg:w-[2px] lg:h-full bg-white ">
        </div>

        <div className="flex flex-col gap-20 col-span-2">
            <div className="social-media-icons flex flex-col gap-4">
                <h1 className="font-bold text-3xl">
                    Connect with us on social media.
                </h1>

                <div className="icons flex gap-3">
                    <a href="/" className='social-media-icons-hover'>
                        <InstagramIcon />
                    </a>

                    <a href="/" className='social-media-icons-hover'>
                        <FacebookIcon />
                    </a>
                    
                    <a href="/" className='social-media-icons-hover'>
                        <LinkedInIcon />
                    </a>
                    
                    <a href="/" className='social-media-icons-hover'>
                        <WhatsAppIcon />
                    </a>
                    
                    <a href="/" className='social-media-icons-hover'>
                        <TwitterIcon />
                    </a> 
                </div>
            </div>

            <div className="copyright font-bold text-xl">
                <h1>Copyright &copy;{year} HealthWitMae</h1>
                <h1 className='mt-4'>All rights reserved.</h1>
            </div>
        </div>      

        <div className="inline-block">
            <a href={`#${footerId}`} className="mt-16 bg-gray-100 text-primary py-3 px-5 rounded-lg  hover:bg-transparent hover:border hover:border-gray-100 hover:text-gray-100 transition ease-in duration-200" >Back to top</a>
        </div>  
    </footer>
  )
}

export default Footer;