import React, { useEffect, useState } from 'react';
import Post from "./Post";
import posts from "./postData";
import forwardArrow from "../../../Assets/arrow-forward-outline.svg";

const FeaturedPosts = ({ headingClass=`not hidden` }) => {

  let filteredPosts = posts.filter(post => posts.indexOf(post) <= 5);
  //console.log(filteredPosts);

  const [refinedPosts, setPosts] = useState(filteredPosts); 

  const handleSeeMore = (event) => {
    event.target.classList.add("hidden");
    setPosts(posts);
    console.log(refinedPosts);
  }
    //FEATURED POSTS 
  return (
    <div className="posts px-12 py-16 flex flex-col items-center">
        <h1 className={`${headingClass} font-bold text-2xl text-center py-4 mb-8`}>Featured posts
        </h1>
        <div className="posts-grid post-grid">
          {
            refinedPosts.map(post => {
              return <Post 
                pictureSrc={post.pictureSrc}
                timeline={post.timeline}
                title={post.title}
              />
            })
          }    
        </div>
        <div className="see-more text-secondaryBlue mt-8"
        onClick={(event) => { handleSeeMore(event) }}
        >
            <button>See more posts<span className="forward-arrow">
                <img className="w-12 h-6 -mt-2 -ml-3 inline-block" src={forwardArrow} alt="" />
                </span>
            </button>
        </div>
    </div>
  )
}

export default FeaturedPosts;