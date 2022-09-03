import React, { useContext } from 'react';
import { IdContext } from "../Contexts/IdContext";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Links from './Links';


const Footer = () => {

    const year = new Date().getFullYear();
    const { footerId } = useContext(IdContext)
    //id={footerId}

  return (
    <footer className='flex flex-col lg:grid lg:grid-cols-6 md:p-12 px-6 py-10 bg-primary text-gray-100 items-start gap-x-12 gap-y-16 lg:justify-items-center relative'>

        <div className="flex flex-col md:col-span-2">
            <div>
                <h1 className="text-white text-3xl font-bold mb-3">Subscribe to our Newsletter
                </h1>

                <p>
                    Subscribe to our Newsletter to receive exclusive offers, latest news and updates.
                </p>
            </div>

            <form className="flex gap-2 pt-3">
                <input type="email" name="" id="" className="text-gray-700 px-4 py-2 rounded w-3/4" placeholder='Email address' />
                <button className="bg-secondary px-4 py-2 rounded">Subscribe</button>
            </form>
        </div>

        <div className="pages">
            <h1 className="font-bold text-3xl mb-10">Pages</h1>

            <div className="links flex flex-col gap-2">
                <Links />
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

        <div className="inline-block col-span-2 justify-self-start">
            <a href={`#${footerId}`} className="mt-16 bg-gray-100 text-primary py-3 px-5 rounded-lg button-transparent hover:border hover:border-gray-100 hover:text-gray-100" >Back to top</a>
        </div>  
    </footer>
  );
}

export default Footer;