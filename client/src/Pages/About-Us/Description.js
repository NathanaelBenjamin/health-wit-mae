import React from 'react';

const Description = ({ title, content }) => {
  return (
    <div className='text-center max-w-xl'>
        <h1 className="header">{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default Description;