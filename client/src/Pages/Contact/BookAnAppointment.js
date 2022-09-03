import React from 'react';

const BookAnAppointment = () => {
  return (
    <div className='flex flex-col gap-10 mt-0 md:mt-14 justify-center items-center'>
      <div className="header font-bold text-lg">
        Book a discussion session with one of our mental health therapist.
      </div>  

      <div className='button'>
        <a href="/" className='button bg-primary text-white'>Contact</a>
      </div>
    </div>
  )
}

export default BookAnAppointment;