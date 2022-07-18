import React from 'react';
import Navbar from '../../Components/Navbar';
import FeaturedPosts from './POSTS/FeaturedPosts';
import HeroSection from './HeroSection';
import TeamLeads from '../Team/TeamLeads';
import JoinUs from './JOIN-US/JoinUs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedPosts />
      <TeamLeads />
      <JoinUs />
    </div>
  )
}

export default Home;