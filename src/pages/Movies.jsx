import React, { useState } from "react";
import { Movie } from "../components/ui";

const Movies = ({ films: initialFilms }) => {
  const [films, setFilms] = useState(initialFilms);
  function filterFilms(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setFilms(
        films
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setFilms(
        films
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setFilms(films.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div className='flex-1 flex flex-col'>
      <main className='flex-1'>
        <section>
          <div className='py-6 px-0 '>
            <div className='w-full max-w-7xl mx-auto'>
              <div className='flex justify-between items-center py-4 px-6'>
                <h2 className='mb-0 font-bold text-3xl'>All Movies</h2>
                <select
                  id='filter'
                  defaultValue='DEFAULT'
                  onChange={(event) => filterFilms(event.target.value)}
                >
                  <option value='DEFAULT' disabled>
                    Sort
                  </option>
                  <option value='LOW_TO_HIGH'>Price, Low to High</option>
                  <option value='HIGH_TO_LOW'>Price, High to Low</option>
                  <option value='RATING'>Rating</option>
                </select>
              </div>
              <div className='flex flex-wrap my-0 -m-6'>
                {films.map((film) => (
                  <Movie film={film} key={film.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
