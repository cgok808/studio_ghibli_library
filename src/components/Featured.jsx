import React from "react";
import { Movie } from "../components/ui";
import { films } from "../data";

const Featured = () => {
  return (
    <section id='features'>
      <div className='py-14'>
        <div className='w-full max-w-7xl my-0 mx-auto py-0 px-6'>
          <h2 className='text-5xl font-semibold'>
            Featured{""} <span className='text-green-500'>Films</span>
          </h2>
          <div className='flex flex-wrap my-0 -mx-6'>
            {films
              .filter((film) => film.rating === 5)
              .slice(0, 4)
              .map((film) => (
                <Movie film={film} key={film.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
