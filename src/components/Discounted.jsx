import React from "react";
import { films } from "../data";
import { Movie } from "./ui";

const Discounted = () => {
  return (
    <section id="recent" className="bg-tan-100 py-16">
      <div className="w-full max-w-7xl mx-auto px-6">
        <p className="text-green-700 font-bold tracking-widest uppercase text-xs mb-2 font-sans">
          Save on classics
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-green-950 mb-8">
          <span className="text-green-500 italic">Discounted</span> Films
        </h2>
        <div className="flex flex-wrap -mx-3">
          {films
            .filter((film) => film.salePrice > 0)
            .slice(0, 8)
            .map((film) => (
              <Movie film={film} key={film.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Discounted;
