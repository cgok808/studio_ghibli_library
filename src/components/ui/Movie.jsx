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
    <div className='w-1/2 md:w-1/4 p-6 transition__ease'>
      {img ? (
        <>
          <Link to={`/films/${film.id}`}>
            <figure className='mb-2 overflow-hidden rounded-lg flex'>
              <img
                src={img.src}
                alt=''
                className='w-full h-auto transition__ease'
              />
            </figure>
          </Link>
          <div className='text-lg'>
            <Link to={`/films/${film.id}`} className='text-[#242424]'>
              {film.title}
            </Link>
          </div>
          <Rating rating={film.rating} />
          <Price
            salePrice={film.salePrice}
            originalPrice={film.originalPrice}
          />
        </>
      ) : (
        <>
          <div className='w-full max-w-64 h-80 mb-2 bg-[#cccccc]'></div>
          <div className='mb-2 bg-[#e3e3e3] h-[21px] w-full'></div>
          <div className='mb-2 bg-[#e3e3e3] w-[100px] h-[19px]'></div>
          <div className='mb-2 bg-[#e3e3e3] w-[200px] h-[19px]'></div>
        </>
      )}
    </div>
  );
};

export default Movie;
