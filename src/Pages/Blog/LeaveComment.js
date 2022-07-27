import React from 'react';

const LeaveComment = () => {
  return (
    <div className='py-4'>
        <h1 className='text-3xl text-secondary my-8'>Leave a reply</h1>
        <form className="flex flex-col">
            <div className="text-area w-full md:w-3/4">
                <div className="my-3">
                    <label htmlFor="comment">Comment</label>
                </div>
                <textarea name="" id="comment" className="form-textarea w-full h-24" placeholder='Leave a comment.' required></textarea>
            </div>

            <div className="name w-full md:w-3/4">
                <div className="my-3">
                    <label htmlFor="name">Name</label>
                </div>
                <input type="text" id="name" className="form-input w-full" placeholder='Name' required />
            </div>

            <div className="email w-full md:w-3/4">
                <div className="my-3">
                    <label htmlFor="email">Email</label>
                </div>
                <input type="email" name="" id="email" className="form-input w-full" placeholder='Email' required />
            </div>

            <button type='submit' className='bg-primary text-white font-bold my-6 px-4 py-1 w-20 flex justify-center items-center cursor button-transparent border border-white hover:border-primary hover:text-primary'>Send</button>
        </form>
    </div>
  )
}

export default LeaveComment;