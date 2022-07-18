import React from 'react';

const JoinComponents = ({ heading, paragraph, button, buttonBgColor }) => {
  return (
    <div className="w-3/4 flex flex-col items-center md:items-start h-full justify-between gap-6 md:gap-14 text-center md:text-left">
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='font-bold text-2xl'>{heading}</h1>
          <p className=''>{paragraph}</p>
        </div>

        <button className={`button ${buttonBgColor}`}>{button}</button>
    </div>
  )
}

export default JoinComponents;