import React from "react";
import { films } from "../../data";
import Movie from "./Movie";

const BestMovies = ({ id }) => {
  return (
    <div className='flex flex-wrap my-0 -mx-6'>
      {films
        .filter((film) => {
          if (id) {
            // Check for id when on the individual movie
            // so the same movie isnt recommended
            return film.rating === 5 && film.id !== id;
          }
          return film.rating === 5;
        })
        .slice(0, 4)
        .map((film) => {
          return <Movie film={film} key={film.id} />;
        })}
    </div>
  );
};

export default BestMovies;
