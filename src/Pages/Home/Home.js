import React from 'react';
import Navbar from '../../Components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-green-600 font-bold underline mt-4 px-4 cursor-pointer">
        Home
      </h1>
    </div>
  )
}

export default Home;