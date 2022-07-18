import React from 'react';
import JoinComponents from '../JOIN-US/JoinComponents';
import joinComponentData from './joinComponentData';

const JoinUs = () => {
  return (
    <div className='join-us grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-around items-start px-12 py-8'>
        { joinComponentData.map(item => {
          return <JoinComponents 
            heading={item.heading}
            paragraph={item.paragraph}
            button={item.button}
            buttonBgColor={item.color}
          />
        }) }
    </div>
  )
}

export default JoinUs;