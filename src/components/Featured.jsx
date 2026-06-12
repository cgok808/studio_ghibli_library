import React from "react";
import { Movie } from "../components/ui";
import { films } from "../data";

const Featured = () => {
  return (
    <section id="features" className="bg-cream py-16">
      <div className="w-full max-w-7xl mx-auto px-6">
        <p className="text-green-700 font-bold tracking-widest uppercase text-xs mb-2 font-sans">
          Handpicked for you
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-green-950 mb-8">
          <span className="text-green-500 italic">Featured</span> Films
        </h2>
        <div className="flex flex-wrap -mx-3">
          {films
            .filter((film) => film.rating === 5)
            .slice(0, 4)
            .map((film) => (
              <Movie film={film} key={film.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
