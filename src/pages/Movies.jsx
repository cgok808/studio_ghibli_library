import React, { useState } from "react";
import { Movie } from "../components/ui";

const Movies = ({ films: initialFilms }) => {
  const [films, setFilms] = useState(initialFilms);

  function filterFilms(filter) {
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
    <div className="flex-1 flex flex-col bg-cream min-h-screen">
      <main className="flex-1">
        <div className="py-10">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end py-4 mb-6">
              <div>
                <p className="text-green-700 font-bold tracking-widest uppercase text-xs mb-1 font-sans">
                  Full Collection
                </p>
                <h2 className="font-heading font-bold text-4xl text-green-950">
                  All Films
                </h2>
              </div>
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterFilms(event.target.value)}
                className="border-2 border-tan-300 bg-cream rounded-xl px-4 py-2 font-semibold text-green-900 cursor-pointer hover:border-green-700 transition__ease focus:outline-none focus:border-green-700 font-sans"
              >
                <option value="DEFAULT" disabled>
                  Sort by
                </option>
                <option value="LOW_TO_HIGH">Price: Low to High</option>
                <option value="HIGH_TO_LOW">Price: High to Low</option>
                <option value="RATING">Rating</option>
              </select>
            </div>
            <div className="flex flex-wrap -mx-3">
              {films.map((film) => (
                <Movie film={film} key={film.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movies;
