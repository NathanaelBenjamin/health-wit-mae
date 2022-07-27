import React from 'react';
import Ellipse from '../../Components/Ellipse';
import Footer from '../../Components/Footer';
import FeaturedPosts from "../Home/POSTS/FeaturedPosts"
import OneBlog from "../Blog/OneBlog";
import LeaveComment from './LeaveComment';
import Comments from "./Comments";

const Blogs = () => {
  return (
    <div>
      <Ellipse 
        classname={`blogs`}
      />

      <div className="mt-32 md:mt-60 px-8 md:px-12 pt-8">
        <OneBlog />

        <div className="comments md:m-8">
          <LeaveComment />
        </div>

        <div className="comments md:m-8">
          <Comments />
        </div>

        <div className="md:m-8">
          <a href="#more-blogs" className="font-bold text-xl">Read more blogs.</a>
        </div>

        <div className="mb-12" id="more-blogs">
          <FeaturedPosts 
            headingClass={`hidden`}
            paddingTop={`py-16`}
            paddingBlock={`px-0`}
          />
        </div>
        
      </div>

      <Footer />
    </div>
  )
}

export default Blogs;