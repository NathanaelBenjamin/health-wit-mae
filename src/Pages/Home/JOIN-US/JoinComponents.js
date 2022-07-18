import React from 'react';

const JoinComponents = ({ heading, paragraph, button, buttonBgColor }) => {
  return (
    <div className="volunteer flex flex-col items-center md:items-start gap-3">
        <h1 className='font-bold text-2xl'>{heading}</h1>
        <p>{paragraph}</p>
        <button className={`button ${buttonBgColor}`}>{button}</button>
    </div>
  )
}

export default JoinComponents;