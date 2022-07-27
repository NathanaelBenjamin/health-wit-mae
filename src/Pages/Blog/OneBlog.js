import React from 'react';
// import Footer from '../../Components/Footer';
// import Navbar from '../../Components/Navbar';
import image from "../../Images/energy.png";

const OneBlog = () => {
  return (
    <div className="">
        <article>
          <h1 className='text-4xl font-bold text-center mt-24 md:mt-0'>LOREM IPSUM DOLOR.</h1>
          <div className='flex gap-4 my-8 justify-center'>
            <div className="author font-bold">By Idowu Emmanuel</div>
            <div className="date">May 15, 2022.</div>
          </div>
          
          <div className='md:float-left my-8 md:m-8 flex justify-center'>
            <img src={image} alt="" />
          </div>

          <p className='first-letter:text-5xl first-letter:font-bold blog-paragraph clear-right md:mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit maiores accusantium cumque impedit asperiores necessitatibus quae fugiat, consequatur eligendi et, recusandae praesentium? Accusantium eius at laudantium qui laboriosam magni animi, itaque velit est odio id perferendis esse accusamus explicabo.
          </p>

          <p className="blog-paragraph clear-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ut ratione sapiente, esse at culpa fugit veritatis eos magnam officiis sed aut, eum odit ullam! Cupiditate sit sint consequuntur mollitia laudantium dicta sed, saepe tempore molestias hic cumque autem repudiandae.
          </p>

          <p className='blog-paragraph clear-both'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>

          <p className='blog-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>

          <p className='blog-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>

          <p className='blog-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>

          <p className='blog-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>

          <p className='blog-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>

          <p className='blog-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur, commodi debitis nam unde officiis deserunt quo ducimus at? Eos expedita provident, explicabo nobis laboriosam odit quam tempore est ut aliquid id dolorum autem? Rem repellat labore distinctio voluptates ullam?
          </p>
        </article>
    </div>
  )
}

export default OneBlog;