import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from './Pages/About-Us/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/our-team' element={<Team />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;