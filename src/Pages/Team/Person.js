import React from 'react';

const Person = ({id, name, role, picture}) => {
  return (
        <div className="post post-card overflow-hidden" key={id}>
            <div className="">
                <img className="object-cover object-top w-64 h-64 md:w-48 md:h-48" src={picture} alt="" />
            </div>

            <div className="post-timeline pt-2">
                <h2 className="font-bold">{name}</h2>
            </div>

            <div className="post-title">
                <p className='text-center'>{role}</p>
            </div>
        </div>
  )
}

export default Person;