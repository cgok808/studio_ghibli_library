import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore" className="bg-green-900 py-20">
      <div className="w-full max-w-3xl mx-auto px-6 text-center">
        <p className="text-green-300 font-bold tracking-widest uppercase text-xs mb-4 font-sans">
          The full collection
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Find Your Next{" "}
          <span className="italic text-green-300">Adventure</span>
        </h2>
        <p className="text-green-200 text-lg mb-10 font-sans">
          Browse the full catalogue and discover your next favorite Ghibli film.
        </p>
        <Link to="/films">
          <button className="bg-white text-green-900 cursor-pointer outline-none border-2 border-white px-10 py-4 text-lg rounded-xl box__shadow__white transition__ease hover:shadow-none hover:translate-y-1 font-semibold tracking-wide font-sans">
            Browse Films
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Explore;
