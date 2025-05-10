import React from "react";
import { films } from "../data";
import { Movie } from "./ui";

const Discounted = () => {
  return (
    <section id='recent'>
      <div className='py-14 px-0'>
        <div className='w-full max-w-7xl my-0 mx-auto py-0 px-6'>
          <h2 className='text-5xl font-semibold'>
            Discounted <span className='text-green-500'>Films</span>
          </h2>
          <div className='flex flex-wrap my-0 -m-6'>
            {films
              .filter((film) => film.salePrice > 0)
              .slice(0, 8)
              .map((film) => (
                <Movie film={film} key={film.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
