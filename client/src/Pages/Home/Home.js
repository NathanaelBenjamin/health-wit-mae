import React, { useId } from 'react';
import Navbar from '../../Components/Navbar';
import FeaturedPosts from './POSTS/FeaturedPosts';
import HeroSection from './HeroSection';
import JoinUs from './JOIN-US/JoinUs';
import Footer from '../../Components/Footer';
import { IdContext } from "../../Contexts/IdContext";

const Home = () => {

  const footerId = useId();
  
  return (
    <div>
      <IdContext.Provider value={footerId}>
        <Navbar />
        <HeroSection />
        <FeaturedPosts />
        <JoinUs />
        <Footer />
      </IdContext.Provider>
    </div>
  )
}

export default Home;