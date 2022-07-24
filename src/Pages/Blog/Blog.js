import React from 'react';
import Ellipse from '../../Components/Ellipse';
import Footer from '../../Components/Footer';
import FeaturedPosts from "../Home/POSTS/FeaturedPosts"

const Blog = () => {
  return (
    <div>
      <Ellipse 
        classname={`blog`}
      />

      <div className="mt-56 mb-12">
        <FeaturedPosts 
          headingClass={`hidden`}
        />
      </div>

      <Footer />
    </div>
  )
}

export default Blog;