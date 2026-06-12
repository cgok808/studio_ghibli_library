import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Movie = ({ film }) => {
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = film.image;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      });
    };
  });

  return (
    <div className="w-1/2 md:w-1/4 p-3">
      {img ? (
        <div className="bg-card rounded-2xl overflow-hidden group shadow-sm hover:shadow-md transition__ease h-full flex flex-col">
          <Link to={`/films/${film.id}`} className="block overflow-hidden">
            <img
              src={img.src}
              alt={film.title}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <div className="p-4 flex flex-col flex-1">
            <Link
              to={`/films/${film.id}`}
              className="font-semibold text-green-950 hover:text-green-700 transition__ease leading-snug block mb-2 font-sans"
            >
              {film.title}
            </Link>
            <Rating rating={film.rating} />
            <Price salePrice={film.salePrice} originalPrice={film.originalPrice} />
          </div>
        </div>
      ) : (
        <div className="bg-card rounded-2xl overflow-hidden animate-pulse">
          <div className="w-full h-72 bg-tan-300"></div>
          <div className="p-4">
            <div className="h-5 bg-tan-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-tan-300 rounded w-24 mb-2"></div>
            <div className="h-4 bg-tan-300 rounded w-20"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
