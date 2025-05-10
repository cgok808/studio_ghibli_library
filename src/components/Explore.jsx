import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id='explore' className='bg-[#e0dcd7]'>
      <div className='px-14 py-0'>
        <div className='w-full max-w-7xl my-0 mx-auto py-0 px-6 flex flex-col items-center'>
          <h2 className='text-3xl font-semibold mt-10'>
            Explore more <span className='text-green-500'>movies</span>
          </h2>
          <Link to='/films'>
            <button className='bg-green-200 bg-no-repeat cursor-pointer outline-none border-2 border-white px-6 py-3 text-xl md:text-2xl rounded-xl box__shadow transition__ease hover:shadow-none hover:transition-all hover:translate-y-1 m-5 font-semibold'>
              Browse Films
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
