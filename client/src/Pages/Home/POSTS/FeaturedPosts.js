import React from 'react';
import { Link } from "react-router-dom";
import Post from "./Post";
import posts from "./postData";
import forwardArrow from "../../../Assets/arrow-forward-outline.svg";

const FeaturedPosts = () => {
    //FEATURED POSTS 
  return (
    <div className="posts px-12 py-16 flex flex-col items-center">
        <h1 className='font-bold text-2xl text-center py-4 mb-8'>Featured posts
        </h1>
        <div className="posts-grid post-grid">
          {
            posts.map(post => {
              return <Post 
                pictureSrc={post.pictureSrc}
                timeline={post.timeline}
                title={post.title}
              />
            })
          }    
        </div>
        <div className="see-more text-secondaryBlue mt-4">
            <Link to="/">See more posts<span className="forward-arrow">
                <img className="w-12 h-6 -mt-2 -ml-3 inline-block" src={forwardArrow} alt="" />
            </span>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedPosts;