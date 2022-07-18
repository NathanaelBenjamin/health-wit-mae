import React from 'react';
import Navbar from '../../Components/Navbar';
import FeaturedPosts from './POSTS/FeaturedPosts';
import HeroSection from './HeroSection';
import TeamLeads from '../Team/TeamLeads';
import JoinUs from './JOIN-US/JoinUs';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedPosts />
      <TeamLeads />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default Home;