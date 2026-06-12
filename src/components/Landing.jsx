import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-tan-200 via-tan-100 to-cream"
    >
      <div className="w-full max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-green-700 font-bold tracking-widest uppercase text-xs mb-5 font-sans">
          Welcome to the Library
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-green-950 leading-tight mb-4">
          Explore the World of
        </h1>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8">
          <span className="italic text-green-600">Studio Ghibli</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-md mx-auto leading-relaxed font-sans">
          Discover magical films crafted by one of the greatest animation
          studios in the world.
        </p>
        <Link to="/films">
          <button className="bg-green-800 text-white cursor-pointer outline-none border-2 border-green-800 px-10 py-4 text-lg rounded-xl box__shadow transition__ease hover:shadow-none hover:translate-y-1 font-semibold tracking-wide font-sans">
            Browse Films
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
