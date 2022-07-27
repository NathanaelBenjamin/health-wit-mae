import React from 'react';
import { Link } from "react-router-dom";

const Post = ({pictureSrc, timeline, title, key}) => {
  return (
    <Link to="/">
        <div className="post post-card overflow-hidden" key={key}>
            <div className="post-image relative">
                <img className='object-cover' src={pictureSrc} alt="" />
            </div>

            <div className="post-timeline pt-2">
                <h2>{timeline}</h2>
            </div>

            <div className="post-title">
                <h1 className='font-bold text-center'>{title}</h1>
            </div>
        </div>
    </Link>
  )
}

export default Post;