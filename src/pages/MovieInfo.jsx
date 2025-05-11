import React from "react";
import { useParams, Link } from "react-router-dom";
import { Rating, Price } from "../components/ui";
import { ArrowLeft } from "lucide-react";
import { BestMovies } from "../components/ui";

const MovieInfo = ({ films }) => {
  const { id } = useParams();
  const film = films.find((film) => +film.id === +id);
  return (
    <div className='flex-1 flex flex-col'>
      <main id='movies__main' className='flex-1'>
        <div className='py-6 px-0'>
          <div className='w-full max-w-7xl my-0 mx-auto py-0 px-6'>
            <div className='py-0 px-6 text-2xl color-[#242424] flex items-center'>
              <Link to='/films'>
                <ArrowLeft />
              </Link>
              <Link to='/films'>
                <h2 className='ml-4 mb-0'>Movies</h2>
              </Link>
            </div>
            <div className='flex'>
              <figure className='w-2/5 justify-start'>
                <img
                  src={film.image}
                  alt=''
                  className='max-h-[500px] w-auto max-w-full rounded-lg'
                />
              </figure>
              <div className='w-3/5 py-4 px-8 flex flex-col items-center'>
                <h2 className='mb-2'>{film.title}</h2>
                <Rating rating={film.rating} />
                <div>
                  <Price
                    originalPrice={film.originalPrice}
                    salePrice={film.salePrice}
                  />
                </div>
                <div className='mb-4'>
                  <h3 className='mb-2'>Summary</h3>
                  <p className='mb-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo eaque ipsam iusto, quia cumque placeat dolore
                    obcaecati quis deserunt magni sapiente distinctio, in optio
                    sed impedit amet voluptatem totam alias.
                  </p>
                  <p className='mb-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum ratione autem totam modi quisquam porro? Nostrum
                    consequatur totam voluptates quae alias provident,
                    perspiciatis, praesentium autem necessitatibus mollitia
                    blanditiis velit modi?
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2>Recommended Movies</h2>
                </div>
                <BestMovies id={id} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieInfo;
