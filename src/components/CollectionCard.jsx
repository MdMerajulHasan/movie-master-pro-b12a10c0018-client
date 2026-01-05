import React, { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router";
import "aos/dist/aos.css";
import Aos from "aos";
import { GrCheckboxSelected } from "react-icons/gr";

const CollectionCard = ({ movies }) => {
  // animation
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {movies.map((movie) => (
        <div
          data-aos="zoom-in"
          key={movie._id}
          className="bg-base-200 dark:bg-slate-900 h-full flex flex-col justify-between rounded-md py-2"
        >
          <img
            className="w-11/12 mx-auto rounded-md"
            src={movie.posterUrl}
            alt="Movie poster"
          />
          <div className="w-11/12 mx-auto flex justify-between text-sm md:text-base text-primary dark:text-white font-bold">
            <p>{movie.title}</p>
            <p className="flex gap-0.5 items-center">
              {movie.rating}
              <BsStarFill></BsStarFill>
            </p>
          </div>
          <div className="w-11/12 mx-auto flex justify-between text-sm md:text-base text-primary dark:text-white font-bold">
            <p>{movie.genre}</p>
            <p className="flex gap-0.5 items-center">
              {movie.releaseYear}
              <GrCheckboxSelected />
            </p>
          </div>
          <div className="w-11/12  mx-auto font-bold">
            <Link className="w-full mx-auto" to={`/movies/${movie._id}`}>
              <button
                className="text-white font-bold bg-linear-to-r from-red-500 dark:from-[#3b82f6] to-red-300 dark:to-[#93c5fd] rounded-sm w-full"
                style={{ width: "100%" }}
              >
                See more...
              </button>
            </Link>
            <Link className="w-full mx-auto" to={`/movies/update/${movie._id}`}>
              <button
                className="text-white mt-1 font-bold bg-linear-to-r from-red-500 dark:from-[#3b82f6] to-red-300 dark:to-[#93c5fd] rounded-sm w-full"
                style={{ width: "100%" }}
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionCard;
