import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from './Pages/About-Us/About';
import Blogs from './Pages/Blog/Blogs';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import OneBlog from './Pages/Blog/OneBlog';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/blogs/blog' element={<OneBlog />} /> 
      </Routes>
  )
}

export default App;