import React, { useState, useRef } from 'react';
import Post from "./Post";
import posts from "./postData";
import forwardArrow from "../../../Assets/arrow-forward-outline.svg";

const FeaturedPosts = ({ headingClass=`not-hidden`, paddingTop = `py-16`, paddingBlock="px-12" }) => {

  let filteredPosts = posts.filter(post => posts.indexOf(post) <= (posts.length-4));
  //console.log(filteredPosts);

  const [refinedPosts, setPosts] = useState(filteredPosts); 

  const seeMore = useRef();
  const seeLess = useRef();

  const togglePosts = (post) => {
    seeMore.current.classList.toggle("hidden");
    seeLess.current.classList.toggle("hidden");
    setPosts(post)
  }

  const handleSeeMore = () => {
    togglePosts(posts);
  }

  const handleSeeLess = () => {
   togglePosts(filteredPosts)
  }


    //FEATURED POSTS 
  return (
    <div className={`posts ${paddingBlock} ${paddingTop} flex flex-col items-center`}>
        <h1 className={`${headingClass} font-bold text-2xl text-center py-4 mb-8`}>Featured posts
        </h1>
        <div className="posts-grid post-grid">
          {
            refinedPosts.map(post => {
              return <Post 
                key={post.key}
                pictureSrc={post.pictureSrc}
                timeline={post.timeline}
                title={post.title}
              />
            })
          }    
        </div>
        <div className="see-posts text-secondaryBlue mt-8"
        onClick={handleSeeMore}
        ref={seeMore}
        >
            <button>See more posts<span className="forward-arrow">
                <img className="w-12 h-6 -mt-2 -ml-3 inline-block" src={forwardArrow} alt="" />
                </span>
            </button>
        </div>

        <div className="see-posts text-secondaryBlue mt-8 hidden"
        onClick={handleSeeLess}
        ref={seeLess}
        >
            <button>See lesser posts<span className="forward-arrow">
                <img className="w-12 h-6 -mt-2 -ml-3 inline-block" src={forwardArrow} alt="" />
                </span>
            </button>
        </div>
    </div>
  )
}

export default FeaturedPosts;