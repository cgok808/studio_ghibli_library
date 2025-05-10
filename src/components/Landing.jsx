import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section
      id='landing'
      className='flex flex-col justify-center items-center h-screen bg-slate-200'
    >
      <div className='w-full max-w-3xl my-0 mx-auto h-full flex flex-col justify-around'>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl font-semibold'>
            Explore films from Studio Ghibli!
          </h1>
          <h2 className='text-3xl font-semibold'>
            Find your favorite film with us!
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

export default Landing;
