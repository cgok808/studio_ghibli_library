import React from "react";
import { useParams, Link } from "react-router-dom";
import { Rating, Price, BestMovies } from "../components/ui";
import { ArrowLeft } from "lucide-react";

const MovieInfo = ({ films, addToCart, cart }) => {
  const { id } = useParams();
  const film = films.find((film) => +film.id === +id);

  function movieExistsOnCart() {
    return cart.find((film) => +film.id === +id);
  }

  return (
    <div className="flex-1 flex flex-col bg-cream min-h-screen">
      <main className="flex-1">
        <div className="py-10">
          <div className="w-full max-w-7xl mx-auto px-6">
            <Link
              to="/films"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-semibold transition__ease mb-8 font-sans"
            >
              <ArrowLeft size={18} />
              <span>Back to Films</span>
            </Link>

            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <figure className="md:w-2/5 flex-shrink-0">
                <img
                  src={film.image}
                  alt={film.title}
                  className="max-h-[540px] w-auto max-w-full rounded-2xl shadow-lg"
                />
              </figure>

              <div className="md:w-3/5 flex flex-col">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-green-950 mb-3 leading-tight">
                  {film.title}
                </h2>
                <Rating rating={film.rating} />
                <Price
                  originalPrice={film.originalPrice}
                  salePrice={film.salePrice}
                />

                <div className="mb-8">
                  <h3 className="font-heading text-xl font-bold text-green-900 mb-3">
                    Summary
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4 font-sans">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo eaque ipsam iusto, quia cumque placeat dolore
                    obcaecati quis deserunt magni sapiente distinctio, in optio
                    sed impedit amet voluptatem totam alias.
                  </p>
                  <p className="text-gray-500 leading-relaxed font-sans">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum ratione autem totam modi quisquam porro? Nostrum
                    consequatur totam voluptates quae alias provident,
                    perspiciatis, praesentium autem necessitatibus mollitia
                    blanditiis velit modi?
                  </p>
                </div>

                {movieExistsOnCart() ? (
                  <Link to="/cart" className="self-start">
                    <button className="bg-green-800 text-white cursor-pointer outline-none border-2 border-green-800 px-10 py-4 text-lg rounded-xl box__shadow transition__ease hover:shadow-none hover:translate-y-1 font-semibold font-sans">
                      Go to Checkout
                    </button>
                  </Link>
                ) : (
                  <button
                    className="self-start bg-green-800 text-white cursor-pointer outline-none border-2 border-green-800 px-10 py-4 text-lg rounded-xl box__shadow transition__ease hover:shadow-none hover:translate-y-1 font-semibold font-sans"
                    onClick={() => addToCart(film)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>

            <div>
              <p className="text-green-700 font-bold tracking-widest uppercase text-xs mb-2 font-sans">
                You may also like
              </p>
              <h2 className="font-heading text-4xl font-bold text-green-950 mb-8">
                Recommended Films
              </h2>
              <BestMovies id={id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieInfo;
